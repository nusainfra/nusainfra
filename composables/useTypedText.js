export const useTypedText = () => {
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

  const typedText = ref('');
  const currentPhraseIndex = ref(0);
  const currentCharIndex = ref(0);
  const isTyping = ref(true);

  const type = () => {
    if (currentCharIndex.value < phrases[currentPhraseIndex.value].length) {
      typedText.value += phrases[currentPhraseIndex.value].charAt(currentCharIndex.value);
      currentCharIndex.value++;
      setTimeout(type, 10);
    } else {
      setTimeout(erase, 3000);
    }
  };

  const erase = () => {
    if (currentCharIndex.value > 0) {
      typedText.value = phrases[currentPhraseIndex.value].substring(0, currentCharIndex.value - 1);
      currentCharIndex.value--;
      setTimeout(erase, 5);
    } else {
      currentPhraseIndex.value++;
      if (currentPhraseIndex.value >= phrases.length) currentPhraseIndex.value = 0;
      setTimeout(type, 10);
    }
  };

  onMounted(() => {
    type();
  });

  return {
    typedText,
    isTyping
  };
};
