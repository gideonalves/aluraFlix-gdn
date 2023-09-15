import TituloCategoria from 'components/TituloCategoria';
import styles from './Inicio.module.css'
import "react-multi-carousel/lib/styles.css";

import Banner from 'components/Banner';
import VideoCarousel from 'components/Carrosel/Slider';
// import SimpleSlider from 'components/Carrosel/Slider';

// import VideoCard from 'components/Carrosel/VideoCard';

// import posts from 'json/posts.json'

function Inicio() {
    return (
        <>
        <Banner imagem="home" />
        <section className={styles.slidContainer}>

            <section className={styles.cardUm}>
                <div className={styles.cardDois}>
                    <TituloCategoria texto='Front end' tamanho='35px' cor='#69953B'/>
                    <h2 className={styles.subTitulo}>Formação Front end</h2>
                </div>
                
                {/* <SimpleSlider /> */}

            </section>

            <section className={styles.cardUm}>
                    {/* <ul className={styles.cardDois}>
                           {posts.map((post) => (
                               <li key={post.id}>
                                    <VideoCard post={post} />
                                </li>
                           )) } 

                    </ul> */}
                {/* <SimpleSlider /> */}
                <VideoCarousel />

            </section>


            {/* <section className={styles.cardUm}>
                <div className={styles.cardDois}>
                    <TituloCategoria texto='Data Science' tamanho='35px' cor='#69953B'/>
                    <h2 className={styles.subTitulo}>Formação Data Science na Alura</h2>
                </div>
                <SimpleSlider />
            </section>

            <section className={styles.cardUm}>
                <div className={styles.cardDois}>
                    <TituloCategoria texto='Mobile' tamanho='35px' cor='#ffba05'/>
                    <h2 className={styles.subTitulo}>Formação Mobile da Alura</h2>
                </div>
                <SimpleSlider />
            </section> */}
        </section>
        </>

    )
} 

export default Inicio;