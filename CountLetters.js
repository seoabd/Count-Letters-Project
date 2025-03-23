function countLetters(input) {
    let charCount = 0;
  for(let char of input){
    if(char.toLowerCase() != char.toUpperCase ()){
      charCount ++;
    }
  }
  return charCount;
  }
