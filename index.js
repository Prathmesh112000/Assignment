
///////////////////////////ANSWER OF QUESTION 1 ????????????????????????????

function findFirstUnique(arr) {
  //  var final;
  var copy_of_array = [...arr]
  var ans = []
  copy_of_array.sort()

  for (i = 0; i < copy_of_array.length; i++) {

    if (copy_of_array[i] != copy_of_array[i + 1] && copy_of_array[i] != copy_of_array[i - 1]) {
      ans.push(copy_of_array[i])
    }
    else{
      console.log(null)
    }
  }

  if (ans.length === 1) {

    final = ans[0];
    console.log(final)
  } else {
    var check = []
    for (j = 0; j < ans.length; j++) {

      check.push(arr.indexOf(ans[j]))
      check.sort()

    }
    var hold = check.shift()
    console.log(arr[hold])
  }
}

findFirstUnique([ 7, 4, 4, 22, 22, 12, 12])

// //////////////////////////ANSWER 2//////////////////////////////
 function rightRotate(arra,n){


   var cut=arra.slice(n-1)
   var trial=[];
   for (i=0;i<n-1;i++){
     trial.push(arra[i])
   }
  console.log([...cut,...trial])
 }
rightRotate([1,2,3,4,5],3)
