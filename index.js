let hrsten = document.getElementsByClassName("hrs-tens")[0];
let hrsunit = document.getElementsByClassName("hrs-unit")[0];
let minten = document.getElementsByClassName("mins-tens")[0];
let minunit = document.getElementsByClassName("mins-unit")[0];
let secten = document.getElementsByClassName("secs-tens")[0];
let secunit = document.getElementsByClassName("secs-unit")[0];
let date = document.getElementsByClassName("date")[0];

let currentTime = new Date();

setInterval(() => {
	currentTime = new Date(); // Update the current time

	hrsten.innerHTML = Math.floor(currentTime.getHours() / 10);
	hrsunit.innerHTML = currentTime.getHours() % 10;

	minten.innerHTML = Math.floor(currentTime.getMinutes() / 10);
	minunit.innerHTML = currentTime.getMinutes() % 10;

	secten.innerHTML = Math.floor(currentTime.getSeconds() / 10);
	secunit.innerHTML = currentTime.getSeconds() % 10;

	date.innerHTML = currentTime.toLocaleDateString("en-US", {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}, 1000);
