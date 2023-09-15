import { Link } from "react-router-dom";

import styles from './VideoCard.module.css'

function VideoCard({ id, videoLink, videoImgLink}) {
  return  (
    <Link to={videoLink} target="_blank">
      <div 
        className={styles.videoCard}>
          <img
            className={styles.capa}
            src={videoImgLink}
            alt='Imagem de capa do post'
          />
          
      </div>
    </Link>

  )
}

export default VideoCard

