const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var MenuSchema = new Schema({
    icon: String,
    title: String,
    description: String,
    link: String,
    subs: [this]
}, {
    collection: 'menus'
});

module.exports = mongoose.model('Menu', MenuSchema);