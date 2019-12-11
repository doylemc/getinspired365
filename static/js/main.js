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
