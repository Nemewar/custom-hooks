import { useEffect, useState } from "react";


export const useFetch = (url) => {

    //primera vez que se renderiza el componente -> se salta al return
    const [state, setState] = useState({
        data: undefined,
        isLoading : true,
        hasErrors: null
    })

    const getFetch = async () => {
        
        //segunda vez 
        setState({
            ...state,
            isLoading:true
        })

        const resp = await fetch(url);
        const data = await resp.json();

        //tercera vez
        setState({
            data,
            isLoading:false,
            hasErrors:null
        })
    }

    useEffect(() => {

        getFetch();

    }, [url])


    return {
        data: state.data,
        isLoading: state.isLoading,
        hasErrors : state.hasErrors
    }; 
}
