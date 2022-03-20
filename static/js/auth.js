/* var user = document.querySelector('input').value //получаем введённый логин
var password = document.getElementsByClassName('input_pass').value //получаем введённый пароль
var header = "Basic " + encodeURIComponent(user + ":" + password); 
document.cookie = "Authorization=" + header;


/* function setCookie(cname,cvalue,cPassword,cPasswordValue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + cPassword + "=" + cPasswordValue + ";" + expires + ";";
  }
  
  function getCookie(cname,cPassword) {
    let name = cname + "=";
    let password = cPassword + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c(3));
      }
      if (c.indexOf(password)==1){
        return c.substring(password.length, c(6));
      }
    }
    return "";
  }
  
  function checkCookie() {
    let user = getCookie("username","password");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
       user = getElementsByClassName('input_user').value
       if (user != "" && user != null) {
         setCookie("username", user(0),"password", user(1), 30);
       }
    }
  } */

function setCookie(){
  const d = new Date();
  if (document.getElementById("customControlInline").checked == true) {
    d.setTime(d.getTime() + 30*24*60*60*1000)
  }
  else {d.setTime(d.getTime() + 1*24*60*60*1000)}
  let expires = d.toUTCString();
  document.cookie = "username=" + document.getElementById("username").value + ";" + "expires=" + expires;
  document.cookie = "password=" + document.getElementById("password").value + ";" + "expires=" + expires;

}
