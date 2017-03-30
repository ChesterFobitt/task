'use strict';
var action = document.querySelectorAll('.action__item'),
    counter = document.querySelector('.counter').children[0],
    stopTimer;

function setCounter(points){
    if (counter) {
        counter.innerHTML = Number(counter.innerHTML) + Number(points);
    }
}


// Send action id

function setActionId(elem){
    var req = new XMLHttpRequest(),
        id = elem.getAttribute('data-id'),
        points = elem.getAttribute('data-points');

    req.open('POST', '/server/', true);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send("id=" + id);
    req.onload = function(res){
        var response = JSON.parse(res.target.response);
        if(res.target.status == 200 && response.status == "OK") {
            console.log(response);
            var classListStar = document.querySelector('.star').classList;
            classListStar.add('animated');
            classListStar.add('infinite');
            classListStar.add('tada');

            setCounter(points);

            setTimeout(function(){
                classListStar.remove('animated');
                classListStar.remove('infinite');
                classListStar.remove('tada');
            }, 1000);
            counterAction(elem.getAttribute('data-counter'), elem);
        } else {
            console.log(response);
            return;
        }
    }
}

// Counter
function counterAction(startTime, action) {
    var time = startTime,
        min = parseInt(time / 60),
        seconds = time,
        counter = action.parentNode.querySelector(".counter");

    counter.classList.add('active');
    action.classList.add("disabled");
    
    if (min < 1) min = 0; {
        time = parseInt(time - min * 60);
        seconds = time;
    }
    if (min < 10) {
        min = '0'+min;
    }
    if (seconds < 10) {
        seconds = '0'+seconds;
    }

    counter.innerHTML='<span>'+min+':'+seconds+'</span>';
    startTime--;

    if (startTime  >= 0) {
        stopTimer = setTimeout(function(){
            counterAction(startTime, action); 
        }, 1000);
    } else {
        clearTimeout(stopTimer);
        action.classList.remove("disabled");
        counter.classList.remove('active');
    }
}


if (action.length) {
    for (var i = 0; i < action.length; i++){
        action[i].children[0].addEventListener('click', function(){
            setActionId(this);
        });
    };
};