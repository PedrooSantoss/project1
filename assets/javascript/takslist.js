class Task{
    constructor(id, title, status){
        this.id = id;
        this.title = title;
        this.status = status
    }
}
class TaskList{

}
function randonId(){
    return Math.floor(math.randon * 9999)
}
function creatTask(){
    let title = document.getElementById("newTask").value
    let task = new TextTrackList(randonId(), title, false)

    TaskList.addTask(task);

    document.getElementById("newTask").value = "";
}