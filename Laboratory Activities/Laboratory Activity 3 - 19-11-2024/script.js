var textInput = document.getElementById("textInput");
var word = document.getElementById("wordcount");
var sentence = document.getElementById("sentencecount");


textInput.addEventListener("input", function () {
    console.log("Real-time input:", textInput.value.trim(" ").split(/\s+/));

    let inputs = textInput.value.trim(" ").split(/\s+/);

    let sens = textInput.value.split(/[.!?]+/);

    const filteredSentences = sens.filter(sens => sens.trim().length > 0);


    let sentencecounter = filteredSentences.length;
    let wordcounter = inputs.length;

    console.log("Total words:", wordcounter);
    word.innerHTML = "Words: " + wordcounter;
    console.log("Total Sentences:", sentencecounter);
    sentence.innerHTML = "Sentences: " + sentencecounter;
});
