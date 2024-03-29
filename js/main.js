(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });

    //Overlay
    function showDetails() {
        document.getElementById('product-details').style.display = 'block';
    }
    
    function hideDetails() {
        document.getElementById('product-details').style.display = 'none';
    }

    //Nampilin deksripsi produk
    $(document).ready(function() {
        $('.button').click(function() {
            // Menghapus kelas 'active' dari semua tombol
            $('.button').removeClass('active');
    
            var id = $(this).attr('id');
            var detail = $('#' + id + '.base-dekripsi');
    
            if (detail.is(':visible')) {
                detail.hide();
            } else {
                 // Menyembunyikan semua base-dekripsi yang tidak memiliki id yang sama dengan id tombol yang diklik
                $('.base-dekripsi').not(detail).hide();
                detail.show().css('display', 'flex');
                // $('.base-dekripsi').css('display', 'flex'); // Menetapkan display: flex; saat detail ditampilkan
                // Scroll to the detail
                $('html, body').animate({
                    scrollTop: detail.offset().top - 100 // Sesuaikan nilai jika diperlukan
                }, 50); // Sesuaikan durasi animasi jika diperlukan
                // Saat detail ditampilkan, tambahkan kelas .active dan hapus .inactive pada tombol yang dipilih
                $(this).addClass('active'); // Menambahkan kelas 'active' ke tombol yang diklik
            }
        });
    });
    
})(jQuery);

