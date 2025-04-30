# SQL Migration Script - Final Version
# This script migrates tables from bkmod.sql to bkstrapi.sql

# Define file paths
$sourceFile = "c:\Users\komik\Documents\bk-web-migrate\bkmod.sql"
$destFile = "c:\Users\komik\Documents\bk-web-migrate\bkstrapi.sql"
$outputFile = "c:\Users\komik\Documents\bk-web-migrate\bkstrapi_migrated.sql"
$logFile = "c:\Users\komik\Documents\bk-web-migrate\migration_log.txt"

# Set default encoding to UTF-8 for the entire script
$PSDefaultParameterValues['Out-File:Encoding'] = 'utf8'
$PSDefaultParameterValues['*:Encoding'] = 'utf8'

# Start logging
Start-Transcript -Path $logFile -Force

# Copy destination file to output file
Write-Host "Copying destination file to output file..."
Copy-Item -Path $destFile -Destination $outputFile -Force

# Function to extract table names from file
function Get-TableNames {
    param (
        [string]$FilePath
    )
    
    $tables = @()
    $content = Get-Content -Path $FilePath -Encoding UTF8 -Raw
    
    # Use regex to find all CREATE TABLE statements
    $regex = [regex]::new("CREATE TABLE ``([^``]+)``")
    $matches = $regex.Matches($content)
    
    foreach ($match in $matches) {
        $tableName = $match.Groups[1].Value
        if ($tables -notcontains $tableName) {
            $tables += $tableName
            Write-Host "Found table: $tableName"
        }
    }
    
    return $tables
}

# Function to check if table exists in destination file
function Test-TableExists {
    param (
        [string]$TableName,
        [string]$FilePath
    )
    
    $content = Get-Content -Path $FilePath -Encoding UTF8 -Raw
    $pattern = "CREATE TABLE ``$TableName``"
    
    return $content -match [regex]::Escape($pattern)
}

# Function to extract table content
function Get-TableContent {
    param (
        [string]$TableName,
        [string]$FilePath
    )
    
    try {
        # Read the entire file content
        $content = Get-Content -Path $FilePath -Encoding UTF8 -Raw
        
        # Create pattern to find the table structure comment and the table name
        $tablePattern = "-- Table structure for table ``$TableName``"
        
        # Find the position of the table in the content
        $startPos = $content.IndexOf($tablePattern)
        if ($startPos -ge 0) {
            # If found, look for the next table structure comment or end of file
            $nextTablePattern = "-- Table structure for table ``"
            $nextTablePos = $content.IndexOf($nextTablePattern, $startPos + $tablePattern.Length)
            
            # Extract the table content
            if ($nextTablePos -gt $startPos) {
                # Found next table, extract content up to that point
                $tableContent = $content.Substring($startPos, $nextTablePos - $startPos)
            } else {
                # No next table, extract to the end
                $tableContent = $content.Substring($startPos)
            }
            
            # Format the output
            $result = @()
            $result += "-- --------------------------------------------------------"
            $result += ""
            $result += $tableContent.TrimEnd()
            
            return $result
        } else {
            Write-Host "Table $TableName not found in source file" -ForegroundColor Yellow
            return $null
        }
    }
    catch {
        Write-Host "Error extracting table content: $_" -ForegroundColor Red
        return $null
    }
}

try {
    # Get tables from source file
    Write-Host "Getting tables from source file..."
    $sourceTables = Get-TableNames -FilePath $sourceFile
    Write-Host "Found $($sourceTables.Count) tables in source file"
    
    # Determine which tables to migrate
    $tablesToMigrate = @()
    foreach ($table in $sourceTables) {
        if (-not (Test-TableExists -TableName $table -FilePath $destFile)) {
            $tablesToMigrate += $table
            Write-Host "Will migrate: $table"
        } else {
            Write-Host "Table already exists in destination: $table" -ForegroundColor Cyan
        }
    }
    
    Write-Host "Will migrate $($tablesToMigrate.Count) tables"
    
    # Migrate each table
    foreach ($table in $tablesToMigrate) {
        Write-Host "Migrating table: $table" -ForegroundColor Green
        $tableContent = Get-TableContent -TableName $table -FilePath $sourceFile
        
        if ($tableContent) {
            Add-Content -Path $outputFile -Value "" -Encoding UTF8
            Add-Content -Path $outputFile -Value $tableContent -Encoding UTF8
            Write-Host "Table $table migrated successfully" -ForegroundColor Green
        }
    }
    
    Write-Host "Migration complete! Output saved to: $outputFile" -ForegroundColor Green
    Write-Host "Please review the file before replacing the original bkstrapi.sql"
} catch {
    Write-Host "Error during migration: $_" -ForegroundColor Red
}