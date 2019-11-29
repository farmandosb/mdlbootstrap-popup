(()=>{
    let div1= document.querySelector("#carousel-container")
    let div2= document.querySelector("#mask-background")
    

    let btn1= document.querySelector("#container-button")
    btn1.addEventListener("click", ()=>{

        div1.classList.remove("hide")
        div1.classList.add("show")

        div2.classList.remove("hide")
        div2.classList.add("show")

        btn2.classList.remove("hide")
        btn2.classList.add("show")
    })

    let btn2= document.querySelector("#close-carousel")
    btn2.addEventListener("click", ()=>{
        div1.classList.add("hide")
        div1.classList.remove("show")

        div2.classList.add("hide")
        div2.classList.remove("show")

        btn2.classList.add("hide")
        btn2.classList.remove("show")
    })
    
})()