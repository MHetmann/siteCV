var p =0;
var down=90;

function li_setup() {
    move_section(0);
    for (i = 0; i < 4; i++) {
        b = Math.floor(Math.random() * 1000);
        test(i, b);
    }
}

window.onload = li_setup;

function test(i, b) {
    setTimeout(() => {
        document.getElementsByTagName('li')[i].style.top = '0px';
    }, b);
}

function move_section(a) {
    p=a;
    for (i = 0; i < 4; i++) {
        document.getElementsByTagName('section')[i].style = "left:"+(-(100*a))+'vw;top:90px;';
    }
}

window.addEventListener("wheel", event => {
    const delta = Math.sign(event.wheelDelta);
    if(delta==1){
        // descendre
        down +=100;
        document.getElementsByTagName('section')[p].style.top = down+'px';
    }
    else{
        // monter
        down -=100;
        document.getElementsByTagName('section')[p].style.top = down+'px';
    }
});