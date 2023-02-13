import Carousel from "react-bootstrap/Carousel";
import "./FadeCarousel.css";

const FadeCarousel = props => {
  
  const images = props.data.map((imgsrc) => (
    <Carousel.Item interval={1000} key={imgsrc.caption}>
      <img
        className="d-block"
        style={{height:"40", width:"40", marginLeft:"25%", marginRight: "10%"}}
        src={`${imgsrc.src}`}
        alt={`Alt text ${imgsrc.caption}`}
      />
    </Carousel.Item>
  ));
  return <Carousel fade interval={3}>{images}</Carousel>;
}

export default FadeCarousel;
