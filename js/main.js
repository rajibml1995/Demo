showNotes();
let addBtn = document.getElementById('addBtn');

addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = document.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes)
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notes));
    addTxt = "";
    console.log(notesObj);

    showNotes();
});
//function to show elements from the localstorage
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes)
    }
    let html = "";
    notes.array.forEach(element => {
        html = `
        <div class="notecard mx-2 my-2" style="width: 18rem;">
               
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text">${element}</p>
           <button id=${index} onclick="deleteNote(this.id)" class="btn btn-primary">delete Note</button>
        </div>
      </div>
        `
    });
    let noesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHtml = html;
    } else {
        notesElm.innerHtml = `nothing to show "add a note" `
    }
}

//function to delete node
function deleteNote(index) {
    console.log("i am deleting ");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes)
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    showNotes();
}
let searchText = document.getElementById("searchText");
search.addEventListener("input", function () {
    let inputVal = search.value.toLowerCase();
    console.log("input event fired", inputVal);
    let noteCard = document.getElementsByClassName("notecard");
    array.from(noteCard).forEach(function (element) {
        let cardText = element.getElementByTagName("p")[0];
        if (cardText.includes(inputVal)) {
            element.style.display = block;
        } else {
            element.style.display = none;

        }

    });
});