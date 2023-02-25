
import './App.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useState, useEffect, lazy } from 'react';


import { useDocumentation } from './hooks/index';
import { Sidebar } from './components/index';




function App() {
  const { documentation, state } = useDocumentation();
  const [router, setRouter] = useState(
    createBrowserRouter([
      {
        path: "/",
        element: <div>Loading</div>
      }
    ])
  );

  useEffect(() => {
    if (documentation.length) {
      console.log(documentation)
      const newRoutes = [];

      documentation.forEach((doc) => {
        doc.children?.forEach((child) => {
          const path = `${doc.url}${child.url}`;
          console.log(path);

          const Component = lazy(
            async () => await import("../pages" + path + ".js")
          );

          newRoutes.push(
            {
              path: doc.url + child.url,
              element: (
                <Component />
              ),
            });
        });
      });

      setRouter(createBrowserRouter([...newRoutes]));
    }
  }, [documentation]);


  return (
    <>
      <div className="container-xxl bd-gutter mt-3 my-md-4 bd-layout">
        <Sidebar documentation={documentation} state={state} />
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
