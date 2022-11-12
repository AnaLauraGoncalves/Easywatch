// run with node updateDiwaJson.mjs
import fetch from 'node-fetch'

import * as fs from 'node:fs';

async function updateAllDistro(){

    const requestURL = 'https://diwa.herokuapp.com/api/v2/distributions';

    const response = await fetch(requestURL);
    const dados = await response.json();

    let allDistributions = [];
    let count = 0;

    for(const distribution of dados.distributions){
        let tempName;
        try{
          const info = await populate(distribution.detail.diwa);
          const name = distribution.name;
          tempName = name;
          const slug = distribution.slug;
          const link = distribution.detail.distrowatch;
          const about = info.about;
          const popularity = info.popularity;
          const homepage = info.homepage;
          const based_ons = info.based_ons;
          const desktop_environments = info.desktop_environments;
          allDistributions.push(createObjectDist(name, slug, link, about, popularity, homepage, based_ons, desktop_environments));
        }catch{
          setTimeout(async function(){
            console.log("Erro");
            const info = await populate(distribution.detail.diwa);
            const name = distribution.name;
            tempName = name;
            const slug = distribution.slug;
            const link = distribution.detail.distrowatch;
            const about = info.about;
            const popularity = info.popularity;
            const homepage = info.homepage;
            const based_ons = info.based_ons;
            const desktop_environments = info.desktop_environments;
            allDistributions.push(createObjectDist(name, slug, link, about, popularity, homepage, based_ons, desktop_environments));
          }, 2000);
        }
        count++;
    }

    const jsonFile = JSON.stringify(allDistributions);

    fs.writeFile("../assets/allDistro.json", jsonFile, 'utf8', function (err){
        if(err){
            console.log("Um erro ocorreu ao realizar o salvamento do arquivo JSON com as informações das distribuições.");
            return console.log(err);
        }
        console.log("O arquivo JSON com as informações das distribuições foi salvo com sucesso.");
    });
}

async function update100DistroRanking(){
    
        const requestURL = 'https://diwa.herokuapp.com/api/v2/rankings';
        const response = await fetch(requestURL);
        const dados = await response.json();
    
        let ranking = [];

        for(const position of dados.rankings){
            let tempName;
            try{
                const rankPosition = position.no;
                const distribution = position.distribution;
                tempName = distribution;
                const hits = position.hits_per_day_count;
                const info = await populate(position.detail.diwa);
                const about = info.about;
                const homepage = info.homepage;
                const based_ons = info.based_ons;
                const desktop_environments = info.desktop_environments;
                const link = position.detail.distrowatch;
                const slug = link.split("/").pop();
                ranking.push(createObjectRanking(distribution, slug, link, about, rankPosition, hits, homepage, based_ons, desktop_environments));
            }catch{
                setTimeout(async function(){
                console.log("Erro na distribuição: " + tempName);
                const rankPosition = position.no;
                const distribution = position.distribution;
                tempName = distribution;
                const hits = position.hits_per_day_count;
                const info = await populate(position.detail.diwa);
                const about = info.about;
                const homepage = info.homepage;
                const based_ons = info.based_ons;
                const desktop_environments = info.desktop_environments;
                const link = position.detail.distrowatch;
                const slug = link.split("/").pop();
                ranking.push(createObjectRanking(distribution, slug, link, about, rankPosition, hits, homepage, based_ons, desktop_environments));
                }, 2000);
            }
            console.log("Distribuição: " + tempName + " encontrada no ranking TOP 100.");
        }

        const jsonFile = JSON.stringify(ranking);
    
        fs.writeFile("../assets/100DistroRanking.json", jsonFile, 'utf8', function (err){
            if(err){
                console.log("Um erro ocorreu ao realizar o salvamento do arquivo JSON com as informações do ranking de distribuições.");
                return console.log(err);
            }
            console.log("O arquivo JSON com as informações do ranking de distribuições foi salvo com sucesso.");
        });
}

function createObjectDist(name, slug, link, about, popularity, homepage, based_ons, desktop_environments){
    let distObject = {
      name: name,
      slug: slug,
      link: link,
      about: about,
      popularity: popularity,
      homepage: homepage,
      based_ons: based_ons,
      desktop_environments: desktop_environments
    }
    return distObject;
}


function createObjectRanking(name, slug, link, about, rankPosition, hits, homepage, based_ons, desktop_environments){
    let rankingObject = {
        name: name,
        slug: slug, 
        link: link,
        about: about,
        rankPosition: rankPosition,
        hits: hits,
        homepage: homepage,
        based_ons: based_ons,
        desktop_environments: desktop_environments

    }
    return rankingObject;
}

async function populate(link){
    const requestURL = link;
    const response = await fetch(requestURL);
    const dados = await response.json();
      return dados;
}
//------------------------------------------

async function search(){

    const requestURL = 'https://diwa.herokuapp.com/api/v2/params/search';
    const response = await fetch(requestURL);
    const dados = await response.json();


}

updateAllDistro();
update100DistroRanking();
