// Language Translator - JavaScript File
// CodeAlpha Internship Task 1

// This function uses MyMemory Free Translation API
// It works like Google Translate API but no API key needed
async function translateText() {
    let text = document.getElementById("inputText").value;
    let from = document.getElementById("fromLang").value;
    let to = document.getElementById("toLang").value;
    let output = document.getElementById("outputText");

    // Check if user typed anything
    if (text.trim() === "") {
        alert("Pehle kuch text likhen!");
        return;
    }

    output.innerText = "Translating... Please wait...";

    try {
        // ---- TRANSLATION API CODE STARTS HERE ----
        // We send text to API and get translated response
        let url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${from}|${to}`;
        let response = await fetch(url);
        let data = await response.json();

        // Show translated text on screen
        output.innerText = data.responseData.translatedText;
        // ---- TRANSLATION API CODE ENDS HERE ----

    } catch (error) {
        output.innerText = "Error! Internet check karen.";
        console.log("API Error:", error);
    }
}

// Copy Button Function - Optional feature
function copyText() {
    let text = document.getElementById("outputText").innerText;
    navigator.clipboard.writeText(text);
    alert("Copied!");
}

// Text-to-Speech Function - Optional feature for better usability
function speakText() {
    let text = document.getElementById("outputText").innerText;
    let speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
}
