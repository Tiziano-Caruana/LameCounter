function decrease(){
    element = document.getElementById("counter");
    num = parseInt(element.innerHTML);
    num--;
    element.innerHTML = num.toString();
}

function increase(){
    element = document.getElementById("counter");
    num = parseInt(element.innerHTML);
    num++;
    element.innerHTML = num.toString();
}