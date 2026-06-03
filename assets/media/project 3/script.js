// DOM Demo - Starter File
// Goal: Practice selecting, modifying, creating, and removing DOM nodes.

// 1. Select the main title by its id.
let title = document.getElementById("main-title")

// 2. Select the intro paragraph by its id.
let introParagraph = document.getElementById("intro")

// 3. Select all note paragraphs by their class name.
let noteParagraphs = document.getElementsByClassName("note")
// 4. Select the notes section.
let notesSection = document.getElementById("notes")

// 5. Select all buttons.
let changeTitleBtn = document.getElementById("change-title-btn")
let updateTextBtn = document.getElementById("update-text-btn")
let highLightBtn = document.getElementById("highlight-btn")
let addNoteBtn = document.getElementById("add-note-btn")
let removeNoteBtn = document.getElementById("remove-note-btn")
// A) When the Change Title button is clicked:
//    - Change the title text to: "The DOM Has Been Updated!"
changeTitleBtn.onclick = function() {
    title.textContent = "The DOM Has Been Updated!"
}

// B) When the Update Intro Text button is clicked:
//    - Change the intro paragraph text to:
//      "JavaScript can update text content on a live webpage."
updateTextBtn.onclick = function() {
    introParagraph.textContent =  "JavaScript can update text content on a live webpage."
}


// C) When the Highlight Notes button is clicked:
highLightBtn.onclick = function() {
    // Loop through the collection of note elements
    for (let i = 0; i < noteParagraphs.length; i++) {
        noteParagraphs[i].classList.add("highlight");
    }
}

// D) When the Add Note button is clicked:
addNoteBtn.onclick = function() {
    let newNote = document.createElement("p");
    newNote.textContent = "This is note 4.";
    newNote.className = "note";
    
    // Note: Your HTML uses id="notes-section", so make sure your 
    // step 4 variable targeted "notes-section" instead of "notes"!
    document.getElementById("notes-section").appendChild(newNote);
}

// E) When the Remove Last Note button is clicked:
removeNoteBtn.onclick = function() {
    let currentNotes = document.getElementsByClassName("note");
    if (currentNotes.length > 0) {
        let lastIndex = currentNotes.length - 1;
        currentNotes[lastIndex].remove();
    }
}