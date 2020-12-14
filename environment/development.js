const path = require('path');

module.exports = {
    dbUrl: 'mongodb+srv://para:qwe@dymaformation.9tth3.mongodb.net/twitter?retryWrites=true&w=majority',
    cert: path.join(__dirname, '../ssl/local.crt'),
    key: path.join(__dirname, '../ssl/local.key')
}