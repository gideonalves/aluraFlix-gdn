// import VideoCard from 'components/Carrosel/VideoCard';
import styles from './Banner.module.css'
import TituloCategoria from 'components/TituloCategoria';

import videos from "json/posts.json";
import { Link } from 'react-router-dom';


function Banner({
    videoImgLink,
    categoryDisplayName,
    title,
    description,
    categoryColor
    }) {
    // const currVideo = videos.filter(video => video.id === id) 
    return  (
        <>
        <div className={styles.banner}
             style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.39), rgba(0, 0, 0, 0.39)), url(${videos[8].videoImgLink})`,
            }}
        >

               <div className={styles.bannerContainer}>                
                <div className={styles.apresentacao}>
                        <TituloCategoria texto={videos[8].categoryDisplayName}/>
                        <h1 className={styles.titulo}>
                            {videos[8].title}
                        </h1>

                        <p className={styles.paragrafo}>            
                            {videos[8].description}
                        </p>

                    </div>

                    <div
                        className={styles.player}
                        style={{
                            border: `2px solid ${categoryColor}`,
                        }}
                    >
                    <Link to={videos[8].videoLink} target="_blank">
                        <img src={videos[8].videoImgLink} alt="foto video" />
                    </Link>

                 
                    </div>  
               </div> 

         </div>           
    </>
    )
}

export default Banner;



