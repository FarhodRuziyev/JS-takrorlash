// let ism = prompt("ismingizni kiriting");

// let name = ism.charAt().toUpperCase();

// let davomi = ism.slice(1).toLowerCase();

// let resoult = name + davomi;

// console.log(resoult);
// =================================== IkkInchi Masala =======================
// let ism = prompt("ismingizni kiriting");
// let age = +prompt("yoshingizni kiriting");
// let nomi = ism.charAt().toUpperCase();
// let davomi = ism.slice(1).toLowerCase();
// let jovobi = nomi + davomi;

// let yosh = 2023 - age;
// let oy = age * 12;
// let kun = age * 365;
// let hafta = ((age * 365) / 7).toFixed(0);
// let soat = kun * 24;
// let daqiqa = soat * 60;
// let sekund = daqiqa * 60;

// const result = `"Ismingiz" ${jovobi},
// "Tug'ilgan yilingiz" ${yosh},
// "Yashagan oyingiz" ${oy},
//   "Yashagan haftangiz" ${hafta},
//    "Yashagan kuningiz" ${kun},
//    "Yashagan soatingiz" ${soat},
//   "Yashagan daqiqangiz" ${daqiqa},
//    "yashagan sekundingiz" ${sekund},
// `;
// alert(result);

// console.log( "Ismingiz",resoul, "Tug'ilgan yilingiz", yosh);
// console.log(oy, "Yashagan oyingiz");
// console.log(kun, "Yashagan oyingiz");
// console.log(soat, "Yashagan soatingiz");
// console.log(daqiqa, "Yashagan daqiqangiz");
// console.log(sekund, "yashagan sekundingiz");

//============================ Uchinchni Masala ===================================
// let ism = prompt("ism kiriting");
//  const array = ["Ahror", "Sardor", "Doniyor"];

// if(array.includes(ism)){
//   console.log(`${ism},"bu ism bor"`);
// }else{
//   console.log(`${ism}, "Kechirasiz bunday ism yoq"`);
// }

//============================== to'rtinchi masala ==================================
//  const array = ["Ahror", "Sardor", "Doniyor"];
// let a = "bek";
// for (let i = 0; i < array.length; i++) {
//   let result = array[i] + a;
//   console.log(result);
// }

// const array = ["Ahror", "Sardor", "Doniyor"];
// let i = 0;
// while (i<array.length) {
//   let resoul = array[i] + "bek"
//   console.log(resoul);
//   i++
// }

//============================== Beshinch Masala ================================
// let belgilar = prompt("nimadir kiriting");
// let meyor = 20;

// if(belgilar.length > meyor){
//   console.log(`Siz ${meyor}ta element kiritishingiz mumkin hozirda Siz ${belgilar.length - meyor} ta kop kiritdingiz`);
// }else{
//   console.log(`Siz ${meyor}ta element kiritishingiz mumkin siz hozirda ${meyor - belgilar.length}ta kam kiritdingiz`);
// }

// let son = +prompt("Son kiriting");
// for (let i = 1; i < 10; i++) {
//   let kop = 0;
//   if(i === son){
//     kop = i * 9;
//     console.log(`${9} ${"*"} ${i} ${"="} ${kop}`);
//   }
// }

// let user = {
//   name: "Ahror",
//   age: 25,
//   email: "vahvdsdfjg@gmalil.com ",
//   lacation: "Tashkent",
//   langs: ["Uzbek", "Russian", "English"],
//   login: function () {
//     console.log("Siz bu ssaytdagi sahifangizga kirdingiz");
//   },
//   logpout: function () {
//     console.log("Siz bu saytdagi sahifangizni tark etdingiz");
//   },
//   speak: function () {
//     console.log(this);
//     console.log("I can speak:");
//     this.langs.forEach((lang) => {
//       console.log(lang);
//     });
//   },
//   movies: [
//     { name: "Avatar", likes: 456 },
//     { name: "Herry Potter", likes: 234 },
//     { name: "Titanic", likes: 654 },
//     { name: "Sitve Jobs", likes: 543 },
//     { name: "Sherlock", likes: 659 },
//   ],
//   muviWatch: function () {
//     this.movies.forEach((muv) => {
//       console.log(`Kino nomi: ${muv.name}, Likes: ${muv.likes}`);
//     });
//   },
// };
// console.log(user.muviWatch());
//===================================== 5 =====================================
// massiv ichidagi stringni indexini qaytarish kerak
// const myArray = [ [false,true], [1, 2], 99, "Yaxshi" ];
// myArray.forEach((item, i) => {
//   if(typeof item == "string"){
//   console.log("String index: ",i);
//   }
// });

