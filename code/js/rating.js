$(document).ready(function(){

var starClicked = 0;
var maxStars = 5;

function grayAllStars() {
    for( i = 1; i <= maxStars; i++ ) {
        $("#star" + i.toString()).attr("src","img/star_bw.png");
    }
}

function goldSomeStars(num) {
    grayAllStars();
    for( i = 1; i <= num; i++ ) {
        $("#star" + i.toString()).attr("src","img/star_gold.png");
    }
}

function goldStarsUpToClicked() {
    goldSomeStars(starClicked);
}


$("#submitrating").click(function(){
    name = "geoff";
    rating = starClicked;
    
    $.post("../DatabaseRelated/rate.php",
        {name1:name,rating1:rating},
            function(data) {
                if (data == "Successful Rating"){
                    $('#ratingresult').text("Successfully rated user");
                } else {
                    $('#ratingresult').text("Something went wrong. Please try again.");
                    console.log(data);
                }
            });
	});

$("#star1").mouseover( function() {
    goldSomeStars(1);
})
.mouseleave( function() {
    goldStarsUpToClicked();
})
.click( function() {
    starClicked = 1;
});

$("#star2").mouseover( function() {
    goldSomeStars(2);
})
.mouseleave( function() {
    goldStarsUpToClicked();
})
.click( function() {
    starClicked = 2;
});

$("#star3").mouseover( function() {
    goldSomeStars(3);
})
.mouseleave( function() {
    goldStarsUpToClicked();
})
.click( function() {
    starClicked = 3;
});

$("#star4").mouseover( function() {
    goldSomeStars(4);
})
.mouseleave( function() {
    goldStarsUpToClicked();
})
.click( function() {
    starClicked = 4;
});

$("#star5").mouseover( function() {
    goldSomeStars(5);
})
.mouseleave( function() {
    goldStarsUpToClicked();
})
.click( function() {
    starClicked = 5;
});

});