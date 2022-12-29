class Stack {
    constructor(){
        this.data  = [];
        this.index = 0;
    }

    isEmpty(){
        return this.index == 0;
    }

    push(x){
        
        this.data[this.index] = x;
        this.index++;
    }

    pop(){
        if(this.isEmpty()){
            console.log('Stack is empty...!')
        }

        this.index--;
        return this.data.pop()

    }

    top(){
        return this.data[this.index-1]
    }

    print(){
        for(let i = this.data.length-1; i >= 0; i--){
            console.log(this.data[i])
        }
    }
}

// let s = new Stack();
// s.push(101)
// s.push(191)
// s.push(151)
// s.push(201)
// s.pop()
// s.print()

function RemoveKDigit(a,k) {
  let s = new Stack;
  for (let i = 0; i < a.length; i++) {
    while(!s.isEmpty() && s.top() > a[i] && k-- ){
        s.pop()
    }

    s.push(a[i])
  }
  return s;
}

let a = [1,4,3,2,2,1,9] , k = 3;
console.log(RemoveKDigit(a,k))