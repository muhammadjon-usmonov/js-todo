var elForm = document.querySelector('.form');
var elInput = document.querySelector('.input');
var elTodosList = document.querySelector('.todos__list');


var todos = ['get up', ];



function renderTodos(todosArr,elements){

    // add newtodo
    for(var i=0; i<todosArr.length; i++){

        var newli = document.createElement('li')
        var newInput = document.createElement('input')
        var newspan=document.createElement('span');
        var newbutton=document.createElement('button');

        // todoga setAttribute
        newli.setAttribute('class', 'todos__item');
        newInput.setAttribute('type', 'checkbox');
        newInput.setAttribute('class', 'todos__input');
        newspan.setAttribute('class', 'todos__item__text');
        newbutton.setAttribute('class', 'todos__button');




        newspan.textContent = todosArr[i]; 
        newbutton.textContent="del"

        // newliga elements yuklash
        elements.appendChild(newli);
        newli.appendChild(newInput);
        newli.appendChild(newspan);
        newli.appendChild(newbutton);

    }


}
    // todo function ishlatish
    renderTodos(todos, elTodosList)

    
    function handleFormSubmit(evt){
        evt.preventDefault();
        
        elTodosList.innerHTML = null;
        var todosInput=elInput.value.trim();
        
        todos.push(todosInput);
        
        renderTodos(todos, elTodosList)
        
        elInput.value=null;
    
}
    // submit eshitish uchun 

elForm .addEventListener('submit',handleFormSubmit )