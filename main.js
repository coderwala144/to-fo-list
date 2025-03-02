let task = [];

function Add() {
    let temp = {};
    temp.name = document.getElementById("Text").value;
    temp.priority = document.getElementById("Priority").value;

    task.push(temp);

    task.sort(function (a, b) { return a.priority - b.priority; });
    
    // Clear input fields
    document.getElementById('Text').value = "";
    document.getElementById('Priority').value = "";
    
    // Display tasks
    document.getElementById("output").innerHTML = ""; // Clear previous list
    for (let i = 0; i < task.length; i++) {
        let newtask = document.createElement('li');
        newtask.innerText = task[i].name;
        document.getElementById("output").appendChild(newtask);
    }
}
function clearall()
{
   document.getElementById('Text').value = "";
   document.getElementById('Priority').value = "";
    document.getElementById("output").innerHTML = "";

}
