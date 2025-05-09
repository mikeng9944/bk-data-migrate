const fs = require('fs');
const path = require('path');

/**
 * Generate a random ID with the pattern similar to 'm2xvn7pu3qkf9jlz5oe8t6yd'
 * @param {number} length - Length of the ID to generate
 * @returns {string} - Random ID
 */
function generateRandomId(length = 23) {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Generate a datetime string in MySQL format with a random minute and second
 * @returns {string} - Datetime string in MySQL format
 */
function generateDatetime() {
  const baseDate = new Date(2023, 5, 15, 10); // Month is 0-indexed in JS
  const randomMinutes = Math.floor(Math.random() * 60);
  const randomSeconds = Math.floor(Math.random() * 60);
  
  baseDate.setMinutes(randomMinutes);
  baseDate.setSeconds(randomSeconds);
  
  const year = baseDate.getFullYear();
  const month = String(baseDate.getMonth() + 1).padStart(2, '0');
  const day = String(baseDate.getDate()).padStart(2, '0');
  const hours = String(baseDate.getHours()).padStart(2, '0');
  const minutes = String(baseDate.getMinutes()).padStart(2, '0');
  const seconds = String(baseDate.getSeconds()).padStart(2, '0');
  
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

/**
 * Process a single INSERT statement to add random IDs, datetime values, and NULL values
 * @param {string} tableName - Name of the table
 * @param {string} valuesPart - The values part of the INSERT statement
 * @returns {string} - Processed INSERT statement
 */
function processInsertStatement(tableName, valuesPart) {
  // Split the values into individual entries
  // This regex finds all content between parentheses
  const entriesRegex = /\((?:[^)(]|\([^)(]*\))*\)/g;
  const entries = valuesPart.match(entriesRegex);
  
  if (!entries) {
    console.error(`Could not parse entries for table ${tableName}.`);
    return null;
  }
  
  let autoIncrementId = 1; // Initialize auto-increment ID
  
  const newEntries = entries.map(entry => {
    // Remove parentheses and split by comma
    // We need to handle commas inside quotes properly
    const valuesString = entry.slice(1, -1);
    // Replace all occurrences of \' with ''
    const safeValuesString = valuesString.replace(/\\'/g, "''");
    const values = [];
    let currentValue = '';
    let inQuote = false;
    
    for (let i = 0; i < safeValuesString.length; i++) {
      const char = safeValuesString[i];
      
      if (char === "'" && (i === 0 || safeValuesString[i-1] !== '\\')) {
        // Toggle quote state
        inQuote = !inQuote;
        currentValue += char;
      } else if (char === ',' && !inQuote) {
        // Only split on commas when not inside quotes
        values.push(currentValue.trim());
        currentValue = '';
      } else {
        // Add all other characters to the current value
        currentValue += char;
      }
    }
    
    // Add the last value
    if (currentValue.trim()) {
      values.push(currentValue.trim());
    }
    
    // Create the new entry with required structure
    let newEntry = [];
    
    // Check if the first value is already an ID (numeric)
    // If it is, ignore it and use our auto-increment ID instead
    // EXCEPT for the excluded tables
    const firstValue = values[0] ? values[0].trim() : '';
    const isFirstValueNumeric = /^\d+$/.test(firstValue);
    const excludedTables = ['bkhk_categories_closure', 'bkhk_dashboard_widget_placement', 'bkhk_media_sources_elements', 'bkhk_site_plugin_events', 'bkhk_site_tmplvar_templates', 'bkhk_tbl_imgcache', 'bkhk_versionx_templatevar'];
    const shouldPreserveId = excludedTables.includes(tableName);
    
    // Add auto-increment ID as the first value
    newEntry.push(autoIncrementId++);
    
    // Add random ID as the second value
    newEntry.push(`'${generateRandomId()}'`);
    
    // Add all original values, with special handling for excluded tables
    if (isFirstValueNumeric && !shouldPreserveId) {
      // Skip the first value as we're replacing it with our auto-increment ID
      newEntry = [...newEntry, ...values.slice(1)];
      console.log(`Replaced existing ID ${firstValue} with generated ID ${autoIncrementId-1} in table ${tableName}`);
    } else {
      // Keep all values as they are
      newEntry = [...newEntry, ...values];
      
      // Log when we're preserving IDs for the special tables
      if (isFirstValueNumeric && shouldPreserveId) {
        console.log(`Preserved existing ID ${firstValue} in excluded table ${tableName}`);
      }
    }
    
    // Add datetime values
    newEntry.push(`'${generateDatetime()}'`);  // Add first datetime
    newEntry.push(`'${generateDatetime()}'`);  // Add second datetime
    
    // Add 4 NULL values at the end
    for (let i = 0; i < 4; i++) {
      newEntry.push('NULL');
    }
    
    // Join the values and add parentheses
    return '(' + newEntry.join(',') + ')';
  });
  
  // Join the entries with commas and newlines for better readability
  const newValuesPart = newEntries.join(',\n');
  
  // Create the new INSERT statement
  return `INSERT INTO \`${tableName}\` VALUES \n${newValuesPart};`;
}

/**
 * Process the SQL file to add random IDs, datetime values, and NULL values for all tables
 * @param {string} inputFile - Path to the input SQL file
 * @param {string} outputFile - Path to the output SQL file (optional)
 * @returns {string} - Path to the processed file
 */
function processSqlFile(inputFile, outputFile) {
  // If no output file is specified, create one with '_processed' suffix
  if (!outputFile) {
    const extname = path.extname(inputFile);
    const basename = path.basename(inputFile, extname);
    const dirname = path.dirname(inputFile);
    outputFile = path.join(dirname, `${basename}_processed${extname}`);
  }
  
  // Create or truncate the output file
  fs.writeFileSync(outputFile, '');
  
  // Create a read stream for the input file
  const readStream = fs.createReadStream(inputFile, {
    encoding: 'utf8',
    highWaterMark: 64 * 1024 * 1024 // 64MB chunks
  });
  
  let buffer = '';
  let tablesProcessed = [];
  
  // Process the file in chunks
  readStream.on('data', (chunk) => {
    buffer += chunk;
    processBuffer();
  });
  
  readStream.on('end', () => {
    // Process any remaining data in the buffer
    processBuffer(true);
    
    console.log(`Processed SQL file saved to: ${outputFile}`);
    console.log(`Processed tables: ${tablesProcessed.join(', ')}`);
    
    // Print a sample of the processed content - FIXED to avoid memory issues
    try {
      // Create a read stream just for the sample instead of reading the whole file
      const sampleStream = fs.createReadStream(outputFile, { 
        encoding: 'utf8',
        start: 0,
        end: 999 // Read only the first 1000 bytes
      });
      
      let sampleContent = '';
      
      sampleStream.on('data', (chunk) => {
        sampleContent += chunk;
      });
      
      sampleStream.on('end', () => {
        console.log('\nSample of processed content:');
        console.log(sampleContent.split('\n').slice(0, 5).join('\n') + '...\n');
      });
      
      sampleStream.on('error', (error) => {
        console.error('Error reading sample content:', error.message);
      });
    } catch (error) {
      console.error('Error setting up sample content reading:', error.message);
    }
  });
  
  readStream.on('error', (error) => {
    console.error('Error reading input file:', error.message);
  });
  
  // Function to process the current buffer
  // ... existing code ...

// Add these variables at the top of your script (after other variable declarations)
let tmplvarContentvaluesEntries = [];
let tmplvarContentvaluesTableName = 'bkhk_site_tmplvar_contentvalues';

// Modify the processBuffer function:
function processBuffer(isEnd = false) {
  // Modified regex to better handle complex SQL statements with nested parentheses
  const insertRegex = /INSERT INTO `([^`]+)`\s+VALUES\s+((?:\((?:[^)(]|\([^)(]*\))*\)(?:,\s*\((?:[^)(]|\([^)(]*\))*\))*));?/g;
  let match;
  let lastIndex = 0;
  
  // Find complete INSERT statements in the buffer
  while ((match = insertRegex.exec(buffer)) !== null) {
    const tableName = match[1];
    const valuesPart = match[2];
    lastIndex = match.index + match[0].length;

    // Skip processing for bkhk_session and bkhk_menus tables only
    // if (tableName === 'bkhk_session' || tableName === 'bkhk_menus' || tableName === 'bkhk_site_plugins' || tableName === 'bkhk_site_snippets' || tableName === 'bkhk_transport_packages' || tableName === 'bkhk_clientconfig_setting' || tableName === 'bkhk_collection_templates' || tableName === 'bkhk_manager_log') {
    if (tableName === 'bkhk_session' || tableName === 'bkhk_transport_packages' || tableName === 'bkhk_versionx_resource') {
      console.log(`Skipping INSERT statement for table: ${tableName}`);
      continue;
    }
    
    console.log(`Processing INSERT statement for table: ${tableName}`);
    tablesProcessed.push(tableName);
    
    // Special handling for bkhk_site_tmplvar_contentvalues
    if (tableName === tmplvarContentvaluesTableName) {
      const processedStatement = processInsertStatement(tableName, valuesPart);
      if (processedStatement) {
        // Instead of writing to file, accumulate the entries
        // Extract the entries inside the VALUES (...) part
        const entries = processedStatement.match(/\((?:[^)(]|\([^)(]*\))*\)/g);
        if (entries) {
          tmplvarContentvaluesEntries.push(...entries);
        }
      }
      continue; // Don't write yet
    }
    
    const processedStatement = processInsertStatement(tableName, valuesPart);
    if (processedStatement) {
      fs.appendFileSync(outputFile, processedStatement + '\n\n');
    }
  }
  
  // Keep only the unprocessed part of the buffer
  if (lastIndex > 0) {
    buffer = buffer.substring(lastIndex);
  }
  
  // If this is the end of the file and there's still data in the buffer,
  // try to process any partial statements
  if (isEnd && buffer.trim().length > 0) {
    console.log('Processing remaining buffer data...');
    // You could implement additional logic here to handle partial statements
    // For now, we'll just log that there might be incomplete data
    console.log('Note: There might be incomplete SQL statements at the end of the file.');
  }
}

// After the readStream 'end' event, write the accumulated entries as a single statement
readStream.on('end', () => {
  processBuffer(true);

  // Write the single INSERT for bkhk_site_tmplvar_contentvalues if any entries exist
  if (tmplvarContentvaluesEntries.length > 0) {
    // Reassign IDs to be sequential
    const reassignedEntries = tmplvarContentvaluesEntries.map((entry, idx) => {
      // Replace the first value (id) with idx+1
      return entry.replace(/^\(\s*\d+/, '(' + (idx + 1));
    });
    const singleInsert = `INSERT INTO \`${tmplvarContentvaluesTableName}\` VALUES \n${reassignedEntries.join(',\n')};\n\n`;
    fs.appendFileSync(outputFile, singleInsert);
  }

  console.log(`Processed SQL file saved to: ${outputFile}`);
  console.log(`Processed tables: ${tablesProcessed.join(', ')}`);

  // Print a sample of the processed content - FIXED to avoid memory issues
  try {
    // Create a read stream just for the sample instead of reading the whole file
    const sampleStream = fs.createReadStream(outputFile, {
      encoding: 'utf8',
      start: 0,
      end: 999 // Read only the first 1000 bytes
    });
    
    let sampleContent = '';
    
    sampleStream.on('data', (chunk) => {
      sampleContent += chunk;
    });
    
    sampleStream.on('end', () => {
      console.log('\nSample of processed content:');
      console.log(sampleContent.split('\n').slice(0, 5).join('\n') + '...\n');
    });
    
    sampleStream.on('error', (error) => {
      console.error('Error reading sample content:', error.message);
    });
  } catch (error) {
    console.error('Error setting up sample content reading:', error.message);
  }
});

readStream.on('error', (error) => {
  console.error('Error reading input file:', error.message);
});

return outputFile;
}

// Main execution
const inputFile = path.join(__dirname, 'bkmod.sql');
processSqlFile(inputFile);
// Remove the sample content reading as it's now handled in the stream's 'end' event
