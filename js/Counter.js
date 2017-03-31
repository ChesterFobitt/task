var Counter = (function(){
    
    return {
        init: function(){
            console.log('// Counter initialisation complete.');
        },
        start: function(startTime, action) {
            var self = this,
                counter = action.nextElementSibling,
                time    = startTime,
                minutes = parseInt(time / 60),
                seconds = time,
                stopTimer;

            counter.classList.add('active');
            action.classList.add("disabled");
            
            if (minutes < 1) {
                minutes = 0;
            } else {
                time = parseInt(time - minutes * 60);
                seconds = time;
            }

            if (minutes < 10) {
                minutes = '0' + minutes;
            }

            if (seconds < 10) {
                seconds = '0' + seconds;
            }

            counter.innerHTML = '<span>' + minutes + ':' + seconds + '</span>';
            startTime--;

            if (startTime >= 0) {

                stopTimer = setTimeout(function(){
                    self.start(startTime, action); 
                }, 1000);

            } else {
                clearTimeout(stopTimer);
                                
                action.classList.remove("disabled");
                counter.classList.remove('active');
            }
        }
    }
})();