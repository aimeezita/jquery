$(document).ready(function () {
    console.log("DOM is ready");
    
})

$(function(){

    //pegue a primeira tag de imagem depois da id carousel
    $("#carousel img:eq(0)").addClass("ativo").show();

    //fazer aparecer a legenda (atributo)
    
    let legenda = $('.ativo').attr('alt'); //criar uma constante legenda, dizer que é ativa e colocar o atributo alt dela
    
    $('#carousel').prepend("<p>" + legenda + " </p>") //coloca o conteúdo armazenado dentro da variável no p

    //colocar para passar as imagens depois de determinado tempo
    setInterval(slider, 5000);

    /*O length verifica se tem algo depois, pra verificar o tamanho*/ 
    function slider(){
        if($('.ativo').next().length){
        
            //se a condição acima for verdadeira, faça um fade out na imagem atual através da classe ativa e um fade in através da classe ativa na próxima imagem
        $('.ativo').fadeOut().removeClass('ativo').next().fadeIn().addClass('ativo');

    
        }else{
           //senão tem nada do lado, retorna para o primeiro (eq(0)) 
            $('.ativo').fadeOut().removeClass('ativo');
            $("#carousel img:eq(0)").fadeIn().addClass('ativo');
        }
    
        let legenda = $('.ativo').attr('alt');
        //esconder o elemento p que já tá sendo mostrado (do anterior) e mostrar o elemento p do html atual e mostrar
        $('#carousel p' ).hide().html(legenda).delay(500).fadeIn();
    }

})