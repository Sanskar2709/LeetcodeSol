/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
    let rows = new Array(grid.length).fill(0);
    let columns = new Array(grid[0].length).fill(0);

    for(let i =0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            rows[i]+=grid[i][j];
            columns[j]+=grid[i][j];
        }
    }

    let res=0;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]===1 && (rows[i]>1 || columns[j]>1)){
                res++;
            }
        }
    }
    return res;
};