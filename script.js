let cursor = document.getElementById("#cursor");
let main = document.getElementById("#main");
let center = document.getElementById("#center");

document.addEventListener("mousemove", (e)=>{
    gsap.to("#cursor", {
        x: e.clientX,
        y: e.clientY,
    })
})