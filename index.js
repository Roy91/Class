$(document).ready(function(){
    $(".button1").click(function(){
        $(".grp-carre, .grp-cercle, .losange").addClass("blue");
    });
});

$(document).ready(function(){
    $(".button2").click(function(){
        $(".grp-carre, .grp-cercle, .losange").removeClass("blue");
    });
});


    $(".grp-cercle").click(function(){
        $(this).toggleClass("blue");
    });
