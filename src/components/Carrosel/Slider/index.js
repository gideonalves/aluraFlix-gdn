import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import styles from "./Slider.module.css";

import videos from 'json/posts.json'
// import VideoCard from "../VideoCard";

console.log(videos);


export default function VideoCarousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

return (
    <Carousel className={styles.cardContainer} responsive={responsive}>
          <div className={styles.card}>item 1</div>
          <div className={styles.card}>Item 2</div>
          <div className={styles.card}>Item 3</div>
          <div className={styles.card}>Item 4</div>
          <div className={styles.card}>Item 1</div>
          <div className={styles.card}>Item 2</div>
          <div className={styles.card}>Item 3</div>
          <div className={styles.card}>Item 4</div>

          {/* {videos.map((video) => {
             return (<div className={styles.card}>
                <VideoCard 
                key={video.id}
                videoLink={video.videoImgLink}/>
              </div>)
          })}        */}
    </Carousel>
)
}

// import Slider from "react-slick";

// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import styles from "./Slider.module.css";
// import VideoCard from "../VideoCard";

// import posts from 'json/posts.json'


// function SimpleSlider() {
  
//     const settings = {
//       className: "center",
//       centerMode: true,
//       infinite: true,
//       centerPadding: "10px",
//       slidesToShow: 3,
//       speed: 500,
//       // arrows: false
      
//     };
//     return (
//       <div className={styles.carrossel}>
//         <Slider {...settings}>
          
//                 {posts.map((post) => (
//                     <div key={post.id}>
//                         <VideoCard post={post} />
//                     </div>
//                 )) } 
                       
//         </Slider>
//       </div>
//     );
//   }


// export default SimpleSlider;