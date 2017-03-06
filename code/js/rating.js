var starClicked = 0;

function grayAllStars() {
    $("#star1").attr("src","img/star_bw.png");
    $("#star2").attr("src","img/star_bw.png");
    $("#star3").attr("src","img/star_bw.png");
    $("#star4").attr("src","img/star_bw.png");
    $("#star5").attr("src","img/star_bw.png");
}

function goldStarsUpToClicked() {
    grayAllStars();
    for( i = 1; i <= starClicked; i++ ) {
        $("#star" + i.toString()).attr("src","img/star_gold.png");
    }
}

$("#star1").mouseover( function() {
    $("#star1").attr("src","img/star_gold.png");
    $("#star2").attr("src","img/star_bw.png");
    $("#star3").attr("src","img/star_bw.png");
    $("#star4").attr("src","img/star_bw.png");
    $("#star5").attr("src","img/star_bw.png");
})
.mouseleave( function() {
    goldStarsUpToClicked();
})
.click( function() {
    starClicked = 1;
});

$("#star2").mouseover( function() {
    $("#star1").attr("src","img/star_gold.png");
    $("#star2").attr("src","img/star_gold.png");
    $("#star3").attr("src","img/star_bw.png");
    $("#star4").attr("src","img/star_bw.png");
    $("#star5").attr("src","img/star_bw.png");
})
.mouseleave( function() {
    goldStarsUpToClicked();
})
.click( function() {
    starClicked = 2;
});

$("#star3").mouseover( function() {
    $("#star1").attr("src","img/star_gold.png");
    $("#star2").attr("src","img/star_gold.png");
    $("#star3").attr("src","img/star_gold.png");
    $("#star4").attr("src","img/star_bw.png");
    $("#star5").attr("src","img/star_bw.png");
})
.mouseleave( function() {
    goldStarsUpToClicked();
})
.click( function() {
    starClicked = 3;
});

$("#star4").mouseover( function() {
    $("#star1").attr("src","img/star_gold.png");
    $("#star2").attr("src","img/star_gold.png");
    $("#star3").attr("src","img/star_gold.png");
    $("#star4").attr("src","img/star_gold.png");
    $("#star5").attr("src","img/star_bw.png");
})
.mouseleave( function() {
    goldStarsUpToClicked();
})
.click( function() {
    starClicked = 4;
});

$("#star5").mouseover( function() {
    $("#star1").attr("src","img/star_gold.png");
    $("#star2").attr("src","img/star_gold.png");
    $("#star3").attr("src","img/star_gold.png");
    $("#star4").attr("src","img/star_gold.png");
    $("#star5").attr("src","img/star_gold.png");
})
.mouseleave( function() {
    goldStarsUpToClicked();
})
.click( function() {
    starClicked = 5;
});