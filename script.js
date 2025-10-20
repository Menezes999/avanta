document.addEventListener('DOMContentLoaded', () => {
    console.log("A página Minecraft Online com Avanta foi carregada!");

    const downloadButton = document.getElementById('download-button');

    if (downloadButton) {
        downloadButton.addEventListener('click', () => {
            // Ação a ser executada ao clicar no botão, por exemplo, iniciar um download ou redirecionar
            alert("Iniciando o download do Avanta...");
            // window.location.href = 'link_para_download_do_avanta.exe'; 
        });
    }
});
