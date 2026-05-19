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
//////////////////////////////////// Normal todo list with syntax explanation /////////////////////////////////////
const div = document.getElementById('dis')
const btn = document.getElementById('btn')

// display and delete last element
todo.forEach(function(item){
    // let h = document.createElement('h1')
    // let p = document.createElement('p')
    // h.innerText=item.id
    // p.innerText = item.text
    // div.append(h,p)
    div.innerHTML+=`<div class='items'>
                    <h1>${item.id}. ${item.text} </h1>
                     <p>${item.isComplete}</p> 
                     <button class="btn2" value=${item.id}>Delete</button> 
                     </div>`
})
btn.addEventListener('click', function(){
    div.lastChild.remove()
})

// delete Certain element
div.addEventListener('click',function(e){
     id=e.target.value                   // not necessery but good to keep sync with the page
     todo=todo.filter(function(item){
         return item.id!=id
    })
    e.target.parentElement.remove();})


// form with displaying input
const form=document.getElementById('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    todoelement={id:todo.length==0 ? 0 :todo[todo.length-1].id+1  ,text:e.target.text.value , isComplete:e.target.isComplete.checked }
    todo.push(todoelement)
    dis.innerHTML=''
    todo.forEach((item)=>{
    dis.innerHTML+= `<div class='items'>
                     <h1>${item.text}</h1>
                     <h4>${item.isComplete? 'Done': 'not done'}</h4>
                     <button value=${item.id}> Delete item</button>
                     </div>`
    form.reset()
})
})
