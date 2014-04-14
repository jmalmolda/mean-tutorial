var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');


module.exports = {
    development: {
        db: 'mongodb://localhost/multivision',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production: {
        db: 'mongodb://jalmolda:multivision@ds061797.mongolab.com:61797/multivision',
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
};