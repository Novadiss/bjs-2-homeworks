"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let x = b ** 2 - 4 * a * c;
	if (x < 0)
		arr = []
	else if (x === 0)
		arr = [-b / (2 * a)];
	else if (x > 0)
		arr = [(-b + Math.sqrt(x)) / (2 * a), (-b - Math.sqrt(x)) / (2 * a)]
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	if (typeof percent === "number" && typeof contribution === "number" && typeof amount === "number" && typeof countMonths === "number") {
		percent = percent / 100 / 12;
		let creditBody = amount - contribution;
		let payment = creditBody * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
		let totalAmount = (payment * countMonths).toFixed(2);
		totalAmount = Number(totalAmount);
		return totalAmount;
	} else {
		return false;
	}
}