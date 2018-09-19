 // Burger navigation
 function onLoad() {

     // if (window.innerWidth <= 768) {

     function toggleMenu() {
         document.querySelector(".burger").classList.toggle("change");
         document.querySelector("nav").classList.toggle("show");
     }
     document.querySelector(".burger").addEventListener("click", toggleMenu);
     document.querySelector("ul").addEventListener("click", toggleMenu);

 }
 //}

 document.addEventListener("DOMContentLoaded", function (event) {
     onLoad();
 });



 // Menu template
 let retter
 let dest = document.querySelector(".data-container");
 document.addEventListener("DOMContentLoaded", hentJson);
 let madFilter = "alle";

 document.querySelectorAll(".menu-item").forEach(knap => {
     knap.addEventListener("click", filtrering)
 });

 function filtrering() {
     dest.textContent = "";
     madFilter = this.getAttribute("data-kategori");
     visRetter();
 }




 // finktionen indlæser data fra jsonfil og lægger retobjekterne i retter-array
 // kalder visRetter
 async function hentJson() {
     // sæt variablen myJson til at være data fra json-filen
     let myJson = await fetch("menu.json");
     // læg alle ret-objekter ind i retter-array
     retter = await myJson.json();
     // kald funktionen visRetter
     visRetter();
 }


 function visRetter() {
     // vælg templaten i containeren med classen .data-template
     let temp = document.querySelector(".data-template");


     //løb personlisten igennem og lav en klon
     retter.forEach(retter => {
         //Filtrer
         if (retter.kategori == madFilter || madFilter == "alle") {

             //Lav en klon af template
             let klon = temp.cloneNode(true).content;

             //indsæt data i html
             klon.querySelector("img").src = "img/small/" + retter.billede + "-sm.jpg";
             klon.querySelector("h2").textContent = retter.navn;
             klon.querySelector(".kortbeskrivelse").textContent = retter.kortbeskrivelse;
             klon.querySelector(".price").textContent = retter.pris + " DKK";

             //placer klon i html
             dest.appendChild(klon);
         }
     })
 }
