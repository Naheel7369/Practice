// // const person=["Naheel","Suleman","Anis"]
// // const shop=["shirt","pant","watch"]
// //  let a=[...person,...shop];
// //  console.log(a);









// // let age= [2,23,24,25,27,28];

// // arr2=age.filter((values)=>{
// //     if(age  %2==0) {

// //     }
// //     return values;
// // })
// // console.log(arr2);



// // function  reverse(x){
// // let arr=""
// // for( let i=x.length-1;i>=0;i--){
// //     arr = arr + x[i]
// // }
// // return arr.split('')
// // }
// // console.log(reverse(['n','a','h']))


// // let sa=["n","a","h","e","e","l"];
// // arr2 = sa.reverse();
// // console.log(arr2);


// // function summation(n) {
// //     let sum = 0;
// //     for (let i = 1; i <= n; i++) {
// //         sum += i;
// //     }
// //     return sum;

// // }
// // console.log(summation(5))

// // function fa(n) {
// //     return (n * (n + 1)) / 2
// // }
// // console.log(fa(3))

// // const personb = {
// //     firstname: 'Naheel',
// //     lastname: 'Suleman'
// // }
// // console.log(personb.firstname)


// // let fib = [0, 1]
// // function fibi(n) {

// //     for (i = 2; i < n; i++) {
// //         fib[i] = fib[i - 1] + fib[i - 2]
// //     }
// //     return fib
// // }
// // console.log(fibi(9))

// // let fic = [0, 1]
// // function fi(n) {
// //     for (i = 2; i < n; i++) {
// //         fic[i] = fic[i - 1] + fic[i - 2]
// //     }
// //     return fic;
// // }
// // console.log(fi(5));
// // // Big O =  O(n)
// // // --------------------------------------------x---------------------------------------------------------------------x--------
// // function fuctorial(n) {
// //     let fac = 1;
// //     for (i = 2; i <= n; i++) {
// //         fac = i * fac
// //     }
// //     return fac
// // }
// // console.log(fuctorial(4))

// // function fuc(n) {
// //     let f = 2;
// //     for (i = 3; i <= n; i++) {
// //         f = i * f;
// //     }
// //     return f;
// // }
// // console.log(fuc(5))
// // Big O =  O(n)
// // ---------------------------------------------------------x-------------------------------------------------x-------

// // function prime(n){
// // if (n<2)
// //     {
// //     return false;
// // }
// // for(i=2;i<n;i++){
// // if(n % i === 0)
// //     {
// //     return false
// // }
// // }
// // return true
// // }
// // console.log(prime(4))


// // function pri(n) {
// //     if (n < 2) {
// //         return false
// //     }
// //     for (i = 2; i < n; i++) {
// //         if (n % i === 0) {
// //             return false
// //         }
// //     }
// //     return true;
// // }
// // console.log(pri(5))
// //  
// // Big O =  O(n)
// // ---------------------------------------------------------x-------------------------------------x------------

// // function power(n){
// //     if(n<1){
// //         return false;
// //     }
// // for(i=2;i<n;i++)
// //     {
// //     if(n % 2[i]!== 0)
// //         {

// //        return false
// //     }

// // }
// // return true
// // }
// // console.log(power(8))




// // function pwr(n){
// //     if(n<1){
// //         return false
// //     }
// //     for(i=2;i<n;i++){
// //         if(n % 2[i] !==0)
// //         {
// //             return false
// //         }
// //     }
// //     return true
// // }
// // console.log(pwr(16))
// // // Big O =  O(n) but for O(while loop its n=n/2 which makes complexity is  Big O= logn which is is less)


// // function wise(n){
// //     if(n<1){
// //         return false
// //     }
// //         return(n &(n-1))===0
// // }
// // console.log(wise(3))
// // // Big O =  O(1)
// //---------------------------------x----------------------------------x-------------


