import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './login';
import { createTheme, ThemeProvider} from '@mui/material/styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cadastro from './Cadastro'
import Filmes from './filmes'

const theme = createTheme({
  palette: {
      mode: 'light',
      primary: {
        main: '#f50057',
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
    path: "/filmes",
    element: <Filmes/>
  }
  
  
  ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
    
    <RouterProvider router={router}/>

    </ThemeProvider>
);


