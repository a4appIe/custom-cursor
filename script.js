let cursor = document.getElementById("cursor");
let main = document.getElementById("main");
let center = document.getElementById("center");
let tl = gsap.timeline();
let tl2 = gsap.timeline();
main.addEventListener("mousemove", (e)=>{
    gsap.to("#cursor", {
        x: e.clientX,
        y: e.clientY,
    })
})

center.addEventListener("mouseenter", ()=>{
    cursor.innerText = "Click";
    tl.to(cursor, {
        duration: 1,
        scale: 5,
        opacity: .5,
        ease: "power2.out",
    })
    tl.to(main, {
        delay: -1,
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        ease: "back.out",
    })
})

center.addEventListener("mouseleave", ()=>{
    cursor.innerText = "";
    tl2.to(cursor, {
        duration: 1,
        scale: 1,
        opacity: 1,
        ease: "power2.out",
    })
    tl2.to(main, {
        delay: -1,
        backgroundColor: "rgba(0, 0, 0, 1)",
        ease: "back.out",
    })
})