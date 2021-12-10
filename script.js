var items = document.querySelectorAll(".timeline li");
function isElementInVieport(el) {
    var rect = el.getBoundingClientRect();
    return(
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerHeight || document.documentElement.clientHeight)
    );
}


function callbackFunc() {
    for(var i = 0; i<items.length; i++){
        if(isElementInVieport(items[i])){
            items[i].classList.add("in-view");
        }
    }
}
window.addEventListener("scroll", callbackFunc)