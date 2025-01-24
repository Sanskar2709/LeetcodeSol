/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    
    let lastseen = {'a': -1, 'b':-1, 'c':-1};

    let c=0;
    for (let i=0; i<s.length;i++){
        lastseen[s[i]] = i;

        c+=1+Math.min(lastseen['a'], lastseen['b'], lastseen['c']);
    }
    return c;
};