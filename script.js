
async function translateText() {

    const text = document.getElementById("inputText").value;

    const source = document.getElementById("sourceLanguage").value;

    const target = document.getElementById("targetLanguage").value;

    const output = document.getElementById("outputText");

    if (!text.trim()) {
        output.innerText = "Please enter text!";
        return;
    }

    try {

        output.innerText = "Translating...";

        const params = new URLSearchParams({
            q: text,
            langpair: source + "|" + target
        });

        const response = await fetch(
            "https://api.mymemory.translated.net/get?" + params
        );

        const data = await response.json();

        output.innerText = data.responseData.translatedText;

    } catch (error) {

        output.innerText = "Translation failed!";

        console.log(error);
    }
}

document.getElementById("translateBtn")
.addEventListener("click", translateText);
