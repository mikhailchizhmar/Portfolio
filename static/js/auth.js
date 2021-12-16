var user = document.querySelector('input').value //получаем введённый логин
var password = document.getElementsByClassName('input_pass').value //получаем введённый пароль
var header = "Basic " + encodeURIComponent(user + ":" + password); 
document.cookie = "Authorization=" + header;


function getAuthCookie() {
    var cn = "Authorization=";
    var idx = document.cookie.indexOf(cn)
 
    if (idx != -1) {
        var end = document.cookie.indexOf(";", idx + 1);
        if (end == -1) end = document.cookie.length;
        return decodeURIComponent(document.cookie.substring(idx + cn.length, end));
    } else {
        return "";
   }
 }

 $.ajax({
    type: "POST",
    url: "http://127.0.0.1/api/auth",
    contentType: "application/json; charset=utf-8",
    beforeSend: function(xhr) {
        xhr.setRequestHeader("Authorization", getAuthCookie());
    },
    dataType: "json",
    success: alert("success"),
    error: alert("error")
});