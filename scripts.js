const key = "bb07c32c57dec631c54eca96d0955af1";



function enviarDados(dados){

    document.getElementById("cidade").innerHTML = "Tempo em " + dados.name;
    
    document.getElementById("celsius").innerHTML = "Temperatura de " + Math.floor(dados.main.temp) + "º celsius";
    
    document.getElementById("previsao").innerHTML = dados.weather[0].description;
    
    document.getElementById("umidade").innerHTML = "Umidade do ar em " + dados.main.humidity + "%";

    document.getElementById("tempo").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}



async function buscarCidade(cidade){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json());

    enviarDados(dados);
    console.log(dados);
}



function botaoLocal(){

    const cidade = document.getElementById("local").value;

    buscarCidade(cidade);

}