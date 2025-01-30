/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    if(ratings.length === 1){
        return 1;
    }

    let ltr = Array(ratings.length).fill(1);
    let rtl = Array(ratings.length).fill(1);
    
    for(let i=1;i<ratings.length;i++){
        if(ratings[i] > ratings[i-1]){
            ltr[i]=ltr[i-1] + 1;
        }
    }

    for(let i=ratings.length-2;i>=0;i--){
        if(ratings[i]> ratings[i+1]){
            rtl[i]=rtl[i+1]+1;
        }
    }

    let sum=0;
    for(let i=0;i<ratings.length;i++){
        ratings[i] = Math.max(ltr[i], rtl[i]);

    }

    for(let i=0;i<ratings.length;i++){
        sum+=ratings[i];
    }

    return sum;



};