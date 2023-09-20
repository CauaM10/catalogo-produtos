import { Alert, Box, Button, Checkbox, Container, FormControl, FormControlLabel, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react';
import MenuResponsivo from './components/MenuResponsivo';




function Filmes() {

  

    const [titulo, setTitulo] = useState ( "" );
    const [descricao, setDes] = useState ( "" );
    const [ano, setAno] = useState ( "" );
    const [duracao, setDur] = useState ( "" );
    const [categoria, setCat] = useState ( "" );
    const [imagem, setImg] = useState ( "" );
    const [enviar, setEnviar] = useState ( false );
    const [erro, setErro] = useState ( false );

    function Enviar( evento ){
        evento.preventDefault();
        fetch( process.env.REACT_APP_BACKEND + "produtos", {
            method: "POST",
            headers:
            {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(
                {
                    titulo : titulo,
                    descricao : descricao,
                    ano : ano,
                    duracao : duracao,
                    categoria : categoria, 
                    imagem : imagem,
                    usuario: localStorage.getItem( "usuario" )
                }
            )
        })
        .then( ( resposta ) => resposta.json() ) 
        .then( ( json ) => {

            if( json._id ){
                setEnviar(true);
                setErro ( false );
            } else{
                setErro(true);
                setEnviar( false );
            }
            
        }  )
        .catch( (erro) => { setErro( true )} )
    }
    useEffect(()=> {
        setTitulo("");
        setDes("");
        setAno("");
        setDur("");
        setCat("");
        setImg("");
        
        

    }, [ enviar] );




  return (
    <>
        <MenuResponsivo ></MenuResponsivo>
    
    
    
    <Container component="section" maxWidth="xs">
        <Box sx={{mt:10,
            backgroundColor:"#D9D9D9",
            padding:"50px",
            borderRadius:"10px",
            display:"flex",
            flexDirection: "column",
            alignItems:"center",
            marginTop: "200px"
            }}>
            <Typography component="h1" variant='h4'>Camisetas</Typography>
            {erro && (<Alert severity="warning" sx={{mt: 2, mb:2}} >Desculpe tente novamente</Alert>)}
            {enviar && (<Alert severity="success" sx={{mt: 2, mb:2}} >obrigado por se cadastrar</Alert>)}
            <Box component= "form" onSubmit={Enviar}>

                <TextField type='text'
                label="Titulo"
                variant='filled' 
                margin='normal'
                value={titulo}
                onChange={(e) => setTitulo ( e.target.value )}
                fullWidth 
                />
                <TextField type='text'
                label="Descriçao" 
                variant='filled' 
                margin='normal'
                value={descricao}
                onChange={(e) => setDes ( e.target.value )} 
                fullWidth 
                />
                <TextField  type='number'
                label="Ano"
                variant='filled' 
                margin='normal'
                value={ano}
                onChange={(e) => setAno ( e.target.value )}
                fullWidth 
                />
                <TextField type='text'
                label="Tamanho"
                variant='filled' 
                margin='normal'
                value={duracao}
                onChange={(e) => setDur ( e.target.value )}
                fullWidth 
                />
                <TextField type='text'
                label="Categoria" 
                variant='filled' 
                margin='normal'
                value={categoria}
                onChange={(e) => setCat ( e.target.value )} 
                fullWidth  
                />
                <TextField type='text'
                label="Url da Imagem" 
                variant='filled' 
                margin='normal'
                value={imagem}
                onChange={(e) => setImg ( e.target.value )} 
                fullWidth  
                />

                <Button type='submit' variant='contained' fullWidth sx={{mt:2 , mb: 2}} >Enviar</Button>

            </Box>
        </Box>

    </Container>
    </>
  )
}

export default Filmes;