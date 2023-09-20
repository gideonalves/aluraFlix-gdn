import { Link } from "react-router-dom";
import styles from "./VideoCard.module.css";



function VideoCard({ videoLink, videoCover, id, setId }) {
 
  const handleButtonClick = (e) => {
    e.preventDefault()
 
    setId(e.currentTarget.id);
  }

  return (
    <Link 
      id={id}
      to={videoLink} 
      onClick={handleButtonClick}
      // target="_blank"
    >
      <div className={styles.videoCard}>
        <img
          className={styles.capa}
          src={videoCover}
          alt="Capa do Video"
        />
      </div>
    </Link>
  );
}

export default VideoCard;
