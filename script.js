const videoPlayer = document.getElementById("videoPlayer");
const changeVideoButton = document.getElementById("changeVideo");

const videoFiles = ["PiscadaSolidaria.mp4", "PiscadaCrista.mp4", "PiscadaCORINTHIANS.mp4", "ComboPiscadas.mp4", "PiscadaCuradoura.mp4", "PiscadaGringa.mp4", "PiscadaORGULHOSA.mp4", "PiscadaSULISTA.mp4","PiscadaLenta.mp4", "PiscadaMedicinal.mp4"]; // Lista de nomes dos vídeos

let currentVideoIndex = 0;

changeVideoButton.addEventListener("click", () => {
    currentVideoIndex = (currentVideoIndex + 1) % videoFiles.length;
    const nextVideo = videoFolder + videoFiles[currentVideoIndex];
    videoPlayer.src = nextVideo;
    videoPlayer.load();
    videoPlayer.play();

});
