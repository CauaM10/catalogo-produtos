import { Alert, Box, Button, Container, TextField, Typography } from '@mui/material';
import React from 'react'
import { useState, useEffect } from 'react';

function Cadastro() {

    const [name, setName] = useState ( "" );
    const [tel, setTel] = useState ( "" );
    const [email, setEmail] = useState ( "" );
    const [senha, setSenha] = useState ( "" );
    const [cpf, setCpf] = useState ( "" );
    const [cadastro, setCadastro] = useState ( false );
    const [erro, setErro] = useState ( false );

    function Cadastrar( evento ){
        evento.preventDefault();
        fetch( "http://10.139.75.32:8080/users", {
            method: "POST",
            headers:
            {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(
                {
                    email : email,
                    senha : senha,
                    cpf : cpf,
                    tel : tel,
                    nome : name
                }
            )
        })
        .then( ( resposta ) => resposta.json() ) 
        .then( ( json ) => {

            if( json.cpf ){
                setCadastro( true );
                setErro (false);
            } else{
                setErro( true );
                setCadastro(false);
            }
            
        }  )
        .catch( (erro) => { setErro( true )} )
    }
    useEffect(()=> {
        setName("");
        setTel("");
        setSenha("");
        setEmail("");
        setCpf("");
        
        

    }, [ cadastro] );

  return (
    <Container component="section" maxWidth="sm">
        <Box sx={{mt:10,
            backgroundColor:"#D9D9D9",
            padding:"50px",
            borderRadius:"10px",
            display:"flex",
            flexDirection: "column",
            alignItems:"center"
            }}>
                <Typography component="h1" variant='h4'>Cadastro</Typography>
                {erro && (<Alert severity="warning" sx={{mt: 2, mb:2}} >Desculpe tente novamente</Alert>)}
                {cadastro && (<Alert severity="success" sx={{mt: 2, mb:2}} >obrigado por se cadastrar</Alert>)}
                <Box component= "form" onSubmit={Cadastrar}>

                <TextField type='text'
                    label="Nome"
                    variant='filled' 
                    margin='normal'
                    value={name}
                    onChange={(e) => setName ( e.target.value )}
                    fullWidth 
                    />
                    <TextField type='tel'
                    label="Telefone" 
                    variant='filled' 
                    margin='normal'
                    value={tel}
                    onChange={(e) => setTel ( e.target.value )} 
                    fullWidth 
                    />
                    <TextField type='number'
                    label="CPF"
                    variant='filled' 
                    margin='normal'
                    value={cpf}
                    onChange={(e) => setCpf ( e.target.value )}
                    fullWidth 
                    />
                    <TextField type='email'
                    label="Email"
                    variant='filled' 
                    margin='normal'
                    value={email}
                    onChange={(e) => setEmail ( e.target.value )}
                    fullWidth 
                    />
                    <TextField type='password'
                    label="Senha" 
                    variant='filled' 
                    margin='normal'
                    value={senha}
                    onChange={(e) => setSenha ( e.target.value )} 
                    fullWidth  
                    />

                    <Button type='submit' variant='contained' fullWidth sx={{mt:2 , mb: 2}} >Cadastrar</Button>

                </Box>
            </Box>

    </Container>
  )
}

export default Cadastro;