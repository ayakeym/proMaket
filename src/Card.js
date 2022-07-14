import Button from 'react-bootstrap/Button';
import products from './products.json'
import React from "react";
import Card from 'react-bootstrap/Card';
import {Container, Row, Col} from 'react-bootstrap';

function Card2(props) {
    return (

        <>
            <Container>
                <Row>
                    {props.v.map(item => {
                        return (
                            <Col md={3}>
                                <div style={{
                                    marginTop:'25px',
                                    display:'flex',
                                    justifyContent:'center',
                                }}>
                                    <Card style={{
                                        width: '18rem',
                                        position: 'relative',
                                        overflow: "hidden",


                                    }}>
                                        { item.discount != null? <div className={'ckidka'}>{item.discount}%</div>:null }
                                        <div style={{
                                            marginTop:'15px',
                                            marginLeft:'10px',
                                            width:'auto',
                                            height:'200px',
                                            backgroundImage: `url(https://api.office.promarket.besoft.kg/${item.main_image.path.original})`,
                                            backgroundSize:'contain',
                                            backgroundPosition:'center',
                                            backgroundRepeat:'no-repeat'

                                        }}>
                                            </div>
                                        <Card.Body className={'box'}>

                                            <Card.Title>{item.title}</Card.Title>

                                            { item.discount === null? (
                                                <Button className={'btn'} >{item.price} com</Button>
                                            ):(
                                                <>
                                                    <Button className={'btn'} >{item.price-(item.price / 100 * item.discount)} com</Button>
                                                    <s className={'textp'}>{item.price }com</s>
                                                </>
                                            )}
                                        </Card.Body>
                                </Card>
                            </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </>

    );
}

export default Card2;