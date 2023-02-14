{
	const hideFirstSection = () => {
		const firstSectionButton = document.querySelector(".js-firstSectionButton")

		firstSectionButton.addEventListener("click", firsButtonChangeName)
	}

	const firsButtonChangeName = () => {
		const firstSection = document.querySelector(".js-firstSection")
		const firstButtonName = document.querySelector(".js-firstButtonName")
		firstSection.hidden = !firstSection.hidden
		firstButtonName.innerHTML = firstSection.hidden
			? "Rozwiń sekcje"
			: "Zwiń sekcję"
	}

	const hideSecondSection = () => {
		const secondSectionButton = document.querySelector(
			".js-secondSectionButton"
		)
		secondSectionButton.addEventListener("click", secondButtonChangeName)
	}

	const secondButtonChangeName = () => {
		const secondSection = document.querySelector(".js-secondSection")
		const secondButtonName = document.querySelector(".js-secondButtonName")
		secondSection.hidden = !secondSection.hidden
		secondButtonName.innerHTML = secondSection.hidden
			? "Rozwiń sekcje"
			: "Zwiń sekcję"
	}

	const hideThirdSection = () => {
		const thirdSectionButton = document.querySelector(".js-thirdSectionButton")
		thirdSectionButton.addEventListener("click", thirdButtonChangeName)
	}

	const thirdButtonChangeName = () => {
		const thirdSection = document.querySelector(".js-thirdSection")
		const thirdButtonName = document.querySelector(".js-thirdButtonName")
		thirdSection.hidden = !thirdSection.hidden
		thirdButtonName.innerHTML = thirdSection.hidden
			? "Rozwiń sekcje"
			: "Zwiń sekcję"
	}
	const init = () => {
		hideFirstSection()
		hideSecondSection()
		hideThirdSection()
	}
	init()
}
