import { useState } from "react"


//custom hook no es mas que una función personalizada
//la cual sirve como código reutilizable

//este custom hook va a poder ser utilizado por muchos otros componentes

/* Un Hook personalizado es una función de JavaScript cuyo nombre comienza con ”use” y que puede llamar a otros Hooks.*/

//al cambiar el estado de un custom hook, se vuelve a llamar(reiniciar)
//toda la función que implementó el custom hook y tambien el componente
//que implementó el custom hook.


//los parametros que contengan este customHoook permanecerán inmutables
//es como los props de los componentes.
export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)

    const incrementar = (value = 1) => {
        setCounter(counter + value);
    }

    const disminuir = (value = 1) => {
        if (counter === 0) {
            return
        }
        setCounter(counter - value);
    }

    const reset = () => {
        setCounter(initialValue)
    }
    
    return {
        counter,
        incrementar,
        disminuir,
        reset
    }
}