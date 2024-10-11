

class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.size = 0

    }
}
class linkedlist {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }
    getsize() {
        return this.size
    }

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
    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
    // remove(value) {
    //     if (this.isEmpty()) {
    //         return "List is Empty";
    //     }
    
    //     let curr = this.head;
    //     let prev = null;
    
    //     while (curr !== null) {
    //         if (curr.value === value) {
           
    //             if (prev === null) {
                    
    //                 this.head = curr.next;
    //             } else {
    //                 prev.next = curr.next;
    //             }
    //             this.size--;
    //             return value; 
    //         }
    //         prev = curr;
    //         curr = curr.next;
    //     }
    
       
    //     return "Not Found";
    // }
    remove(value){
       
        if(this.isEmpty()){
            return("List is Empty")}


        let curr=this.head
        let temp =null
        while(curr!==null){
            if(curr.value === value){
                if(temp===null){
                    this.head=curr.next
                  }  else{
                    temp.next = curr.next
                  }
             
              this.size --
              return value
            }
            temp=curr
            curr=curr.next
        }
            return ("Not Found")
          }
        



 reverse() {
        let prev = null
        let curr = this.head
        while (curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }
    
    print() {
        if (this.isEmpty()) {
            console.log('list is Empty')
        }
        else {
            let curr = this.head
            let listvalues = ''
            while (curr) {
                listvalues += ` ${curr.value}  `;
                curr = curr.next
            }
            console.log(listvalues)

        }

    }
}

const list1 = new linkedlist()
list1.append(1)
list1.append(2)
list1.append(3)
list1.append(4)
list1.print()
// list1.prepend(2)
// list1.print()
// list1.reverse()

list1.remove()

// list1.prepend(1)
// list1.print()
list1.remove()
list1.print()




// function ev (str1,str2){

//     let i=0;
//   while(i<str2.length){
//     let j=0;
//     let found=false;


//     while(j<str2.length){
//         if(str1[j]===str2[i]){
//             found=true
//             break;
//         }j++
//     }
//     if(!found){
//         return str2[i];
        
//     }
//     i++
//   }

// return null
// }
// let a="abcd"
// let b="abecd"
// console.log(ev(a,b))
 

// const s = "abcd";
// const t = "abcde";

// // let output = " "

// // function String1(s){
// //     s.match("abcde")
// //     return s
// // }

// // function string(Str1, Str2){
// //     for(let i = 0; i < Str2.length-1; i++){
// //         for(let j=0)
// //     }
// // }

// function string(Str1, Str2) {
//     // console.log("");
//   for (let i = 0; i < Str2.length; i++) {
//       for (let j = i; j < Str2.length ; j++) {
//         // console.log("STr2 =================>", Str2[j]);
//     //   console.log("J =========>", Str2[j], "STR1 ===>", Str1[i]);
//       if (Str1[i] == Str2[j]) {
//         // console.log("Str1 =============>", Str1[j], "Str2", Str2[i]);
//         // return Str2[j];
//         break;
//       } else {
//         // console.log("Str1 =============>", Str1[j], "Str2", Str2[i]);
//         return Str2[j]
//       }
//     }
//   }
//   // return Str2[j]
// }

// console.log(string(s, t));

// // console.log(String1(s)



