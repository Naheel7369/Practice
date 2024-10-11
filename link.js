// class Node {
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }
// class linkedlist{
//     constructor(){
//         this.head=null
//         this.size=0
//     }
//     isEmpty(){
//         return this.size===0
//     }
//     getsize(){
//         return this.size
//     }
    prepend(value) {
        let node = new Node(value); 
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
        
    }
    append(value){
        const node= new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            let prev=this.head
            while(prev.next){
                prev=prev.next
            }
            prev.next=node
        }
        this.size++
//     }
//     insert(value,index){
//         if(index < 0 || index > this.size){
//             return;
//         }
//         if(index===0){
//             this.prepend(value);
//         }else{
//             const node = new Node(value);
//             let prev = this.head;
//             for(let i=0; i<index-1; i++){
//                 prev=prev.next;
//             }
//             node.next=prev.next;
//             prev.next=node;
//             this.size++;
//         }
//     }
//     removefrom(index){
//       if(index<0 || index>=this.size){
//         return null;
//       }
//       let removeNode
//       if(index===0){
//         removeNode=this.head
//         this.head=this.head.next;
//       }
//       else {
//         let prev = this.head;
//         for (let i = 0; i < index - 1; i++) {
//           prev = prev.next;
//         }
//         removeNode=prev.next
//         prev.next=removeNode.next
//       }
//       this.size--
//       return removeNode.value
     
// }
//        removevalue(value){
//         if(this.isEmpty()){
//             return null
//         }
//         if(this.head.value===value){
//             this.head=this.head.next 
//             this.size--
//             return value
//         }else{
//             let prev=this.head
//             while(prev.next && prev.next.value !== value){
//                 prev=prev.next
//             } 
//             if(prev.next){
//                const  removeNode=prev.next
//                 prev.next=removeNode.next
//                 this.size--
//                 return value
//             }
//             return null
//         }
//        }

//        search(value){
//         if(this.isEmpty()) {
//             return-1
//         }
//         let i=0
//         let curr=this.head
//         while(curr){
//             if(curr.value===value){
//                 return i;
//             }
//             curr=curr.next
//             i++
//         }
//         return -1
//        }

        reverse(){
            let prev=null
            let curr=this.head
            while(curr){
                let next=curr.next
                curr.next=prev
                prev=curr
                curr=next
            }
            this.head=prev
        }
        
    print(){
        if(this.isEmpty()){
            console.log('list is Empty')
        }
        else
        {
            let curr=this.head
            let listvalues=''
            while(curr){
                listvalues +=` ${curr.value}  `;
                curr=curr.next
            }
            console.log(listvalues)

        }
        
    }
}

// Assuming you have a LinkedList class defined with the appropriate methods

// const list = new linkedlist ();

// console.log('List is Empty?', list.isEmpty()); // true
// console.log('List size', list.getsize()); // 0
// list.print(); // []

// list.prepend(10); // Prepend 10 to the list
// list.append(20); // Append 20 to the list
// list.append(30); // Append 30 to the list
// list.print(); // [10, 20, 30]

// list.insert(60, 2); // Insert 60 at index 2
// list.insert(50, 3); // Insert 50 at index 3

// list.print(); // [10, 20, 60, 50, 30]
// list.removefrom(2);
// console.log(list.removefrom(2))
// list.print(); 
// console.log(list.removevalue(40))
// console.log(list.search(80))
// list.reverse()
// list.print()