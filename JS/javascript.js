let firstSection = document.querySelector(".js-firstSection")
let secondSection = document.querySelector(".js-secondSection")
let thirdSection = document.querySelector(".js-thirdSection")
let firstSectionButton = document.querySelector(".js-firstSectionButton")
let secondSectionButton = document.querySelector(".js-secondSectionButton")
let thirdSectionButton = document.querySelector(".js-thirdSectionButton")
let firstButtonName = document.querySelector(".js-firstButtonName")
let secondButtonName = document.querySelector(".js-secondButtonName")
let thirdButtonName = document.querySelector(".js-thirdButtonName")

firstSectionButton.addEventListener("click", () => {
	firstSection.hidden = !firstSection.hidden
	firstButtonName.innerHTML = firstSection.hidden
		? "Rozwiń sekcje"
		: "Zwiń sekcję"
});

secondSectionButton.addEventListener("click", () => {
	secondSection.hidden = !secondSection.hidden
	secondButtonName.innerHTML = secondSection.hidden
		? "Rozwiń sekcje"
		: "Zwiń sekcję"
});

thirdSectionButton.addEventListener("click", () => {
	thirdSection.hidden = !thirdSection.hidden
	thirdButtonName.innerHTML = thirdSection.hidden
		? "Rozwiń sekcje"
		: "Zwiń sekcję"
});
