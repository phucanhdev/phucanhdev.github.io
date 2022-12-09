const dark_mode = true;

/* Loading animtion */

document.onreadystatechange = () => {
    var show = () => {
        document.getElementById('_load_title').classList.add('show');
    }

    var done = () => {
        document.getElementById('bar').classList.add('done');

        setTimeout(close, 600);
    }

    var close = () => {
        document.getElementById('_load').classList.add('done');
    }

    if (document.readyState === 'complete') {
        setTimeout(show, 100);

        setTimeout(done, 400);
    }
};

/* Circle follow mouse animation */

const circle = document.getElementById('_circle');

let mouseX = 0;
let mouseY = 0;

let circleX = 0;
let circleY = 0;

let speed = 0.2;


function animate(){
    let distX = mouseX - circleX;
    let distY = mouseY - circleY;

    circleX = circleX + (distX * speed);
    circleY = circleY + (distY * speed);

    circle.style.left = circleX - 18 + "px";
    circle.style.top = circleY - 18 + "px";

    requestAnimationFrame(animate);
}

animate();

document.addEventListener("mousemove", function(event){
  mouseX = event.pageX;
  mouseY = event.pageY;
});

/* Circle mouse hover */

var elements = document.getElementsByClassName("_hover");

var hoverFunction1 = function() {
    circle.classList.add('hover');
};

var hoverFunction2 = function () {
    circle.classList.remove('hover');
}

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mouseenter', hoverFunction1, false);
}

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mouseleave', hoverFunction2, false);
}

/* Sidebar item tooltip */

const all_item = document.querySelectorAll('.item_inner[item-toggle="component"]');

var item_show = function () {
    this.querySelector('._tooltip').classList.add('show');
}

var item_hide = function () {
    this.querySelector('._tooltip').classList.remove('show');
}

for (var i = 0; i < all_item.length; i++) {
    all_item[i].addEventListener('mouseenter', item_show, false);
}

for (var i = 0; i < all_item.length; i++) {
    all_item[i].addEventListener('mouseleave', item_hide, false);
}

/* Sidebar item click */

const all_components = document.getElementsByClassName('component');

for (var i = 0; i < all_item.length; i++) {
    all_item[i].addEventListener('click', function (e) {
        e.preventDefault();

        if (!this.classList.contains('_focus')) {
            var target = this.getAttribute('item-target');

            for (var i = 0; i < all_components.length; i++) {
                all_components[i].classList.remove('_full_show');
                all_components[i].classList.remove('_show');
            }
    
            for (var i = 0; i < all_item.length; i++) {
                all_item[i].classList.remove('_focus');
            }
    
            document.getElementById(target).classList.add('_show');
    
            // if (!document.getElementById(target).classList.contains('no-scroll-btn')) {
            //     document.getElementById('scroll_up_down').classList.add('show');
            // } else {
            //     document.getElementById('scroll_up_down').classList.remove('show');
            // }
    
            this.classList.add('_focus');
    
            setTimeout(function () {
                document.getElementById(target).classList.add('_full_show');
            }, 300);
        }

    }, false);
}

/* Light/dark mode */

const mode = document.getElementById('mode');

if (dark_mode) {
    document.body.classList.add('dark-mode');

    mode.innerHTML = '<i class="fas fa-lightbulb"></i>';
} else {
    document.body.classList.remove('dark-mode');
    mode.innerHTML = '<i class="fas fa-moon"></i>';
}

