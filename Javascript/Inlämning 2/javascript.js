/*Här skriver ni koden*/

var addBtn = document.getElementById("my-button");
var getList = document.getElementById("list")

console.log (addBtn, getList)

//--------------------------------------------------
addBtn.addEventListener("click", function() {
    
    var inputValue = document.getElementById("task").value
    var makeLi = document.createElement("li");
    var textInput = document.createTextNode(inputValue);

    makeLi.appendChild(textInput);

    if (inputValue === "") {
      alert("Glöm inte att lägga till något på din lista!");
    }
     else 
    {
      getList.appendChild(makeLi);
      document.getElementById("task").value = "";
      
      console.log(makeLi)
    }
    var deletebtn = document.createElement("button");
    var txt = document.createTextNode("\u00D7");
    deletebtn.className = "delete";
    deletebtn.appendChild(txt);
    makeLi.appendChild(deletebtn); 
    

    deletebtn.addEventListener("click", () => {
    var list = document.getElementById("list");  
    list.removeChild(list.childNodes[0]);      
    });


});
