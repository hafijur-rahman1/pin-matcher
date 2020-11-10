
    // function makingArray(){
    //     var arr = []
    //     while(arr.length < 4){
    //     var randomNumber=Math.ceil(Math.random()*100)
    //     if(arr.indexOf(randomNumber) === -1){arr.push(randomNumber)}  
    //     }
    // }


// console.log(makingArray());

function add() {
    var num = document.getElementById("mynum").value;
    if(num == '') num = 0;
    document.getElementById("mynum").value = parseInt(num ,10) + 1;
}

var n = add();
console.log(n);
