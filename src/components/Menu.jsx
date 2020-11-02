import { useParams } from "react-router-dom";
import React, { useEffect } from 'react';
import { getData } from "../utilities/functions";
import CardDisplay from "./CardDisplay";


function Menu({info, setInfo}) {

    let { topic } = useParams();

    useEffect(() => {
        getData(topic, setInfo)
      }, [])


    return (
        <>
        <CardDisplay info={info} topic={topic}/>
        </>
    )
}

export default Menu
