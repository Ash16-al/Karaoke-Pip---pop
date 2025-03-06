//Conexión con HTML (Seleccionar elementos)

const songForm = document.getElementById('song_form');
const playList = document.getElementById('play_list');

//Función para agregar una canción a la lista
function addSong(songName, artistName, songUrl){
    const listItem =  document.createElement('li');
    listItem.innerHTML = `
            <strong> ${songName}</strong>
            - ${artistName}
            <a href="${songUrl}" target="_blank" >Reproducir</a>
            <button class="delete-btn bg-amber-500 text-amber-900 rounded-md">Eliminar</button>
    `;

    //Agregar al HTML
    playList.appendChild(listItem);

     //agregar evento de la canción
const deleteButton = listItem.querySelector (`.delete-btn`);
deleteButton.addEventListener("click", ()=>{
    listItem.remove();
});

}

//Manejo de envio de formulario (eventos)

songForm.addEventListener('submit', (event)=>{
    event.preventDefault();

    //Obtener datos del formulario
    const songName = document.getElementById("song_name").value;
    const artistName = document.getElementById("artist_name").value;
    const songUrl = document.getElementById("url_song").value;

    addSong(songName, artistName, songUrl);
    
    songForm.reset();
} )