function iniciarApp(){navegacionFija(),menuHam()}function navegacionFija(){const e=document.querySelector(".header"),n=document.querySelector("body");window.addEventListener("scroll",(function(){n.getBoundingClientRect().top<0?(e.classList.add("fijar-barra"),n.classList.add("body-scroll")):(e.classList.remove("fijar-barra"),n.classList.remove("body-scroll"))}))}function menuHam(){const e=document.querySelector(".ham"),n=document.querySelector(".menu"),t=document.querySelectorAll(".cierre");e.addEventListener("click",(function(){n.classList.toggle("visible"),console.log("hamburger button clicked")})),t.forEach(e=>{e.addEventListener("click",(function(){n.classList.remove("visible")}))})}document.addEventListener("DOMContentLoaded",(function(){iniciarApp()}));const form={nombre:"",email:"",mensaje:""},nombre=document.querySelector("#nombre"),email=document.querySelector("#email"),mensaje=document.querySelector("#mensaje"),formulario=document.querySelector(".formulario"),btn=document.getElementById("button");function leerEntrada(e){form[e.target.id]=e.target.value}nombre.addEventListener("input",leerEntrada),email.addEventListener("input",leerEntrada),mensaje.addEventListener("input",leerEntrada),formulario.addEventListener("submit",(function(e){e.preventDefault();const{nombre:n,email:t,mensaje:r}=form;if(""===n||""===t||""===r)return void alert("Todos los campos son necesarios");btn.value="Enviando...";emailjs.sendForm("default_service","template_ruzbuik",this).then(()=>{btn.value="Enviar",alert("Correo Enviado Con Exito!!!")},e=>{btn.value="Enviar",alert(JSON.stringify(e))})}));
//# sourceMappingURL=contacto.js.map
