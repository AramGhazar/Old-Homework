import Home from './Main';
import About from './About';
import NewsLetter from './NewsLetter';


export const routes =  [ 
    {
      path: "/Main",
      element: <Home />,
    },

    {
        path: "/About",
        element: <About />,
      },
      {
        path: "/NewsLetter",
        element: <NewsLetter />,
      },
    {
      path: "*",
      element: <>Not found</>,
    }
  ]