const APIKEY= "RGAPI-5e3845b0-95bc-49ea-bdc3-51a5ffac1c60";
var title = '';
async function getChamps(){

    return await axios.get(`http://ddragon.leagueoflegends.com/cdn/10.13.1/data/pt_BR/champion.json?api_key=${APIKEY}`)
    .then(resp => resp.data.data);
}
async function getChampData(champName){
     let champ =await axios.get(`http://ddragon.leagueoflegends.com/cdn/10.13.1/data/pt_BR/champion/${champName}.json?api_key=${APIKEY}`)
    .then(resp => resp.data);
    //GERANDO TODAS SPELLS DO CHAMP
    // champ.data[champName].spells.forEach(element => {
    //     let image = document.createElement("img");
    //     image.setAttribute("src",`http://ddragon.leagueoflegends.com/cdn/10.13.1/img/spell/${element.image.full}`);
    //     document.body.append(image);
    // });
    return champ;
}
async function getImage(champName){
    return await axios.get(`http://ddragon.leagueoflegends.com/cdn/10.13.1/img/champion/splash/${champName}_0.jpg?api_key=${APIKEY}`)
    .then(resp => resp)
    // http://ddragon.leagueoflegends.com/cdn/10.13.1/img/passive/"IMAGE"
}

async function getChampFace(champName){

    return await axios.get(`http://ddragon.leagueoflegends.com/cdn/10.13.1/img/champion/${champName}.png`);
}

function getTitle(){
    return title;
}



