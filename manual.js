


var sided = false;

    function openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";

        if(sided == false){animateBox()};
        
    }
    
    // Get the element with id="defaultOpen" and click on it
    function clique(){
        window.location.href = "sujerainit.html";
        ///document.getElementById("sair").click();
    }
    function animateBox() {
            var target = document.querySelector('.tab');
            var player = target.animate([
                {transform: 'translate(0)'},
                {transform: 'translate(-480px, 0px'}
            ], 400);
            player.addEventListener('finish', function(){
                target.style.transform = 'translate(-480px, 0px)';
            });
            sided = true;
        }

audio = document.createElement('audio');
audio.src = 'audio/tab.wav';
document.body.appendChild(audio);

    function audioclick(){
        console.log("oi audio");
        event.preventDefault();
        audioplay = true;
        if(audioplay == true){audio.play()};
    ///    audio.autoplay = true;
        
    };