// // function rlib(n) {
// //     if (n < 2) {
// //         return n
// //     }
// //     return rlib(n - 1) + rlib(n - 2)
// // }


// // console.log(rlib(0))
// // console.log(rlib(1))
// // console.log(rlib(6))


// // function r(n) {
// //     if (n < 2) {
// //         return n;
// //     }
// //     return r(n - 1) + r(n - 2)
// // }
// // console.log(r(7))
// // ittreartive Big O= O(n)
// // Recursive Big O= O(n^2)
// //--------------------------------------------x-------------------------x----------------
// // function rfact(n) {
// //     if (n < 2) {
// //         return 1;
// //     }
// //     return n * rfact(n - 1)

// // }
// // console.log(rfact(4))
// // console.log(rfact(0))
// // // Big O= O(n)
// // //-----------------------------x----------------------------------------x-----------------

// // function linear(arr, tar) {
// //     for (let i = 0; i < arr.length; i++) {
// //         if (arr[i] === tar)
// //             return i
// //     }
// //     return -1;
// // }
// // console.log(linear([1, 20, 3, 5, 7, 89,], 89))
// // // Big O =  O(n)

// // function binary(arr1, target) {
// //     let leftindex = 0;
// //     let rightindex = arr1.length - 1
// //     while (leftindex <= rightindex) {
// //         let middleindex = Math.floor((leftindex + rightindex) / 2)
// //         if (target === arr1[middleindex]) {
// //             return middleindex;

// //         }
// //         if (target < arr1[middleindex]) {
// //             rightindex = middleindex - 1
// //         }
// //         else {
// //             leftindex = middleindex + 1
// //         }
// //     }
// //     reurn - 1
// // }
// // console.log(binary([1, 2, 4, 6, 8, 89], 89))
// // console.log(binary([1, 2, 4, 6, 8, 89], 6))

// // function binary(arr, target) {
// //     let leftindex = 0;
// //     let rightindex = arr.length - 1
// //     for (; leftindex <= rightindex;) {
// //         let mindex = Math.floor((leftindex + rightindex) / 2)
// //          if (target === arr[mindex]) {
// //             return mindex;
// //         }
// //         if (target < arr[mindex]) {
// //             rightindex = mindex - 1
// //         }
// //         else {
// //             leftindex = mindex+ 1
// //         }

// //     }

// //     return -1;
// // }

// // console.log(binary([1, 2, 4, 6, 8, 89], 89))
// //  Big O= O(logn)
// //--------------------------------------------------------x---------------------------------x-----------


// // function recur(arr, target) {
// //     return serach(arr, target, 0, arr.length - 1)

// // }
// // function serach(arr, target, leftindex, rightindex) {
// //     if (leftindex > rightindex) {
// //         return -1;
// //     }
// //     let middleindex = Math.floor((leftindex + rightindex) / 2)
// //     if (target === arr[middleindex]) {
// //         return middleindex;
// //     }

// //     if (target < arr[middleindex]) {
// //         return serach(arr, target, leftindex, rightindex - 1)
// //     }
// //     else {
// //         return serach(arr, target, leftindex +1, rightindex)
// //     }
// // }
// // console.log(recur([1, 2, 4, 6, 8, 89], 89))



// // function recur(arr,target) {
// //     return search(arr, target, 0, arr.length - 1)
// // }
// // function search(arr, target, leftindex, rightindex) {
// //     if (leftindex > rightindex) {
// //         return -1;
// //     }
// //     let middleindex = Math.floor((leftindex + rightindex) / 2)
// //     if(target===arr[middleindex])
// //     {
// //         return middleindex;
// // }
// // if(target<arr[middleindex]){
// //     return search(arr, target ,leftindex,rightindex-1)
// // }
// // else{
// //     return(arr,target,leftindex+1,rightindex)
// // }

// // }
// // console.log(recur([1, 2, 4, 6, 8, 89], 2))
// // let array = [6, 20, 3, -2, 10]

