let view = document.getElementById("window");

window.addEventListener('scroll', scroll);

scroll();
//let prevDistance = 0;

function scroll(evt) {
    
    let elHeight = document.getElementById("scroll").clientHeight-window.innerHeight;
    let scrollVal = window.pageYOffset;
    let horScroll = (view.childElementCount-1)*scrollVal/elHeight*100;

/*
    let currnentTile = Math.floor(horScroll/100)
    let distance=horScroll-currnentTile*100;

    console.log(currnentTile+" "+ distance+" "+prevDistance);
    
    if(distance>prevDistance && distance>80) window.scrollTo(0, scrollVal+0.2*(elHeight/(view.childElementCount-1)));
    if(distance<prevDistance && distance<20) window.scrollTo(0, scrollVal-0.2*(elHeight/(view.childElementCount-1)));
    

    prevDistance=distance;
    */
    // for(let i=0; i<view.childElementCount; i++) {
    //     distance = i*view.clientWidth-horScroll;
    //     if(Math.abs(distance)<150) {    
    //         if(Math.abs(distance)<Math.abs(prevDistance)) {
    //             //zblizanie
    //             horScroll+=distance;
    //             window.scrollTo(0, horScroll/(view.clientWidth*(view.childElementCount-1))*elHeight);
    //             prevDistance = distance;
    //         } else {
    //             //oddalanie
    //         }
    //         // console.log(distance);
    //     }
    // }

    view.style.transform = "translate(-"+horScroll+"%, 0)";
}