import 'bootstrap';
import "@fortawesome/fontawesome-free/js/all.js";
import './scss/app.scss';
import { dom, library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
library.add(faSearch);

$(".btn-search").click(function() {
    $('form.search-nav').find('input.search').toggleClass('d-none');
});

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('.scroll-to-top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});