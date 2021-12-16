/* eslint-disable prettier/prettier */
const arr1 = ["a", "b", "g"];
const arr2 = ["b", "b", "x"];

function result(arr1, arr2) {
  //const result = arr1.filter(i => arr2.includes(i));
  const result = arr1+','+arr2;
  //const re = result.filter(i => i=="b")

  // for (int i=0; i<=result.length; i++)
  // {
  //   if(result[i])
  // }

  return result
}

console.log(result(arr1, arr2));
