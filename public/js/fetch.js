
class GamesConfig {
	constructor(myUrl, gameList = '', sortBtnStatus = false) {
		this.url = myUrl;
		this.gameList = gameList;
		this.sortBtnStatus = sortBtnStatus;
	}

	moveToNextPage(pageCount, e) {
		console.log('INSIDE MOVETONEXT PAGE');
		if (pageCount < 10) {
			e.preventDefault();
			e.target.style.background = 'rgb(255, 196, 0)';
			let cnt = 0;
			pageCount += 1;
			console.log('PAGECOUNT :-' + pageCount);
			console.log('nextPage Please');
			document.getElementById('pageCount').innerHTML = pageCount;
			for (let i = pageCount * 9; i < pageCount * 9 + 9; i++) {
				cnt++;
				console.log(`FROM ${pageCount * 9} TO ${pageCount * 9 + 9}`);
				let tag = '.g' + String(cnt) + ' #title';
				document.querySelector(tag).innerHTML = `Title:- ${JSON.stringify(this.gameList[i]['title'])} <br>`;

				tag = '.g' + String(cnt) + ' #platform';
				document.querySelector(tag).innerHTML = `Platform:- ${JSON.stringify(
					this.gameList[i]['platform']
				)} <br>`;

				tag = '.g' + String(cnt) + ' #score';
				document.querySelector(tag).innerHTML = `Score:- ${JSON.stringify(this.gameList[i]['score'])} <br>`;

				tag = '.g' + String(cnt) + ' #genre';
				document.querySelector(tag).innerHTML = `Genre:- ${JSON.stringify(this.gameList[i]['genre'])} <br>`;

				tag = '.g' + String(cnt) + ' #editorsChoice';
				document.querySelector(tag).innerHTML = `Editors_Choice:- ${JSON.stringify(
					this.gameList[i]['editors_choice']
				)}`;
			}
		} else {
			console.log('DISABLE THE BUTTON');
			document.getElementById('next').innerHTML = '';
			document.getElementById('next').disabled = true;
		}
		return pageCount;
	}

	moveToPrevPage(pageCount, e) {
		console.log('INSIDE moveToPrevPage');
		document.getElementById('next').style.background = '';
		if (pageCount > 1) {
			pageCount -= 1;
			console.log('PAGECOUNT :-' + pageCount);
			console.log('nextPage Please');
			e.preventDefault();
			e.target.style.background = 'rgb(255, 196, 0)';
			let cnt = 0;
			for (let i = pageCount * 9; i < pageCount * 9 + 9; i++) {
				console.log(`FROM ${pageCount * 9} TO ${pageCount * 9 + 9}`);
				cnt++;
				let tag = '.g' + String(cnt) + ' #title';
				document.querySelector(tag).innerHTML = `Title:- ${JSON.stringify(this.gameList[i]['title'])} <br>`;

				tag = '.g' + String(cnt) + ' #platform';
				document.querySelector(tag).innerHTML = `Platform:- ${JSON.stringify(
					this.gameList[i]['platform']
				)} <br>`;

				tag = '.g' + String(cnt) + ' #score';
				document.querySelector(tag).innerHTML = `Score:- ${JSON.stringify(this.gameList[i]['score'])} <br>`;

				tag = '.g' + String(cnt) + ' #genre';
				document.querySelector(tag).innerHTML = `Genre:- ${JSON.stringify(this.gameList[i]['genre'])} <br>`;

				tag = '.g' + String(cnt) + ' #editorsChoice';
				document.querySelector(tag).innerHTML = `Editors_Choice:- ${JSON.stringify(
					this.gameList[i]['editors_choice']
				)}`;
			}
			document.getElementById('pageCount').innerHTML = pageCount;
		} else {
			console.log('DISABLE THE BUTTON');
			document.getElementById('first').innerHTML = '';
			document.getElementById('first').disabled = true;
		}
		return pageCount;
	}

	searchGame(e) {
		console.log('INSIDE SEARCH GAME NOW:-');
		if (this.gameList.length == 99) {
			e.preventDefault();
			console.log('USER INTERED:-' + e.target.value);
			const userInput = e.target.value.toLowerCase();
			let gameFound = [];
			this.gameList.forEach(v => {
				if (v['title'].toLowerCase().includes(userInput)) {
					console.log('found:-' + v);
					gameFound.push(v);
				}
			});
			console.log('gameFound Details are:-' + JSON.stringify(gameFound));
			document.querySelector('#gameContainer').style.height = '100%';

			return gameFound;
		} else {
			alert('DATA NOT READY YET.. TRY AGAIN');
		}
	}

