
import { useEffect, useState } from "react";
import Filme from "./components/Filme";
import { Container } from "@mui/material";


function App() {

  const [filmes, setFilmes] = useState();
  const [erro, setErro] = useState();



  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND + "filmes", {
      method: "GET",
      headers:
      {
        'Content-Type': 'application/json'
      }
    })
      .then((resposta) => resposta.json())
      .then((json) => { setFilmes(json) })
      .catch((erro) => { setErro(true) })
  }, [])

  return (
    <>
      <h1>Filmes</h1>
      <Container sx = {{
        display :"flex",
        flexFlow : "row",
        flexWrap: "wrap"
      }}>

      {filmes && (
        filmes.map((filmes, index) => ( 
         <Filme 
         imagem={filmes.imagem} 
         titulo={filmes.titulo}
         descricao={filmes.descricao}
         categoria={filmes.categoria} 
         ano={filmes.ano} 
         duracao={filmes.duracao} 
         
         />

          
        ))
      )}
      </Container>
    </>
  );
}

export default App;
