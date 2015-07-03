$(document).ready(function() {
    var owl = $('#owl');
    owl.owlCarousel({
        items: 4,
        autoPlay: true,
        navigation: true,
        navigationText: [
            '<a class="prev"><i class="fa fa-chevron-left"></i></a>',
            '<a class="next"><i class="fa fa-chevron-right"></i></a>'
        ],
        pagination: false
    });
});