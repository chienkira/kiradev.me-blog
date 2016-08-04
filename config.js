var path = require('path'),
    config;

config = {
    production: {
        url: 'http://kira-dev.com',
        mail: {},
        database: {
            client: 'mysql',
            connection: {
				host     : '107.170.162.158',
				user     : 'root',
				password : 'pass',
				database : 'kira_dev',
				charset  : 'utf8'
			},
            debug: false
        },

        server: {
            host: '127.0.0.1',
            port: '8020'
        }
    },

    development: {
        url: 'http://kira-dev.com',
        //  mail: {
        //      transport: 'SMTP',
        //      options: {
        //          service: 'Mailgun',
        //          auth: {
        //              user: '', // mailgun username
        //              pass: ''  // mailgun password
        //          }
        //      }
        //  },
        // ```

        database: {
            client: 'mysql',
            connection: {
				host     : '107.170.162.158',
				user     : 'root',
				password : 'pass',
				database : 'kira_dev',
				charset  : 'utf8'
			},
            debug: false
        },
        server: {
            host: '127.0.0.1',
            port: '8020'
        },
        paths: {
            contentPath: path.join(__dirname, '/content/')
        }
    }
};

module.exports = config;
