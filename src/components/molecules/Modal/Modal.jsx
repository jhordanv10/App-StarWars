import React, { useState, useEffect} from "react";


export default function Modal(id) {
    
    const [people, setPeople] = useState([])

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${id}/`)
            .then(response => response.json())
            .then(json => {
                setPeople(json)
                console.log(json);
            })
    }, [])
    return console.log(people);
};
