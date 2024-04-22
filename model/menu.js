const mongoose = require('mongoose');
const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    price: {
        type: Number,
        required: true
    },
    taste: {
        type: String,
        required: true,
        enum: ['sweet', 'spicy', 'sour']
    },
    is_drink: {
        type: Boolean,
        default: false
    },
    num_sales: {
        type: Number,
        default: 0
    },
    ingradient:{
        type:[String],
        default:[]
    }
});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
