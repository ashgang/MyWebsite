//This Java script file is only for photoblog.html, do not add anything else
window.onload=init;

function init()
{
	var addSongButton = document.getElementById("addSongButton");
	addSongButton.onclick = handleAddSongButtonClick;
	addAllImagesInFolder();
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

function addAllImagesInFolder()
{
	var imgTableID = document.getElementById("phototable");
	var imgRowInTable = document.getElementById("RowInTable");
	var fileName = "Thumbnails\\Img21T.jpg";
	
	var td = document.createElement("td");
	var a = document.createElement("a");
	a.createAttribute('data-lightbox', 'MyImages');
	a.createAttribute("href", "Images\\Img21.jpg");
	
	a.createAttribute("title", "Guess who! Singapore Zoo");
	var img = document.createElement("img");
	img.createAttribute("src", "Thumbnails\\Img21T.jpg");
	img.createAttribute("height", "150");
	img.createAttribute("width", "200");
	a.appendChild(img);
	td.appendChild(a);
	imgRowInTable.appendChild(td);
}