// // function bubble(arr) {


// //     for (let i = 0; i < arr.length; i++) {
// //         for (let j = i+1; j < arr.length; j++) {
// //             if (arr[i] > arr[j]) {
// //                 let temp = arr[j]
// //                 arr[j] = arr[i];
// //                 arr[i] = temp
// //             }



// //         }

// //     }
// //     return arr;
// // }
// // console.log(bubble(array))
// // let array = [6, 20, 3, -2, 10]
// // function bubble(arr){
// //     for(let i=0;i<arr.length;i++){
// //       for(j=i+1;j<arr.length;j++)
// //       {
// //         if(arr[i]>arr[j]){
// //             let temp=arr[j]
// //             arr[j]=arr[i]
// //             arr[i]=temp

// //         }
// //       }
// //     }
// //     return arr;
// // }
// // console.log(bubble(array))

// // function insertion(arr) {
// //     for (let i = 1; i < arr.length; i++) {
// //         let currentValue = arr[i];
// //         let j = i - 1;

// //         while (j >= 0 && arr[j] > currentValue) {
// //             arr[j + 1] = arr[j];
// //             j = j - 1;
// //         }

// //         arr[j + 1] = currentValue;
// //     }
// // }


// // let array = [6, 20, 3, -2, 10];
// // insertion(array);
// // console.log(array); // Output: [-2, 3, 6, 10, 20]


// // function insertion(Arr){
// //     for(i=0;i<Arr.length;i++){
// //         let c=Arr[i]
// //         let j=i-1
// //         while(j>=0 && Arr[j]>c){
// //             Arr[j+1]=Arr[j]
// //             j=j-1
// //         }
// //         Arr[j+1] =c
// //     }
// // }
// // let array = [6, 20, 3, -2, 10];
// // insertion(array);
// // console.log(array); // Output: [-2, 3, 6, 10, 20] big O= (O n^2)
// // -------------------------x---------------------------------x------------
// // function quicksort(arr) {
// //     if (arr.length < 2) {
// //         return arr;
// //     }

// //     let pivot = arr[arr.length - 1]; // Corrected spelling from 'piviot' to 'pivot'
// //     let left = [];
// //     let right = [];

// //     // Iterate over elements except the pivot
// //     for (let i = 0; i < arr.length - 1; i++) {
// //         if (arr[i] < pivot) {
// //             left.push(arr[i]);
// //         } else {
// //             right.push(arr[i]);
// //         }
// //     }

// //     // Recursively sort left and right subarrays
// //     return [...quicksort(left), pivot, ...quicksort(right)]; // Corrected 'piviot' to 'pivot'
// // }

// // const arr = [8, 20, -2, 4, -6];
// // console.log(quicksort(arr));

// // function quick(arr){
// //     if(arr.length < 2){
// //         return arr
// //     }
// //     let pivot=arr[arr.length-1]
// //     let left=[]
// //     let right=[]
// //     for(let i=0;i<arr.length-1;i++)
// //         {
// //            if(arr[i]<pivot){
// //             left.push(arr[i])
// //            }
// //            else{
// //             right.push(arr[i])
// //            }

// //     }
// //     return [...quick(left), pivot, ...quick(right)];
// // }
// // const arr = [8, 20, -2, 4, -6];
// // console.log(quick(arr));
// // worst case - O(n^2)
// // Avg case - O(nlogn)
// // ----------------------------x----------------------x---------------


// // function mergesort(arr){
// //      if(arr.length<2){
// //         return arr
// //      }
// //      let mid=Math.floor(arr.length /2)
// //      const leftArr=arr.slice(0,mid)
// //      const rightArr=arr.slice(mid)
// //      return merge(mergesort(leftArr),mergesort(rightArr))

