import { gsap } from "gsap";
import SplitType from "split-type";

export function splitText() {
  const nameTitle = document.getElementById("name-title");

  if (nameTitle) {
    let text = new SplitType(nameTitle);
    let characters = document.querySelectorAll(".char");

    for (let i = 0; i < characters.length; i++) {
      characters[i].classList.add("translate-y-full");
    }

    gsap.to(".char", { y: 0, stagger: 0.05, delay: 0.02, duration: 0.5 });
  } else {
    console.log("Element not found");
  }
}
