function changeColor(){
    document.body.style.backgroundColor = 'rgb(' + 
    Math.trunc(Math.random() * 255) + ',' + 
    Math.trunc(Math.random() * 255) + ',' + 
    Math.trunc(Math.random() * 255) + ')';
}