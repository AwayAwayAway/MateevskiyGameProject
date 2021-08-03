import Events from './eventsModel';
import {skillCollection} from '../cards';

export default class Board {
	constructor(model) {
		this.gameModel = model;

		this.decWrapper = document.querySelector('.cards-choose-field');        // field for cards at the start when players are choosing
		this.btnAccept = document.querySelector('.accept');               // player accept cards he chose
		this.cardsChooseCounter = document.querySelector('.count');             // counter for amount of cards have been chosen(needs for alert)
		this.cardInHand = document.querySelector('.card-in-hand-field');              // field for cards in hand each player
		this.battleField = document.querySelector('.battle-field');            // play field
		this.endTurn = document.querySelector('.end-of-turn-btn');             // end turn button
		this.playersTurnInfo = document.querySelector('.players-action');
		this.cardsPlayField = document.querySelector('.play-field');           // area for cards to drop and play their actions

		this.playersOverlay = document.querySelector('.players-overlay');
		this.playersDeck = document.querySelector('.players-overlay__cards');
		this.playersDeckClose = document.querySelector('.overlay__close');

		this.showDeckPlayer1 = document.querySelector('.player-1__pile-of-car');           // возможность в игре посмотреть какие карты ты выбрал
		this.showDeckPlayer2 = document.querySelector('.player-2__pile-of-car');           // возможность в игре посмотреть какие карты ты выбрал

		// создаем событие на создание карт
		this.onCreateCards = new Events();
		// this.cardsCreated = new Events();
		this.onCounterChange = new Events();
		this.removeCards = new Events();
		this.removeActionCard = new Events();
		// this.openCloseOverlay = new Events();
	}

	// создаем деку в начале игры для игрока согласно классу
	createCardsForChoose(playerClassInfo) {
		this.removeExtraCards('board');

		if (this.gameModel.playerOneTurn) {
			setTimeout(() => {
				skillCollection[playerClassInfo.playerOneClass].forEach((element) => this.createCards(element, 'board'));
				createCardAnim('.cards-choose-field', 'multiple');
			}, 500)
		} else {
			setTimeout(() => {
				skillCollection[playerClassInfo.playerTwoClass].forEach((element) => this.createCards(element, 'board'));
				createCardAnim('.cards-choose-field', 'multiple');
			}, 500)
		}
	}

	showCardsForPlayers(eventTarget) {
		this.removeExtraCards('overlay');

		let target = eventTarget;

		if (target.classList.contains('player-1__pile-of-car')) {
			this.gameModel.playerOnePullOfCards.forEach((element) => this.createCards(element, 'overlay'));

			createCardAnim('.players-overlay__cards', 'overlay');
		}

		if (target.classList.contains('player-2__pile-of-car')) {
			this.gameModel.playerTwoPullOfCards.forEach((element) => this.createCards(element, 'overlay'));
			createCardAnim('.players-overlay__cards', 'overlay');
		}
	}

	openCloseOverlay(state) {
		switch (state) {
			case 'open':
				this.playersOverlay.classList.remove('hidden');
				playSoundEffect('.overlay-open');
				break;
			case 'close':
				this.playersOverlay.classList.add('hidden');
				playSoundEffect('.overlay-close');
				break;
		}
	}

	createCards(card, appendPlace, draggable = false) {
		let elDiv = document.createElement('div');

		elDiv.setAttribute('class', 'cards');
		elDiv.setAttribute('data-info', `${card.id}`);
		elDiv.style.backgroundImage = `url(${card.icon})`;

		if (draggable) {
			elDiv.setAttribute('draggable', 'true');
		}

		this.onCreateCards.notify(elDiv, appendPlace);
	}

	// кидаем карты в руку
	pullRandomCardsInHand() {
		this.removeExtraCards('hand');

		let tempIndex = [];

		//делаем проверку чтобы карты в руке не повторялись
		for (let i = 0; i < 4; i++) {                  // количество карт в руку
			let n = Math.floor(Math.random() * 8);   // количество набранных карт
			if (tempIndex.indexOf(n) == -1) {
				tempIndex.push(n);
			} else {
				i--;
			}
		}

		// создаем карты в руке согласно игрока чей ход
		if (this.gameModel.playerOneTurn) {
			for (let i = 0; i < tempIndex.length; i++) {
				this.createCards(this.gameModel.playerOnePullOfCards[tempIndex[i]], 'hand', true);
			}
			createCardAnim('.card-in-hand-field', 'multiple');
		} else {
			for (let i = 0; i < tempIndex.length; i++) {
				this.createCards(this.gameModel.playerTwoPullOfCards[tempIndex[i]], 'hand', true);
			}
			createCardAnim('.card-in-hand-field', 'multiple');
		}
	}