// // }
// // function merge(leftArr, rightArr) {
// //     let temp = [];
// //     while (leftArr.length && rightArr.length) {
// //         if (leftArr[0] <= rightArr[0]) { // Corrected comparison
// //             temp.push(leftArr.shift());
// //         } else {
// //             temp.push(rightArr.shift());
// //         }
// //     }
// //     // Concatenate any remaining elements in leftArr and rightArr
// //     return [...temp, ...leftArr, ...rightArr];
// // }

// // const arr = [8, 20, -2, 4, -6];
// // console.log(mergesort(arr));
// //  function mergesort(arr){
// //      if(arr.length<2){
// //         return arr
// //      }
// //      let mid=Math.floor(arr.length/2)
// //      const leftArr=arr.slice(0,mid)
// //      const rightArr=arr.slice(mid)
// //      return merge(mergesort(leftArr),mergesort(rightArr))
// //  }
// //  function merge(leftArr,rightArr){
// //     let temp=[]
// //     while(leftArr.length && rightArr.length){
// //         if(leftArr[0]<= rightArr[0]){
// //             temp.push(leftArr.shift())
// //         }
// //         else{
// //             temp.push(rightArr.shift())
// //         }
// //     }
// //     return [...temp, ...leftArr,...rightArr];
// //  }
// //  const arr = [8, 20, -2, 4, -6];
// // console.log(mergesort(arr));
// //   BigO= (nlogn)
// // -----------------------------------x------------------x--------

// // function cart(arr1,arr2){
// // const result=[]
// // for(i=0;i<arr1.length;i++)
// // {
// //     for(j=0;j<arr2.length;j++){
// //         result.push([arr1[i],arr2[j]])
// //     }
// // }


// // return result
// // }
// // const arr1=[1,2]
// // const arr2=[3,4,5]
// // console.log(cart(arr1,arr2))
// }

// let arr1 = [1, 2]
// let arr2 = [3, 4, 5]

// function cart(arr1, arr2) {
//     let result = []
//     for (i = 0; i < arr1.length; i++) {
//         for (j = 0; j < arr2.length; j++) {
//             result.push([arr1[i], arr2[j]])
//         }


//     }

//     return result;
// }
// console.log(cart(arr1, arr2))
//  big O= O(mn)
// ---------------------------------------x------------------x--------------

// function cs(n){
//     const  now=[1,2]
//     for(i=2;i<=n;i++){
//       now[i]=now[i-1]+now[i-2]
//     }
//     return now[n-1]
// }

// console.log(cs(1))
// console.log(cs(2))
// console.log(cs(5))
// // big O=O(n)

// function cs(n){
//      let now=[1,2]
//        for(i=2;i<=n;i++){
//          now[i]=now[i-1]+now[i-2]
//        }


//      return now[n-1]

//     }

// console.log(cs(1))
// console.log(cs(2))
// console.log(cs(5))
// -----------------------------x-----------------x-------

// function hanoi(n,fr,tr,ur)
// {
// if(n===1){
//     console.log(`move disk1 from ${fr} to ${tr}`)
//     return
// }
// hanoi(n-1,fr,ur,tr)
// console.log(`move disk ${n} from ${fr} to ${tr}`)
// hanoi(n-1,ur ,tr,fr)
// }
// hanoi(3,'A','C','B')
//  Big O= O(n^2)
// -----------------------x----------------------------x-----------


// const arr =[1,2,3,'Naheel']
// arr.push(4)
// arr.unshift(0)
// arr.pop()
// arr.shift()
// for(const item of arr){
//     console.log(item)
// }

// const obj={
//     name:'bruce',
//     lastname:'Wayne',
//     "key_three":true,
//     sayname: function(){
//         console.log(this.name)

//     }
// }
// obj.hobby='Football';
// delete obj.hobby;
// console.log(obj.name)
// console.log(obj['lastname'])
// console.log(obj['key_three'])
// console.log(obj)
// obj.sayname()

