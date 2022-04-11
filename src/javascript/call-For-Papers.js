const navBar = document.querySelector(".nav-bar");
var acc = document.querySelector(".list-heading");

window.addEventListener("scroll", ()=>{
    const scrolled = window.scrollY;
    if(scrolled===0){
        navBar.classList.remove("moved");
    }
    else{
        navBar.classList.add("moved");
    }
});

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