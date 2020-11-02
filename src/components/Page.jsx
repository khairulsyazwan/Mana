import React, { useState, useEffect } from 'react';
import { Breadcrumb, Container, Col, Row } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';
import { showLat, showOne } from '../utilities/functions';
import Map from './Map';



function Page() {

    const [single, setSingle] = useState([])

    let { id } = useParams();
    let { topic } = useParams();

    useEffect(() => {
        showOne(topic, id, setSingle)
        console.log("done");
    }, [])

    // console.log(single.location.getLatitude());

    

    return (
        <Container>
            <Row>
            <Col md={12}>
            <Breadcrumb>
            <NavLink to={`/${topic}`} className="breadcrumb-item active">{topic}</NavLink>
            <Breadcrumb.Item active>{single.name}</Breadcrumb.Item>
            </Breadcrumb>
            </Col>
            </Row>
            
            <Row>
            <Col md={6}>
                <img src="https://images.unsplash.com/photo-1543839482-a95d35fc5a77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80" class="img-fluid"></img>
                <Map topic={topic} id={id} />
            </Col>
            
            <Col md={6}>
                <h1>{single.name}</h1>
                <h4>{single.address}</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officia id veritatis itaque adipisci ipsa aliquam fuga inventore magnam? Veritatis fuga maxime dignissimos neque fugit explicabo, aliquid saepe minima nostrum autem inventore minus reprehenderit hic at quaerat nobis, fugiat eum rem eaque accusantium. Voluptate, commodi a quaerat minus exercitationem nobis voluptatum fugit error ipsa aspernatur voluptas laudantium explicabo modi accusantium eos ipsam ab? Blanditiis repellendus modi accusantium illum dolores, tempore, recusandae totam eveniet a reprehenderit, ducimus dolor iste quos mollitia quasi quisquam atque. Numquam laboriosam quisquam voluptates similique nemo odio voluptas quibusdam sapiente ad excepturi! Quam expedita sapiente nam dolores.</p>
            </Col>
            </Row>


        </Container>
    )
}

export default Page
