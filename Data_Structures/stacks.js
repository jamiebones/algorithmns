class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}


class Stack{
    constructor(){
        this.first = null;
        this.last= null;
        this.size = 0;
    }
    push(value){
        let newNode = new Node(value);
        if (this.size === 0 ){
            this.first = newNode;
            this.last = newNode;
            this.size++;
            return this.size;
        }
        let temp = this.first;
        this.first = newNode;
        this.first.next = temp;
        this.size++;
        return this.size

    }
    pop(){
        if (this.size === null ) return undefined;
        let removeNode = this.first;
        if ( this.size === 1 ){
            this.first = null;
            this.last = null;
        }else{
            this.first = removeNode.next;
        }
        this.size--;
        return removeNode.value;
    }
}

let stack = new Stack();
stack.push("the game is the game");
stack.push("the new day is here");
stack.push("please help me......")
stack.push("this is a new day")
const popNode = stack.pop();
console.log("pop node ", popNode);
