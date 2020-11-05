import React, { useState, useEffect } from 'react';
import { Breadcrumb, Container, Col, Row, Carousel, Button, Modal } from 'react-bootstrap';
import { NavLink, useParams, Redirect } from 'react-router-dom';
import { showOne } from '../utilities/functions';
import Map from './Map';
import MapModal from './MapModal';
import Navigation from './Navigation';

function Page() {
    const [lgShow, setLgShow] = useState(false);
    const [single, setSingle] = useState([])

    let { id } = useParams();
    let { topic } = useParams();

    useEffect(() => {
        showOne(topic, id, setSingle)
    }, [])

    if(topic == "khairulsyazwan" && id == "Mana"){
        return <Redirect to="/" />
    }

    return (
        <div className="page">
        <Navigation />
        <Container>
            <Row>
            <Col md={12}>
                <Breadcrumb>
                <NavLink to={`/${topic}`} className="breadcrumb-item active" style={{textTransform: 'capitalize'}} >{topic}</NavLink>
                <Breadcrumb.Item active>{single.name}</Breadcrumb.Item>
                </Breadcrumb>
            </Col>
            </Row>
            
            <Row>
            <Col md={6}>

                <Carousel className="mh-90">
                <Carousel.Item>
                    <Map topic={topic} id={id} loc={single.location} loc2={single.end} />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-100"
                    src={single.img1}
                    style={{maxHeight: '500px'}}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-100"
                    src={single.bgurl}
                    style={{maxHeight: '500px', height: '500px'}}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-100"
                    src={single.img2}
                    style={{maxHeight: '500px'}}
                    />
                </Carousel.Item>
                </Carousel>

            </Col>
            
            <Col md={6}>
                <h1>{single.name}</h1>
                <h4>{single.address} <Button className="mx-3" variant="light" onClick={() => setLgShow(true)}>Directions</Button></h4> 
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officia id veritatis itaque adipisci ipsa aliquam fuga inventore magnam? Veritatis fuga maxime dignissimos neque fugit explicabo, aliquid saepe minima nostrum autem inventore minus reprehenderit hic at quaerat nobis, fugiat eum rem eaque accusantium.<br/> Voluptate, commodi a quaerat minus exercitationem nobis voluptatum fugit error ipsa aspernatur voluptas laudantium explicabo modi accusantium eos ipsam ab? Blanditiis repellendus modi accusantium illum dolores, tempore, recusandae totam eveniet a reprehenderit, ducimus dolor iste quos mollitia quasi quisquam atque.<br/> Numquam laboriosam quisquam voluptates similique nemo odio voluptas quibusdam sapiente ad excepturi! Quam expedita sapiente nam dolores.</p>


                <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                    Directions to {single.address}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <MapModal add={single.location}/>

                </Modal.Body>
                </Modal>

            </Col>
            </Row>

        </Container>
        </div>
    )
}

export default Page
