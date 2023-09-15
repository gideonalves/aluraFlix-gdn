import styles from './Banner.module.css'
import TituloCategoria from 'components/TituloCategoria';

function Banner({imagem}) {
    return  (
        <>
        <div className={styles.banner}
             style={{ backgroundImage: `url('/imagens/banner-${imagem}.png')`}}>

               <div className={styles.bannerContainer}>                
                <div className={styles.apresentacao}>
                        <TituloCategoria texto='Front end'/>
                            
                        <h1 className={styles.titulo}>
                            SEO com React
                        </h1>

                        <p className={styles.paragrafo}>            
                            Esse desafio é uma forma de aprendizado.
                            É um mecanismo onde você pode se engajar na resolução 
                            de um problema para poder aplicar todo o conhecimento
                            adquirido na Formação React.
                        </p>

                    </div>

                    <div className={styles.video}>
                        {/* <iframe 
                            src="https://www.youtube.com/embed/iS6GXPbhCwU?si=D2QAYNDVvsTqKrlR" 
                            title="YouTube video player" 
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
                        </iframe>              */}
                    </div>  
               </div> 

         </div>           
    </>
    )
}

export default Banner;



