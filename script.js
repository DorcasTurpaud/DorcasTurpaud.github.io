function heading(){
    var h = window.innerHeight;
    document.getElementById("heading").style.height = h-.01*h + "px";
    document.getElementById("charged").style.height = h + "px";
    console.log(h);
}
