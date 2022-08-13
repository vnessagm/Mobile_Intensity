let count = 0;

function add(){
if(count < 10){
    updateDisplay(++count)
}else{
    alert (`You can only buy 10 itens`)
}
}
function sub() {
    if(count > 0)
    updateDisplay(--count)
}

function updateDisplay(num) {
    document.getElementById("counter").innerHTML = num;
}