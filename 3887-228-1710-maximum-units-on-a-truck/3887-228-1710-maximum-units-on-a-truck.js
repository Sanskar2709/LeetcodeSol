/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a,b) => b[1] - a[1]);
    let res =0;


    for(const [noofbox, noofunitper] of boxTypes){

        if(noofbox >=truckSize){
            res+= (truckSize * noofunitper);
            return res;
        }
        else{
            res+=(noofbox * noofunitper);
            truckSize-=noofbox;
        }
    }
    return res;
};