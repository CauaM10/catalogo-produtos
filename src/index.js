import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './login';
import { createTheme, ThemeProvider} from '@mui/material/styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cadastro from './Cadastro'
import Camisetas from './CadastroCamiseta'
import Edicao from './Edita'

const theme = createTheme({
  palette: {
      mode: 'light',
      primary: {
        main: '#000',
        

      },
    },
});
const router = createBrowserRouter([{ 
  


    path:"/",
    element:<App/>
  },
  {
    path:"/login",
    element:<Login/>
  }, 
  {
    path: "/cadastro",
    element: <Cadastro/>
  },
  {
    path: "/CadastroCamiseta",
    element: <Camisetas/>
  },
  {
  path: "/edicao/:id",
  element: <Edicao/>
  }

  
  
  ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
    
    <RouterProvider router={router}/>

    </ThemeProvider>
);


