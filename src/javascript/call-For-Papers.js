// const navBar = document.querySelector(".nav-bar");
// var acc = document.querySelector(".list-heading");

// window.addEventListener("scroll", ()=>{
//     const scrolled = window.scrollY;
//     if(scrolled===0){
//         navBar.classList.remove("moved");
//     }
//     else{
//         navBar.classList.add("moved");
//     }
// });

// const navigation = document.getElementById("links");
// const menu = document.getElementById("menu");

// menu.addEventListener("click", () => {
//   navigation.style.setProperty("--childenNumber", navigation.children.length);

//   navigation.classList.toggle("active");
//   menu.classList.toggle("active");
// });

// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//       console.log("Hello");
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     } 
//   });
// }