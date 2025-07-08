function subLength(str,char){
  let index=str.indexOf(char);
  let index2=str.indexOf(char,index+1);
  if(index2===-1||str.indexOf(char,index2+1)!==-1){
    return 0;
  }else{
    return index2-index+1;
  }
}
//console.log('saturday'.indexOf('a',2));
//subLength('saturday','a');
console.log(subLength('Saturday', 'a')); // returns 6
console.log(subLength('summer', 'm')); // returns 2
console.log(subLength('digitize', 'i')); // returns 0
console.log(subLength('cheesecake', 'k')); // returns 0


/*
Write a function subLength() that takes 2 parameters, a 
string and a single character. The function should search 
the string for the two occurrences of the character and 
return the length between them including the 2 characters. 
If there are less than 2 or more than 2 occurrences of the
 character the function should return 0.*/
