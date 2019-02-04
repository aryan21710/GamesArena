const request=require('request');
const fs=require('fs');


class GamesConfig {
    constructor(url,gameList=['gamelist']) {
        this.url=url
        this.gameList=gameList;
    }


    processBody() {
        console.log(`CALLING PROCESSBODY WITH URL:-${this.url}`);
        return new Promise((resolve,reject)=>{
            request({url:this.url,json:true},(err,resp,body)=>{
                if (resp) {
                    console.log('GOT THE RESPONSE BACK FOR YOUR REQUEST');
                    this.gameList=resp.body;
                    this.gameList.shift();
                    console.log(`No of Games data Present:-${this.gameList.length}`);
                    fs.writeFile('gamesData.txt',JSON.stringify(this.gameList,null,4),(err,res)=>{
                        err ?  reject(err) : resolve(this.gameList);                   
                    })
                }
            })
        })
    }

    searchGame(gamesData) {
        console.log('INSIDE SEARCH GAME NOW:-');
        try {
            console.log(`No of Games data Present:-${gamesData.length}`);
            fs.readFile('gamesData1.txt','utf8',(err,res)=>{
                if(err) {
                    console.log('NOT ABLE TO READ DATA')
                } else {
                    let gamesData=res;
                    console.log('FILE DATA:-'+gamesData);
                    gamesData.forEach((game)=>{

                    })



                }

            })
            

        } catch(err) {
            console.log('ERR:-'+err);
        }
    }


    nextPage(e) {
        console.log('nextPage Please');
        e.preventDefault();
        document.querySelectorAll('button').forEach((btn)=>{
            btn.style.background="white";
        })
        e.target.style.background="red";
        document.getElementById('gameContainer').innerHTML=
                                    '<div id="game" class="g1"> \
                                            "TITLE": "LittleBigPlanet PS Vita", \
                                            "platform": "PlayStation Vita", \
                                            "score": 9, \
                                            "genre": "Platformer", \
                                            "editors_choice": "Y" \
                                    </div> \
                                    <div id="game" class="g2"> \
                                            "TITLE": "Splice: Tree of Life", \
                                            "platform": "iPad", \
                                            "score": 8.5, \
                                            "genre": "Puzzle", \
                                            "editors_choice": "N" \
                                    </div> \
                                    <div id="game" class="g3"> \
                                            "TITLE": "NHL 13", \
                                            "platform": "Xbox 360", \
                                            "score": 8.5, \
                                            "genre": "Sports", \
                                            "editors_choice": "N" \
                                    </div> \
                                    <div id="game" class="g4"> \
                                            "TITLE": "Total War Battles: Shogun", \
                                            "platform": "Macintosh", \
                                            "score": 7, \
                                            "genre": "Strategy", \
                                            "editors_choice": "N" \
                                    </div>'
    
    }

}


const myUrl='http://starlord.hackerearth.com/gamesarena';
const myGameInfo= new GamesConfig(myUrl);
myGameInfo.processBody().then((res)=>{
    console.log('FILE DATA CONTAINS:-'+res.length);
    myGameInfo.searchGame(res);
}).catch((err)=>{
    console.log('FILE DATA MISSING:-'+err);

})







