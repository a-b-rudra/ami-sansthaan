import Carousel from "react-bootstrap/Carousel";

function CarouselFadeExample(props) {
  const images = props.data.map((imgsrc) => (
    <Carousel.Item interval={1500}>
      <img
        className="d-block w-100"
        style={{maxHeight:"100vh", width:"100%"}}
        src={`${imgsrc.src}`}
        alt={`Alt text ${imgsrc.caption}`}
      />
      <Carousel.Caption>
        <h3>{imgsrc.caption}</h3>
      </Carousel.Caption>
    </Carousel.Item>
  ));
  return <Carousel fade>{images}</Carousel>;
}

export default CarouselFadeExample;
