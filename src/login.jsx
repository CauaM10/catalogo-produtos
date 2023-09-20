import { Alert, Box, Button, Checkbox, Container, FormControl, FormControlLabel, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

import { useState, useEffect } from 'react';
import { useNavigate, json } from 'react-router-dom';
import MenuResponsivo from './components/MenuResponsivo'

    



function Login() {

    const [email, setEmail] = useState ( "" );
    const [senha, setSenha] = useState ( "" );
    const [lembrar, setLembrar] = useState ( false );
    const [login, setLogin] = useState ( false );
    const [ erro, setErro] = useState ( false );

    const navigate = useNavigate();

    useEffect ( () => {
        if(login){
            setEmail("");
            setSenha("");
            navigate("/");
        }
    }, [login] );
    
    function Autenticar(evento){
        evento.preventDefault();
        fetch( process.env.REACT_APP_BACKEND + "login", {
            method: "POST",
            headers:
            {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(
                {
                    email : email,
                    senha: senha
                }
            )
        } )
        .then( ( resposta ) => resposta.json() ) 
        .then( ( json ) => {
            if( json.user){
                localStorage.setItem ("usuario" , JSON.stringify( json.user._id ) );
                setLogin( true );
            }
            else{
                localStorage.removeItem ("usuario");
                setErro ( true );
            }
        }  )
        .catch( (erro) => { setErro( true )} )
    }
  return (
        
        <>
        <MenuResponsivo></MenuResponsivo>
        <header className='header-menu'></header>
        <Container component="section" maxWidth="xs">

            {/* Box: Este componente é usado para criar uma caixa com uma cor de fundo específica, preenchimento e raio de borda. A propriedade sx é usada para definir o estilo da caixa. */}
            <Box sx={{mt: 25,
            backgroundColor:"#D9D9D9",
            padding:"50px",
            borderRadius:"10px",
            display:"flex",
            flexDirection: "column",
            alignItems:"center"
            }}>
                {/* Typography: Este componente é usado para estilizar texto. A propriedade variant é definida como h5 para indicar que o texto deve ser um cabeçalho de tamanho 5. */}
                <Typography component="h1" variant='h5'>Entrar</Typography>

                {/* Alert: Este componente é usado para exibir uma mensagem de erro ao usuário. A propriedade severity é definida como warning para indicar que o erro não é crítico. */}
                { erro && ( <Alert severity="warning" sx={{mt: 2,}} >Revise seus dados e tente novamente</Alert>)}

                <Box component="form" onSubmit={Autenticar}>
                    {/* TextField: Este componente é usado para criar um campo de texto. A propriedade type é definida como email para indicar que o campo de texto é para inserir um endereço de e-mail. A propriedade variant é definida como filled para dar ao campo de texto uma aparência preenchida. */}
                    <TextField type='email'
                    label="Email"
                    variant='filled' 
                    margin='normal'
                    value={email} 
                    onChange={(e) => setEmail ( e.target.value )}
                    fullWidth 
                    {...erro && ("error") }
                    />
                    <TextField type='password'
                     label="Senha" 
                     variant='filled' 
                     margin='normal'
                     value={senha} 
                     onChange={(e) => setSenha ( e.target.value )} 
                     fullWidth  />

                    {/* Checkbox: Este componente é usado para criar uma caixa de seleção. A propriedade value é definida como o valor da caixa de seleção. A propriedade onChange é usada para lidar com o evento de mudança da caixa de seleção. */}
                    <FormControlLabel control={ <Checkbox value= "lembrar" onChange={(e) => setLembrar ( !lembrar )} />} label="lembrar-me" />

                    {/* Button: Este componente é usado para criar um botão. A propriedade type é definida como submit para indicar que o botão enviará o formulário. A propriedade variant é definida como contained para dar ao botão uma aparência preenchida. */} 
                    <Button type='submit' variant='contained' fullWidth sx={{mt:2 , mb: 2}} >Login</Button>

                    {/* Grid: Este componente é usado para criar uma grade de itens flexíveis. A propriedade container é definida como true para indicar que a grade deve ser um contêiner. A propriedade item é usada para especificar o item flexível. */}
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
        
        </>    
    

  )
}

export default Login