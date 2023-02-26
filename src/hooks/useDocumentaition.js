import { useState, useEffect } from 'react'

const useDocumentaition = () => {

    const oldDocs = JSON.parse(localStorage.getItem('documentation') || "[]");

    const [documentation, setDocumentation] = useState(oldDocs);
    const [state, setState] = useState('idle');

    useEffect(() => {
        if (state === 'idle' && documentation.length === 0) {
            setState('laoding');
            fetch("http://localhost:3000/documentation.json")
                .then((resp) => resp.json())

                .then((data) => {
                    setState('success');
                    localStorage.setItem('documentation', JSON.stringify(data));
                    setDocumentation(data);
                })

        }
    }, [state])
    return {
        documentation, state
    };
}

export default useDocumentaition