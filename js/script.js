// // // Math functions
// // 1-MASALA JAVOBI
let num = Math.trunc(Math.random() * 100) + 1;
console.log(num);
// // 2-MASALA JAVOBI
// let num = +prompt("Istalgan bir son kiriting:");
// if (num >= 0) {
//   let res = Math.sqrt(num).toFixed(2);
//   alert(res);
// } else {
//   alert("Musbat son kiriting");
// }
// // 3-MASALA JAVOBI
// let max;
// let min;
// for (let i = 1; i <= 5; i++) {
//     let num = +prompt(`${i}-sonni kiriting:`);
//     if (i === 1) {
//         max = num;
//         min = num;
//     } else {
//         if (num > max) max = num;
//         if (num < min) min = num;
//     }
// }
// alert("Eng katta son: " + max + "\nEng kichik son: " + min);
// // 4-MASALA JAVOBI
// let num = +prompt("Istalgan real son kiriting")
// let up = Math.ceil(num)
// let down = Math.floor(num)
// alert("\nyaxlitlangan son" + up + "\nyaxlitlangan son" + down);
// // 5-MASALA JAVOBI
// let num = prompt("Radiusni kiriting");
// let res = 2 * 3.1415 * num;
// alert(Math.round(res));

// // // Ternary operator
// // 1-MASALA JAVOBI
// let num = prompt("Istalgan son kiriting musbat yoki manfiylikka tekshiriladi");
// num > 0 ? alert("Kiritilgan son musbat") : alert("Kiritilgan son manfiy");
// // 2-MASALA JAVOBI
// let num = prompt("Yoshingizni kiriting");
// num >= 18 ? alert("Ruxsat etilgan") : alert("Ruxsat etilmagan");
// // 3-MASALA JAVOBI
// let num = prompt("Istalgan bir son kiriting");
// num % 2 == 0 ? alert("Kiritilgan son juft") : alert("Kiritilgan son toq");

// // // for sikl operator
// // 1-MASALA JAVOBI
// for (var i = 0; i <= 20; i += 2) {
//   console.log(i);
// }
// // 2-MASALA JAVOBI
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   let num = +prompt(`${i}-sonni kiriting`);
//   if (num > 0) {
//     sum += num;
//   }
// }
// alert(sum);
// // 3-MASALA JAVOBI
// for (let i = 1; i <= 100; i++) {
//   if (i >= 30 && i <= 50) {
//     console.log(i);
//   }
// }
// // 4-MASALA JAVOBI
// let count = 0;
// let neg = 0;
// for (let i = 1; i <= 15; i++) {
//   let num = +prompt(`${i}-sonni kiriting:`);
//   if (num > 0) {
//     count++;
//   } else if (num < 0) {
//     neg++;
//   }
// }
// alert("Musbatlar" + count + "\nManfiylar" + neg);
// // 5-MASALA JAVOBI

// // 6-MASALA JAVOBI
// let sum = 0;
// for (let i = 1; i < 50; i += 2) {
//   sum += i;
// }
// alert(sum);
// // 7-MASALA JAVOBI
// let res = "";

// for (let i = 1; i <= 5; i++) {
//   let age = +prompt(`${i}-odamning yoshini kiriting:`);
//   if (age >= 18) {
//     res += `${i}-odam voyaga yetgan\n`;
//   } else {
//     res += `${i}-odam voyaga yetmagan\n`;
//   }
// }
// alert(res);
// // 8-MASALA JAVOBI
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     sum++;
//   }
// }
// alert(sum);
// // 9-MASALA JAVOBI
// let count = 0;

// for (let i = 1; i <= 10; i++) {
//   let num = +prompt(`${i}-sonni kiriting:`);
//   if (num >= 5 && num <= 10) {
//     count++;
//   }
// }
// alert("5 va 10 orasidagi sonlar soni" + "  " + count);
// // 10-MASALA JAVOBI
// for (let i = 1; i <= 10; i++) {
//   let num = +prompt(`${i}-sonni kiriting`);
//   if (num >= 0) {
//     console.log(num);
//   }
// }
// // 11-MASALA JAVOBI
// let count = 0;
// for (let i = 1; i <= 15; i++) {
//   let num = +prompt(`${i}-sonni kiriting:`);
//   if (num % 2 == 0 || num < 0) {
//     count++;
//   }
// }
// alert(count);
// // 12-MASALA JAVOBI
// for (let i = 1; i <= 50; i++) {
//   if (i % 3 == 0) {
//     console.log(i);
//   }
// }
// // 14-MASALA JAVOBI
// for (let i = 1; i <= 10; i++) {
//   let num = +prompt(`${i}-sonni kiriting`);
//   if (num >= 50) {
//     console.log(num);
//   }
// }
// // 15-MASALA JAVOBI
// for (let i = 1; i <= 10; i++) {
//   let num = +prompt(`${i}-sonni kiriting`);
//   if (num == 0) {
//     alert("Kiritilgan sonlar ichida 0 mavjud");
//   } else {
//     alert("Kiritilgan sonlar ichida 0 mavjud emas");
//   }
// }
