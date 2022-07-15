/*Crie um programa que lê uma mensagem do usuário. Com esta mensagem, faça uma
nova omitindo trocando todos os caracteres de nomes próprios por ’*’. Exemplo:
se a mensagem for ’Lucas foi ao shopping com Fernanda assistir aquele filme da
Marvel’, a nova mensagem deverá ser ’***** foi ao shopping com ****** assistir
aquele filme da ******’. Assuma que um nome próprio sempre começa com letra
maiúscula e contém apenas letras.*/
(function(){
    'use strict';
    function addAste(qt){
        var aste=[];
        for(var i=0; i<qt; i++){
            aste.push('*');
        }
        return aste.join('');
    }
var sms=prompt('digite a frase...!');
var modifySms=sms.split(' ').map(function(item){
    if(item[0]===item[0].toUpperCase()){
        item=addAste(item.length);
       /*  var i=0;
        while(i<item.length){
            item[i]=item.length;
            i++;
            
        }*/
        
    };
    //aaaa
    return item
}).join(' ');

document.write (modifySms)
 
})();