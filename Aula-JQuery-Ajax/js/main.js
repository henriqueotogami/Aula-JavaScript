function consultaCEP(){
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/"+cep+"/json/";
    console.log(url);
    $.ajax({
        url: url,
        type:"GET", 
        success: function(response){
            console.log(response);
            $("#logradouro").html(response.logradouro)
            $("#bairro").html(response.bairro)
            $("#localidade").html(response.localidade)
            $("#uf").html(response.uf)
            $("#cep-searched").html(response.cep)
            $(".ocultar").show();
            $(".barra-progresso").hide();            
        }
    })
}


$(function(){
    $(".ocultar").hide();
    $(".barra-progresso").hide();
});