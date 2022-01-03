/**
* Fonction realisant la recherche dichotomique d'un tableau contenant 
* des nombres triees en amont par ordre croissant
*/

const rechercheDichotomique = (arr,num) => { 
  let message;
  
  if(arr.length>0){
    let start = 0;
    let end = arr.length -1;
    let mid;
  
    while (start <= end ) {
      mid = Math.floor((start+end)/2);

      if(num===arr[mid]){
        message = "Le numero : "+num+" est present dans le tableau";
      } else if (num>arr[mid]){
        start = mid+1;
      } else if (num<arr[mid]){
        end = mid-1;
      } else {
        message =  "Le numero : "+num+" n'est pas present dans le tableau";
      }
    } 
  } else {
      message = "Le tableau est vide";
    }
  return message;

}


let t1 = [5];
let t2 = [0,2,3,5,6,8,11,15,16,17];
let t3 = [];
let t4 = [-1,0,4,23];
console.log(rechercheDichotomique(t1,5));
console.log(rechercheDichotomique(t2,15));
console.log(rechercheDichotomique(t2,3));
console.log(rechercheDichotomique(t3,3));
console.log(rechercheDichotomique(t4,3));
console.log(rechercheDichotomique(t4,-1));
console.log(rechercheDichotomique(t4,23));
