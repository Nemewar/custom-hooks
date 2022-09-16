import { useState } from "react"


export const useForm = (initialForm={}) => {

    const [formState, setformState] = useState(initialForm)

    

    const onFormState = (ev) => {
        const { name, value } = ev.target;
        setformState({
            ...formState,
            [name]: value
        })
    }

    const onReset = (ev) => {
        setformState(initialForm);
    }

    return {
        ...formState,
        formState,
        onFormState,
        onReset
    }

}