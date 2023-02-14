import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./ActivityList.css";

const ActivityList = props => {
  return (
    <Row xs={1} md={2} className="g-4">
      {props.data.map((act) => (
        <Col>
          <Card>
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
  );
}

export default ActivityList;