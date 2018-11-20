 
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
            if(input.value == "manual" && ct_ajuda == true){
                console.log("toaqui");
                document.getElementById('mdm').click();
                input.value = "";
                cntrl = 3;

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
            div.innerHTML = '<span class="amarelo">root@sujera ~: </span>cd home<div>Memórias Sujas que só existem aqui</div><br><div>Sou um programador que deixou de existir <br><br> <br> Ou melhor... Eu existo... aqui.</div><br><div>Digite  "<a href="#" onclick="menu()" class="ar_command" data-command="m" id="meniu">m</a>" para ir ao menu, ou "<a href="#" onclick="ajuda()" class="ar_command" data-command="h" id="aju">a</a>", caso precise de ajuda.<br>'
            element.append(div);
        }
        function ajuda(){
            
            var div = document.createElement("div");
            //div.className = "ajuda";
           // div.id = "hajuda";
            div.innerHTML = '<div><!--<span class="amarelo">root@usuario ~:</span>--> <br><div>OPÇÕES DE AJUDA</div><br><a href="manual.html" id="mdm">Manual de Marca</a><br><br><a href="htmls/conversa.html">Conversar com Organizadora</a><br><br><a href="sujerainit.html">Inicío</a><br><br><br>';
            element.append(div);
        }

