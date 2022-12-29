class PriorityQueue {
    constructor(max, comp = (a,b) => a < b){
        this.heap = [];
        this.max  = this.max;
        this.comp = comp;
    }

    isEmpty(){
        return this.heap.length == 0;
    }

    isFull(){
        return this.heap.length == this.max;
    }

    print(){
        for(let i = 0; i < this.heap.length; i++){
            console.log(this.heap[i])
        }
    }
    swap(a,b){
        let mj = this.heap[a];
        this.heap[a] = this.heap[b];
        this.heap[b] = mj;
    }

    hepify(p){
        let l = p*2 +1;
        let r = p*2 +2;

        if(this.comp(this.heap[l],this.heap[p])){
            p = l;
        }

        if(this.comp(this.heap[r],this.heap[p])){
            p = r;
        }

        if(p != 0){
            this.hepify(0)
        }
    }

    pop(){
        if(this.isEmpty()){
            console.log('Heap is Empty..!')
        }

        let p = this.heap[0]
        this.swap(0,this.heap.length-1)
        this.heap.pop();
        this.hepify(0)

        return p;
    }

    push(x){
        if(this.isFull()){
            console.log('Heap is full..!')
        }
        this.heap.push(x);
        let c = this.heap.length-1;
        while(c > 0){
            let p = parseInt((c-1)/2);
            if(this.comp(this.heap[p],this.heap[c])){
                return;
            }

            this.swap(c,p);
            c = p;
        }
    }
}

let pq = new PriorityQueue(Infinity,(a,b) => a > b)
pq.push(10)
pq.push(30)
pq.push(50)
pq.push(40)
pq.pop()
pq.print()