import styles from './Inicio.module.css'
import "react-multi-carousel/lib/styles.css";

import videos from "json/posts.json";

import TituloCategoria from 'components/TituloCategoria';
import VideoCarousel from 'components/Carrosel/Slider';
import Banner from 'components/Banner';



function Inicio() {
    const categoria = Array.from ( new Set(videos.map((video) => video.categoryDisplayName)) )

    return (
        <>
            <Banner />
            {categoria.map(c => (
                <section className={styles.slidContainer}>    
                    <section className={styles.cardUm}>
                        <div className={styles.cardDois}>
                            <TituloCategoria texto={c} tamanho='35px' cor='#69953B'/>
                            <h2 className={styles.subTitulo}>Formação {c}</h2>
                        </div>

                    </section>

                    <section className={styles.cardUm}>
            
                        <VideoCarousel categoria={c}/>

                    </section>
                 </section>
            ))}
        </>

    )
} 

export default Inicio;