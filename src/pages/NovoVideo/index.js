import React from "react"
import styles from './NovoVideo.module.css'
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import ButtonFlix from "components/Button";


function NovoVideo() {
    return (
        <Container component='article' maxWidth='xl'>
        <h1>Novo Video </h1>
        <form className={styles.form}>
            <TextField className={styles.input} id="Título" label="nome" variant="filled" fullWidth margin="normal"/>
            <TextField className={styles.input} id='Link do video' label='Link do video' variant="filled" fullWidth margin="normal"/>

        
            <TextField className={styles.input} id='Escolha uma categoria' label='Escolha uma categoria' variant="filled"  fullWidth margin="normal"/>
            <TextField className={styles.input} id='Descrição' label='Descrição' variant="filled"  fullWidth margin="normal"/>
            <TextField className={styles.input} id='Código de segurança' label='Código de segurança' variant="filled" fullWidth margin="normal"/>
           
         
            <ButtonFlix texto='Salvar' m='15px'/>
            <ButtonFlix texto='Limpar' cor='var(--color-black-lighter)'/>
            <ButtonFlix texto='Nova Categoria' />
        </form>
        </Container>
        )
    } 
export default NovoVideo