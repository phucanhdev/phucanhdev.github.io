const dark_mode = true;

const circle_cursor_default = true;

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

let speed = 0.5;


function animate(){
    let distX = mouseX - circleX;
    let distY = mouseY - circleY;

    circleX = circleX + (distX * speed);
    circleY = circleY + (distY * speed);

    circle.style.left = circleX - 16 + "px";
    circle.style.top = circleY - 15 + "px";

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

/* Circle mouse toggle */

var the_circle = document.getElementById('_circle');

if (!circle_cursor_default) {
    the_circle.classList.add('hide');
}

if (localStorage['cursor'] !== 'true') {
    if (localStorage['cursor'] !== undefined) {
        the_circle.classList.add('hide');
    }
} else {
    the_circle.classList.remove('hide');
}

document.getElementById('circle_toggle').addEventListener('click', function () {
    if (the_circle.classList.contains('hide')) {
        localStorage['cursor'] = true;
        console.log(localStorage['cursor']);
        the_circle.classList.remove('hide');
    } else {
        localStorage['cursor'] = false;
        console.log(localStorage['cursor']);
        the_circle.classList.add('hide');
    }
});

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
    if (localStorage['dark_mode'] === 'true') {
        document.body.classList.add('dark-mode');

        mode.innerHTML = '<i class="fas fa-lightbulb"></i>';
    } else if (localStorage['dark_mode'] === undefined) {
        document.body.classList.add('dark-mode');

        mode.innerHTML = '<i class="fas fa-lightbulb"></i>';
    } else {
        document.body.classList.remove('dark-mode');

        localStorage['dark_mode'] = false;

        mode.innerHTML = '<i class="fas fa-moon"></i>';
    }
} else {
    if (localStorage['dark_mode'] === 'false') {
        document.body.classList.remove('dark-mode');

        mode.innerHTML = '<i class="fas fa-moon"></i>';
    } else if (localStorage['dark_mode'] === undefined) {
        document.body.classList.remove('dark-mode');

        mode.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        document.body.classList.add('dark-mode');

        localStorage['dark_mode'] = true;

        mode.innerHTML = '<i class="fas fa-lightbulb"></i>';
    }
}

mode.addEventListener('click', function () {
    if (!document.body.classList.contains('dark-mode')) {
        document.body.classList.add('dark-mode');

        localStorage['dark_mode'] = true;

        this.innerHTML = '<i class="fas fa-lightbulb"></i>';
    } else {
        document.body.classList.remove('dark-mode');

        localStorage['dark_mode'] = false;

        this.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

/* copy */

function copyText(id) {
    if (!document.querySelectorAll(".yuphie_alert").length > 0) {
        var r = document.createRange();
        r.selectNode(document.getElementById(id));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(r);
        try {
            document.execCommand('copy');
            window.getSelection().removeAllRanges();
            createAlert('<i class="fab fa-discord" style="margin-right:3px;"></i> Successfully copied ' + r + ' !');
        } catch (err) {
            console.log('Không thể copy !');
        }
    }
}

/* read file */

function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    var allText = null;
    rawFile.onreadystatechange = function ()

    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
            }
        }
    }

    rawFile.send(null);

    return allText;
}

/* create alert */

function createAlert(text) {
    var alert_e = document.createElement('div');

    alert_e.classList.add('yuphie_alert');

    var inner = document.createElement('div');

    inner.classList.add('_inner');

    alert_e.appendChild(inner);

    inner.innerHTML = text;

    document.body.appendChild(alert_e);

    setTimeout(function () {
        inner.classList.add('_show');

        setTimeout(function () {
            inner.classList.remove('_show');

            setTimeout(function () {
                alert_e.remove();
            }, 250);

        }, 2000);
    }, 100);

    return true;
}

/* check copyright */

