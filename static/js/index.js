if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  var tiltElements = document.querySelectorAll(`[data-tilt]`);
  var mq = window.matchMedia("(max-width: 1025px)");
  if (mq.matches) {
    for (var i = 0, len = tiltElements.length; i < len; i++) {
      tiltElements[i].vanillaTilt.destroy();
    }
  }
}

async function type(sentence, eleRef, delay = 100) {
  const letters = sentence.split("");
  let i = 0;
  while (i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++;
  }
  document.getElementById("input-cursor").style.display = "none";
  return;
}

function waitForMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function fadein(element) {
  var op = 0.1; // initial opacity
  element.style.display = "block";
  var timer = setInterval(function () {
    if (op >= 1) {
      clearInterval(timer);
    }
    element.style.opacity = op;
    element.style.filter = "alpha(opacity=" + op * 100 + ")";
    op += op * 0.1;
  }, 10);
}

async function init() {
  document.getElementById("hablemos").style.opacity = 0;
  document.getElementById("input-cursor").style.display = "none";
  document.getElementById("input-cursor2").style.display = "none";
  type("Hola, soy", "#lTitleFont");
  await waitForMs(900);
  document.getElementById("input-cursor").style.display = "block";
  document.getElementById("input-cursor3").style.display = "none";
  type("<Lucas Grasso Ramos>", "#palabra");
  await waitForMs(2000);
  /*     document.getElementById("input-cursor").style.display = "none"; */
  document.getElementById("input-cursor2").style.display = "block";
  type("Software Developer", "#palabra2");
  await waitForMs(2000);
  fadein(document.getElementById("hablemos"));
}

init();
