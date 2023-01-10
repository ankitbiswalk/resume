document.addEventListener("mousemove", parallax);
function parallax(e){
    document.querySelectorAll(".circle").forEach(function(move){
        var movingvalue = move.getAttribute("data-value");
        var x =(e.clientX * movingvalue)/100;
        var y =(e.clientY * movingvalue)/100;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}
const resume = document.querySelector('.resumebtn');
resume.addEventListener('click',()=>{
    alert("RESUME not attached yet!!!");
})
gsap.registerPlugin(ScrollTrigger);
    gsap.to(".symbols", {
        scrollTrigger: {
            trigger:".home1",
        },
        opacity : 1,
        duration:5,
    });
    gsap.to(".name", {
        scrollTrigger: {
            trigger:".home1",
        },
        opacity : 1,
        duration:1,
    });
    gsap.to(".numberline1", {
        scrollTrigger: {
            trigger:".numberline1",
            toggleActions:"restart",
        },
        x : 0,
        duration:1,
    }); 
    gsap.to(".boatbox", {
        scrollTrigger: {
            trigger:".boatbox",
            start:"top 500",
            end:"bottom 100",
            scrub:1,
        },
        x : -350,
        duration:2,
    });
    gsap.to(".cloudcome", {
        scrollTrigger: {
            trigger:".about1",
            toggleActions:"restart",
        },
        x : 0,
        duration:1,
    });
    gsap.to(".abtp", {
        scrollTrigger: {
            trigger:".aboutme",
        },
        x : 0,
        duration:1,
    });

    gsap.to(".rocket", {
        scrollTrigger: {
            trigger:".about1",
            start:"top 150",
            end:"bottom 100",
            scrub:1,
        },
        x : 350,
        y : -350,
        duration:2,
    });

    gsap.to(".numberline2", {
        scrollTrigger: {
            trigger:".about1",
            toggleActions:"restart",
        },
        x : 0,
        duration:1,
    });

    gsap.to(".numberline3", {
        scrollTrigger: {
            trigger:".numberline3",
            toggleActions:"restart",
        },
        x : 0,
        duration:1,
    });
    gsap.to(".cloudbox", {
        scrollTrigger: {
            trigger:".projecthead",
        },
        y : 0,
        opacity:1,
        duration:1,
    });
    gsap.to(".projectno11", {
        scrollTrigger: {
            trigger:".projectno11",
        },
        y : 0,
        duration:0.5,
    });
    gsap.to(".projectno22", {
        scrollTrigger: {
            trigger:".projectno22",
        },
        y : 0,
        duration:0.5,
    });
    gsap.to(".projectno33", {
        scrollTrigger: {
            trigger:".projectno33",
        },
        y : 0,
        duration:0.5,
    });
    gsap.to(".contact1", {
        scrollTrigger: {
            trigger:".contact1",
            toggleActions:"play complete reverse reset",
        },
        opacity : 1,
        duration:2,
    });

    gsap.to(".circleactive1", {
        scrollTrigger: {
            trigger:".home1",
            start:"bottom 300",
            end:"bottom 100",
            scrub:true,
        },
        x : 10,
    });   
    gsap.to(".circleactive2", {
        scrollTrigger: {
            trigger:".pagenumber",
            start:"top",
            end:"top 10",
            scrub:true,
        },
        x : 0,
    }); 
    gsap.to(".circleactive2", {
        scrollTrigger: {
            trigger:".about1",
            start:"bottom 200",
            end:"bottom 150",
            scrub:true,
        },
        x : 10,
    }); 
    gsap.to(".circleactive3", {
        scrollTrigger: {
            trigger:".about1",
            start:"bottom",
            end:"bottom",
            scrub:true,
        },
        x : 0,
    }); 
    gsap.to(".circleactive3", {
        scrollTrigger: {
            trigger:".project1",
            start:"bottom 200",
            end:"bottom 150",
            scrub:true,
        },
        x : 10,
    }); 
    gsap.to(".circleactive4", {
        scrollTrigger: {
            trigger:".project1",
            start:"bottom 100",
            end:"bottom",
            scrub:true,
        },
        x : 0,
    }); 
      
  