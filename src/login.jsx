import { Box, Button, Checkbox, Container, FormControl, FormControlLabel, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { createTheme, ThemeProvider} from '@mui/material/styles'
import { useState, useEffect } from 'react';
import { useNavigate, json } from 'react-router-dom';

    

    const theme = createTheme({
        palette: {
            mode: 'light',
            primary: {
              main: '#f50057',
            },
          },
    });

function Login() {

    const [email, setEmail] = useState ( "" );
    const [senha, setSenha] = useState ( "" );
    const [lembrar, setLembrar] = useState ( false );
    const [login, setLogin] = useState ( false );
    const [ erro, setErro] = useState ( false );

    const navigate = useNavigate();

    useEffect ( () => {
        if(login){
            localStorage.setItem("usuario" , JSON.stringify ({email: email}));
            setEmail("");
            setSenha("");
            navigate("/");
        }
    }, [login] );
    
    function Autenticar(evento){
        evento.preventDefault();
        fetch( "https://api.escuelajs.co/api/v1/auth/login", {
            method: "POST",
            headers:
            {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(
                {
                    email : email,
                    password: senha
                }
            )
        } )
        .then( ( resposta ) => resposta.json() ) 
        .then( ( json ) => {
            if( json.statusCode === 401 ){
                setErro( true );
            }
            else{
                setLogin ( true );
            }
        }  )
        .catch( (erro) => { setErro( true )} )
    }
  return (
        <ThemeProvider theme={theme}>
    
        <Container component="section" maxWidth="xs">
            <Box sx={{mt:10,
            backgroundColor:"#D9D9D9",
            padding:"50px",
            borderRadius:"10px",
            display:"flex",
            flexDirection: "column",
            alignItems:"center"
            }}>
                <Typography component="h1" variant='h5'>Entrar</Typography>
                <Box component="form" onSubmit={Autenticar}>
                    <TextField type='email'
                    label="Email"
                    variant='filled' 
                    margin='normal'
                    value={email} 
                    onChange={(e) => setEmail ( e.target.value )}
                    fullWidth  />
                    <TextField type='password'
                     label="Senha" 
                     variant='filled' 
                     margin='normal'
                     value={senha} 
                     onChange={(e) => setSenha ( e.target.value )} 
                     fullWidth  />
                    <FormControlLabel control={ <Checkbox value= "lembrar" onChange={(e) => setLembrar ( !lembrar )} />} label="lembrar-me" />
                    <Button type='submit' variant='contained' fullWidth sx={{mt:2 , mb: 2}} >Login</Button>
                    <Grid container>
                        <Grid item xs>
                            Esqueci minha senha
                        </Grid>
                        <Grid item>
                            Cadastrar
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
        </ThemeProvider>
        
    

  )
}

export default Login