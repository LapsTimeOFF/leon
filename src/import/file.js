import * as fs from "fs";


const log = function(data, file2) {
  const file = file2 || "./src/logs/preinstall.log"
  const text = `[LOG] [${Date(Date.now())}] ${data}\n`
  fs.appendFile(file, text, (err) => { 
    if (err) 
      console.log(`Erreur lors de l'écriture de ${file}. Erreur retourné par fs : ${err}`);
     else { 
      return 1;
    } 
  }); 
};

const getVersion = function() {
  let json = JSON.parse(fs.readFileSync('package.json', 'utf8'))
  return json.version 
}

export { getVersion, log };