
// select the Elements 
const clearlist = document.querySelector("#clear");
const dateElement = document.getElementById("date");
 const list = document.getElementById("list");
 const input = document.getElementById("input");
 const content = document.getElementById("content");
//  classes names
let trash = document.getElementById("trash")
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle";
const LINE_THROUGH = ".lineThrough";



// variables
let LIST, id;

// get item from local Storage
let data = localStorage.getItem("TODO");

// check if data is empty
if(data){
    LIST = JSON.parse(data);
    id = LIST.length;
    loadList(LIST);
}else{
    LIST=[];
    id = 0;
}

// load items to User InterFace
function loadList(array){
    array.forEach(function(item){
        addToDo(item.name, item.id, item.done, item.trash);
    })
} 
// clear the localStorage
clear.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
});

// date
const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
dateElement.innerHTML = today.toLocaleString(undefined, options);

// add to do function
function addToDo(toDo, id, done, trash){
    if(trash){return;}
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "" ;
const item =`
              
               <div class="theList">
                <li class="item">
                <input type="checkbox" class ="check_me" >
                <i class="${DONE}" job="complete" id="${id}"></i>
                <p class="text" ${LINE}> ${toDo}</p>
                <div id=trash_wrap>
                <i class="fas fa-trash-alt" job="delete" id="${id}"></i> 
                </div>
                </li>
                </div>
                `;
const position = "beforeend";

list.insertAdjacentHTML(position,item);
}
// add item to list using enter\

input.addEventListener("change", inputs);
function inputs(){
    let toDo = input.value;

    //    if input isn't empty
        if(toDo){
            addToDo(toDo, id, false, false);

            LIST.push({
                name : toDo,
                id : id,
                done : false,
                trash : false

            });
            // add item to localstorage
        localStorage.setItem("TODO", JSON.stringify(LIST));

            id++;
        }
        input.value = "";

    }
// target the items created dynamically
list.addEventListener("click" , function(){
  
        deleteList();
   
}) ;


function deleteList() {
    var off = document.getElementsByClassName("item");
     
    let itemlist = document.querySelectorAll("#trash_wrap");

    for (var i = 0; i <  itemlist.length; i++) {
        itemlist[i].addEventListener("click", function () {
            var listParent = this.parentElement;
            listParent.remove(); 

            // add item to localstorage
        localStorage.setItem("TODO", JSON.stringify(LIST));
          
        });
    }
}












































































