const time = document.getElementById("time");

// time.addEventListener()

setInterval(function(){
    var localtime = new Date();
    time.innerHTML = localtime.toLocaleTimeString();
},1000)