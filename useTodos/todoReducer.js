
//Un reducer no es más que una función que nos retorna un nuevo estado
//además recibe dos parámetros, el primero es el estado anterior y el segundo
//es la accion que se va a realizar para cambiar el estado
export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case "[TODO] Add Todo":
            return [...initialState, action.payload]

        case "[TODO] Remove Todo":
            //el filter crea un nuevo arregla y no hace mutacion
            return initialState.filter(todo => todo.id!=action.payload.id)

        case "[TODO] Toggle Todo":
            return initialState.map( todo => {
                if(todo.id===action.payload.id){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo
            })
            

        default:
            return initialState;
    }


}