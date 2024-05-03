let token = localStorage.getItem("token");

console.log(token);

token 
? window.open("../views/catalogo.html", "_self") 
: window.open("../views/login_form.html", "_self");