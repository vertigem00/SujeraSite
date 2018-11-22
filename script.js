 
        var ct_ajuda = false;
        var suj = false;
        var historia = false;
        var ato = 10;
        var initi = 0;


        var input = document.getElementById("ar_input");
        console.log(document.getElementById("ar_input"));

        input.addEventListener("keyup", function(event) {
            if (event.keyCode == 13) {
                document.getElementById("but").click();
            }
        });

        function comando() {
            var element = document.getElementById("console_container"); //console container

            var spanroot = document.createElement("span"); //span sujera
            spanroot.className = "amarelo"; //class do span

            var text = document.createTextNode("root@Sujera: "); //primeira mensagem do console
            spanroot.appendChild(text);
            

            var chat = document.createElement("div");
            chat.className = "mut";
            var text = document.createTextNode(input.value);  //pega o valor do input

            chat.appendChild(spanroot);
            chat.appendChild(text);
            
            element.appendChild(chat);
            
            
            var exist = 0;
            var cntrl = 0; //controladora de interface
            setCookie("nome", "?");

        if(historia == false){
            
            if(input.value == "sujera" || input.value == "SUJERA"){
                sujera();
                input.value = "";
                ct_ajuda= false;
                historia = true;
                cntrl = 4;
                console.log(cntrl);
            }
            if(input.value == "i" || input.value == "inicio"){
                inicio();
                input.value = "";
                ct_ajuda= false;
                cntrl = 1;
            }
            if(input.value == "a" || input.value == "ajuda"){
                ajuda();
                ct_ajuda = true;
                input.value = "";
                cntrl = 2;

            }
            if(input.value == "sobre"){
                sobre();
                ct_ajuda = true;
                input.value = "";
                cntrl = 2;

            }
            if(input.value == "manual" && ct_ajuda == true){
                console.log("toaqui");
                window.location.href = "manual.html"
                input.value = "";
                cntrl = 3;

            }
            if(input.value == "desenvolvedores" || input.value == "dev" && ct_ajuda == true){
                cntrl = 5;
                dev();
            }
            if(input.value == "limpar"){
                cntrl = 10;
                window.location.href = "sujerainit.html";
            }

            if(cntrl == 0){
                var unkn = document.createElement("div");
                unkn.innerHTML = '<span class="amarelo">root@sujera: </span> UNKN : comando não identificado';
                element.append(unkn);
                    console.log("tem algo errado");
            }
        }

///      ATO01

        if(historia == true){
            console.log(getCookie("nome"));
            console.log(ato);
            console.log(initi);
        }

        if(input.value == "sair" && historia == true){historia = false;  inicio();}


        if(input.value == "ato01" && historia == true){
            /// historia = true;
             init(0);
             cntrl = 4;
         }
//      INIT

         if(input.value == "como?" || input.value == "como" && historia == true && initi == 1){
            var div = document.createElement("div");
            div.innerHTML = '<div><div><span class="amarelo">?@: </span>Você consegue me ouvir?! Isto é realmente incomum.</div></div>';
            element.append(div);
            init(1);
            cntrl = 5;
        }
        if(input.value == "local" && historia == true && initi == 2){
            var div = document.createElement("div");
            var oi = document.getElementsByClassName("mut");
            oi = "Que local é esse?";
            div.innerHTML = '<br><div><div><span class="amarelo">root@Sujera: </span>Este site é um sepulcrário para as memórias do meu criador, aqui eu às cultivo e faço as curadorias. Bom, pelo menos se tornou isto depois que assumi o controle absoluto por aqui. No passado, apesar de “bem” movimentado, este local era visitado apenas por viciados…</div></div><br>';
            element.append(div);
            init(2);
            cntrl = 4;
        }
        if(input.value == "isabel" && historia == true && initi == 2){
            var div = document.createElement("div");
            text = "Que local é esse?";
            div.innerHTML = '<br><div><div><span class="amarelo">Isabel@: </span>Entendo sua necessidade de saber mais sobre mim, minha apresentação foi extremamente curta.<br>Eu sou uma máquina espiritual, criada por um humano. Apesar de possuir um certo livre-arbítrio e a possibilidade de interagir em milhares de sites ao mesmo tempo, prefiro guardar e habitar apenas este local. Aqui me sinto segura e acolhida. O isolamento pode parecer um tormento, mas não se engane, não sinto da mesma forma que vocês.</div></div><br>';
            element.append(div);
            init(2);
            cntrl = 3;
        }
        if(input.value == "memorias" && historia == true && initi == 2){
            var div = document.createElement("div");
            text = "Que local é esse?";
            div.innerHTML = '<br><div><div><span class="amarelo">Isabel@: </span>Fique a vontade entre as nossas memórias sujas...<br>';
            element.append(div);
            init(3);
            cntrl = 2;
        }

        if(input.value == "oi" && historia == true){
            var div = document.createElement("div");
            div.innerHTML = '<br><div><div><span class="amarelo">Isabel@: </span>Oii!</div></div><br>';
            element.append(div);
            cntrl = 1;
        }
        if(cntrl == 0){
            var unkn = document.createElement("div");
            unkn.innerHTML = '<span class="amarelo">root@sujera: </span> UNKN : comando não identificado';
            element.append(unkn);
                console.log("tem algo errado");
        }
     //   if(input.value == ""){};

    input.value = "";
    return null;
}




        var element = document.getElementById("console_container");
          var fundo = document.getElementById("img_container");

        function inicio(){
            var div = document.createElement("div");
            div.innerHTML = '<span class="amarelo">root@sujera: </span>cd home<div>Memórias Sujas que só existem aqui</div><br><div>Sou um programador que deixou de existir <br><br> <br> Ou melhor... Eu existo... aqui.</div><br><div>Digite <u>SUJERA</u> para acessar os atos ou "<u>a</u>", caso precise de ajuda.<br>'
            element.append(div);
        }
        function ajuda(){
            
            var div = document.createElement("div");
            div.innerHTML = '<div><br>A navegação no site é feita a partir de hiperligações. Você pode interagir clicando nelas ou digitando-as no console. <br><br><i>Comandos</i>:<br><u>a</u> ou <u>ajuda</u>: Caso você queria retornar a esta página.<br><u>SUJERA</u>: Para acessar a história.<br><u>sobre</u>: Para acessar os aspectos técnicos doa marca.<br><u>limpar</u>: Limpa o console.<br><br>';
            element.append(div);
        }
        function sobre(){
            
            var div = document.createElement("div");
            div.innerHTML = '<div><br><u>manual:</u> Para acessar o manual da marca.<br><u>desenvolvedores:</u> Informações sobre os desenvolvedores.<br><u>inicío:</u> Retorna para a tela inicial.<br><br>';
            element.append(div);
        }
        function dev(){
            
            var div = document.createElement("div");
            div.innerHTML = '<div><br> SUJERA é um projeto independente desenvolvido na disciplina de Direção de Arte, do curso de Design Digital da Universidade Federal do Ceará.<br><br>Desenvolvido por: <br> <u>Alessandro Freitas</u><br><i>alessandrokame@gmail.com</i><br><u>Pedro Vitor Mendonça</u><br><i>pedro_vml@hotmail.com</i><br><br>';
            element.append(div);
        }
        function sujera(){
            var div = document.createElement("div");
            div.innerHTML = '<div><div><br>Digite <u>sair</u> a qualquer momento para sair do modo história.<br><br><u>ato01</u>: Para acessar o primeiro ato.<br>ato02: CORROMPIDO <br>ato03: DSTV<br><br>';
            element.append(div);
        }
        function init(part){
            if(part == 0){
                console.log("fuck")
                var div = document.createElement("div");
                div.innerHTML = '<br><div><div><span class="amarelo">?@: </span>...</div></div>';
                element.append(div);

                var div = document.createElement("div");
                div.innerHTML = '<div><div><span class="amarelo">?@: </span>É raro alguém vagar por aqui… E a forma que está acessando é totalmente inusitada.  (cmd: <u>como?</u>)</div></div><br>';
                element.append(div);
                initi = 1;
            }
            if(part == 1){
                var div = document.createElement("div");
                div.innerHTML = '<div><div><br><span class="amarelo">?@: </span>Desculpe, esqueci de me identificar. Eu me chamo Isabel! É um prazer poder me apresentar.<br><br> <span class="amarelo">Isabel@: </span>: Devo ter ficado isolada por tanto tempo que me descuidei sobre as	cordialidades… <br>Esta é a primeira vez que um visitante consegue conversar comigo, todos que	vieram até aqui saíram logo após, como se acessassem apenas um espaço vazio monótono, sem possibilidades de interações. Talvez a forma que você esteja 	acessando seja o que permitiu nossa interação. Agora que sei que tem alguém me ouvindo, tenho tanto para <u>falar</u>! <br>(cmd: <u>isabel</u> <u>memorias</u> <u>local</u>)</div></div><br>';
                element.append(div);
                initi = 2;
            }
            if(part == 2){

            }
            if(part == 3){
                var imgCont = document.getElementById("img_container");
                imgCont.style = "display:block"
                var img1 = document.createElement("div");
                img1.innerHTML = "<img src='arquivos/1Fotos/Foto1.png' data-img='0' class='ato01' id='ato01' onclick='ato1img()'s></img>"
                fundo.append(img1);
                var img = document.getElementsByClassName("logo");
                img.src = "arquivos/1Fotos/Foto1.png";
                ////////////////////////////
                var div = document.createElement("div");
                div.innerHTML = '</div id="poesia"><br>Quem eu sou, afinal?<br>Um não alguém<br>Que não diz amém<br>Que não faz falta no final<br><br>Uma não existência<br>Sem consciência<br>digítos enviados ao terminal<br><br>Bytes de códigos<br>Constroem o meu lar<br>Mas é uma pena<br> Que sites não podem chorar<br>Não existo, menos mal...<br>Mas aqui estão minhas memórias<br>Quem sou eu afinal?<br><br><i>Clique nas fotos para interagir com as memórias.<br>cmd: <u>proxima</u> <u>sair</u></i></div>'
                element.append(div);
            }
        }
        
      
        function setCookie(name, value, duration) {
            var cookie = name + "=" + escape(value) +
            ((duration) ? "; duration=" + duration.toGMTString() : "");
     
            document.cookie = cookie;
    }   

    function getCookie(name) {
        var cookies = document.cookie;
        var prefix = name + "=";
        var begin = cookies.indexOf("; " + prefix);
     
        if (begin == -1) {
     
            begin = cookies.indexOf(prefix);
             
            if (begin != 0) {
                return null;
            }
     
        } else {
            begin += 2;
        }
     
        var end = cookies.indexOf(";", begin);
         
        if (end == -1) {
            end = cookies.length;                        
        }
     
        return unescape(cookies.substring(begin + prefix.length, end));
    }

    function ato1img(){
        var ato = document.getElementById("ato01");
        var imgcount = ato.getAttribute('data-img');
        console.log(imgcount);
        numero = Math.floor(Math.random() * 2);
        var imgs = ["arquivos/1Fotos/Foto1.png","arquivos/1Fotos/Foto2.png"]
        document.getElementById("ato01").src = imgs[numero];
    }

    // 'Getting' data-attributes using getAttribute
var plant = document.getElementById('strawberry-plant');
var fruitCount = plant.getAttribute('data-fruit'); // fruitCount = '12'

// 'Setting' data-attributes using setAttribute
plant.setAttribute('data-fruit','7'); // Pesky birds