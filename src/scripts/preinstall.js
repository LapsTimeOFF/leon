/* eslint-disable no-unused-vars */
import * as file from '../import/file.js'

console.log(`Bonjour ${process.env.USERNAME}, nous allons installer Leon sur ${process.env.COMPUTERNAME} qui tourne sous ${process.env.OS}(${process.env.PROCESSOR_ARCHITECTURE}). Le programe d'installation va se lancer.`);
file.log('Lancement de preinstall.js')
file.log('Username : ' + process.env.USERNAME)
file.log('Computer name : ' + process.env.COMPUTERNAME)
file.log('System : ' + process.env.OS)
file.log('ARCH : ' + process.env.PROCESSOR_ARCHITECTURE)
console.log(`[ ... ] Verification de la version de Leon téléchargé...`);
file.log('Verification de la version de Leon téléchargé...')
file.log('Version actuelle : ' + file.getVersion())
console.log(`[INFO] Version téléchargé sur ${process.env.COMPUTERNAME} : ${file.getVersion()}`);
console.log('[SUCCESS] Dossier en bonne version.');
file.log('Version OK.')
console.log('Lancement du téléchargement des modules.');