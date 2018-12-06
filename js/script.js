var p =0;
var down=90;
var lock_scroll=0;
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
        lock_scroll=1;
    }
    setTimeout(() => {
        lock_scroll=0;
    }, 2000);
}

window.addEventListener("wheel", event => {
    const delta = Math.sign(event.wheelDelta);
    if(lock_scroll==0){
    if(delta==1){
        // monter
        down +=80;
        if(down>90){
            down=90
        }
        document.getElementsByTagName('section')[p].style.top = down+'px';
    }
    else{
        // descendre
        down -=80;
        document.getElementsByTagName('section')[p].style.top = down+'px';
    }
}
});