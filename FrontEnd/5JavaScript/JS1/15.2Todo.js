const todo = [];
let taskData = prompt('Enter your task that you would like to do')
while (true) {

    if (taskData == 'quit') {
        console.log('Qutting app')
        break;
    }
    if (taskData == 'list') {
        console.log('-----------')
        for (let i=0;i<todo.length;i++) {
            console.log(todo[i])
        }
        console.log('---------')
    }
    else if (taskData == 'add') {
        let task = prompt('plaease enter todo things');
        todo.push(task)
        console.log('task added')
    } else if (taskData == 'delete') {
        let indexOFdata = prompt('Index')
        todo.splice(indexOFdata, 1)
        console.log('Deleted')
    }
    taskData = prompt('Enter your task that you would like to do')
}
