document.addEventListener('DOMContentLoaded', function () {
  const phrases = [
    "Spesialis dalam DevOps, Modern Infrastructure, dan Layanan IT Profesional",
    "Simplify Your Infrastructure",
    "Empowering DevOps, Simply",
    "Cyber Security Made Simple",
    "Infrastructure as Code, Simplified",
    "Automate Everything, Simply",
    "Your Partner in DevOps Excellence",
    "Transforming IT, Simply",
    "Building Reliable Systems, Simply"
  ];
  let currentPhraseIndex = 0;
  let currentCharIndex = 0;
  const typedTextElement = document.getElementById('typed-text');
  const typingSpeed = 10;
  const erasingSpeed = 5;
  const delayBetweenPhrases = 3000;

  function type() {
    if (currentCharIndex < phrases[currentPhraseIndex].length) {
      typedTextElement.textContent += phrases[currentPhraseIndex].charAt(currentCharIndex);
      currentCharIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, delayBetweenPhrases);
    }
  }

  function erase() {
    if (currentCharIndex > 0) {
      typedTextElement.textContent = phrases[currentPhraseIndex].substring(0, currentCharIndex - 1);
      currentCharIndex--;
      setTimeout(erase, erasingSpeed);
    } else {
      currentPhraseIndex++;
      if (currentPhraseIndex >= phrases.length) currentPhraseIndex = 0;
      setTimeout(type, typingSpeed);
    }
  }

  type();
});
