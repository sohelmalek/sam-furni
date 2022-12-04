function darken_screen(yesno) {
    if (yesno == true) {
        document.querySelector('.screen-darken').classList.add('active');
    }
    else if (yesno == false) {
        document.querySelector('.screen-darken').classList.remove('active');
    }
}

function close_offcanvas() {
    darken_screen(false);
    document.querySelector('.mobile-offcanvas.show').classList.remove('show');
    document.body.classList.remove('offcanvas-active');
}

function show_offcanvas(offcanvas_id) {
    darken_screen(true);
    document.getElementById(offcanvas_id).classList.add('show');
    document.body.classList.add('offcanvas-active');
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('[data-trigger]').forEach(function (everyelement) {

        let offcanvas_id = everyelement.getAttribute('data-trigger');

        everyelement.addEventListener('click', function (e) {
            e.preventDefault();
            show_offcanvas(offcanvas_id);

        });
    });

    document.querySelectorAll('.btn-close').forEach(function (everybutton) {

        everybutton.addEventListener('click', function (e) {
            e.preventDefault();
            close_offcanvas();
        });
    });

    document.querySelector('.screen-darken').addEventListener('click', function (event) {
        close_offcanvas();
    });

});


//add class on scroll top START
let scrollY = window.scrollY;
let headerBox = document.getElementById('header')
let header_height = headerBox.clientHeight;
let banner_sam = document.querySelector('.banner_same');
let css_mt_height = `margin-top: ${header_height}px;`;

function addClass_on_scroll() {
    headerBox.classList.add("header_scroll", "py-1");

    banner_sam.style.cssText = css_mt_height;
}

function removeClass_on_scroll() {
    headerBox.classList.remove("header_scroll", "py-1");
    banner_sam.style.cssText = `margin-top: 0px;`;

}
window.addEventListener('scroll', function () {
    if (window.scrollY > `${header_height}` * 1) {
        let scrollY = window.scrollY;
        addClass_on_scroll();
    } else {
        removeClass_on_scroll();
    }
});
function yourFunction() {
    if (window.innerWidth > 991) {
        let why_choose_content = document.getElementById("why_choose_content").clientHeight;
        let why_choose_img = document.getElementById("why_choose_img");
        why_choose_img.style.cssText = `height: ${why_choose_content}px; position:relative;`;

    }
}
window.onload = window.onresize = yourFunction;