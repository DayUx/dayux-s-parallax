var list = document.getElementsByClassName('layer');

var css = '.layer{position:absolute;z-index:1;    top:50%;   left:50%;    transform: translate(-50%,-50%);    transform-style: preserve-3d;    transition: 0.3s ease-out;}@media (min-aspect-ratio: 16/9) {    .layer{    width: 115vw;    }}@media (max-aspect-ratio: 16/9) {    .layer{        height: 115vh;    }}',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

head.appendChild(style);

style.type = 'text/css';
if (style.styleSheet){
  // This is required for IE8 and below.
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}


document.addEventListener('mousemove', function (e) {
    //console.log(document.getElementById('container'));
    if (list !== null) {
        for (i = 0; i < list.length; i++) {
            var mX = e.screenX;
            var mY = e.screenY;
            var scrH = window.screen.height / 100;
            var scrW = window.screen.width / 100 ;
            var x = (mX / scrW - 50)   * list[i].getAttribute('layer-depth');
            var y = (mY / scrH -50)  * list[i].getAttribute('layer-depth');
            
            list[i].style.left = 50 - x +'%';
            list[i].style.top = 50 - y +'%';
        }
    }
});
