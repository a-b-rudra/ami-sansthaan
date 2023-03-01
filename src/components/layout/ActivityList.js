import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./ActivityList.css";
import Modal from './Modal';
import { Button } from 'react-bootstrap';

const ActivityList = props => {
  const [show, setShow] = useState(false)
  const [activities, setActivities] = useState([])
  const [activity, setActivity] = useState({})

  const actHandler = act=>{
    setShow(true)
    setActivity(act)
  } 

  const closeModal = ()=>{
    setShow(false)
    setActivity({})
  }
  
  return (
    <div>
    
    <Row xs={1} md={2} className="g-4">
      {props.data.map((act, index) => (
        <Col>
          <Card key={index} onClick={()=>actHandler(act)}> 
            <Card.Img className="card-img-new" variant="top" src={act.img} />
            <Card.Body >
              <Card.Title>{act.title}</Card.Title>
              <Card.Text>
                {act.body}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col> 
      ))}
  
    </Row> 

    {show?<Modal data={activity} show={show} closeModal={closeModal}/>:null}
    </div>
  );
}

export default ActivityList;