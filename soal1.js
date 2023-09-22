// Example of using the filelog.js nodemodule

// Import modul filelog.js
const filelog = require('./filelog');

// Calculating the area and perimeter of a square with 5 sides
const sisiPersegi = 5;
const luasPersegi = filelog.luasPersegi(sisiPersegi);
const kelilingPersegi = filelog.kelilingPersegi(sisiPersegi);

console.log(`Luas Persegi: ${luasPersegi}`);
console.log(`Keliling Persegi: ${kelilingPersegi}`);

// Calculating the area and perimeter of a rectangle
const panjang = 6;
const lebar = 4;
const luasPersegiPanjang = filelog.luasPersegiPanjang(panjang, lebar);
const kelilingPersegiPanjang = filelog.kelilingPersegiPanjang(panjang, lebar);

console.log(`Luas Persegi Panjang: ${luasPersegiPanjang}`);
console.log(`Keliling Persegi Panjang: ${kelilingPersegiPanjang}`);
