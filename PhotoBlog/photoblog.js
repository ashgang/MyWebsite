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