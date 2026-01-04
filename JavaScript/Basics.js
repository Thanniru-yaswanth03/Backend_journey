// Operator Precedence
// ()
// **
// *,/,%
// +,-
// (5+2)/7+1*2=?
// 3/1+2**2
// var result1= 3
// var result2= 7
// let age1 =21;
// let age2 =22;
// const pi=3.14;
// // in pre change and use 
// // in post use and change

// // age+=1;
// console.log("1 is "+age1);
// console.log("2 is "+age2);
// // console.log(pi);
// console.log(age1++);
// console.log(++age1);
// console.log(age2--);
// console.log(--age2);
// let x =5;
// let y = x++ + ++x;
// console.log(y);
// == only val and === both type and val
// let p =12;
// let e =11;
// let o = "The cost is "+(p+e)+"rupees";
// console.log(o);
// console.log(`Hey there the price is ${o} rupees`);
// good str q
// let str1 = 'asking';
// let str2 = 'ask';
// if((str1.length>3) && (str1[0]==='a')){
//     console.log(`${str1} is a good string`)
// }else{
//     console.log("nah");
// }
// let key ='yash';
// switch (key) {
//     case 'yash':
//         console.log(`yeah his name is ${key}`)
//         break;
//     case 'batman':
//         console.log("nah");
//         break;

//     default:
//         break;
// }
// let name = prompt(" ?  : ");
// alert("wassup ? ")
// console.log("name");

// Methods in js 
//Trim method used to remove extra spaces ex
// let msg =' yash1th ';
// let x = msg.trim();
// console.log(x);
// let pass= ' yas h ';
// let newp=pass.trim()
// console.log(newp);
//upper , lower
// let str2='YASH';
// let str='batman';
// console.log(str.toUpperCase());
// console.log(str2.toLowerCase());

//IndexOf() method
//if i print a string that doesnt exist then itwill print minus -1 
// let str = 'iloveher';
// let res=str.indexOf('h');
// console.log(res);

//method chaining
// let msg = '  hello     ';
// let newm= msg.trim().toUpperCase();
// // let x = newm;
// console.log(newm);

//slicing
// let str = 'iloveninjah2';
// let msg = 'neerechargeaipoindirapuka'
// let p = str.slice(0,-3); 
// console.log(p);
// console.log(msg.slice(-6,msg.length));
// // same shit
// console.log(msg.slice(-6,));

//replace
// let str='her';
// console.log(str.replace('h','p'));
// console.log(str.repeat(3));

//prac
// let msg = 'ApnaCollege';
// console.log(msg.slice(4,).replace('l','t').replace('l','t'));

//Arrays
// let Arrays = ['yash','her','n1fnxbatman'];
// let kd = ['one',12,5.03];
// let x = [];

// x.push('batman');
// console.log(x);

// kd[2] = 5.10;
// console.log(kd);

// Arrays[2] = Arrays[2].replace('1','one');
// console.log(Arrays);

// Array methods

// let newarr=['cycle','bmw','h2','skoda','ferrari','horse'];
// newarr.push('her','herbestie');
// newarr.pop();
// newarr.shift();
// newarr.unshift('herdog');
// console.log(newarr);

//indexOf,includes,concat,reverse,splice in arrays
// let arr=['red','yellow','black'];
// let arr2=[1,2,3];

// let x = arr.concat(arr2);

// console.log((x));
// console.log(`reversed : ${x.reverse()}`);
// console.log(arr.includes('red'));
// console.log(x.slice(1,-1));
// console.log(x.slice());
//to get the whole copy of an array we do arr.slice() thats it u get the whole cpy
// (method) Array<string>.splice(start: number, deleteCount?: number | undefined): string[] (+1 overload)
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
//splic(start,deletecount,add items ....)
// let newarr=[12,213,4342,1345,12425,24151];
// console.log(newarr.splice(0,2));
// newarr.splice(0,0,'yash','batman');
// newarr.splice(1,0,'superman');
// console.log(newarr);
//here i add things with splice
//sort
// let arr=[21,152,521,12,55,11,552,];
// console.log(arr.sort());
// console.log(arr.sort());
// let st=['jan','jul','mar','aug'];
// console.log(st.splice(0,2,'july','june'));
// console.log(st);
//arr ref
//consţarrays
const arr=[1,2,3,4];
console.log(arr);
// Nested array (2D array)
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Accessing elements
console.log(matrix[0][0]); // 1
console.log(matrix[1][2]); // 6

// Modifying an element
matrix[2][1] = 99;

// Loop through nested array
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}

// Add a new row
matrix.push([10, 11, 12]);

// Add element to an inner array
matrix[0].push(100);

// Flatten nested array
let flat = matrix.flat();
console.log(flat);

