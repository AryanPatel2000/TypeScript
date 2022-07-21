namespace studentCalc{

    export function AnualFeeCalc(feeAmount: number, term: number){
        return feeAmount * term
    }
    
    //nested namespace
    export namespace invoiceAmount{
        export class invoice{
            public calculateDisc(price: number){
                return price * .10 ;
            }
        }
    }
}

