import { Howl } from "howler";

// Create and preload sound instance immediately
const clickSound = new Howl({
  src: ["/sounds/modern.mp3"],
  volume: 0.5,
  preload: true,
  html5: false,
  format: ["mp3"],
});

// Ensure audio is loaded
clickSound.once("load", () => {
  console.log("Sound loaded successfully");
});

clickSound.on("loaderror", (id, err) => {
  console.error("Sound loading error:", err);
});

export const playClickSound = () => {
  try {
    if (clickSound.state() === "loaded") {
      clickSound.play();
    } else {
      console.log("Sound not loaded yet");
    }
  } catch (error) {
    console.error("Error playing sound:", error);
  }
};
