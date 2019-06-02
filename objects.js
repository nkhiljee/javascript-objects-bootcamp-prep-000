var playlist = {
  aseul: "asobi" 
};

function updatePlaylist(playlist, artist, song) {
  return Object.assign({}, playlist, {[artist]: song})
}