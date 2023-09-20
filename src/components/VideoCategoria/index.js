// import styles from './Titulo.module.css'

import Banner from "components/Banner"

function VideoCategoria({categoria, videos}) {
    const videosCategorias = videos.filter(video => video.categoryName === categoria)

    return (

      
        <>
        <div>
            {categoria}
        </div>
        <div>
            {videosCategorias.map(vc => (
                <Banner 
                    categoria={categoria} 
                    descricao={vc.description} 
                    titulo={vc.title}
                    imagem={vc.videoImgLink} 
                    key={vc.id}
                />
            ))}
        </div>
        </>
    )
}

export default VideoCategoria


