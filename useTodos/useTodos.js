import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"


let initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: "Recolectar la piedra del alma",
    //     done: false
    // },
]

const init = () => {
    
    return JSON.parse(localStorage.getItem("todos")) || []
    
}


const useTodos = () => {

    //mas de un reducer usar dispatchTodoAction o dispatchTodo
    //si es solo un reducer usar dispatch

    //es como un usestate que al cambiar el estado se reinicia el componente
    //al inicio todos = initialState
    //dispatch es la funcion que se va a ejecutar para cambiar el estado
    //y le tenemos que mandar al reducer una accion
    //la función init nos sirve para inicializar el initialState y se ejecuta
    //solo una vez, usualmente se lo usa cuando la carga inicial es pesada
    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    //agregar un efecto secundario para agregar los todos al localstorage
    useEffect(() => {
        localStorage.setItem("todos",JSON.stringify(todos))

    }, [todos])


    const handleNewTodo = (todo) => {
        const action = {
            type: "[TODO] Add Todo",
            payload: todo
        }

        dispatch(action);
    }

    const handleDeleteTodo = (todo) => {
        const action = {
            type : "[TODO] Remove Todo",
            payload: todo
        }

        dispatch(action)
    }

    const handleToggleTodo = (todo) => {
        const action = {
            type : "[TODO] Toggle Todo",
            payload: todo
        }

        dispatch(action)
    }


    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingCount: todos.filter(todo => !todo.done).length
    }
}


export{
    useTodos
}