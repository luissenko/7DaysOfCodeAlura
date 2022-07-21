function whatNum () {
    let num = prompt('Digite um número de 0 a 10');
    let secretNum = Math.floor(Math.random() * (10 - 0 + 1) + 0);

    for (let i = 3; i > 0 || secretNum == num; i--) {
        if (secretNum == num) {
            alert(`Você acertou! Seu e o número secreto são iguais: ${secretNum}!`);
            break;
        } else {
            alert(`Você errou! O número secreto é ${secretNum}. Você mais ${i} tentativas pra acertar!`);
            num = prompt('Digite um número de 0 a 10');
        }
    }

}

whatNum();