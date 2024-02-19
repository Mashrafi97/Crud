let input = document.querySelector(".input")
let add = document.querySelector(".add")
let valuebtn = document.querySelector(".valuebtn")
let update = document.querySelector(".update")
let data = [];
let id;

add.addEventListener("click",()=>{
    if(input.value){
        data.push(input.value)
        addtodo()
        input.value = ""
    }
})
update.addEventListener("click",()=>{
    if(input.value){
    data [id] = input.value
    addtodo()
    input.value = ""
    }
})
function addtodo(){
    valuebtn.innerHTML = ""
    data.map((item)=>{
    valuebtn.innerHTML += `<li>${item} <button class="delete">Delete</button><button class="edit">Edit</button></li>`
    })
let deletesingle = document.querySelectorAll(".delete")
let editsingle = document.querySelectorAll(".edit")
let deleteArr = Array.from (deletesingle)
let editArr = Array.from (editsingle)
deleteArr.map((itemdelete , index)=>{
    itemdelete.addEventListener("click",()=>{
        data.splice (index , 1)
        addtodo()
    })
})
editArr.map((itemedit , index)=>{
    itemedit.addEventListener("click",()=>{
        input.value = data[index]
        id = index
        addtodo()
    })
})
}
