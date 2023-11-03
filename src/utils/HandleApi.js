import axios from "axios";

const baseUrl = "http://localhost:8080/api/todos"

const getAllTodo = (setTodoData) => {
    axios.get(`${baseUrl}/getall`)
    .then(({data}) => {
        console.log("data getalltodo ----> ", data );
        setTodoData(data);
    });
}

const addTodo = (text, setText, setTodoData) => {
    axios.post(`${baseUrl}/createnew`, {text})
    .then((data) => {
        console.log("data add todo -----> ",data);
        setText("");
        getAllTodo(setTodoData)
    })
    .catch((err) => console.log(err))
}

const updateTodo = (todoId, text, setTodoData, setText, setIsUpdating) => {
    axios.put(`${baseUrl}/update/${todoId}`, { text })
    .then((data) => {
        console.log("data updated put -----> ",data);
        setText("");
        setIsUpdating(false);
        getAllTodo(setTodoData);
    })
    .catch((err) => console.log(err))
}

const deleteTodo = (todoId, setTodoData) => {
    axios.delete(`${baseUrl}/delete/${todoId}`)
    .then((data) => {
        console.log("data deleted -----> ",data);
        getAllTodo(setTodoData);
    })
    .catch((err) => console.log(err))
}


export { getAllTodo, addTodo, updateTodo, deleteTodo }