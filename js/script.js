if (window.matchMedia("(min-width: 731px)").matches) { // superieur a 730 px
    var p = 0;
    var down = 90;
    var lock_scroll = 0;

    function li_setup() {   // timeout aleatoire
        move_section(0);
        for (i = 0; i < 4; i++) {
            b = Math.floor(Math.random() * 1000);
            test(i, b);
        }
        for (ii = 0; ii < document.getElementsByTagName('a').length; ii++) {
            if (document.querySelector("a")[ii] == "") {
                document.querySelectorAll(".site_img")[ii].style.display = "none";
            }

        }

    }

    window.onload = li_setup;

    function test(i, b) {  //mise en position de la liste
        setTimeout(() => {
            document.getElementsByTagName('li')[i].style.top = '0px';
        }, b);
    }

    

    window.addEventListener("wheel", event => {
        const delta = Math.sign(event.wheelDelta);
        if (lock_scroll == 0) {
            if (delta == 1) {
                // monter
                down += 80;
                if (down > 90) {
                    down = 90
                }
                document.getElementsByTagName('section')[p].style.top = down + 'px';
            }
            else {
                // descendre
                down -= 80;
                document.getElementsByTagName('section')[p].style.top = down + 'px';
            }
        }
    });

    document.addEventListener("mousemove", function (event) {
        if(window.innerWidth>730){
            const x = event.pageX;
            const y = event.pageY;

            document.querySelectorAll("#portfolio_site > a").forEach(div => {
                const dx = (div.offsetLeft + div.offsetWidth/2) - x;
                const dy = (div.offsetTop + div.offsetHeight) - y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                const score = Math.exp(dist * -0.0005);
                div.style.transform = "scale(" + score + ")";
            })}

            else{
                document.querySelectorAll("#portfolio_site > a").forEach(div => {
                    div.style.transform = "scale(1)";
            })}


        
    })






} else {   //  ECRAN INFERIEUR A 730 PX
    
    var links = document.getElementById("navbar").getElementsByTagName('a');
    links[0].setAttribute('href', "#Accueil");
    links[1].setAttribute('href', "#Portfolio");
    links[2].setAttribute('href', "#Contact");
    links[3].setAttribute('href', "#apropos");


}



function resize(){
    if(window.innerWidth>730){
        var links = document.getElementById("navbar").getElementsByTagName('a');
        for (let ind = 0; ind < links.length; ind++) {
            links[ind].setAttribute('href', "#");
        }
        
        document.getElementById("navbar").style.display="block";
        for(index=0;index<4;index++){
            document.getElementsByTagName('li')[index].style.top = '0px';
        }
    }else{
        links = document.getElementById("navbar").getElementsByTagName('a');
        links[0].setAttribute('href', "#Accueil");
        links[1].setAttribute('href', "#Portfolio");
        links[2].setAttribute('href', "#Contact");
        links[3].setAttribute('href', "#apropos");
        setTimeout(() => {
            for (let ind = 0; ind < document.getElementsByTagName("section").length; ind++) {
                document.getElementsByTagName("section")[ind].style.left ="0";
            }
        }, 1);
        for (let ind = 0; ind < document.getElementsByTagName("section").length; ind++) {
            document.getElementsByTagName("section")[ind].style.top ="0";
        }
        

        if(document.getElementById("hamburger_menu").classList.contains('active')){

        }else{
            document.getElementById("navbar").style.display="none";
        }
    }
}

function move_section(a) {
    p = a;
    if(window.innerWidth>730){
    for (i = 0; i < 4; i++) {
        
        document.getElementsByTagName('section')[i].style = "left:" + (-(100 * a)) + 'vw;top:90px;';
        lock_scroll = 1;
    }}


    document.getElementsByTagName('a')[0].style.borderWidth = "0px";
    document.getElementsByTagName('a')[1].style.borderWidth = "0px";
    document.getElementsByTagName('a')[2].style.borderWidth = "0px";
    document.getElementsByTagName('a')[3].style.borderWidth = "0px";
    document.getElementsByTagName('a')[p].style.borderWidth = "3px";


    setTimeout(() => {
        lock_scroll = 0;
    }, 2000);
}

window.onresize = resize;

$(document).ready(function () {
    
    $('#hamburger_menu').click(function () {
        if(window.innerWidth<730){
        $('#hamburger_menu').toggleClass('active');
        $('#navbar').fadeToggle( "fast", "linear");}
    });
})

$(document).ready(function () {
    
    $('#navbar a').click(function () {
        if(window.innerWidth<730){
        $('#hamburger_menu').toggleClass('active');
        $('#navbar').fadeToggle( "fast", "linear");}
    });



})

