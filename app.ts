
///<reference path="nameSpace.ts" />
let totalFee = studentCalc.AnualFeeCalc(12000, 6)

let invoice = new studentCalc.invoiceAmount.invoice();
console.log("Fees: ", totalFee)
console.log('Discount: ', invoice.calculateDisc(totalFee))
console.log("Total Fees: ", totalFee - invoice.calculateDisc(totalFee) )

