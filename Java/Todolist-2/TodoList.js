
////////////////////////////////// Profishional todo list with syntax explanation /////////////////////////////////////
    // Printing Function to display data 
    // checkbox in the form to controle iscomplete value
    // button to filter by completed
let todo=[
    {
        id:1,
        text:'Take Out Trash',
        isComplete:true
    },
    {
        id:2,
        text:'Meeting with boss',
        isComplete:false
    },
    {
        id:3,
        text:'Dentist app',
        isComplete:true
    }
 ]
const display = document.getElementById('display')
const filter = document.getElementById('Filter')
const form= document.getElementById('form')

function Printing(array){
    display.innerHTML=''
    array.forEach(function(element){
        display.innerHTML+=`<h1>${element.id}</h1> 
                        <p>${element.text}</p>
                        <p>${element.isComplete==true ? 'Done' : 'Not Done'}</p>
                        <button value=${element.id}>Delete</button>`
    })
}
Printing(todo)

filter.addEventListener('click' , function(){
    let newtodo=todo.filter(function (element){
            return element.isComplete==true
    })
    Printing(newtodo)
})


form.addEventListener('submit', function(e){
    e.preventDefault()
    todotext=e.target.todotext.value
    iscompleteValue=e.target.checkbox.checked
    let todobj={
        id:todo[todo.length-1].id+1,
        text:todotext,
        isComplete:iscompleteValue
    }
    todo.push(todobj)
    Printing(todo)
    // e.target.todotext.value=''
    // e.target.checkbox.checked=false
    form.reset()
})

display.addEventListener('click' , function(e){
    let deleteId=e.target.value
    todo=todo.filter(function(element){
        return element.id!=deleteId
     })
     Printing(todo)
})