class MaxHeap{
    constructor(maxCap){
        this.heap = []
        this.maxC = maxCap;
    }

    isFull(){
        return this.heap.length == this.maxC;
    }

    isEmpty(){
        return this.heap.length == 0;
    }

    parrent(i){
        return parseInt((i-1)/2)
    }

    leftChild(i){
        return 2*i +1;
    }

    rightChild(i){
        return 2*i +2;
    }

    print(){
        for (let i = 0; i < this.heap.length; i++) {
            console.log(this.heap[i])
        }
    }

    swap(a,b){
        let mj = this.heap[a]
        this.heap[a] = this.heap[b]
        this.heap[b] = mj;
    }

    heapify(parrent){
        let left  = this.leftChild(parrent)
        let right = this.rightChild(parrent)

        if(this.heap[left] > this.heap[parrent]){
            parrent = left;
        }

        if(this.heap[right] > this.heap[parrent]){
            parrent = left;
        }

        if(parrent != 0){
            this.heapify(parrent)
        }
    }

    extract(){
        if(this.isEmpty()){
            console.log('Heap is empty..!')
        }

        let parrent = this.heap[0];
        this.swap(0,this.heap.length-1);
        this.heap.pop();
        this.heapify(0);
        
        return parrent;
    }

    insert(data){
        if(this.isFull()){
            console.log('Heap is full..!');
        }

        this.heap.push(data)
        let child  = this.heap.length-1;
        let parent = this.parrent(child)
        while(child > 0){
            if(this.heap[parent] > this.heap[child]) return;

            this.swap(child,parent);
            child = parent;
        }
    }
}

let h = new MaxHeap(10);
h.insert(6)
h.insert(5)
h.insert(65)
let pop = h.extract();

h.print();
console.log('Deleted iteam:- ',pop)