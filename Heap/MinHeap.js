class MinHeap {
    constructor(maxCapacity) {
        this.heap = []
        this.maxC = maxCapacity;
    }

    isFull(){
        return this.heap.length == this.maxC;
    }

    isEmpty(){
        return this.heap.length == 0;
    }

    insert(data){
        if(this.isFull()){
            console.log('heap is already full..!')
        }

        //Otherwise push the Data in Heap;
        this.heap.push(data);

        //Find child which is exist in last index;
        let child = this.heap.length-1;

        while(child > 0){   

            //Find parrent of the child & compare;
            let parrent = this.parrent(child);
            if(this.heap[child] > this.heap[parrent] ) return;
            this.swap(parrent,child)
            child = parrent;
        }
    }

    print(){
        for (let i = 0; i < this.heap.length; i++) {
            console.log(this.heap[i])
        }
    }


    extract(){
        if(this.isEmpty()){
            console.log('Heap is empty...!')
        }

        let parrent = this.heap[0];
        this.swap(0,this.heap.length-1);
        this.heap.pop();
        this.heapify(0);
        return parrent;
    }

    heapify(parrent){
        let left = this.leftChild(parrent);
        let right = this.rightChild(parrent)

        if(this.heap[left] < this.heap[parrent]){
            parrent = left;
        }

        if(this.heap[right] < this.heap[parrent]){
            parrent = right;
        }

        if(parrent != 0){
            this.heapify(parrent);
        }
    }
    //Some most important methods..!

    parrent(i){
        return parseInt((i-1)/2)
    }

    leftChild(i){
        return (2*i) + 1;
    }

    rightChild(i){
        return (2*i) + 2;
    }

    swap(a,b){
        let mj = this.heap[a]
        this.heap[a] = this.heap[b]
        this.heap[b] = mj;
    }
}

let h = new MinHeap(10);
h.insert(3);
h.insert(5);
h.insert(1);
h.extract();

h.print();