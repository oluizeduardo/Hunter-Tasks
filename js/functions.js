var Functions = (function () {


    function getProjectName() {
        var projectName = document.getElementById('project-name');
        return projectName.value;
    }


    // Create a new list item with the text specific.
    function createListItem(text) {
        var listItem = document.createElement('li');
        listItem.innerHTML = text;
        return listItem;
    }

    function createButton(text) {
        var btn = document.createElement('input');
        btn.type = 'button';
        btn.value = text;
        return btn;
    }


    function addProject(event) {
        event.preventDefault();
        var projectName = getProjectName();
        var listitem = createListItem(projectName+' '); 
        var btnAddTask = createButton('Add Task');   
        document.getElementById("list-projects").appendChild(listitem).appendChild(btnAddTask);
    }



    function addListener(){
        var btn = document.getElementById("btn");
        btn.addEventListener("click", addProject);
    }


    addListener();


})();







