import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography, Link, Container, Button } from '@mui/material'
import React from 'react'
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import './global.css'


function Filme( props ) {
  return (

    
    <>
    
    <Card sx={{ maxWidth: 300 , mt: 20 , marginLeft: 8}}>
        <CardActionArea>
            <CardMedia
            component="img"
            height=" 300"
            image={props.imagem}
            alt={props.titulo}
            />

            <CardContent>
                <Typography variant='h5' component='div'>
                    {props.titulo}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    {props.descricao}
                </Typography>
                <Grid container>

                    <Grid container>

                    <Grid item mt={1} xs={5}><span>{props.categoria}</span></Grid>
                    <Grid item mt={1} xs={20}><span>{props.ano}</span></Grid>
                    <Grid item mt={1}  xs={130}><span>{props.duracao}</span></Grid>

                    </Grid>


                    <Grid container>
                        <Grid item mt={1}xs={6}>
                        <button className='but-remove' onClick={props.excluir}><DeleteIcon className=''></DeleteIcon></button>

                        </Grid>
                        <Grid item xs={5}>
                        <Button className='but-edita'  href={"edicao/" + props.id }><EditNoteIcon></EditNoteIcon></Button>

                        </Grid>

                    </Grid>

                    
                    
                </Grid>
            </CardContent>
        </CardActionArea>
    </Card>
    </>
  )
}

export default Filme;