	showFoundGame(gameFound) {
		console.log('INSIDE SHOWFOUNDGAME:-' + gameFound.length);
		document.getElementById('nextPage').style.display = 'none';

		document.querySelector('#gameContainer').innerHTML = '';

		let output = '';
		gameFound.forEach((g, ind) => {
			output += `<div id="game" class="g1"> <p id="title">Title:- ${g['title']}</p> <p id="platform">Platform:- ${
				g['platform']
			}</p> <p id="score">Score:- ${g['score']}</p> <p id="genre">Genre:- ${
				g['genre']
			}</p> <p id="editorsChoice">Editors_Choice:- ${g['editors_choice']}</p></div >`;
		});
		document.querySelector('#gameContainer').innerHTML = output;
		// console.log('height:-'+document.querySelector('#gameContainer').style.height);
		// document.getElementById('navbar').style.height='8284px';
	}

	initialState(gameContainerData) {
		console.log('CALLING INTIAL STATE NOW');
		// console.log(gameContainerData);
		// document.getElementById('gameContainer').innerHTML = gameContainerData;
		document.getElementById('gameContainer').innerHTML = `<div id="game" class="g1">
                            <p id="title">"TITLE": "LittleBigPlanet PS Vita",</p>
                            <p id="platform">"Platform": "PlayStation Vita",</p>
                            <p id="score">"Score": 9,</p>
                            <p id="genre">"Genre": "Platformer",</p>
                            <p id="editorsChoice">"Editors_choice": "Y"</p>
                    </div>
                    <div id="game" class="g2">
                        <p id="title">"TITLE": "LittleBigPlanet PS Vita -- Marvel Super Hero Edition",</p>
                        <p id="platform">"Platform": "PlayStation Vita",</p>
                        <p id="score">"Score": 9,</p>
                        <p id="genre">"Genre": "Platformer",</p>
                        <p id="editorsChoice">"Editors_choice": "Y"</p>
                    </div>
          
                    <div id="game" class="g3">
                        <p id="title">"TITLE": "Splice: Tree of Life",</p>
                            <p id="platform">"Platform": "iPad",</p>
                            <p id="score">"Score": 8.5,</p>
                            <p id="genre">"Genre": "Puzzle",</p>
                            <p id="editorsChoice">"Editors_choice": "N"</p>
                    </div>

                    <div id="game" class="g4">
                                <p id="title">"TITLE": "NHL 13",</p>
                                <p id="platform">"Platform": "Xbox 360",</p>
                                <p id="score">"Score": 8.5,</p>
                                <p id="genre">"Genre": "Sports",</p>
                                <p id="editorsChoice">"Editors_choice": "N"</p>
                   </div>
                   <div id="game" class="g5">
                                <p id="title">"TITLE": "NHL 13",</p>
                                <p id="platform">"Platform": "PlayStation 3",</p>
                                <p id="score">"Score": 8.5,</p>
                                <p id="genre">"Genre": "Sports",</p>
                                <p id="editorsChoice">"Editors_choice": "N"</p>
                   </div>
                    <div id="game" class="g6">
                        <p id="title">"TITLE": "Total War Battles: Shogun",</p>
                        <p id="platform">"Platform": "Macintosh"",</p>
                        <p id="score">"Score": 7,</p>
                        <p id="genre">"Genre": "Strategy",</p>
                        <p id="editorsChoice">"Editors_choice": "N"</p>
                    </div>
                    <div id="game" class="g7">
                        <p id="title">"TITLE": "Double Dragon: Neon",</p>
                        <p id="platform">"Platform": "Xbox 360",</p>
                        <p id="score">"Score": 3,</p>
                        <p id="genre">"Genre": "Fighting",</p>
                        <p id="editorsChoice">"Editors_choice": "N"</p>
                    </div>
                    <div id="game" class="g8">
                        <p id="title">"TITLE": "Guild Wars 2",</p>
                        <p id="platform">"Platform": "PC",</p>
                        <p id="score">"Score": 9,</p>
                        <p id="genre">"Genre": "RPG",</p>
                        <p id="editorsChoice">"Editors_choice": "Y"</p>
                    </div>
                    <div id="game" class="g9">
                                <p id="title">"TITLE": "Double Dragon: Neon",</p>
                                <p id="platform">"Platform": "PlayStation 3",</p>
                                <p id="score">"Score": 3,</p>
                                <p id="genre">"Genre": "Fighting",</p>
                                <p id="editorsChoice">"Editors_choice": "N"</p>
                   </div>`;
	}

