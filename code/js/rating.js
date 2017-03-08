$(document).ready(function(){

var urlParams = querystring.parse(window.location.search);
var name = urlParams['name'];
$('#username').text(name);

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
    if (starClicked == 0) {
        $('#ratingresult').text("Please select a rating before submitting.");
        return;
    }

    rating = starClicked;
    
    $.post("../DatabaseRelated/rate.php",
        {name1:name,rating1:rating},
            function(data) {
                if (data == "Successful Rating") {
                    $('#ratingresult').text("Successfully rated " + name);
                } else if (data == "Duplicate User") {
                    $('#ratingresult').text("Error: User " + name + " is not unique. Please contact a site admin.");
                } else if (data == "No User") {
                    $('#ratingresult').text("Error: User " + name + " does not exist. Please contact a site admin.");
                } else {
                    $('#ratingresult').text("Error: Something went wrong. Please try again. If the problem persists, please contact a site admin.");
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