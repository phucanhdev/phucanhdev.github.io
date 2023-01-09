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

        var target = this.getAttribute('item-target');

        for (var i = 0; i < all_components.length; i++) {
            all_components[i].classList.remove('_full_show');
            all_components[i].classList.remove('_show');
        }

        for (var i = 0; i < all_item.length; i++) {
            all_item[i].classList.remove('_focus');
        }

        document.getElementById(target).classList.add('_show');

        this.classList.add('_focus');

        setTimeout(function () {
            document.getElementById(target).classList.add('_full_show');
        }, 300);

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
