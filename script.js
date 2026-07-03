//Slid Imagens
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slid");
    let atual = 0;

    // Esconde todos os slides
    slides.forEach(slide => {
        slide.style.display = "none";
    });

    // Mostra o primeiro
    slides[0].style.display = "block";

    setInterval(() => {
        slides[atual].style.display = "none";

        atual++;
        if (atual >= slides.length) {
            atual = 0;
        }

        slides[atual].style.display = "block";
    }, 3000); // 3 segundos
});

//Enviar Orçameto
const form = document.getElementById("form-orcamento");
const btn = document.getElementById("btnEnviar");
const msg = document.getElementById("mensagem");

form.addEventListener("submit", async function(e){

    e.preventDefault();

    btn.disabled = true;
    btn.innerHTML = "⏳ Enviando...";

    msg.innerHTML = "";
    msg.className = "";

    const dados = new FormData(form);

    try{

        const resposta = await fetch(form.action,{
            method:"POST",
            body:dados
        });

        const resultado = await resposta.json();

        if(resultado.success){

            msg.classList.add("sucesso");
            msg.innerHTML="✔ Solicitação enviada com sucesso! Em breve entraremos em contato.";

            form.reset();

        }else{

            msg.classList.add("erro");
            msg.innerHTML="❌ Ocorreu um erro ao enviar.";

        }

    }catch{

        msg.classList.add("erro");
        msg.innerHTML="❌ Erro de conexão. Tente novamente.";

    }

    btn.disabled=false;
    btn.innerHTML="Enviar Orçamento";

});