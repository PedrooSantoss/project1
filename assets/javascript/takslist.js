let takIndex = -1

class Task {
    constructor(id, title, status) {
        this
.id = id;
        this.title = title;
        this.status = status;
    }
}

class TaskList {
    constructor(){
this.tasks =[]
}
addPost(tasks)
}

function randomID() {
    let id = Math.floor(Math.random() * 9999)
}

const taskList = new TaskList()

function creatTask() {
    let title = document.getElementById("resume").value;
    const nuevo = new Task(randomID(), title, false)
    taskList.addPost(nuevo)

}
function cleanFields() {
    document.getElementById("resume").value = "";
}

function showPosts() {
    creatTask()
    let showContent = "";

    taskList.tasks.forEach((nuevo, index) => {
        showContent += `
        <div class="itemPost">
        <div class="textItem">
            <p class="textPost">${nuevo.title}</p>
        </div>
        <div class="buttonArea">
            <button onclick="verifyPost(${index})" class="checkButton"><i class="fa-solid fa-check"></i></button>
            <button onclick="editPost(${index})" class="editButton"><i class="fa-solid fa-pen"></i></button>
            <button onclick="removePost(${index})" class="deletButton"><i class="fa-solid fa-trash"></i></button>
        </div>
    </div>
            `;
    });

    document.getElementById("postForm").innerHTML = showContent;
    title = document.getElementById("resume").value= "";
}
function removePost(index){
    taskList.tasks.splice(index, 1);
    showPosts();

}

