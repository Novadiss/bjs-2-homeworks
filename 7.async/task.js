class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}
	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы');
		}
		if (this.alarmCollection.find(item => item.time === time)) {
			console.warn('Уже присутствует звонок на это же время');
		}
		this.alarmCollection.push({
			callback,
			time,
			canCall: true
		});
	}
	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
	}
	getCurrentFormattedTime() {
		let date = new Date();
		let hours = date.getHours();
		let minutes = date.getMinutes();
		if (hours < 10) {
			hours = '0' + hours;
		}
		if (minutes < 10) {
			minutes = '0' + minutes;
		}
		return hours + ':' + minutes;
	}
	start() {
		if (this.intervalId !== null) {
			return;
		} else {
			this.intervalId = setInterval(() => {
				this.alarmCollection.forEach(item => {
					if (item.time === this.getCurrentFormattedTime() && item.canCall) {
						item.canCall = false;
						item.callback();
					}
				});
			}, 1000);
		}
	}
	stop() {
		if (this.intervalId !== null) {
			clearInterval(this.intervalId);
			this.intervalId = null;
		}
	}
	resetAllCalls() {
		this.alarmCollection.forEach(item => item.canCall = true);
	}
	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}