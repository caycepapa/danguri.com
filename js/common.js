$(function() {

/*カウントダウン*/

countDown();

function countDown() {
    var startDateTime = new Date();
    var endDateTime = new Date("January 01,2020 00:00:00");
    var left = endDateTime - startDateTime;
    var a_day = 24 * 60 * 60 * 1000;

    var d = Math.floor(left / a_day);

    var h = Math.floor((left % a_day) / (60 * 60 * 1000));
    var hLength = String(h).length;
    if( hLength == 1){
        h = '0'+h;
    }

    var m = Math.floor((left % a_day) / (60 * 1000)) % 60;
    var mLength = String(m).length;
    if( mLength == 1){
        m = '0'+m;
    }

    var s = Math.floor((left % a_day) / 1000) % 60 % 60;
    var sLength = String(s).length;
    if( sLength == 1){
        s = '0'+s;
    }

    var ms = Math.floor((left - (h * 60 * 60 * 1000) ) / 10 ) % 100;
    var msLength = String(ms).length;
    if( msLength == 1){
        ms = '0' + ms;
    }

    $("#timer__left").html("<span class='timer__day'>" + d + "</span>" + "D" + "<span class='timer__hour'>" + h + "</span>" + "H" + "<span class='timer__min'>" + m + "</span>" + "M" + "<span class='timer__second'>" + s + "</span>" + "S" + "<span class='timer__milli'>" + ms + "</span>" );

    setTimeout(function(){
        countDown();
    },1);
}


/*マウスカーソル*/
var cursor = $(".cursor"),
follower = $(".cursor-follower");

var posX = 0,
    posY = 0;

var mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function() {

        var newPosX = posX + (mouseX - posX) / 10;
        var newPosY = posY + (mouseY - posY) / 10;

        var followerW = follower.width(),
            followerH = follower.height();

        var roundNum = Math.atan2( newPosY - posY, newPosX - posX );

        /*
        TweenMax.to(follower,0.1, {
            css: {
                width:"50px",
                height:"30px",
                rotation:roundNum
            }
        });*/


        TweenMax.set(follower, {
            css: {
                left: newPosX - 14,
                top: newPosY - 14
            }
        });

        TweenMax.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        });

        posX = newPosX;
        posY = newPosY;
    }
});

$(document).on("mousemove", function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

$(".link").on("mouseenter", function() {
    cursor.addClass("active");
    follower.addClass("active");
});

$(".link").on("mouseleave", function() {
    cursor.removeClass("active");
    follower.removeClass("active");
});


/**/


/*閉じタグ*/
});