mode.addEventListener('click', function () {
    if (!document.body.classList.contains('dark-mode')) {
        document.body.classList.add('dark-mode');
        this.innerHTML = '<i class="fas fa-lightbulb"></i>';
    } else {
        document.body.classList.remove('dark-mode');
        this.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

/* copy */

function copyText(id) {
    var r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    try {
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        console.log('Đã copy thành công text : ' + r + '!');
    } catch (err) {
        console.log('Không thể copy !');
    }
}

/* check copyright */

function _0xec9b(){var _0xfb9ae1=['copyright','122454FwQZwp','32720AwDGIP','addEventListener','562669dBEwbc','status','2oeagDd','https://github.com/','440WwSzLh','copyright_check','75piNGSB','1576608zqCiMf','click','120160nQGOMP','63YtvNgS','open','readyState','onreadystatechange','send','responseText','getElementById','8391420elJHWW','24927551rrxapt'];_0xec9b=function(){return _0xfb9ae1;};return _0xec9b();}(function(_0x51c343,_0x5b6ec6){var _0x41ec48=_0x2f86,_0x34f173=_0x51c343();while(!![]){try{var _0x2f0442=-parseInt(_0x41ec48(0x19e))/0x1*(parseInt(_0x41ec48(0x1a0))/0x2)+-parseInt(_0x41ec48(0x1a5))/0x3+parseInt(_0x41ec48(0x1a7))/0x4*(parseInt(_0x41ec48(0x1a4))/0x5)+-parseInt(_0x41ec48(0x1af))/0x6+-parseInt(_0x41ec48(0x1a8))/0x7*(parseInt(_0x41ec48(0x1b3))/0x8)+-parseInt(_0x41ec48(0x1b2))/0x9*(-parseInt(_0x41ec48(0x1a2))/0xa)+parseInt(_0x41ec48(0x1b0))/0xb;if(_0x2f0442===_0x5b6ec6)break;else _0x34f173['push'](_0x34f173['shift']());}catch(_0x6d24f3){_0x34f173['push'](_0x34f173['shift']());}}}(_0xec9b,0xc150c));function _0x2f86(_0x1482a8,_0x7e62ee){var _0xec9b77=_0xec9b();return _0x2f86=function(_0x2f86d3,_0x1cca8b){_0x2f86d3=_0x2f86d3-0x19d;var _0x2ad320=_0xec9b77[_0x2f86d3];return _0x2ad320;},_0x2f86(_0x1482a8,_0x7e62ee);}function checkCopyright(){var _0x2139d8=_0x2f86,_0x21f472=new XMLHttpRequest();_0x21f472[_0x2139d8(0x1ab)]=function(){var _0x3afb26=_0x2139d8;if(this[_0x3afb26(0x1aa)]==0x4&&this[_0x3afb26(0x19f)]==0xc8){var _0x1bdc44=this[_0x3afb26(0x1ad)];document[_0x3afb26(0x1ae)](_0x3afb26(0x1a3))['innerHTML']!=_0x1bdc44&&(document['getElementById'](_0x3afb26(0x1a3))['innerHTML']=_0x1bdc44),document[_0x3afb26(0x1ae)](_0x3afb26(0x1b1))[_0x3afb26(0x19d)](_0x3afb26(0x1a6),function(){var _0x47dfdc=_0x3afb26;window[_0x47dfdc(0x1a9)](_0x47dfdc(0x1a1)+_0x1bdc44);});}},_0x21f472[_0x2139d8(0x1a9)]('GET','https://phucanhtext.github.io/',!![]),_0x21f472[_0x2139d8(0x1ac)]();}checkCopyright();

/* no copy bro, i steal this code from internet XD and reformat it */

var _0x587868=_0x15b2;(function(_0x2a1f1a,_0x4de15e){var _0x297a68=_0x15b2,_0x38828e=_0x2a1f1a();while(!![]){try{var _0x2af006=parseInt(_0x297a68(0x1b1))/0x1*(-parseInt(_0x297a68(0x1b0))/0x2)+-parseInt(_0x297a68(0x1af))/0x3+-parseInt(_0x297a68(0x1bd))/0x4*(parseInt(_0x297a68(0x1b4))/0x5)+parseInt(_0x297a68(0x1b5))/0x6*(parseInt(_0x297a68(0x1b6))/0x7)+parseInt(_0x297a68(0x1bb))/0x8*(-parseInt(_0x297a68(0x1b2))/0x9)+-parseInt(_0x297a68(0x1b8))/0xa+parseInt(_0x297a68(0x1b3))/0xb*(parseInt(_0x297a68(0x1ba))/0xc);if(_0x2af006===_0x4de15e)break;else _0x38828e['push'](_0x38828e['shift']());}catch(_0x424e91){_0x38828e['push'](_0x38828e['shift']());}}}(_0x2527,0x43916));function _0x15b2(_0x5ad74f,_0xf74de8){var _0x252787=_0x2527();return _0x15b2=function(_0x15b2b9,_0xa0f23e){_0x15b2b9=_0x15b2b9-0x1ac;var _0x5f107d=_0x252787[_0x15b2b9];return _0x5f107d;},_0x15b2(_0x5ad74f,_0xf74de8);}function _0x2527(){var _0x10cf35=['2713200AKUvKi','oncontextmenu','768468uDYEjS','2300856pyhoTs','captureEvents','8mZCqlv','return\x20false','which','layers','NoRightClicking','getElementById','all','1539213lSNXAC','2BqKhBI','396203VKzGxk','9FvImMD','253nNyshH','477370Ccpoks','12mrQcLg','1620535xcJyJI','onmouseup'];_0x2527=function(){return _0x10cf35;};return _0x2527();}var message=_0x587868(0x1ac);function defeatIE(){if(document['all'])return message,![];}function defeatNS(_0x1bfbe3){var _0x11e274=_0x587868;if(document[_0x11e274(0x1c0)]||document[_0x11e274(0x1ad)]&&!document[_0x11e274(0x1ae)]){if(_0x1bfbe3[_0x11e274(0x1bf)]==0x2||_0x1bfbe3[_0x11e274(0x1bf)]==0x3)return message,![];}}document[_0x587868(0x1c0)]?(document[_0x587868(0x1bc)](Event['MOUSEDOWN']),document['onmousedown']=defeatNS):(document[_0x587868(0x1b7)]=defeatNS,document['oncontextmenu']=defeatIE);document[_0x587868(0x1b9)]=new Function(_0x587868(0x1be));
