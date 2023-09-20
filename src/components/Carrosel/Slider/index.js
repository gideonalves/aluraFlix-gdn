import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import styles from "./Slider.module.css";

import videos from "json/posts.json";
import VideoCard from "../VideoCard";

// import VideoCard from "../VideoCard";

export default function VideoCarousel(categoria) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const videosPorCategoria = videos.filter(video => video.categoryDisplayName === categoria.categoria)
  return (

    <Carousel 
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className={styles.cardContainer}
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive}
    >
   
      {videosPorCategoria.map(video => (
          <div >
              <VideoCard  className={styles.card}
                  setId={categoria.setId}
                  id={video.id}
                  key={video.id} 
                  videoCover={video.videoImgLink} 
                  videoLink={video.videoLink}
              /> 
          </div>          
        ))
      }
      
    </Carousel>
  );
}
