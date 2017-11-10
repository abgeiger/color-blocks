var redCount = 0;
var yellowCount = 0;
var blueCount = 0;
var greenCount = 0;

$(document).ready(readyNow);

function readyNow() {
    $('#redButton').on('click', addRedBlock);
    $('#yellowButton').on('click', addYellowBlock);
    $('#blueButton').on('click', addBlueBlock);
    $('#greenButton').on('click', addGreenBlock);
    $('#blockDiv').on('click', '.red-block', removeRedBlock);
    $('#blockDiv').on('click', '.yellow-block', removeYellowBlock);
    $('#blockDiv').on('click', '.blue-block', removeBlueBlock);
    $('#blockDiv').on('click', '.green-block', removeGreenBlock);
}

function addRedBlock() {
    if (Math.floor($('#redInput').val()) > 0) {
        for (var i = 0; i <= $('#redInput').val() - 1; i++) {
            $('#blockDiv').append('<div class="red-block"></div>');
            redCount++;
            $('#redCounter').html('<p id="redCounter">Red Count: ' + redCount + '</p>');
        }
    } else if ($('#redInput').val() === '') { 
        $('#blockDiv').append('<div class="red-block"></div>');
        redCount++;
        $('#redCounter').html('<p id="redCounter">Red Count: ' + redCount + '</p>');
    }
}

function addYellowBlock() {
    if (Math.floor($('#yellowInput').val()) > 0) {
        for (var i = 0; i <= $('#yellowInput').val() - 1; i++) {
            $('#blockDiv').append('<div class="yellow-block"></div>');
            yellowCount++;
            $('#yellowCounter').html('<p id="yellowCounter">Yellow Count: ' + yellowCount + '</p>');
        }
    } else if ($('#yellowInput').val() === '') {
        $('#blockDiv').append('<div class="yellow-block"></div>');
        yellowCount++;
        $('#yellowCounter').html('<p id="yellowCounter">Yellow Count: ' + yellowCount + '</p>');
    }
}

function addBlueBlock() {
    if (Math.floor($('#blueInput').val()) > 0) {
        for (var i = 0; i <= $('#blueInput').val() - 1; i++) {
            $('#blockDiv').append('<div class="blue-block"></div>');
            blueCount++;
            $('#blueCounter').html('<p id="blueCounter">Blue Count: ' + blueCount + '</p>');
        }
    } else if ($('#blueInput').val() === '') {
        $('#blockDiv').append('<div class="blue-block"></div>');
        blueCount++;
        $('#blueCounter').html('<p id="blueCounter">Blue Count: ' + blueCount + '</p>');
    }
}

function addGreenBlock() {
    if (Math.floor($('#greenInput').val()) > 0) {
        for (var i = 0; i <= $('#greenInput').val() - 1; i++) {
            $('#blockDiv').append('<div class="green-block"></div>');
            greenCount++;
            $('#greenCounter').html('<p id="greenCounter">Green Count: ' + greenCount + '</p>');
        }
    } else if ($('#greenInput').val() === '') {
        $('#blockDiv').append('<div class="green-block"></div>');
        greenCount++;
        $('#greenCounter').html('<p id="greenCounter">Green Count: ' + greenCount + '</p>');
    }
}

function removeRedBlock() {
    $(this).remove();
    redCount--;
    $('#redCounter').html('<p id="redCounter">Red Count: ' + redCount + '</p>');
}


function removeYellowBlock() {
    $(this).remove();
    yellowCount--;
    $('#yellowCounter').html('<p id="yellowCounter">Yellow Count: ' + yellowCount + '</p>');
}


function removeBlueBlock() {
    $(this).remove();
    blueCount--;
    $('#blueCounter').html('<p id="blueCounter">Blue Count: ' + blueCount + '</p>');
}


function removeGreenBlock() {
    $(this).remove();
    greenCount--;
    $('#greenCounter').html('<p id="greenCounter">Green Count: ' + greenCount + '</p>');
}


