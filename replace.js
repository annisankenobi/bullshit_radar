import findAndReplaceDOMText from "findandreplacedomtext";
import bullshitTerms from "./terms";

function revealBullshit({ text }) {
  // Create a span element that will wrap the found word
  const span = document.createElement("span");
  span.style.color = "red"; // Set text color to red
  span.title = text; // Set the title attribute to show the original text on hover
  span.innerHTML = text; // Set the inner HTML to the found word

  return span;
}

const bullshitRe = new RegExp(`\\b(${bullshitTerms.join("|")})\\b`, "gi");

// Replace the terms in the document body
findAndReplaceDOMText(document.body, {
  find: bullshitRe,
  replace: revealBullshit,
  preset: "prose",
});
