function uniq_c(sequence){
    let length = sequence.length;
    let elemCount = new Array();
    let sameCount = 0;
    let lastElem = sequence[0];
    let result = new Array();
    elemCount.push(sequence[0]);  
    for (let i = 0; i < length; i++) {
        if(sequence[i]!=lastElem){
            result.push(elemCount);
            elemCount = new Array();
            sameCount = 1;
            elemCount.push(sequence[i]);  
            elemCount.push(sameCount);
        }
        else{
            sameCount++;
            elemCount[1]=sameCount;
        }
        lastElem=sequence[i];
    }
    result.push(elemCount);
    return result;
}

console.log(uniq_c(['a','a','a','b','b','c','a','b','c']));


function flatten(list, result = []) {
    for (let i = 0, length = list.length; i < length; i++) {
      let value = list[i];
      if (Array.isArray(value)) {
        flatten(value, result);
      } 
      else {
        result.push(value);
      }
    }
    return result;
  };

console.log(flatten(['a', ['b', 2], 3, null, [[4], ['c']]]));


function fn(words, matchWord){
    for (let i = 0, length = words.length; i < length; i++) {
        for (let j = 0, length = words.length; j < length; j++) {
            if(words[i]+words[j]==matchWord){
                return new Array(words[i], words[j], new Array(i,j));
            }
        }
    }
    return null;
}

console.log(fn(['top','main','tree','ally','fin','line'], "treetop"));


function fn2(number){
    let result = "";
    let number2=number.toString();
    for (let i = 0, length = number2.length; i < length; i++){
        result=result+(number2[i]*number2[i]);
    }
    return parseInt(result);
}

console.log(fn2(9119));