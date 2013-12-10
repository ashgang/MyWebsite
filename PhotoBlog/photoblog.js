//This Java script file is only for photoblog.html, do not add anything else
window.onload=init;

function init()
{
	var addSongButton = document.getElementById("addSongButton");
	addSongButton.onclick = handleAddSongButtonClick;
}

//Handler for the add song button click
function handleAddSongButtonClick()
{
	var songNameInput = document.getElementById("songNameInput");
	var songName = songNameInput.value;
	if (songName == "")
	{
		alert ("Enter song name to add!");
	}
	else
	{
		var li = document.createElement("li");
		li.innerHTML = songName;
		var ul = document.getElementById("yourPlaylist");
		ul.appendChild(li);
	}
}

function getPageSize() {
    var xScroll, yScroll;
    if (window.innerHeight && window.scrollMaxY) {
        xScroll = document.body.scrollWidth;
        yScroll = window.innerHeight + window.scrollMaxY;
    } else if (document.body.scrollHeight > document.body.offsetHeight) { // all but Explorer Mac
        xScroll = document.body.scrollWidth;
        yScroll = document.body.scrollHeight;
    } else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
        xScroll = document.body.offsetWidth;
        yScroll = document.body.offsetHeight;
    }

    var windowWidth, windowHeight;
    if (self.innerHeight) {    // all except Explorer
        windowWidth = self.innerWidth;
        windowHeight = self.innerHeight;
    } else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
        windowWidth = document.documentElement.clientWidth;
        windowHeight = document.documentElement.clientHeight;
    } else if (document.body) { // other Explorers
        windowWidth = document.body.clientWidth;
        windowHeight = document.body.clientHeight;
    }

    // for small pages with total height less then height of the viewport
    if (yScroll < windowHeight) pageHeight = windowHeight;
    else pageHeight = yScroll;

    // for small pages with total width less then width of the viewport
    if (xScroll < windowWidth) pageWidth = windowWidth;
    else pageWidth = xScroll;

    if (navigator.userAgent.indexOf("Firefox") != -1)
    { pageWidth = pageWidth - 17; }

    return {
        "pageWidth": pageWidth,
        "pageHeight": pageHeight,
        "windowWidth": windowWidth,
        "windowHeight": windowHeight
    };
}

function setOverlay() {
    ///Get screen dimesions
    var arrScrDim = getPageSize();

    ///Set dimensions of background div
    document.getElementById('fade').style.width = (arrScrDim["pageWidth"] + 'px');
    document.getElementById('fade').style.height = (arrScrDim["pageHeight"] + 'px');
}

///Show popup
function showPopup()
{
    setOverlay();

    ///Display popup and background divs
    document.getElementById("content").style.display = 'block';
    document.getElementById("fade").style.display = 'block';
}

///Close popup
function closePopup() {
    document.getElementById("content").style.display = 'none';
    document.getElementById("fade").style.display = 'none';
}
