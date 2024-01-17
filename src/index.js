document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const input = document.getElementById('new-task-description').value;
    handleTodos(input);
    
    form.reset();
  });

  function handleTodos(description) {
    const newTask = document.createElement('li');
    
    const deleteButton = document.createElement('button');
    deleteButton.addEventListener("click", handleDelete);
    deleteButton.textContent = "X";
    
    newTask.textContent = description;
    newTask.appendChild(deleteButton);
    
    document.querySelector('#tasks').appendChild(newTask);
    console.log(description);
  }

  function handleDelete(e) {
    e.target.parentNode.remove();
  }
});
