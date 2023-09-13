import { Alert, Box, Button, Container, TextField, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import React from 'react'
import { useParams } from 'react-router-dom';

function EditaFilme() {

    const { id } = useParams();
    console.log(id);


    const [titulo, setTitulo] = useState("");
    const [descricao, setDes] = useState("");
    const [ano, setAno] = useState("");
    const [duracao, setDur] = useState("");
    const [categoria, setCat] = useState("");
    const [imagem, setImg] = useState("");
    const [editar, setEditar] = useState("")
    const [erro, setErro] = useState(false);


    useEffect(() => {
        fetch(process.env.REACT_APP_BACKEND + "filmes/" + id, {
            method: "GET",
            headers:
            {
                'Content-Type': 'application/json'
            }


        })
            .then((resposta) => resposta.json())
            .then((json) => {

                if(!json.status){

                    setTitulo( json.titulo)
                    setDes( json.descricao)
                    setAno( json.ano)
                    setDur( json.duracao)
                    setCat( json.categoria)
                    setImg( json.imagem)


                } else {
                    setErro( "Filme não encontrado")
                }

            })
            .catch((erro) => { setErro(true) })

    }, []);

    function Editar ( evento ){
        evento.preventDefault();
        fetch( process.env.REACT_APP_BACKEND + "filmes", {
            method: "PUT",
            headers:
            {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(
                {   
                    id : id,
                    titulo : titulo,
                    descriçao : descricao,
                    ano : ano,
                    duraçao : duracao,
                    categoria : categoria, 
                    img : imagem
                }
            )
        })
        .then( ( resposta ) => resposta.json() ) 
        .then( ( json ) => {

            if( json._id ){
                setEditar(true);
                setErro ( false );
            } else{
                setErro(true);
                setEditar( "Filme não encontrado");
            }
            
        }  )
        .catch( (erro) => { setErro( "Filme não encontrado" )} )


    }


    return (
        <Container component="section" maxWidth="sm">
            <Box sx={{
                mt: 10,
                backgroundColor: "#D9D9D9",
                padding: "50px",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <Typography component="h1" variant='h4'> Editar Filme</Typography>
                {erro && (<Alert severity="warning" sx={{mt: 2, mb:2}} >Filme não encontrado</Alert>)}
                {editar && (<Alert severity="success" sx={{mt: 2, mb:2}} >Editado com sucesso</Alert>)}   
                <Box component="form" onSubmit={Editar} >

                    <TextField type='text'
                        label="Titulo"
                        variant='filled'
                        margin='normal'
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        fullWidth
                    />
                    <TextField type='text'
                        label="Descriçao"
                        variant='filled'
                        margin='normal'
                        value={descricao}
                        onChange={(e) => setDes(e.target.value)}
                        fullWidth
                    />
                    <TextField type='number'
                        label="Ano"
                        variant='filled'
                        margin='normal'
                        value={ano}
                        onChange={(e) => setAno(e.target.value)}
                        fullWidth
                    />
                    <TextField type='text'
                        label="Duraçao"
                        variant='filled'
                        margin='normal'
                        value={duracao}
                        onChange={(e) => setDur(e.target.value)}
                        fullWidth
                    />
                    <TextField type='text'
                        label="Categoria"
                        variant='filled'
                        margin='normal'
                        value={categoria}
                        onChange={(e) => setCat(e.target.value)}
                        fullWidth
                    />
                    <TextField type='text'
                        label="Url da Imagem"
                        variant='filled'
                        margin='normal'
                        value={imagem}
                        onChange={(e) => setImg(e.target.value)}
                        fullWidth
                    />

                    <Button type='submit' variant='contained' fullWidth sx={{ mt: 2, mb: 2 }} >Editar</Button>

                </Box>
            </Box>

        </Container>
    )
}

export default EditaFilme