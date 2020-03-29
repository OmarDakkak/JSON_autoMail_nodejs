// ce script envoie des emails automatiques à partir d'un fichier JSON qui contient adresse mail personnelle et adresse mail académique 

// voir les instructions en bas!!

const fs = require('fs');
var nodemailer = require('nodemailer');

file = fs.readFileSync('./data.json');

// console.log(file);

fileContent = JSON.parse(file);

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'votre_mail@gmail.com', // votre mail ici
      pass: 'mot_de_passe' // votre mot de passe ici
    }
  });

for(var i=0; i < fileContent.Feuil1.length; i++){
    mail = toString(fileContent.Feuil1[i].MailPersonnel);
    console.log(mail);
    var mailOptions = {
        from: 'votre_mail@gmail.com',
        to: `${fileContent.Feuil1[i].MailPersonnel}`,
        subject: 'Adresse Email Academique',
        text: `Voici votre adresse email academique : ${fileContent.Feuil1[i].MailAcademique}, pour le mot de passe c'est votre CNE!! `
      };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });
}
// readme

// pour pouvoir utilser ce script il faut installer nodejs et npm 

// il faut installer le module nodemailer : npm install nodemailer --save 

// puis pour le faire tourner : node script2.js 
// il faut avoir la liste des emails dans un fichier json : data.json




