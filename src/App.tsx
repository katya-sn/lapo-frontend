import { Outlet } from "react-router-dom";
import "./App.scss";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { DropMenu } from "./components/DropMenu";
import { SosForm } from "./components/SosForm";
import { useContext, useEffect } from "react";
import { GlobalContext } from "./context/GlobalContext";
import { useAppDispatch } from "./app/hook";
import * as animalActions from './features/animalSlice';

function App() {
  const { isSosFormOpen } = useContext(GlobalContext);
  const dispatch = useAppDispatch();
  
  useEffect(() => { 
    dispatch(animalActions.fetchAnimals('?page = 1'));
  }, []);
  return (
    <div className="App">
      <div className="main-wrapper">
        <Header />
        <DropMenu />
        <main className="container">
          {isSosFormOpen && <SosForm />}
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
