function showFirstBlock() {
	document.getElementById("show-more1").style.display = "block";
	document.getElementById("show-1").style.display = "none";
}

function showSecondBlock() {
	document.getElementById("show-more2").style.display = "block";
	document.getElementById("show-2").style.display = "none";
}

const showFirst = document.getElementById("show-1");
showFirst.addEventListener("click", showFirstBlock);

const showSecond = document.getElementById("show-2");
showSecond.addEventListener("click", showSecondBlock);
