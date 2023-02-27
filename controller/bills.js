const Bills = require('../model/bills');
const bodyParser = require('body-parser')
exports.addBills = async(req,res,next) => {
    try{
        const prodName = req.body.prodname;
        const amount = req.body.amount;
        const billDate = req.body.billingDate;
        const custID = req.body.CustomerId;

        const expense = await Billing.create(prodName, amount, billDate, custID )

    }
    catch(err)
    {
        console.log(err)
    }
}