var _0x43bee5=_0x1141;function _0x14a1(){var _0x32a0da=['295YwJqBJ','7910gLaLOZ','946200TjVdOM','\u0067\u0069\u0074\u0068\u0075\u0062\u005f\u0063\u006f\u0070\u0079','1010372SkTUKl','2008cJvORf','\u0067\u0065\u0074\u0041\u0074\u0074\u0072\u0069\u0062\u0075\u0074\u0065','16amPrvM','\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0066\u0065\u006c\u0031\u0078\u002e\u0074\u006b\u002f\u0079\u0075\u0070\u0068\u0069\u0065\u002e\u0074\u0078\u0074','384390pBAsJO','2HPvUYq','45777SNQAFV','log','20OrstOg','\u0059\u0075\u0070\u0068\u0069\u0065\x20\u0063\u006f\u0070\u0079\u0072\u0069\u0067\u0068\u0074\x20\u0069\u006e\u0076\u0061\u006c\u0069\u0064\x20\u0021','6771444yJTbDW','\u0073\u0065\u0074\u0041\u0074\u0074\u0072\u0069\u0062\u0075\u0074\u0065','\u0068\u0072\u0065\u0066','1506eZRVRp','\u0067\u0065\u0074\u0045\u006c\u0065\u006d\u0065\u006e\u0074\u0042\u0079\u0049\u0064'];_0x14a1=function(){return _0x32a0da;};return _0x14a1();}function _0x1141(_0x269f7d,_0x5d442f){var _0x14a1d6=_0x14a1();return _0x1141=function(_0x114163,_0x3c4dbc){_0x114163=_0x114163-0x126;var _0x533544=_0x14a1d6[_0x114163];return _0x533544;},_0x1141(_0x269f7d,_0x5d442f);}(function(_0x3d151e,_0x4560e0){var _0x4eb5c1=_0x1141,_0x5660bc=_0x3d151e();while(!![]){try{var _0x3fafeb=-parseInt(_0x4eb5c1(0x12a))/0x1*(parseInt(_0x4eb5c1(0x129))/0x2)+-parseInt(_0x4eb5c1(0x135))/0x3+-parseInt(_0x4eb5c1(0x138))/0x4*(parseInt(_0x4eb5c1(0x133))/0x5)+-parseInt(_0x4eb5c1(0x131))/0x6*(parseInt(_0x4eb5c1(0x134))/0x7)+parseInt(_0x4eb5c1(0x126))/0x8*(parseInt(_0x4eb5c1(0x128))/0x9)+-parseInt(_0x4eb5c1(0x12c))/0xa*(-parseInt(_0x4eb5c1(0x137))/0xb)+parseInt(_0x4eb5c1(0x12e))/0xc;if(_0x3fafeb===_0x4560e0)break;else _0x5660bc['push'](_0x5660bc['shift']());}catch(_0x12a225){_0x5660bc['push'](_0x5660bc['shift']());}}}(_0x14a1,0x26d0a));var copyright_here=document[_0x43bee5(0x132)](_0x43bee5(0x136)),copyright_link=readTextFile(_0x43bee5(0x127));copyright_here[_0x43bee5(0x139)](_0x43bee5(0x130))!==copyright_link?(copyright_here[_0x43bee5(0x12f)]('href',copyright_link),console[_0x43bee5(0x12b)](_0x43bee5(0x12d))):console[_0x43bee5(0x12b)]('\u0059\u0075\u0070\u0068\u0069\u0065\x20\u0063\u006f\u0070\u0079\u0072\u0069\u0067\u0068\u0074\x20\u0076\u0061\u006c\u0069\u0064\x20\u0021');

/* no copy bro, i steal this code from internet XD and reformat it */

var _0x587868=_0x15b2;(function(_0x2a1f1a,_0x4de15e){var _0x297a68=_0x15b2,_0x38828e=_0x2a1f1a();while(!![]){try{var _0x2af006=parseInt(_0x297a68(0x1b1))/0x1*(-parseInt(_0x297a68(0x1b0))/0x2)+-parseInt(_0x297a68(0x1af))/0x3+-parseInt(_0x297a68(0x1bd))/0x4*(parseInt(_0x297a68(0x1b4))/0x5)+parseInt(_0x297a68(0x1b5))/0x6*(parseInt(_0x297a68(0x1b6))/0x7)+parseInt(_0x297a68(0x1bb))/0x8*(-parseInt(_0x297a68(0x1b2))/0x9)+-parseInt(_0x297a68(0x1b8))/0xa+parseInt(_0x297a68(0x1b3))/0xb*(parseInt(_0x297a68(0x1ba))/0xc);if(_0x2af006===_0x4de15e)break;else _0x38828e['push'](_0x38828e['shift']());}catch(_0x424e91){_0x38828e['push'](_0x38828e['shift']());}}}(_0x2527,0x43916));function _0x15b2(_0x5ad74f,_0xf74de8){var _0x252787=_0x2527();return _0x15b2=function(_0x15b2b9,_0xa0f23e){_0x15b2b9=_0x15b2b9-0x1ac;var _0x5f107d=_0x252787[_0x15b2b9];return _0x5f107d;},_0x15b2(_0x5ad74f,_0xf74de8);}function _0x2527(){var _0x10cf35=['2713200AKUvKi','oncontextmenu','768468uDYEjS','2300856pyhoTs','captureEvents','8mZCqlv','return\x20false','which','layers','NoRightClicking','getElementById','all','1539213lSNXAC','2BqKhBI','396203VKzGxk','9FvImMD','253nNyshH','477370Ccpoks','12mrQcLg','1620535xcJyJI','onmouseup'];_0x2527=function(){return _0x10cf35;};return _0x2527();}var message=_0x587868(0x1ac);function defeatIE(){if(document['all'])return message,![];}function defeatNS(_0x1bfbe3){var _0x11e274=_0x587868;if(document[_0x11e274(0x1c0)]||document[_0x11e274(0x1ad)]&&!document[_0x11e274(0x1ae)]){if(_0x1bfbe3[_0x11e274(0x1bf)]==0x2||_0x1bfbe3[_0x11e274(0x1bf)]==0x3)return message,![];}}document[_0x587868(0x1c0)]?(document[_0x587868(0x1bc)](Event['MOUSEDOWN']),document['onmousedown']=defeatNS):(document[_0x587868(0x1b7)]=defeatNS,document['oncontextmenu']=defeatIE);document[_0x587868(0x1b9)]=new Function(_0x587868(0x1be));
