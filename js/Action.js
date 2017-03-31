var Action = (function (){
    'use strict';
    
    return {
        init: function(){
            var self = this,
                actions = document.querySelectorAll('.action__item');

            if (actions.length) {
                for (var i = 0; i < actions.length; i++){

                    (function(j){
                        actions[j]
                            .addEventListener('click', function(){
                                self.setActionId(this);
                            });
                    })(i);

                };
            };
            console.log('// Action initialisation complete.');
        },

        setClass: function(classes, elem){
            var self = this;
            
            if (classes.length){

                for (var i = 0; i < classes.length; i++) {
                    (function(i){
                        elem.classList.toggle(classes[i]);
                    })(i);
                }

            }
        },
        
        setCounter: function(points){
            var self = this,
                counter = document.querySelector('.counter__text');

            if (counter) {
                counter.innerHTML = Number(counter.innerHTML) + Number(points);
            }
        },

        setActionId: function(elem){
            if (elem.classList.contains('disabled')) return;
            
            var self = this,
                req    = new XMLHttpRequest(),
                id     = elem.getAttribute('data-id'),
                points = elem.getAttribute('data-points');

            req.open('POST', '/task/', true);
            req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            req.send("id=" + id);

            req.onload = function(res){
                var response         = JSON.parse(res.target.response),
                    star             = document.querySelector('.star'),
                    animationClasses = ['animated','infinite', 'tada'];

                if(res.target.status == 200 && response.status == "OK") {
                    
                    self.setClass(animationClasses, star);                
                    self.setCounter(points);

                    setTimeout(function(){
                        self.setClass(animationClasses, star);
                    }, 1000);

                    Counter.start(elem.getAttribute('data-counter'), elem);
                    
                } else {
                    return;
                }
            }
        }
    }
    
})();