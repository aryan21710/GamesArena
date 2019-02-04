
class GamesConfig {
    constructor(url,gameList='') {
        this.url=url
        this.gameList=gameList;
    }


    moveToNextPage(pageCount,e) {
        console.log('INSIDE MOVETONEXT PAGE');
        if(pageCount < 10) {
            e.preventDefault();
            e.target.style.background="rgb(255, 196, 0)";
            let cnt=0;
            pageCount+=1;  
            console.log('PAGECOUNT :-'+pageCount);
            console.log('nextPage Please');
            document.getElementById('pageCount').innerHTML=pageCount;
            for(let i=pageCount*9; i <pageCount*9+9; i++) {
                cnt++;
                console.log(`FROM ${pageCount*9} TO ${pageCount*9+9}`);
                let tag='.g'+String(cnt)+' #title'
                document.querySelector(tag).innerHTML=`Title:- ${JSON.stringify(this.gameList[i]['title'])} <br>`

                tag='.g'+String(cnt)+' #platform'
                document.querySelector(tag).innerHTML=`Platform:- ${JSON.stringify(this.gameList[i]['platform'])} <br>`

                tag='.g'+String(cnt)+' #score'
                document.querySelector(tag).innerHTML=`Score:- ${JSON.stringify(this.gameList[i]['score'])} <br>`

                tag='.g'+String(cnt)+' #genre'
                document.querySelector(tag).innerHTML=`Genre:- ${JSON.stringify(this.gameList[i]['genre'])} <br>`

                tag='.g'+String(cnt)+' #editorsChoice'
                document.querySelector(tag).innerHTML=`Editors_Choice:- ${JSON.stringify(this.gameList[i]['editors_choice'])}`
            }
        } else {
            console.log('DISABLE THE BUTTON');
            document.getElementById('next').innerHTML='';
            document.getElementById('next').disabled=true;
        }  
        return pageCount;
    }


    moveToPrevPage(pageCount,e) {
        console.log('INSIDE moveToPrevPage');
        document.getElementById('next').style.background='';
        if(pageCount > 1) {
            pageCount-=1;  
            console.log('PAGECOUNT :-'+pageCount);
            console.log('nextPage Please');
            e.preventDefault();
            e.target.style.background="rgb(255, 196, 0)";
            let cnt=0;
            for(let i=pageCount*9; i <pageCount*9+9; i++) {
                console.log(`FROM ${pageCount*9} TO ${pageCount*9+9}`);
                cnt++;
                let tag='.g'+String(cnt)+' #title'
                document.querySelector(tag).innerHTML=`Title:- ${JSON.stringify(this.gameList[i]['title'])} <br>`

                tag='.g'+String(cnt)+' #platform'
                document.querySelector(tag).innerHTML=`Platform:- ${JSON.stringify(this.gameList[i]['platform'])} <br>`

                tag='.g'+String(cnt)+' #score'
                document.querySelector(tag).innerHTML=`Score:- ${JSON.stringify(this.gameList[i]['score'])} <br>`

                tag='.g'+String(cnt)+' #genre'
                document.querySelector(tag).innerHTML=`Genre:- ${JSON.stringify(this.gameList[i]['genre'])} <br>`

                tag='.g'+String(cnt)+' #editorsChoice'
                document.querySelector(tag).innerHTML=`Editors_Choice:- ${JSON.stringify(this.gameList[i]['editors_choice'])}`
        }
        document.getElementById('pageCount').innerHTML=pageCount;
    } else {
        console.log('DISABLE THE BUTTON');
        document.getElementById('first').innerHTML='';
        document.getElementById('first').disabled=true;
    }  
    return pageCount;
    }



    processBody() {
        console.log('inside processBody');
        console.log(`CALLING PROCESSBODY WITH URL:-${this.url}`);
        let pageCount=1;
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "http://starlord.hackerearth.com/gamesarena"; // site that doesn’t send Access-Control-*
        fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
        .then(response => response.text())
        .then(contents => {
            this.gameList=JSON.parse(contents);
            this.gameList.shift();
            document.getElementById('first').disabled=true;
            // console.log('this.gameList:-'+JSON.stringify(this.gameList[0]));
            document.querySelector("#first").addEventListener('click',(e)=>{
                    pageCount=this.moveToPrevPage(pageCount,e);
                    document.getElementById('next').innerHTML=' >> ';
                    document.getElementById('next').disabled=false;
                })
            document.querySelector("#next").addEventListener('click',(e)=>{
                    document.getElementById('first').innerHTML=' << ';
                    document.getElementById('first').style.background='';
                    document.getElementById('first').disabled=false;
                    pageCount=this.moveToNextPage(pageCount,e);
            })
            document.querySelector("#search").addEventListener('click',(e)=>{
                this.searchGame();
            })
        
        }) 
        .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    }


    

    searchGame() {
        console.log('INSIDE SEARCH GAME NOW:-');
        try {
            if(this.gameList.length==99) {
                alert(this.gameList.length);
            }
        } catch(err) {
            alert('GAMES DATA NOT LOADED YET.. TRY AGAIN IN FEW SECONDS')
        }   
    }
 }


const myUrl='http://starlord.hackerearth.com/gamesarena';
const myGameInfo= new GamesConfig(myUrl);
myGameInfo.processBody();







