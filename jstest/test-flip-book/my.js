function loadApp() {

    // Create the flipbook

    $('.flipbook').turn({
        // Width

        width:922,

        // Height

        height:600,

        // Elevation

        elevation: 50,

        // Enable gradients

        gradients: true,

        // Auto center this flipbook

        autoCenter: true

    });
}

// Load the HTML4 version if there's not CSS transform

yepnope({
    test : Modernizr.csstransforms,
    yep: ['./turn.js'],
    nope: ['./turn.html4.min.js'],
    both: ['./basic.css'],
    complete: loadApp
});

function f1() {
    setTimeout(function () {
        $(".flipbook").turn("next");
        f2();
    },1000);
}
function f2() {
    setTimeout(function () {
        $(".flipbook").turn("next");
        f1();
    },1000);
}

