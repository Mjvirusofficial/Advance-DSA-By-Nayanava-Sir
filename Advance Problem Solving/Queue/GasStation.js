/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let g = 0;
    let c = 0;
    
    for(let i of gas)  g += i;
    for(let i of cost) c += i;
    
    if(c > g){
        return -1;
    } 
    
    let start   = 0;
    let currGas = 0;
    
    for(let i = 0; i < gas.length; i++){
        currGas += (gas[i] - cost[i])
        
        if(currGas < 0){
            currGas = 0;
            start = i+1;
        }
    }
    
    return start;
};