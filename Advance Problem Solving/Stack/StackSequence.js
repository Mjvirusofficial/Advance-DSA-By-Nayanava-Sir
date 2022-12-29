Array.prototype.top = function(){
    return this[this.length-1]
}

function StackSequence(pushed,poped) {
    let i = 0;
    let j = 0;

    let s = new Array();
    s.push(pushed[0]);
    i++;

    while(i <= pushed.length && j < poped.length){
        if(poped[j] == s.top()){
            s.pop();
            j++;
        }
        
        else{
            s.push(pushed[i]);
            i++;
        }
    }

    if(j == poped.length){
        return true;
    }

    return false;
}



let push = []