	sortGameByPlatform(e) {
		console.log('SEARCH THE GAMES BY PLATFORM' + e.target.value);
		let gameFound = this.gameList;
		if (this.gameList.length == 99) {
			e.preventDefault();
			let compare = (a, b) => {
				let comparison = 0;
				comparison = a['platform'].toLowerCase() > b['platform'].toLowerCase() ? 1 : -1;
				return comparison;
			};

			this.gameList.sort(compare);
			console.log('this.gameList Details are:-' + JSON.stringify(this.gameList, null, 4));
			let mq = window.matchMedia('(max-width: 600px)');
			if (mq.matches) {
				document.querySelector('#gameContainer').style.height = '40%';
			} else {
				document.querySelector('#gameContainer').style.height = '100%';
			}
			console.log(document.querySelector('#gameContainer').style.height);
			this.showFoundGame(this.gameList);
		} else {
			alert('DATA NOT READY YET.. TRY AGAIN');
		}
	}

	sortGameByScore(order) {
		console.log('SEARCH THE GAMES BY SCORE IN ORDER' + order);
		let gameFound = this.gameList;

		if (this.gameList.length == 99) {
			// e.preventDefault();
			let compare = (a, b) => {
				let comparison = 0;
				order == 'asc'
					? (comparison = a['score'] > b['score'] ? 1 : -1)
					: (comparison = b['score'] > a['score'] ? 1 : -1);
				return comparison;
			};

			this.gameList.sort(compare);
			console.log('this.gameList Details are:-' + JSON.stringify(this.gameList, null, 4));
			let mq = window.matchMedia('(max-width: 600px)');
			if (mq.matches) {
				document.querySelector('#gameContainer').style.height = '40%';
			} else {
				document.querySelector('#gameContainer').style.height = '100%';
			}
			console.log(document.querySelector('#gameContainer').style.height);
			this.showFoundGame(this.gameList);
		} else {
			alert('DATA NOT READY YET.. TRY AGAIN');
		}
	}

	expand() {
		console.log('SHOW SORT FORM:-' + this.sortBtnStatus);
		if (!this.sortBtnStatus) {
			document.getElementById('myform').style.display = 'block';
			document.getElementById('sortDiv').style.border = '2px solid rgb(255, 196, 0)';
			this.sortBtnStatus = true;
		} else {
			document.getElementById('myform').style.display = 'none';
			document.getElementById('sortDiv').style.border = '';
			this.sortBtnStatus = false;
		}
	}

	processBody() {
		console.log('inside processBody');
		console.log(`CALLING PROCESSBODY WITH URL:-${this.url}`);
		let pageCount = 1;
		const proxyurl = 'https://cors-anywhere.herokuapp.com/';
		// const url ='http://localhost:5000/gameInfo';
		const url = proxyurl+'http://starlord.hackerearth.com/gamesarena'; // site that doesn’t send Access-Control-*
		fetch(url) // https://cors-anywhere.herokuapp.com/https://example.com
			.then(response => response.text())
			.then(contents => {
				this.gameList = JSON.parse(contents);
				this.gameList.shift();
				document.getElementById('first').disabled = true;
				// console.log('this.gameList:-'+JSON.stringify(this.gameList[0]));
				document.querySelector('#first').addEventListener('click', e => {
					pageCount = this.moveToPrevPage(pageCount, e);
					document.getElementById('next').innerHTML = ' >> ';
					document.getElementById('next').disabled = false;
				});
				document.querySelector('#next').addEventListener('click', e => {
					document.getElementById('first').innerHTML = ' << ';
					document.getElementById('first').style.background = '';
					document.getElementById('first').disabled = false;
					pageCount = this.moveToNextPage(pageCount, e);
				});
				document.querySelector('#search').addEventListener('input', e => {
					if (e.target.value.length > 0) {
						document.getElementById('nextPage').style.display = 'none';
						console.log('THIS IS A TITLE SEARCH');
						let gameFound = this.searchGame(e);
						this.showFoundGame(gameFound);
					} else {
						this.initialState();
						document.getElementById('nextPage').style.display = '';
					}
				});
			})
			.catch(() => console.log('Can’t access ' + url + ' response. Blocked by browser?'));
	}
}


const myUrl='http://starlord.hackerearth.com/gamesarena';
// const myUrl ='http://localhost:5000/gameInfo';
const myGameInfo= new GamesConfig(myUrl);
myGameInfo.processBody();







