class Queue{
    constructor(){
        this.data = []
        this.last = 0;
        this.first = 0;
    }

    isEmpty(){
        return this.first == this.last;
    }
    enqueue(data){
        this.data[this.last] = data;
        this.last++;
    }

    dequeue(){
        let removeData = this.data[this.first];
        this.first++
        return removeData;
    }

    length(){
        return this.last-this.first;
    }
    
    getFront(){
        return this.data[this.first]
    }

    display(){
        for(let i = this.first; i < this.last; i++){
            console.log(this.data[i])
        }
    }
}
class Solution {
/**
* @param number n
* @param number k
* @param number[] arr

* @returns number[]
*/

    

    printFirstNegativeInteger(n, k, a) {
        // code here
        let q = new Queue()
        let res = new Array(a.length - k + 1)
        for(let i = 0; i < k; i++){
            if(a[i] < 0){
                q.enqueue(i);
            }
        }
        
        let resIndex= 0;
        res[resIndex++] = q.isEmpty() ? 0 : a[q.getFront()]
        
        for(let i = k; i < a.length; i++){
            while(!q.isEmpty() && q.getFront() <= i-k){
                q.dequeue();
            }
             if(a[i] < 0){
                q.enqueue(i);
            }
            
            res[resIndex++] = q.isEmpty() ? 0 : a[q.getFront()]
        }
        
        return res;
    }
}