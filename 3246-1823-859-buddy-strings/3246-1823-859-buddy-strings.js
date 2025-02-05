/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    if (s.length !== goal.length) return false;

    if(s === goal){
        let set = new Set(s);
        return set.size < s.length;
    }

    let ind = [];
    for(let i=0;i<s.length;i++){
        if(s[i]!==goal[i]){
            ind.push(i);
        }

    }
    // if(ind.length<2){
    //     return false;

    // }
    if(ind.length>2){
        return false;
    }

    return (ind.length === 2) && (s[ind[0]] === goal[ind[1]] && s[ind[1]] === goal[ind[0]]);
    
};