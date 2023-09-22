
// Function to calculate square area
function luasPersegi(sisi) {
    return sisi * sisi;
  }
  
  // Function to calculate the perimeter of a square
  function kelilingPersegi(sisi) {
    return 4 * sisi;
  }
  
  // Function to calculate the area of a rectangle
  function luasPersegiPanjang(panjang, lebar) {
    return panjang * lebar;
  }
  
  // Function to calculate the perimeter of a rectangle
  function kelilingPersegiPanjang(panjang, lebar) {
    return 2 * (panjang + lebar);
  }
  
  // Export functions for use in other modules
  module.exports = {
    luasPersegi,
    kelilingPersegi,
    luasPersegiPanjang,
    kelilingPersegiPanjang,
  };
  

