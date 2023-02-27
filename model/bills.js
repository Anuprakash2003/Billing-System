const mongoose = require('mongoose');

const BillingSchema = new mongoose.Schema({
    productname : {
        type:String,
        trim:true,
        required:[true, 'please add some text']
    },
    amount : {
        type: Number,
        required:[true, 'please add some amount']
    },
    date : {
        type:Date,
        required :[true, 'please add some date']
    },
    customerId: {
        type: Number,
        required : [true, 'please add some Id']
    }
})

module.exports = mongoose.model('Billing', BillingSchema)