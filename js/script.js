var clockState = {
    visible: true
}

var colorState = {
    visible: false
}

var yourNumber = 255

var hexString = yourNumber.toString(16);
console.log(hexString)

var clockNode = document.querySelector("#txt")

var colorNode = document.querySelector("#txt2")

// var today = new Date()
// var hrs = today.getHours()
// var min = today.getMinutes()
// var sec = today.getSeconds()


var startTime = function() {
    var today = new Date()
    var hrs = today.getHours()
    var min = today.getMinutes()
    var sec = today.getSeconds()
    min = checkTime(min)
    sec = checkTime(sec)
    document.getElementById('txt').innerHTML =
        hrs + ":" + min + ":" + sec
    var t = setTimeout(startTime, 500)
}

var checkTime = function(i) {
    if (i < 10) {
        i = "0" + i
    };
    return i
}

var colorChange = function() {
    var today = new Date()
    var hrs = today.getHours()
    var min = today.getMinutes()
    var sec = today.getSeconds()
    var red16 = hrs.toString(16)
    var green16 = min.toString(16)
    var blue16 = sec.toString(16)
    min = checkTime(min)
    sec = checkTime(sec)
    document.getElementById('txt2').innerHTML = "c" + red16 + ":" + green16 + ":" + blue16
    var t = setTimeout(colorChange, 500)
    // document.getElementById('body').style.background = "radial-gradient(#c0fff4 6%, #"+ red16+green16+blue16 +" 137%)"
    
}

var singleNumber = function(i) {
    if (i > 10) {
        i = "0" + i
    }
    return i
}

var opacitySwap = function() {
    if (clockState.visible === true) {
        clockState.visible = false
        clockNode.style.opacity = 0
        colorNode.style.opacity = 1
        console.log("i'm being hovered upon!")
    } else {
        clockState.visible = true
        clockNode.style.opacity = 1
        colorNode.style.opacity = 0
    }
}

// clockNode.addEventListener('hover', opacitySwap)
