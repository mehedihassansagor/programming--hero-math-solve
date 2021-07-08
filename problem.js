console.log("bismillah")

//unique array

// let array = [1,2,3,4,5,4,3,2,1];
// let newArray = [];
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     let index = newArray.indexOf(element);
//     if(index == -1){
//         newArray.push(element);
//     }
    
// }
// console.log(newArray)

//maximum

// let number = [23,34,32,34,56,76,27498646]
// let maximum = number[0]

// for (let i = 0; i < number.length; i++) {
//    if(number[i]>maximum){
//        maximum = number[i]
//    }
    
// }

// console.log(maximum)

//duplicate number

// let array= [2,3,4,5,5,4,3,2,3,4,5]
// let uniqueArray = []
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     let index = uniqueArray.indexOf(element)
//     if (index == -1) {
//         uniqueArray.push(element)
//     }
 
    
// }
// console.log(uniqueArray)

// let array = [1,3,4,4,2,3,334]
// let max = array[0];
// for (let i = 0; i < array.length; i++) {
//     if( array[i]>max){
//         max = array[i];
//  }

// }
// console.log(max)

// let array = [1,2,3,4]
// let newArray = [...array,9,5,6,7,8]

// console.log(newArray)

 //reverse word

// let name = "sagor".split('');
// let reverseWords = name.reverse().join('');
// console.log(reverseWords)

// function megaFriend (nameList){
//   var nameLarge = 0;
//   for (var i = 0; i < nameList.length; i++){
//   if (nameList[i].length > nameLarge) {
//   var nameLarge = nameList[i].length;
//   var largest = nameList [i];
//   }
//   }
//   return largest;
//   }
//   var largeName = megaFriend(["mehedi", "hassan", "nur islam","sobi run nesa","kajol rekha"]);
//   console.log(largeName );

//largeName

//   let name = ["sagor","mehedisagor","mehedi hassan sagor"]
//   let largeName = name[0]
//   for (let i = 0; i < name.length; i++) {
//       if (name[i].length > largeName.length) {
//           largeName = name[i]
//       }
      
//   }
//   console.log(largeName)

// number of word

// var speech = "i am a genious person"
// var count = 0;
// for (let i = 0; i < speech.length; i++) {
//     const element = speech[i];
//     if (element == " " && speech[i-1]!==" ") {
//         count++;
//     }
    
// }count++
// console.log(count)

// let speech = "i am a web-developer ore";
// let count = 0;
// for (let i = 0; i < speech.length; i++) {
//     const element = speech[i];
//     if (element === " " && speech[i-1] !== " ") {
//         count++;
//     }
    
// }count ++;
// console.log(count)

// duplicate strings
// let country=["ban","can","pak","sri","ban"]
// let uniqueCountry = [];
// for (let i = 0; i < country.length; i++) {
//     let element = country[i];
//     let index = uniqueCountry.indexOf(element)
//     if(index == -1) {
//         uniqueCountry.push(element)
//     }
// }

// console.log(uniqueCountry)

//prime number 


// let number = 5

// let count = 0;
// for(let i = 2; i <number; i++) {
//     if (number % i == 0) 
//     {
//         count++;
//         break;
//     }
   
// }
// if (count == 0) {
//     console.log("prime")
// }
// else console.log("not")
