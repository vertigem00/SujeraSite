 
        var ct_ajuda = false;

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

            var cntrl = 0; //controladora de interface

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

            if (cntrl == 0){
                var unkn = document.createElement("div");
                unkn.innerHTML = '<span class="amarelo">root@sujera ~: </span> UNKN : comando não identificado';
                element.append(unkn);
                    console.log("tem algo errado");
            }
            

            input.value = "";
            return null;
        }


        //function display() {
           // document.getElementById("hajuda").style.display = "block";
         //   return document.getElementById("hajuda").style.display = "block";
       // }

        var element = document.getElementById("console_container");

        function inicio(){
            var div = document.createElement("div");
            div.innerHTML = '<span class="amarelo">root@sujera ~: </span>cd home<div>Memórias Sujas que só existem aqui</div><br><div>Sou um programador que deixou de existir <br><br> <br> Ou melhor... Eu existo... aqui.</div><br><div>Digite o código do ato ou "<a href="#" onclick="ajuda()" class="ar_command" data-command="h" id="aju">a</a>", caso precise de ajuda.<br>'
            element.append(div);
        }
        function ajuda(){
            
            var div = document.createElement("div");
            div.innerHTML = '<div><div><span class="amarelo">root@usuario ~:</span> A / AJUDA</div><br>A navegação no site é feita a partir de hiperligações. Você pode interagir clicando nelas ou digitando-as no console: <br><br><a href="#" onclick="ajuda()" class="ar_command" data-command="h" id="aju">A</a> ou AJUDA: Caso você queria retornar a esta página.<br><a href="#" onclick:"()" class="ar_command" id="mdm">SUJERA:</a> Para acessar a história.<br><a href="#" onclick="sobre()" class="ar_command" data-command="m" id="meniu">SOBRE:</a> Para acessar os aspectos técnicos do programa.<br><a href="#" onclick="window.location.href = "sujerainit.html"" class="ar_command" id="mdm">Limpar:</a> Limpa o console.<br><br>';
            element.append(div);
        }

    /*    function inicio(){
            var div = document.createElement("div");
            div.innerHTML = '<span class="amarelo">root@sujera ~: </span>cd home<div>Memórias Sujas que só existem aqui</div><br><div>Sou um programador que deixou de existir <br><br> <br> Ou melhor... Eu existo... aqui.</div><br><div>Digite  "<a href="#" onclick="menu()" class="ar_command" data-command="m" id="meniu">m</a>" para ir ao menu, ou "<a href="#" onclick="ajuda()" class="ar_command" data-command="h" id="aju">a</a>", caso precise de ajuda.<br>'
            element.append(div);
        }
        function ajuda(){
            
            var div = document.createElement("div");
            div.innerHTML = '<div><div><span class="amarelo">root@usuario ~:</span> A / AJUDA</div><br>A navegação no site é feita a partir de hiperligações. Você pode interagir clicando nelas ou digitando-as no console: <br><br>A ou AJUDA: Caso você queria retornar a esta página.<br><a href="#" onclick:"()" id="mdm">SUJERA:</a> Para acessar a história.<br><a href="#" class="ar_command" onclick:"sobre()" id="mdm">SOBRE:</a> Para acessar os aspectos técnicos do programa.<br><br>';
            element.append(div);
        }*/
        function sobre(){
            
            var div = document.createElement("div");
            div.innerHTML = '<div><div><span class="amarelo">root@usuario ~:</span> SOBRE</div><br><a href="manual.html" onclick:"()" class="ar_command" id="mdm">MANUAL:</a> Para acessar o manual da marca.<br><a href="#" onclick:"()" id="mdm">Desenvolvedores:</a> Informações sobre os desenvolvedores.<br><a href="#" onclick="inicio()" class="ar_command" id="mdm">Inicío:</a> Retorna para a tela inicial.<br><br>';
            element.append(div);
        }

      