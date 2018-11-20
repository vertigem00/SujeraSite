
        function comando() {
            var x = document.getElementById("input").value;

            var y = document.createElement("p");
            var text = document.createTextNode(x);
            y.appendChild(text);

            var element = document.getElementById("console")
            element.appendChild(y);

            //document.getElementById("demo").innerHTML = x;
        }