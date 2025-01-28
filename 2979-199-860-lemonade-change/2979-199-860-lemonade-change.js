/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {

    let f=0,t=0;
    for(let bill of bills){
        if(bill === 5){
            f++;
        }
        else if(bill===10){
            if(f>=1){
                f--;
                t++;
            }
            else{
                return false;
            }
        }
        else{
            if(f>=1 && t>=1){
                f--;
                t--;
            }
            else if(f>=3){
                f-=3;
            }
            else{
                return false;
            }
        }
    }
    return true;
};