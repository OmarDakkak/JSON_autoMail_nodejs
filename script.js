// Ce script crée une liste des emails à partir d'un fichier JSON 

const fs = require('fs');
file = fs.readFileSync('./data.json');

// console.log(file);

fileContent = JSON.parse(file);

// console.log(fileContent.Feuil1[0].MailAcademique);

for(var i=0; i < fileContent.Feuil1.length; i++){
    fs.appendFileSync('ListeEmails.txt', fileContent.Feuil1[i].MailAcademique+", \n");
}
