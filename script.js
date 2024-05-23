let cursor = document.getElementById("cursor");
let main = document.getElementById("main");
let center = document.getElementById("center");

main.addEventListener("mousemove", (e)=>{
    gsap.to("#cursor", {
        x: e.clientX,
        y: e.clientY,
    })
})

center.addEventListener("mouseenter", ()=>{
    cursor.innerText = "Click";
    gsap.to("#cursor", {
        duration: 1,
        scale: 5,
        opacity: .5,
        ease: "power2.out",
    })
})

center.addEventListener("mouseleave", ()=>{
    cursor.innerText = "";
    gsap.to("#cursor", {
        duration: 1,
        scale: 1,
        opacity: 1,
        ease: "power2.out",
    })
})