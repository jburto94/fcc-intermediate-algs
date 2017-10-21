function convertToRoman(num) {
 let roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
 let integers = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
 let newRoman = '';
 for (let i = roman.length - 1; i >= 0; i--) {
   while(num >= integers[i]) {
     newRoman += roman[i];
     num -= integers[i];
   }
 }
 return newRoman;
}