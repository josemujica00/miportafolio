function iniciarApp(){navegacionFija(),crearGaleria(),scrollNav(),menuHam()}function navegacionFija(){const e=document.querySelector(".header"),t=document.querySelector("body");window.addEventListener("scroll",(function(){t.getBoundingClientRect().top<0?(e.classList.add("fijar-barra"),t.classList.add("body-scroll")):(e.classList.remove("fijar-barra"),t.classList.remove("body-scroll"))}))}function scrollNav(){document.querySelectorAll(".navegacion-principal a").forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault();const t=e.target.attributes.href.value;document.querySelector(t).scrollIntoView({behavior:"smooth"})}))})}function crearGaleria(){const e=document.querySelector(".proyectos-imagenes");for(let t=1;t<=4;t++){const n=document.createElement("picture");n.innerHTML=`\n                <source srcset="build/img/thumb/${t}.avif" type="image/avif">\n                <source srcset="build/img/thumb/${t}.webp" type="image/webp">\n                <img loading="lazy" width="200" height="300" src="build/img/thumb/${t}.jpg" alt="imagen proyecto">\n            `,n.onclick=function(){mostrarImagen(t)},e.appendChild(n)}}function mostrarImagen(e){const t=document.createElement("picture");t.innerHTML=`\n            <source srcset="build/img/grande/${e}.avif" type="image/avif">\n            <source srcset="build/img/grande/${e}.webp" type="image/webp">\n            <img loading="lazy" width="200" height="300" src="build/img/grande/${e}.jpg" alt="imagen proyecto">\n        `;const n=document.createElement("DIV");n.appendChild(t),n.classList.add("overlay"),n.onclick=function(){document.querySelector("body").classList.remove("fijar"),n.remove()};const c=document.createElement("P");c.textContent="X",c.classList.add("boton-cerrar"),c.onclick=function(){document.querySelector("body").classList.remove("fijar"),n.remove()},n.appendChild(c);const o=document.querySelector("body");o.appendChild(n),o.classList.add("fijar")}function menuHam(){const e=document.querySelector(".ham"),t=document.querySelector(".menu"),n=document.querySelectorAll(".cierre");e.addEventListener("click",(function(){t.classList.toggle("visible"),console.log("hamburger button clicked")})),n.forEach(e=>{e.addEventListener("click",(function(){t.classList.remove("visible")}))})}document.addEventListener("DOMContentLoaded",(function(){iniciarApp()}));
//# sourceMappingURL=app.js.map
