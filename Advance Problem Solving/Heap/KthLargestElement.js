class MinHeap {
    constructor(cap){
      this.h = []
      this.cap = cap;
    }

    isEmpty(){
        this.h.length == 0;
    }

    isFull(){
        this.h.length == this.cap;
    }

    p(i){
        return parseInt((i-1)/2)
    }

    lc(i){
        return 2*i +1;
    }

    rc(i){
        return 2*i +2;
    }

    swap(a,b){
        let mj = this.h[a]
        this.h[a] = this.h[b]
        this.h[b] = mj;
    }

    print(){
        for(let i = 0; i < this.h.length; i++){
            console.log(this.h[i])
        }
    }

    peek(){
        return this.h[0]
    }

    heapify(p){
        let l = this.lc(p);
        let r = this.rc(p);

        if(this.h[l] < this.h[p]){
            p = l;
        }

        if(this.h[r] < this.h[p]){
            p = r;
        }

        if(p != 0){
            this.heapify(p)
        }
    }

//Main Operation:- 

    extract(){
        let p = this.h[0];
        this.swap(0,this.h.length-1)
        this.h.pop();
        this.heapify(0);

        return p;
    }
    
    insert(data){

        this.h.push(data);
        let c = this.h.length-1;
        while(c > 0){
            let p = this.p(c);
            if(this.h[c] > this.h[p]){
                return;
            }

            this.swap(c,p);
            c = p;
        }
    }
}

function KthLargestElement(a,k) {
    let h = new MinHeap()
    for(let i = 0; i < k; i++){
        h.insert(a[i])
    }

    for(let i = k; i < a.length; i++){
        if(a[i] > h.peek()){
            h.extract();
            h.insert(a[i])
        }
    }

    return h.peek()
}

let a = [1,7,5,2,4,3,6,5,5,4,4,3] , k = 2;
console.log(KthLargestElement(a,k));
