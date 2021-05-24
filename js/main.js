(function () {
	let fullUrl = window.location.href;

	if (fullUrl.includes("projects")) {
		renderBtn();
	}
})();

function getTargetUrl() {
	let fullUrl = window.location.href;
	let idx = fullUrl.indexOf("projects");

	return fullUrl.substr(0, idx) + "issues/new";
}

function renderBtn() {
	let fullUrl = window.location.href;

	try {
		let inputEl = document.querySelector('[name="card_filter_query"]');
		let btn = document.createElement("a");
		let targetUrl = getTargetUrl();
		btn.innerText = "Create Issue";
		btn.setAttribute("href", targetUrl);
		btn.setAttribute("target", "_blank");
		btn.classList.add("create-issue_btn");

		if (fullUrl.includes("?fullscreen")) {
			btn.classList.add("fullscreen");
		}

		inputEl.parentNode.parentNode.after(btn);
	} catch (err) {
		console.log(err);
	}
}
