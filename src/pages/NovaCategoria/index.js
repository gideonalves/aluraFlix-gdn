import React from "react"
import styles from './NovaCategoria.module.css'
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from 'components/Button';

function NovaCategoria() {
  
    return (
        <Container component='article' maxWidth='xl'>
            <h1>Nova Categoria</h1>
            <form className={styles.form}>
                <TextField 
                    className={styles.input} 
                    id="Título" 
                    label="nome" 
                    variant="filled" 
                    fullWidth 
                    margin="normal"
                    type="text"
                />
        
                <TextField 
                    className={styles.input} 
                    id='Descrição' 
                    label='Todos os vídeo da área de Front End juntarei nessa categoria para organizar os estudos que venho fazendo atualmente' 
                    variant="filled"  
                    fullWidth 
                    margin="normal"
                    multiline
                    type="text"
                    rows={5}
                />
        
                <div className={styles.inputColor}>
                    <label>Cor:</label>
                    <input
                        type="color"
                        label="Cor"
                        // value={color}
                        // onChange={onChangeColor}
                    />
                </div>
            
                <div className={styles.buttons}>
                    <div className={styles.buttonsLeft}>
                    <Button bgcolor="blue" 
                        // onClick={onSave}
                    >
                        Salvar
                    </Button>
                    <Button bgcolor="grey" 
                        // onClick={onClean}
                    >
                        Limpar
                    </Button>
                    </div>
                </div>
            </form>
        </Container>
    )
} 

export default NovaCategoria
