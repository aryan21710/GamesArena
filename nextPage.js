function nextPage(e) {
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