	// убираем лишние карты с доски или из руки
	removeExtraCards(place) {
		let orderToRemove = [];

		switch (place) {
			case 'board':
				orderToRemove = [...this.decWrapper.children];
				break;
			case 'hand':
				orderToRemove = [...this.cardInHand.children];
				break;
			case 'overlay':
				orderToRemove = [...this.playersDeck.children];
				break;
		}

		this.removeCards.notify(orderToRemove, place);
	}

	//удаляем сыгранные карты из руки с проверкой
	deletePlayedCard(condition, card) {
		if (this.gameModel.tempCard.cost > this.gameModel.activePlayer.staminaPoints) {
			return;
		}

		switch (condition) {
			case 'playedCard':
				this.removeActionCard.notify(this.gameModel.dragCard);
				break;
			case 'randomCard':
				this.removeActionCard.notify(card);
				break;
		}
	}

	// подсветка выбранных карт
	cardChooseAnim(eventTarget) {
		let target = eventTarget;

		if (target !== this.decWrapper) {
			target.classList.toggle('card-to-select');
		}

		let counter = document.getElementsByClassName('card-to-select').length;

		let counterInfo = {};
		counterInfo.number = counter;

		if (counter > 8) {
			counterInfo.color = 'red';
		} else if (counter == 8) {
			counterInfo.color = 'green';
		} else if (counter > 0 && counter < 8) {
			counterInfo.color = 'cyan';
		} else {
			counterInfo.color = 'white';
		}

		this.onCounterChange.notify(counterInfo);
	}

	//анимация выбора только одной карты для игры в руке
	cardChooseAnimInHandAdd(eventTarget) {
		let target = eventTarget;

		if (target !== this.cardInHand) {
			target.classList.add('card-to-action');
		}
	}

	//анимация выбора только одной карты для игры в руке
	cardChooseAnimInHandRemove(eventTarget) {
		let target = eventTarget;

		if (target !== this.cardInHand) {
			target.classList.remove('card-to-action');
		}
	}

	//добавляем стили для перетаскивания
	dragCardStart(eventTarget) {
		let target = eventTarget;

		if (target !== this.cardInHand) {
			setTimeout(() => target.classList.add('invinsible'), 0);
		}

		playSoundEffect('.drag-sound');
	}

	//у ираем стили для перетаскивания
	dragCardEnd(eventTarget) {
		playSoundEffect('.card-grabb-cancel');

		let target = eventTarget;

		if (target !== this.cardInHand) {
			target.classList.remove('invinsible');
		}
	}

	dragPreventAction(event) {
		event.preventDefault();
	}

	showWhichTurn() {
		playSoundEffect('.end-turn');

		if (this.gameModel.playerOneTurn) {
			this.playersTurnInfo.textContent = `${this.gameModel.playersInfo.playerOneName}'s Turn`;

			endTurnAnim('left');
			// this.playersTurnInfo.classList.add('players-turn-info');
			//
			// setTimeout(() => {
			// 	this.endTurn.style.removeProperty('right');
			// 	this.endTurn.style.left = '5%';
			// }, 500);
			// setTimeout(() => this.endTurn.classList.add('endTurnAnim'), 1500);
			//
			// setTimeout(() => this.playersTurnInfo.classList.remove('players-turn-info'), 2100);
			// setTimeout(() => this.endTurn.classList.remove('endTurnAnim'), 1000);
		} else {
			this.playersTurnInfo.textContent = `${this.gameModel.playersInfo.playerTwoName}'s Turn`;

			endTurnAnim('right');
			// this.playersTurnInfo.classList.add('players-turn-info');
			//
			// setTimeout(() => {
			// 	this.endTurn.style.removeProperty('left');
			// 	this.endTurn.style.right = '5%';
			// }, 500);
			// setTimeout(() => this.endTurn.classList.add('endTurnAnim'), 1500);
			//
			// setTimeout(() => this.playersTurnInfo.classList.remove('players-turn-info'), 2100);
			// setTimeout(() => this.endTurn.classList.remove('endTurnAnim'), 1000);
		}
	}
}
