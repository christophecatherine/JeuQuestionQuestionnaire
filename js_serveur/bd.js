//on se conecte a mysql 
let mysql = require('mysql');
let config = require("../config/config.js");
let db = {
    instance: null,

    connexion: function() {
        this.instance = mysql.createConnection({
            host: config.DBHOST,
            user: config.DBUSER,
            password: config.DBPWD,
            database: config.DBNAME
        });
        this.instance.connect(function(err) {
            if (err) {
                console.error("error connexion : " + err.stack);
                return;
            }
            console.log("Connexion à la BD ok");
        });
    },
    deconnexion: function() {
        this.instance.end();
    }
}
module.exports = db;