function basicTeenager(age) {
<<<<<<< HEAD
  if (age >12 && age < 20){
    return "You are a teenager!";
=======
  if (age>=13 && age<=19){
    return "You are a teenager!"
<<<<<<< HEAD
>>>>>>> 2e4a64eb51bae6c2e7a5c3ab734335565d247484
  } 
=======
  } else {
    return "You are not a teenager"
  }
>>>>>>> a7035312d088766b1b6f84464b1159a2312ce60b
}

function teenager(age) {
  if (age >12 && age < 20){
    return "You are a teenager!";
  } else {
    return "You are not a teenager";
  }
}

function ageChecker(age) {
   if (age > 12 && age < 20) {
    return "You are a teenager!";
  } else if (age <= 12) {
    return "You are a kid";
  } else if (age > 19) {
    return "You are a grownup";
  }
}

function ternaryTeenager(age) {
 return age > 12 && age < 20 ? "You are a teenager":
 "You are not a teenager";
}

function switchAge(age) {
  switch(age) { 
   case 13: 
     return "You are a teenager"; 
     break;
   case 14:
     return "You are a teenager"; 
     break;
   case 15:
     return "You are a teenager"; 
     break;
   case 16:
     return "You are a teenager"; 
     break;
   case 17:
     return "You are a teenager"; 
     break;
   case 18:
     return "You are a teenager"; 
     break;
   case 19:
     return "You are a teenager"; 
     break;
     default:
      return "You have an age"
    }
}
