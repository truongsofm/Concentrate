setTimeout(function() {
    (function() {
	document.body.innerHTML = `
	<html>
		<body>
			<div id="alert-image">
				<img src="${chrome.runtime.getURL("image/alert.jpg")}"/>
			</div> 
		</body>
	</html>
	`
	})()
}, 60000);