let form = document.getElementById("piano");
let notes = [];
let noteName = "";
let chords = [];
let inputs = document.getElementsByTagName("input");
let chordsList;

// clear list of chords in document
function clearChordsList() {
    while (chordsList.firstChild) {
        chordsList.removeChild(chordsList.firstChild);
    }
}

// remove 'M' for major chords for better readability
function removeMajor() {
    let index = chords[0].indexOf('M');
    if (index != -1) {
        chords[0] = chords[0].slice(0, index) + chords[0].slice(index + 1);
    }
}

// get list of notes from form
function getChosenNotes() {
    for (let i in inputs) {
        if (inputs[i].checked) {
            noteName = inputs[i].value;
            notes.push(noteName);
        }
    }
}

function scrollToChords() {
    chordsList.scrollIntoView({behavior: "smooth", block: "end"});
}

// show chords in document
function outputChords() {
    if (chords.length === 0) {
        chordElement = document.createElement("h1");
        chordElement.setAttribute("class", "chord-name");
        chordElement.innerHTML = "No chords found";
        chordsList.appendChild(chordElement); // add element to DOM
        return;
    }
    for (let i in chords) {
        chordElement = document.createElement("h1");
        chordElement.setAttribute("class", "chord-name");
        removeMajor();
        chordElement.innerHTML = chords[i];
        chordsList.appendChild(chordElement); // add element to DOM
    }
}

function submitForm() {
    chordsList = document.getElementById("chords-list");
    clearChordsList();
    getChosenNotes();
    chords = Tonal.Chord.detect(notes); // get chords from the list of notes
    notes.length = 0;   // reset notes array so that user can input more
    outputChords();
    scrollToChords();
}

function clearForm() {
    clearChordsList();
    chordElement = document.createElement("h1");
    chordElement.setAttribute("class", "chord-name");
    chordElement.innerHTML = "Chords will appear here";
    chordsList.appendChild(chordElement); // add element to DOM
}