import React, { useState } from "react"
import styles from './NovoVideo.module.css'
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Button from 'components/Button';


import fs from 'fs'

import { useNavigate }  from 'react-router-dom';
import videos from "json/posts.json";


function NovoVideo() {
    
    const [title, setTitle] = useState("");
    const [videoLink, setVideoLink] = useState("");
    const [videoImgLink, setVideoImgLink] = useState("");
    const [description, setDescription] = useState("");
    
    const navigate = useNavigate();

     const onSave = (evento) => {
        evento.preventDefault()
        const novoVideo = {
             title,
             videoLink,
             videoImgLink,
             description
        }
        const novoArray = [
            ...videos
        ]
        console.log(novoArray);
        // videos.push(novoVideo)
        alert('Video criado com sucesso!')
    }
    const currencies = [
        {
          value: 'USD',
          label: '$1',
        },
        {
          value: 'EUR',
          label: '€',
        },
        {
          value: 'BTC',
          label: '฿',
        },
        {
          value: 'JPY',
          label: '¥',
        },
      ];



    return (
        <Container component='article' maxWidth='xl'>
        <h1>Novo Video </h1>
        <form onSubmit={onSave} className={styles.form}>
            <TextField 
                className={styles.input} 
                id="Título" 
                label="Título" 
                variant="filled" 
                fullWidth 
                required
                margin="normal"
                type="text"
                value={title}
                onChange={(ev) => setTitle(ev.target.value)}
            />
            <TextField 
                className={styles.input} 
                id='Link do video' 
                label='Link do video' 
                variant="filled" 
                fullWidth 
                required
                margin="normal"
                type="text"
                value={videoLink}
                onChange={(ev) => setVideoLink(ev.target.value)}
            />
            <TextField 
                className={styles.input} 
                id='Link da imagem do video' 
                label='Link da imagem do video' 
                variant="filled" 
                fullWidth 
                required
                margin="normal"
                type="text"
                value={videoImgLink}
                onChange={(ev) => setVideoImgLink(ev.target.value)}
            />

            <TextField 
                className={styles.input} 
                id='Escolha uma categoria' 
                label='Escolha uma categoria' 
                variant="filled"  
                fullWidth 
                required
                margin="normal"
            />

            <TextField
                    className={styles.input} 
                fullWidth 


                    id="filled-select-currency"
                    select
                    label="Select"
                    defaultValue="EUR"
                    helperText="Please select your currency3"
                    variant="filled"
                    >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
            </TextField>

            <TextField 
                className={styles.input} 
                id='Descrição' 
                label='Descrição' 
                variant="filled"  
                fullWidth 
                required
                margin="normal"
                multiline
                rows={5}
                type="text"
                value={description}
                onChange={(ev) => setDescription(ev.target.value)}
            />

           
            <div className={styles.container}>
                <div className={styles.container__direito}>
                <Button bgcolor="blue">Salvar</Button>
                <Button bgcolor="grey">
                    Limpar
                </Button>
                </div>

                <div className={styles.container__esquerdo}>
                    <Button bgcolor="blue" onClick={() => navigate('/NovaCategoria')}>
                        Nova Categoria     
                    </Button>            

                </div>
            </div>
        </form>
        </Container>
        )
    } 
export default NovoVideo