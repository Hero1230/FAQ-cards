const showTextBtns = document.querySelectorAll("button");
console.log(showTextBtns);

showTextBtns.forEach((btn) => {
	btn.addEventListener("click", (event) => {
		event.target.closest(".faq").classList.toggle("active");
	});
});
