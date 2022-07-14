import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card2 from "./Card";
import categories from "./categories";
import products from './products.json';
import {useState} from "react";
function NavScrollExample() {
  const[name1,setName1]=useState("");
  const[name2,setName2]=useState('');
  const[name3,setName3]=useState(false);
  const[name4,setName4]=useState(null);
    const v = products.filter(v2 => {
        if (!name3){
          return v2.discount !== null
        }
        else if (name4 !== null ){
          return v2.category_id === name4.id

        }
        if (v2.title.toLowerCase().includes(name1.toLowerCase())){
          return true
        }else {
          return false
      }

    })


  return <>
    <Navbar variant={"dark"} bg={"dark"} expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">ProMarket</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
              className="me-auto my-2 my-lg-0"
              style={{maxHeight: '100px'}}
              navbarScroll
          >
            <Nav.Link href="#action1" onClick={() => setName3(true)}>Главная </Nav.Link>
            <Nav.Link href="#action2" onClick={() =>{
              setName3(false)
              setName4(true)
            }}>скидки</Nav.Link>

            <NavDropdown  title="Катигории" id="navbarScrollingDropdown">
              {categories.map(i => {
                  return (
                      <NavDropdown.Item
                          onClick={ () =>{
                            setName4(i)
                            setName3(true)
                          }}
                          href="#action3" >
                        {i.short_title}
                      </NavDropdown.Item>)

              })}


          </NavDropdown>
            <Nav.Link href="#" disabled>
              другое
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
                onChange={v3 => setName2(v3.target.value)}
                type="search"
                placeholder="что ищете ?"
                className="me-2"
                aria-label="Search"
                value={name2}
            />
            <Button variant="primary" onClick={() => {setName1(name2)}}>Найти</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {!name4 ? null: <div className={'text'}>{name4.title}</div>}
    {name3 ? null: <div className={'text'}>cкидки</div>}

      <Card2 v={v}/>
  </>;
}
export default NavScrollExample;


