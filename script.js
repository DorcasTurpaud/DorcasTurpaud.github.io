function heading(){
    var h = window.innerHeight;
    document.getElementById("heading").style.height = h-.01*h + "px";
    document.getElementById("hmbc").style.heigh = h-.01*h + "px";
    console.log(h);
}
