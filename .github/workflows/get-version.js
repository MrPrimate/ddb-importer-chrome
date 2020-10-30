var fs = require('fs');
console.log(JSON.parse(fs.readFileSync('manifest.json', 'utf8')).version);
