Array.prototype.top = function(){
    return this[this.length-1]
}

function NextGreterElement(a) {
    let s = new Array();
    s.push(-1)

    let ans = [];
    for(let i = a.length-1; i >= 0; i--){
        let curr = a[i];
        while(s.top() >= curr){
           s.pop();
        }
        ans[i] = s.top();
        s.push(curr)
    }

    return ans;
}

//Output: [5,-1,-1,5,-1]
let a = [2,5,1,0,5] 
console.log(NextGreterElement(a))




// let a = [2,-1,0,-3,5] , k = 2;