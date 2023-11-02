const videoPlayer = document.getElementById("videoPlayer");
const changeVideoButton = document.getElementById("changeVideo");
const viewCountElement = document.getElementById("viewCount");
const noVideoText = document.getElementById("noVideoText");

const videoFolder = "piscadas/"; // Pasta onde estão os vídeos
const videoFiles = ["PiscadaSolidaria.mp4", "PiscadaCrista.mp4", "PiscadaCORINTHIANS.mp4", "ComboPiscadas.mp4", "PiscadaCuradoura.mp4", "PiscadaGringa.mp4", "PiscadaORGULHOSA.mp4", "PiscadaSULISTA.mp4","PiscadaLenta.mp4", "PiscadaMedicinal.mp4"]; // Lista de nomes dos vídeos

let currentVideoIndex = 0;
let viewCount = 0;
let lastViewDate = null;

changeVideoButton.addEventListener("click", () => {
    const currentDate = new Date().toDateString();

    if (lastViewDate !== currentDate) {
        lastViewDate = currentDate;
        viewCount = 0;
    }

    if (viewCount < 3) {
        currentVideoIndex = (currentVideoIndex + 1) % videoFiles.length;
        const nextVideo = videoFolder + videoFiles[currentVideoIndex];
        videoPlayer.src = nextVideo;
        videoPlayer.load();
        videoPlayer.play();
        viewCount++;
        viewCountElement.textContent = `Você assistiu a ${viewCount} piscada(s) hoje.`;
    } else {
        alert("Excesso de piscadas detectada, você está viciado! Volte amanhã para mais piscadas.");
    }
   
    // Adicione a classe "video-playing" para ocultar o texto
    noVideoText.classList.add("video-playing");

});

// Monitorar o evento de conclusão do vídeo
videoPlayer.addEventListener("ended", () => {
    // Remova a classe "video-playing" para exibir o texto novamente
    noVideoText.classList.remove("video-playing");
});
