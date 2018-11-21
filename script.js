 
        var ct_ajuda = false;
        var suj = false;
        var historia = false;


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

            var text = document.createTextNode("root@Sujera ~: "); //primeira mensagem do console
            spanroot.appendChild(text);
            

            var chat = document.createElement("div");
            var text = document.createTextNode(input.value);  //pega o valor do input

            chat.appendChild(spanroot);
            chat.appendChild(text);
            element.appendChild(chat);

            
            var ato = 0;
            var cntrl = 0; //controladora de interface

        if(historia == false){
            
            if(input.value == "sujera"){
                sujera();
                input.value = "";
                ct_ajuda= false;
                suj = true;
                cntrl = 4;
                console.log(cntrl);
            }
            if(input.value == "ato01" && suj == true){
                historia = true;
                ato = 1;
                
                console.log(cntrl);
                cntrl = 4;
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
                document.getElementById('mdm').click();
                input.value = "";
                cntrl = 3;

            }
            if(input.value == "limpar"){
                cntrl = 10;
                window.location.href = "sujerainit.html";
            }

            if(cntrl == 0){
                var unkn = document.createElement("div");
                unkn.innerHTML = '<span class="amarelo">root@sujera ~: </span> UNKN : comando não identificado';
                element.append(unkn);
                    console.log("tem algo errado");
            }
        }

        if(historia == true){
            console.log("jaisijas");
        }

            input.value = "";
            return null;
        }



        var element = document.getElementById("console_container");

        function inicio(){
            var div = document.createElement("div");
            div.innerHTML = '<span class="amarelo">root@sujera ~: </span>cd home<div>Memórias Sujas que só existem aqui</div><br><div>Sou um programador que deixou de existir <br><br> <br> Ou melhor... Eu existo... aqui.</div><br><div>Digite <u>SUJERA</u> para acessar os atos ou "<u>a</u>", caso precise de ajuda.<br>'
            element.append(div);
        }
        function ajuda(){
            
            var div = document.createElement("div");
            div.innerHTML = '<div><div><span class="amarelo">root@usuario ~:</span> A / AJUDA</div><br>A navegação no site é feita a partir de hiperligações. Você pode interagir clicando nelas ou digitando-as no console: <br><br><u>A</u> ou <u>AJUDA</u>: Caso você queria retornar a esta página.<br><u>SUJERA</u>: Para acessar a história.<br><u>SOBRE</u>: Para acessar os aspectos técnicos do programa.<br><u>Limpar</u>: Limpa o console.<br><br>';
            element.append(div);
        }
        function sobre(){
            
            var div = document.createElement("div");
            div.innerHTML = '<div><div><span class="amarelo">root@usuario ~:</span> SOBRE</div><br><u>MANUAL:</u> Para acessar o manual da marca.<br><u>Desenvolvedores:</u> Informações sobre os desenvolvedores.<br><u>Inicío:</u> Retorna para a tela inicial.<br><br>';
            element.append(div);
        }


        function sujera(){
            var div = document.createElement("div");
            div.innerHTML = '<div><div><span class="amarelo">root@usuario ~:</span> SUJERA</div><br><a href="#" onclick:"(historia=true;ato=1;)" class="ar_command" id="mdm">ATO01</a>: Para acessar o primeiro ato.<br>ATO02: Para acessar o segundo ato.<br>ATO03: Para acessar o terceiro ato.<br><br>';
            element.append(div);
        }
        
      