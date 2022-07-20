const btn = document.querySelector('[data-btn="btn"]');

btn.addEventListener('click', escolherArea);

function escolherArea(){

    function perguntaUm () {
        const respostaUm = prompt("Olá! Você gostaria de seguir para a área de FRONT-END (digite 1) ou de BACK-END (digite 2)?"); 

        const validacao = () => alert("Ops! :( Digite uma opção válida!");

        function perguntaDois() {
            const respostaDois = prompt("Muito bem! Você escolheu FRONT-END! Deseja aprender mais sobre REACT (digite 1) ou sobre VUE (digite 2)?");

            if (respostaDois == 1) {
                alert("Muito bem! Você escolheu REACT!");
                perguntaQuatro();
            } else if (respostaDois == 2) {
                alert("Muito bem! Você escolheu VUE!");
                perguntaQuatro();
            } else {
                validacao();
                perguntaDois();
            }

        }

        function perguntaTres() {
            const respostaTres = prompt("Muito bem! Você escolheu BACK-END! Deseja aprender mais sobre JAVA (digite 1) ou sobre C# (digite 2)?");

            if (respostaTres == 1) {
                alert("Muito bem! Você escolheu JAVA!");
                perguntaQuatro();
            } else if (respostaTres == 2) {
                alert("Muito bem! Você escolheu C#!");
                perguntaQuatro();
            } else {
                validacao();
                perguntaTres();
            }

        }

        function perguntaQuatro () {
            const respostaQuatro = prompt("Ótimas escolhas! A partir de agora você deseja se ESPECIALIZAR (digite 1) ou tornar-se FULLSTACK (digite 2)?");

            if (respostaQuatro == 1) {
                alert("Você escolheu ESPECIALIZAR-SE! Parabéns pela escolha!");
                perguntaCinco();
            } else if (respostaQuatro == 2) {
                alert("Você escolheu tornar-se FULLSTACK! Parabéns pela escolha!");
                perguntaCinco();
            } else {
                validacao();
                perguntaQuatro();
            }
        }

        function perguntaCinco(){ 
            let msg = prompt("Quer aprender mais alguma tecnologia? Se sim, digite OK");

            while (msg === "ok") {
                let novatec = prompt("Qual tecnologia?");
                alert(`${novatec} é legal demais da conta!`);
                msg = prompt("Quer aprender mais alguma tecnologia? Se sim, digite OK");
            } 
        } 

        if (respostaUm == 1) {
            return perguntaDois();
        } else if (respostaUm == 2) {
            return perguntaTres();
        } else {
            validacao();
            perguntaUm()
        }

    }
    return perguntaUm();
}









