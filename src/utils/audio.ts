export const playAudio = (clip: any) => {
  const audio = new Audio();
  audio.src = clip;

  return audio.play();
};
