let form = document.getElementById("piano");
        let notes = [];
        let noteName = "";
        let chords = [];
        let inputs = document.getElementsByTagName("input");
        let chordsList;

        function clearChordsList() {
            // clear list of chords in document
            chordsList = document.getElementById("chords-list");
            while (chordsList.firstChild) {
                chordsList.removeChild(chordsList.firstChild);
            }
        }

        function submitForm() {
            clearChordsList();

            // get list of notes from form
            for (let i in inputs) {
                if (inputs[i].checked) {
                    noteName = inputs[i].value;
                    notes.push(noteName);
                }
            }
            
            chords = Tonal.Chord.detect(notes); // get chords from the list of notes
            console.log(chords);
            notes.length = 0;   // reset notes array so that user can input more

            // show chords in document
            chordElement = document.createElement("h1");
            chordElement.setAttribute("class", "chord-name");

            // replace 'M' with a space for better readability
            let index = chords[0].indexOf('M');
            if (index != -1) {
                chords[0] = chords[0].slice(0, index) + chords[0].slice(index + 1);
            }
            chordElement.innerHTML = chords[0];
            chordsList.appendChild(chordElement); // add element to DOM
        }
    
        function clearForm() {
            clearChordsList();
            for (let i in inputs) {
                inputs[i].checked = false;
            }
        }