// get add button from index.html: addTask
const addTask = document.querySelector("#addTask");

// get to-do-container from index.html: taskList
const taskList = document.querySelector("#taskList");

// create function to add task to unordered list
const addListItem = () => {
    // get value from input element of type text in index.html: taskInput
    const taskInput = document.querySelector("#taskInput");

    if(taskInput.value != ""){ // if we have not been given an empty string
        // create new list item to append to ul
        const listItem = document.createElement("li");
        
        // set inner text of new list item to user input
        listItem.innerText = taskInput.value;

        // append listItem to taskList
        taskList.append(listItem);
    } // else do nothing
}

addTask.addEventListener("click", addListItem);