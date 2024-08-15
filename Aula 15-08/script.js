function alerta() {
    var conteudo = document.getElementById("exec_01").value;
    alert(conteudo);
}

function valida() {
    var conteudo = document.getElementById("exec_01").value;
    if (conteudo == "Erick") {
        alert("Deu certo!");
    }else{
        alert("Não deu certo!");
    }
}
