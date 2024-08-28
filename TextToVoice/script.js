const speech = new SpeechSynthesisUtterance();
let voices = [];
const voiceSelect = document.querySelector("#voice-select");
const textInput = document.querySelector("#text-input");
const speakButton = document.querySelector("#speak-button");
const volumeInput = document.querySelector("#volume");
const rateInput = document.querySelector("#rate");
const pitchInput = document.querySelector("#pitch");
const saveButton = document.querySelector("#save-button");
const loadButton = document.querySelector("#load-button");
const fileInput = document.querySelector("#file-input");

function populateVoiceList() {
  voices = window.speechSynthesis.getVoices();
  voices.forEach((voice, i) => {
    const option = new Option(voice.name + " (" + voice.lang + ")", i);
    option.dataset.lang = voice.lang;
    option.dataset.name = voice.name;
    voiceSelect.add(option);
  });
}

function setSpeechProperties() {
  speech.volume = volumeInput.value;
  speech.rate = rateInput.value;
  speech.pitch = pitchInput.value;
}

window.speechSynthesis.onvoiceschanged = populateVoiceList;

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

speakButton.addEventListener("click", () => {
  if (textInput.value.trim() === "") {
    alert("Please enter some text.");
    return;
  }
  setSpeechProperties();
  speech.text = textInput.value;
  window.speechSynthesis.speak(speech);
});

saveButton.addEventListener("click", () => {
  const blob = new Blob([textInput.value], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "text-to-speech.txt";
  link.click();
});

loadButton.addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = function(e) {
    textInput.value = e.target.result;
  };
  reader.readAsText(file);
});
