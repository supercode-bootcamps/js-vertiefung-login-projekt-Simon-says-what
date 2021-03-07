"usestrict";

const saved = [
  { name: "supercode", secret: "no_one_will_know" },
  { name: "music_fan_1990", secret: "WeAreTheChampi0ns" },
  { name: "simon", secret: "simon" },
];
let mother_div = document.getElementById("mother");
let person = document.getElementById("username_log");





function getInfo() {
  let username_input = document.getElementById("username");
  let password_input = document.getElementById("password");
  let nope_p = document.getElementById("nope");
    
   
  
  let check = saved.find(user => user.name == username_input.value && user.secret == password_input.value)
  function setCookie( username, password, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = "go" + "=" + username + password + ";" + expires;

  }
   
    if (check) {
        mother_div.remove();
        person.innerHTML = `moin ${check.name}`;
        setCookie(username_input,password_input,1)
        
    
        
    } else {
        nope_p.innerHTML = "nich cool";
        event.preventDefault();
        nope_p.classList.add("wrong");
        username_input.classList.add("wrong");
    
    }
    ;
    
}


//   for (i = 0; i < saved.length; i++) {
//     if (
//       unsername_input.value === saved[i].name &&
//       password_input.value === saved[i].secret
//     ) {
//       mother_div.remove();
//       person.innerHTML = saved[i].name;
//       document.cookie = "login=ok; expires=";

//       event.preventDefault();
//     } else {
//       nope_p.innerHTML = "nich cool";
//       event.preventDefault();
//       nope_p.classList.add("wrong");
//       unsername_input.classList.add("wrong");
//     }
//   }