// const set= new Set([1,2,3])
// set.add(4)
// console.log(set.has(4))
// set.delete(3)
// console.log(set.size)
// set.clear()
// for (const item of set){
//     console.log(item)
// }

// const map = new Map([['a',1],['b',2]])
// map.set('c',3)
// console.log(map.has('e'))
// console.log(map.size)
// map.clear()
// for(const [key,value]of map ){
//     console.log(`${key}:${value}`)
// }

// const a=[1,2,3,4];
// a.splice(2,1,4,5)
// console.log(a)
// ------------------------------------x-------------------------x---------


// class Q{
//     constructor(){
//         this.items=[]
//     }
//     enqueue(element){
//         this.items.push(element)
//     }
//     dequeue(element){
//        return this.items.shift(element)
//     }
//     isEmpty(){
//       return this.items.length ===0
//     }
//     peek(){
//         if(!this.isEmpty()){
//             return this.items[0]
//         }
//         return null
//     }
//        size(){
//         return this.items.length
//        }
//        print(){
//         console.log(this.items.toString())
//        }

//     }
//     const q= new Q()
//     console.log(q.isEmpty())
//     q.enqueue(10)
//     q.enqueue(20)
//     q.enqueue(30)
//     console.log(q.size())
//     q.print()
//     console.log(q.dequeue())
//     console.log(q.peek())

// ------------------------------x----------------------x-------------------

// class Q{
//     constructor(){
//         this.items={}
//         this.rear=0
//         this.front=0
//     }
//     enqueue(element)
//     {
//        this.items[this.rear]=element
//        this.rear++
//     }
//     dequeue(){
//         this.items[this.front]
//           delete this.items[this.front]
//           this.front++
//           return this.items
//     }
//     isEmpty(){
//         return this.rear-this.front===0
//     }
//     peek(){
//         return this.items[this.front]
//     }
//     size(){
//         return this.rear-this.front
//     }
//     print(){
//         console.log(this.items)
//     }

// }
//     const q= new Q()
//     console.log(q.isEmpty())
//      q.enqueue(10)
//      q.enqueue(20)
//      q.enqueue(30)
//     console.log(q.size())
//     q.print()
//      console.log(q.dequeue())
//     console.log(q.peek())
// ------------------------------------x------------------x--------


// class cq {
//     constructor(capacity) {
//         this.items = new Array(capacity)
//         this.capacity = capacity
//         this.currentlength = 0;
//         this.rear = -1;
//         this.front = -1;
//     }
//     isfull() {
//         return this.currentlength === this.capacity
//     }
//     isEmpty() {
//         return this.currentlength === 0
//     }
//     enqueue(element) {
//         if (!this.isfull()) {
//             this.rear = (this.rear + 1) % this.capacity
//             this.items[this.rear] = element
//             this.currentlength += 1
//             if (this.front === -1) {
//                 this.front = this.rear
//             }
//         }

//     }
//     dequeue() {
//         if (this.isEmpty()) {
//             return null

//         }
//         const item = this.items[this.front]
//         this.items[this.front] = null
//         this.front = (this.front + 1) % this.capacity
//         this.currentlength -= 1
//         if (this.isEmpty()) {
//             this.front = -1
//             this.rear = -1
//         }
//         return item
//     }
//     peek() {
//         if (!this.isEmpty()) {
//             return this.items[this.front]
//         }
//         return null
//     }
//     print() {
//         if(this.isEmpty())
//         {
//             console.log("Queue is empty ")
//         }
//        else{
//         let i
//         let str = ''
//         for (i = this.front; i !==this.rear;i=(i+1)% this.capacity) {
//          str+=this.items[i]+ " "
//         }
//         str+=this.items[i]
//         console.log(str)

//     }
       
    

//     }

// }
// const queue= new cq(5)
// console.log(queue.isEmpty())
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// queue.enqueue(50)
// console.log(queue.isfull())
// queue.print()
// console.log(queue.dequeue())

