/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(a) {
    let five = 0 , ten = 0;
    for(let i of a){
        
        
        if(i == 5){
            five++
        }
        
        
        
        else if(i == 10) {
            
                if(five == 0){
                    return false;
                }
            five--;
            ten++;
        }
        
        else{
            if(five && ten){
                five--;
                ten--;
            }
            
            else if(ten == 0){
                if(five < 3){
                    return false;
                }
                
                five -= 3;
            }
            
            else{
                return false;
            }
        }
    }
    
    return true;
};