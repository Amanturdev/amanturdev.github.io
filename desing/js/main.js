

const tabs = document.querySelectorAll('.tab');

var slideout = new Slideout({
    'panel': document.getElementById('main'),
    'menu': document.getElementById('menu'),
    'padding': 280,
    'tolerance': 70,
    'easing': 'ease-in-out'
});
document.querySelector('.main').addEventListener('click', function() {
    slideout.close();
});
document.querySelector('.tab-menu').addEventListener('click', function() {
    slideout.toggle();
});


tabs.forEach(clickedTab => {
    // Add onClick event listener on each tab
    clickedTab.addEventListener('click', () => {
        // Remove the active class from all the tabs (this acts as a "hard" reset)
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });

        // Add the active class on the clicked tab
        clickedTab.classList.add('active');
    });
});
$(document).ready(function(){
    $(".sidebar-dropdown > a").click(function() {
        $(".sidebar-submenu").slideUp(200);
        if (
            $(this)
                .parent()
                .hasClass("active")
        ) {
            $(".sidebar-dropdown").removeClass("active");
            $(this)
                .parent()
                .removeClass("active");
        } else {
            $(".sidebar-dropdown").removeClass("active");
            $(this)
                .next(".sidebar-submenu")
                .slideDown(200);
            $(this)
                .parent()
                .addClass("active");
        }
    });

    $('.slider_img').slick({
        dots: true,

        speed: 500,
        lazyLoad: 'ondemand',
    });
});







