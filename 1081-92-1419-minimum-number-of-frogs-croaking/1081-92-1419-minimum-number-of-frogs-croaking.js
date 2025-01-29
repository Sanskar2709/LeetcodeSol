/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
var minNumberOfFrogs = function(croakOfFrogs) {
    // Handling invalid case like 'croakcro'
    if (croakOfFrogs.length % 5 !== 0) return -1;

    // 'k' is not needed in the map, because it's the last letter the frog is singing so we won't use it anymore
    const map = {'c': 0, 'r': 0, 'o': 0, 'a': 0};
    // Currently how many frogs are singing together
    let currentNumOfFrogs = 0;
    // Max number of frogs singing together
    let maxNumOfFrogs = 0;

    for (const letter of croakOfFrogs) {
        if (letter === 'c') {
// If 'c' appears, means another frog start singing => so we increase map['c'] and counter and update the global max frogs
            map['c']++;
            currentNumOfFrogs++;
            maxNumOfFrogs = Math.max(maxNumOfFrogs, currentNumOfFrogs);
        } else if (letter === 'r') {
// If 'r' appears => check whether the frog already song 'c' before 'r', if not, invalid; 
            if (map['c'] === 0) return -1;
// Otherwise, decrease map['c'] => It's like reseting map['c'] value so that later there's another frog sings, we could validate if it's a valid sing or not;
            map['c']--;
// For sure, we need to update map['r'] => it's like moving our tracker to 'r' now for the current frog who are singing
            map['r']++;
        } else if (letter === 'o') {
// Save idea as above
            if (map['r'] === 0) return -1;
            map['r']--;
            map['o']++;
        } else if (letter === 'a') {
// Save idea as above
            if (map['o'] === 0) return -1;
            map['o']--;
            map['a']++;
        } else if (letter === 'k') {
// If 'k' appears => check if there was a 'a' before, if not, invalid; Otherwise decrease 'a' count
            if (map['a'] === 0) return -1;
            map['a']--;
// Also need to decrease the currentNumOfFrogs => because the frog is done its job. It can sing another string again.
            currentNumOfFrogs--;
        }
    }
// At the end, need to check if the currentNumOfFrogs is 0, if not, means there are some frogs haven't reached 'k' yet => invalid
    // return currentNumOfFrogs !== 0 ? -1 : maxNumOfFrogs;
    if(currentNumOfFrogs!==0 )
    return -1;
    else
    return maxNumOfFrogs;
};