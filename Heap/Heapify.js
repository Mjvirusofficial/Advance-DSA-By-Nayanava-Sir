function heapify(parrent){
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