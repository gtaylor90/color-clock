var clockState = {
    visible: true
}

var colorState = {
    visible: false
}

var yourNumber = 255

var hexString = yourNumber.toString(16);
console.log(hexString)

var clockNode = document.querySelector("#clock")

var colorNode = document.querySelector("#color")

// var today = new Date()
// var hrs = today.getHours()
// var min = today.getMinutes()
// var sec = today.getSeconds()

function rgbToHex(col) {
    if (col.charAt(0) == 'r') {
        col = col.replace('rgb(', '').replace(')', '').split(',');
        var r = parseInt(col[0], 10).toString(16);
        var g = parseInt(col[1], 10).toString(16);
        var b = parseInt(col[2], 10).toString(16);
        r = r.length == 1 ? '0' + r : r;
        g = g.length == 1 ? '0' + g : g;
        b = b.length == 1 ? '0' + b : b;
        var colHex = '#' + r + g + b;
        return colHex;
    }
}



var startTime = function() {
    var today = new Date()
    var hrs = today.getHours()
    var min = today.getMinutes()
    var sec = today.getSeconds()
    min = checkTime(min)
    sec = checkTime(sec)
    document.getElementById('clock').innerHTML =
        hrs + ":" + min + ":" + sec
    var t = setTimeout(startTime, 500)
}

var checkTime = function(i) {
    if (i < 10) {
        i = "0" + i
    };
    return i
}


var checkHex = function(i) {
    if ((i.length === 1) || (i < 10)) {
        i = "0" + i
    };
    return i
}


var colorChange = function() {
    var today = new Date()
    var hexColors = '#'
    var hrs = today.getHours()
    var min = today.getMinutes()
    var sec = today.getSeconds()
    var red16 = hrs.toString(16)
    var green16 = min.toString(16)
    var blue16 = sec.toString(16)
    red16 = checkHex(red16)
    green16 = checkHex(green16)
    blue16 = checkHex(blue16)
    var bgColor = document.body
    document.getElementById('color').innerHTML = blue16 + ":" + blue16 + ":" + blue16
        // document.body.style.background = "#" +red16+green16+blue16
    hexColors += blue16
    hexColors += blue16
    hexColors += blue16
    bgColor.style.backgroundColor = hexColors
    // var col = document.body.style.backgroundColor;alert(rgbToHex(col));
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

clockNode.addEventListener('hover', opacitySwap)
