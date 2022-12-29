Array.prototype.isEmpty = function(){
    return this.length == 0;
}

Array.prototype.top = function(){
    return this[this.length-1];
}


function MinimumDeletion(a) {
    let s = new Array();

    let count =  0;
    for(let i of a){
       if(i == 'a'){
        if(!s.isEmpty() && s.top() == 'b'){
            count++;
            s.pop()
        }
       } 
       
       s.push(i)
    }

    return count;
}

let s = 'aababbab';
console.log(MinimumDeletion(s))