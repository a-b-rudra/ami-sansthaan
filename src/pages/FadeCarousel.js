import Carousel from "react-bootstrap/Carousel";

const FadeCarousel = props => {
  
  const images = props.data.map((imgsrc) => (
    <Carousel.Item interval={1500} key={imgsrc.caption}>
      <img
        className="d-block w-100"
        style={{height:"80%", width:"80%", paddingLeft:"10%", paddingRight: "10%"}}
        src={`${imgsrc.src}`}
        alt={`Alt text ${imgsrc.caption}`}
      />
      <Carousel.Caption>
        <h3>{imgsrc.caption}</h3>
      </Carousel.Caption>
    </Carousel.Item>
  ));
  return <Carousel fade interval={3}>{images}</Carousel>;
}

export default FadeCarousel;
