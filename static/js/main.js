var API_URL = 'https://api.unsplash.com/photos/random/?client_id=b81b8f22687dce8013857edf6b5d344b2e21bf1dfa0cf2bb216ca24e0594a8ef';

// function resize() {
//     var heights = window.innerHeight;
//     document.getElementById("page-content").style.height = heights - 50 + "px";
// }
// resize();
// window.onresize = function () {
//     resize();
// };

const player = new Plyr('#player', {
    title: 'GetInspired365',
});

const player1 = new Plyr('#player1', {
    title: 'GetInspired365',
});

const player2 = new Plyr('#player2', {
    title: 'GetInspired365',
});

const player3 = new Plyr('#player3', {
    title: 'GetInspired365',
});

player.on('ready', event => {
    // window.scroll({
    //     top: 250,
    //     left: 0,
    //     behavior: 'smooth'
    // });
    const instance = event.detail.plyr;
    // player.play(); // Start playback
    //player.fullscreen.enter();
});

// player.on('playing', event => {
//     document.getElementById("site-nav").style.visibility = "hidden";
//     document.getElementById("page-header").style.visibility = "hidden";
//     document.getElementById("section-tags").style.visibility = "hidden";
//     document.getElementById("page-footer").style.visibility = "hidden";
// });

// player.on('pause', event => {
//     document.getElementById("site-nav").style.visibility = "visible";
//     document.getElementById("page-header").style.visibility = "visible";
//     document.getElementById("section-tags").style.visibility = "visible";
//     document.getElementById("page-footer").style.visibility = "visible";
// });

player.on('ended', event => {
    document.getElementById("navigate_next").click();
    // document.getElementById("site-nav").style.visibility = "visible";
    // document.getElementById("page-header").style.visibility = "visible";
    // document.getElementById("section-tags").style.visibility = "visible";
    // document.getElementById("page-footer").style.visibility = "visible";
});

var elem = document.querySelector('.grid');
var pckry = new Packery(elem, {
    // options
    columnWidth: '.grid-sizer',
    itemSelector: '.gi',
    gutter: '.gutter-sizer',
    // percentPosition: trues
});

document.getElementById('burger').addEventListener("click", event => {
    if (document.getElementById('burger_menu').style.display == 'block') {
        document.getElementById('burger_menu').style.display = "none";
    } else {
        document.getElementById('burger_menu').style.display = "block";
    }
})


var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
    // options
    cellAlign: 'right',
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    autoPlay: 5000,
});

// var cards = document.getElementsByClassName("card");
// for (var i = cards.length - 1; i >= 0; i--) {
//     var quoteid = cards[i].getAttribute('data-k-quoteid');
//     var tagcsv = cards[i].getAttribute('data-k-tagcsv');
//     if (quoteid) {
//         getUnsplash(quoteid, tagcsv);
//     }
// }

// function getUnsplash(quoteid, searchTerm) {

//     console.log(quoteid);    
//     var w = document.getElementById("img_container_" + quoteid).clientWidth;
//     var h = document.getElementById("img_container_" + quoteid).clientHeight;
//     var o = "landscape";
//     if (w < h) {
//         o = "portrait";
//     }

//     fetch(API_URL + '&query=' + searchTerm + "&w=" + w + "&h=" + h + "&orientation=" + o)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (myJson) {


//             // Show the Image
//             document.getElementById("img_container_" + quoteid).innerHTML += "<img src='" + myJson.urls["full"] + "' alt='' />" 
//             document.getElementById("content_" + quoteid).innerHTML += "<a target='_blank' class='attribution' href='" + myJson.user.links["html"] + "><i class='fas fa-camera'></i></a>";

//         });
// }
