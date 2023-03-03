module.exports = function (str1, str2) {
    // write your code here
  
  
  str1 = str1.replace(/[^0-9a-z]/gi, '').toLowerCase().split('').sort().join('');
  str2 =  str2.replace(/[^0-9a-z]/gi, '').toLowerCase().split('').sort().join('');
    
  return str1 === str2
  
    
  }