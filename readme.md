Démarrer MySQL:
sudo systemctl start mysql

Démarrer le projet:

cd tuto
nodemon server.js

Se rendre dans le navigateur:
localhost:8080

installer node.js
npm init -y dans le dossier serveur.js
npm install nodemon
dans le package.json : "start" : "nodemon serveur.js"
installer remedial : npm install remedial dans serveur.js
installer MySQL et creer un mp dans ROOT localhost 3306 on travail avec workbench 
on creer la base de donnée dans workbench on l'appelle dbquestionnaire
on creer la table questionnaire 
on creer les columms idquestionnaire / nomQuestionnaire / descriptionQuestionnaire 
ex : insert into questionnaire (nomQuestionnaire, descriptionQuestionnaire) values ("VilleFrance","un questioonaire sur les villes de France");
ensuite on fait SELECT * FROM bdquestionnaire.questionnaire;
on creer la table question 
on creer les columms idquestion / description / reponse A /reponse B / reponse C / reponse D / bonneReponse / idquestionnaire
ensuite on lie question à questionnaire 
dans la table question on foreignKey : FK_question_questionnaire "bdquestionnaire","questionnaire"
dans columms on coche idquestionnaire referenced column idquestionnaire 
en suite dans la table question on va creer des liste de question 
ex idquestion : 1 , description : combien de pattes à un chat , reponse a : 1 ,
reponse b : 2, reponse c :3 reponse D : 4, bonneReponse : 4 , idquestionnaire : 1 
on fait un jointure e question et questionnaire : select * from question inner join question.questionnaire = questionnaire.idquestionnaire;
on exporte la base de donnée sur serveur exporte on selectionne bdquestionnaire et on creer un dossier où l'exporter et on include create schema 
on test notre connection dans un dossier testBD fichier app.js la commande est npm init -y
on installe le module npm install mysql
on intergre le cdn de bootstrap dans le header.html 
on intergre la partie js dans le footer.html

Voila pour toute question vous pouvez me contacter 
