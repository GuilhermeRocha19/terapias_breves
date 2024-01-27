var res = document.getElementById("res");

function eft() {
  res.innerHTML = `<h2>EFT</h2> <p class="p">A EFT é uma técnica de liberação emocional.  Ela contribui para a liberação de medos , traumas , crenças limitantes e outras cargas que impedem nosso desenvolvimento integral.
    Batendo em pontos de energia vamos nos libertando de dores/ memórias do passado que estão presentes na vida atual. </p>`;
}
function fam() {
  res.innerHTML = `<h2>Constelação Familiar</h2> <p class="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, incidunt. Voluptate ad, laudantium fugit sed assumenda odio possimus expedita unde tempore, sapiente accusantium nulla iusto numquam repellat impedit inventore beatae a, eum molestiae! Commodi, voluptates. </p>`;
}
function quan() {
  res.innerHTML = `<h2>Hipnose Quântica</h2> <p class="p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam consequatur eum recusandae voluptate, fugit exercitationem quas hic voluptas, dignissimos adipisci nemo quaerat sint repellat mollitia? </p>`;
}

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const header = document.getElementById("header");

    header.style.transition = "background-color 0.3s ease";
    if (window.scrollY > 100) {
      header.style.position = "fixed";
    }else{
        header.style.position = "static";
    } 
    
    if (window.scrollY > 60) {
      header.style.background = "rgba(232, 175, 232, 0.2)";
    } else {
      header.style.background = "rgba(232, 175, 232)";
    }
  });

  //Rolar Suavemente ao clicar em link
  function scrollToId(targetId, offset = 0) {
    var targetElement = document.getElementById(targetId);

    if (targetElement) {
      var targetPosition = targetElement.offsetTop - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  }

  var navLinks = document.querySelectorAll("[data-target]");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var targetId = this.getAttribute("data-target");
      scrollToId(targetId, 110);
    });
  });
});

//Função para deixar
document.addEventListener("DOMContentLoaded", function () {});
