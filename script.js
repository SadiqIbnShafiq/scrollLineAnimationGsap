function scrollAnimation(){
    var previousScroll = window.scrollY

window.addEventListener("scroll",function(dets){
    var currentScroll = window.scrollY

    if(currentScroll > previousScroll){
        gsap.to(".marque",{
            transform:'translateX(-100%)',
            duration: 4,
            repeat: -1,
            ease: "none"
        })
        gsap.to(".marque img",{
            rotate: 180
        })

    }else{
        gsap.to(".marque",{
            transform:'translateX(0%)',
            duration: 4,
            repeat: -1,
            ease: "none"
        })
        gsap.to(".marque img",{
            rotate: 360
        })
    }
    
    previousScroll = currentScroll;         
})


}

scrollAnimation();