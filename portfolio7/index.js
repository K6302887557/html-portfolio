//  const date =new Date()
// // console.log("date is:"+date);
// // console.log(date.getDate());
// // console.log(date.getMonth());
// // console.log(date.getTime());
// // console.log(date.getDay());
    
// let  setOfNumber1 =[1,2,3,4,5,6,7,8,5,4,3,2,1];
// document.write(setOfNumber1);
// console.log(setOfNumber1);
// let setOfNumber = new Set();
// setOfNumber.add(1);
// setOfNumber.add(3);
// setOfNumber.add(4);
// setOfNumber.add(5);
// setOfNumber.add(7);
// setOfNumber.add(9);
// setOfNumber.add(5);
// setOfNumber.add(10);
// setOfNumber.clear();
// setOfNumber.delete(1);
// setOfNumber.has(1);
// console.log("set :",setOfNumber);
// let setOfNumber2 =new Set([1,2,3,4,5]);
// console.log('setOfNumber2',setOfNumber2);

// let mapOfNumbers = new Map();
// mapOfNumbers.set("name","karthik");
// mapOfNumbers.set("location","bangalore");
// mapOfNumbers.set(3,27);

// console.log(mapOfNumbers.get("name"));
// console.log(mapOfNumbers.get(3));
// console.log(mapOfNumbers.get("location"));
// const x="5";
// console.log(typeof (x));

// try{
//     alert("test");
    
// }catch(error){
//     console.log("somethingwrong");
// }
 function pizza(){
    return new promise((resolve, reject)=>{
        console.log("Ordering pizza...");
        setTimeout(()=>{
            const pizzaDelivered = true;
            if(pizzaDelivered){
                resolve("pizza is here!");
            }else{
                reject("sorry, no pizza today.");
            }
        })
    })
 }
 pizza();