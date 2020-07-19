function clicou(){
    //alert("Obrigado por clicar.")
    //document.getElementById("agradecimento");
    //console.log(document.getElementById("agradecimento"));
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado.</b>";
};

function redirecionar(){
    window.open("https://www.google.com");  
};

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse.";
    //alert("trocar texto.");
    elemento.innerHTML = "Obrigado por passar o mouse.";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui.";
    elemento.innerHTML = "Passe o mouse aqui."
}

function load(){
    alert("carregado.")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}