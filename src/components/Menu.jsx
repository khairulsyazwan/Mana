import { useParams } from "react-router-dom";
import React, { useEffect } from 'react';
import { getData } from "../utilities/functions";
import CardDisplay from "./CardDisplay";
import Navigation from "./Navigation";
import { Container } from "react-bootstrap";


function Menu({info, setInfo}) {

    let { topic } = useParams();

    useEffect(() => {
        getData(topic, setInfo)
      }, [])


    return (
        <div className="menu">
        <Navigation />
        {topic === "places" ? 
        <Container><h1 className="font-weight-bold">Places</h1><p>IG worthy spots for your next post. Or just come round to chill and hangout.</p></Container> : 
        <Container><h1 className="font-weight-bold">Roads</h1><p>It's a small island afterall. These roads will make do.</p></Container>}
        
        
        <CardDisplay info={info} topic={topic}/>
        </div>
    )
}

export default Menu
