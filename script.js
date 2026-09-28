let player;
let musicaTocando = false;

/* YOUTUBE */

function onYouTubeIframeAPIReady() {

    player = new YT.Player("youtubePlayer", {

        videoId: "RxiTWxP9Xf4",

        playerVars: {
            autoplay: 0,
            controls: 0,
            loop: 1,
            playlist: "RxiTWxP9Xf4",
            playsinline: 1
        },

        events: {
            onReady: function () {
                console.log("Música pronta.");
            }
        }
    });
}

function toggleMusica() {

    if (!player) return;

    if (!musicaTocando) {

        player.playVideo();

        musicaTocando = true;

        document.getElementById("musicBtn").innerHTML = "⏸️";

    } else {

        player.pauseVideo();

        musicaTocando = false;

        document.getElementById("musicBtn").innerHTML = "🎵";
    }
}


/* TELAS */

function trocarTela(atual, proxima) {

    document
        .getElementById(atual)
        .classList
        .remove("ativa");

    setTimeout(() => {

        document
            .getElementById(proxima)
            .classList
            .add("ativa");

    }, 150);
}


function abrirPresente() {

    criarCoracoes();

    trocarTela(
        "inicio",
        "momentos"
    );
}


function mostrarCarta() {

    trocarTela(
        "momentos",
        "carta"
    );
}


function mostrarFinal() {

    criarCoracoes();

    trocarTela(
        "carta",
        "final"
    );
}


function reiniciar() {

    document
        .getElementById("final")
        .classList
        .remove("ativa");

    setTimeout(() => {

        document
            .getElementById("inicio")
            .classList
            .add("ativa");

    }, 150);
}


/* CORAÇÕES */

function criarCoracoes() {

    for (let i = 0; i < 12; i++) {

        const coracao =
            document.createElement("div");

        coracao.innerHTML =
            Math.random() > 0.5
                ? "💜"
                : "❤️";

        coracao.style.position = "fixed";

        coracao.style.left =
            Math.random() * 100 + "vw";

        coracao.style.bottom =
            "-30px";

        coracao.style.fontSize =
            (15 + Math.random() * 20) + "px";

        coracao.style.zIndex = "999";

        coracao.style.pointerEvents =
            "none";

        document.body.appendChild(coracao);

        const duracao =
            3 + Math.random() * 3;

        coracao.animate(

            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",
                    opacity: 0
                },

                {
                    opacity: 1
                },

                {
                    transform:
                        `translateY(-110vh) rotate(${Math.random() * 360}deg)`,
                    opacity: 0
                }
            ],

            {
                duration:
                    duracao * 1000,

                easing:
                    "ease-out"
            }
        );

        setTimeout(
            () => coracao.remove(),
            duracao * 1000
        );
    }
}
