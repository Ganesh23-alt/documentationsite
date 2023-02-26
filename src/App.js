
import './assets/css/starter.css';

import { RouterProvider } from 'react-router-dom';


import { useDocumentation, useDynamicRoutes } from './hooks/index';
import { Sidebar, Navbar } from './components/index';




function App() {
  const { documentation, state } = useDocumentation();
  const { router } = useDynamicRoutes(documentation);


  return (
    <>
      <Navbar />
      <div className="container-xxl bd-gutter mt-3 my-md-4 bd-layout">
        <Sidebar documentation={documentation} state={state} />
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
