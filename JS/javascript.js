{

	const hideSection = (sectionButton, section, buttonName) => {
		sectionButton.addEventListener("click", () => {
			section.hidden = !section.hidden;
			buttonName.innerHTML = section.hidden ? "Rozwiń sekcje" : "Zwiń sekcję";
		})
	}

	const init = () => {
		const firstSectionButton = document.querySelector(".js-firstSectionButton");
		const firstSection = document.querySelector(".js-firstSection");
		const firstButtonName = document.querySelector(".js-firstButtonName");
		const secondSectionButton = document.querySelector(".js-secondSectionButton");
		const secondSection = document.querySelector(".js-secondSection");
		const secondButtonName = document.querySelector(".js-secondButtonName");
		const thirdSectionButton = document.querySelector(".js-thirdSectionButton");
		const thirdSection = document.querySelector(".js-thirdSection");
		const thirdButtonName = document.querySelector(".js-thirdButtonName");
	
		hideSection(firstSectionButton, firstSection, firstButtonName);
		hideSection(secondSectionButton, secondSection, secondButtonName);
		hideSection(thirdSectionButton, thirdSection, thirdButtonName);
	};
	init();
}