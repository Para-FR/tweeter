const mongoose = require('mongoose');
const env = require(`../environment/${ process.env.NODE_ENV }`)

mongoose.connect(env.dbUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
        .then(() => console.log('connexion db ok !'))
        .catch(err => console.log(err));