// const myArray = [ [false,true], [1, 2], 99, "Yaxshi" ];
// for (let i = 0; i < myArray.length; i++) {
//  if(typeof myArray[i] == "string"){
//   console.log("String index: ",i);
//  }
// }
// ================================= 6 ====================================
// array ichidagi arraylani olib bitta yangi arrayda chiqarish
// let newArray = [];
// const data = [[1, 2, 3], "qizil", [4, 5, 6], true, false];
// data.forEach((item) => {
//   const res = Array.isArray(item);
//   if (res) {
//     item.forEach((num) => {
//       newArray.push(num);
//     });
//   }
// });
// console.log(newArray);
// ==================================== 7 ==============================
// falsey qiymatlarni ajratib olib yangi arrayda chiqarish
// const checkData = [ null, "false", 0, 99, false, undefined, '', NaN, "0" ];
// const falsiy = [];
// checkData.forEach((item)=> {
//   if(!item){
//     falsiy.push(item);
//   }
// })
// console.log(falsiy);
// ============================= 8 =====================================
// const str = "Samarqand"; // Teskari qilish
// const res = str.split('');
// let newStr = "";
// for (let i = res.length - 1; i >=  0; i--) {
//   newStr += res[i]
// }
// console.log(newStr);
//============================ ikkinchi variant =======================
// const str = "Samarqand"; // Teskari qilish
// const res = str.split('').reverse();
// let javob = '';
// for (let i = 0; i < res.length; i++) {
//   javob += res[i]
// }
// console.log(javob);
//================================= 9 ======================================
//  aSSALOMU aLEYKUM yAXSHIMISIZ degan so'z shu ko'rinishda chiqarilishi kerak!
// let salom = "AssAlomu aLEyKuM yAXShiMisiz";
// const res = salom.split(" ");
// let a = ''.trimStart()
// res.forEach((item) => {
//   const boshi = item.charAt().toLowerCase()
//   const davomi = item.slice(1).toUpperCase()
//   a += ' ' + boshi + davomi
// });
// console.log(a);
//================================== 10 ===============================
// bunda natural sonlani ajratib olish kerak
// const num = [ -1, 2, 6, 87, 3.2, -5.5, Infinity, 0, 1, 3, 0.9];

// num.forEach((item) => {
//   if(item >= 0.0 && Math.floor(item) === item && item !== Infinity && item !== 0){
//     console.log("Natural son: ",item );
//   }
// });

//================================= 11 ===============================
// let str = "Assalomu Aleykum dunyo";
// let newStr = str.split('');
// let counter = 0;
// newStr.forEach((item) => {
//   // console.log(item);
//   if( item == 'a'|| item == 'A'){
//     counter++
//   }
// });
// console.log(`So'ralgan harf ${counter} marta qatnashgan`);
 
//=============================== 13 =================================
// berilgan arraydan yangi arr yasab unda faqat typeni qaytarishi kerak
// const berilgan = [ 21.2, "Roziya", "array", ["I am array"], null, true, 221 ];
// let array = []
// berilgan.forEach((item) => {
//   array.push(typeof item)
// });
// console.log(array);

//================================ 14 =================================
// shu soz nechta harfadan iboratligini aniqlang
// const str = "Uzbekistan";
// let res = str.split('')
// res.forEach((item, index) => {
//   console.log(index + 1);
// });
//=======ikkinchi usuli ==========
// const str = "Uzbekistan";
// let res = str.lastIndexOf(str.slice(-1))+1
// console.log(res);

//================================ 15 =================================
//shu arrga o'zini indexini qoshib chiqarish kerak
// const arr = [1,2,3,4,5];
// let res = [];
// arr.forEach((item, index) => {
//   res.push(item + index)
// });
// console.log(res);




