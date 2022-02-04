import "./style.css";
// import notepad from "./notepad.jpg"
//  var img = document.createElement("img");
//  img.src = notepad;

//  document.querySelector("#img").append(img)

document.querySelector("form").addEventListener("submit", addNotes);
    
var notes = JSON.parse(localStorage.getItem("allNotes")) || [] ;

function addNotes(event)
{
    event.preventDefault();

    var tittle = document.getElementById("tittle").value;
    var body = document.getElementById("body").value;
 

    var note = {
        tittle: tittle,
        body: body,
       
    };

  notes.push(note);
  //console.log(notes)
  
  localStorage.setItem("allNotes", JSON.stringify(notes));

  displayItems(notes);

 
}

window.addEventListener('load', function()
{
    displayItems(notes);
})


  function displayItems(notes)
  {
      document.querySelector("#notes").textContent = "";
      
      notes.map(function(item, index) 
      {
          var main = document.createElement("div");
          main.setAttribute("id", "main")
          var num = index + 1
          var h2 = document.createElement("h2");
          h2.textContent = "Note" + num;

          var h3 = document.createElement("h3");
          h3.textContent = item.tittle;
          
          var text = document.createElement("p");
          text.textContent = item.body;
          
          var buttons = document.createElement("div")
          buttons.setAttribute("id", "modify")

          var del = document.createElement("button");
          del.innerHTML = "Delete"
         
          
          del.addEventListener("click", function()
          {
              makeDelete(index);
          })

         

          main.append(h2, h3, text, del);

         document.querySelector("#notes").append(main);
          
      })
  }

  


function makeDelete(index)
 {
    

   notes.splice(index, 1); 
    
   localStorage.setItem("allNotes", JSON.stringify(notes)); 

    displayItems(notes); 

 }
