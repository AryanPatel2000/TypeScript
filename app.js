var studentCalc;
(function (studentCalc) {
    function AnualFeeCalc(feeAmount, term) {
        return feeAmount * term;
    }
    studentCalc.AnualFeeCalc = AnualFeeCalc;
    //nested namespace
    var invoiceAmount;
    (function (invoiceAmount) {
        var invoice = /** @class */ (function () {
            function invoice() {
            }
            invoice.prototype.calculateDisc = function (price) {
                return price * .10;
            };
            return invoice;
        }());
        invoiceAmount.invoice = invoice;
    })(invoiceAmount = studentCalc.invoiceAmount || (studentCalc.invoiceAmount = {}));
})(studentCalc || (studentCalc = {}));
///<reference path="nameSpace.ts" />
var totalFee = studentCalc.AnualFeeCalc(12000, 6);
var invoice = new studentCalc.invoiceAmount.invoice();
console.log("Fees: ", totalFee);
console.log('Discount: ', invoice.calculateDisc(totalFee));
console.log("Total Fees: ", totalFee - invoice.calculateDisc(totalFee));
// import { EmailValidator } from "./EmailValidator";
// let email = 'abc.def@email.com';
// let validator = new EmailValidator();
// let result = validator.isValid(email)
// console.log('\nemail->', email, '\nresult-> ', result)
