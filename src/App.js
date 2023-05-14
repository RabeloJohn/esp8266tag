import { Route, Routes } from "react-router-dom";
import NavBarpg from "./pages/NavBar.";
import ItemListPg from "./pages/ItemsList";
import AddItemPg from "./pages/AddItem";
import FooterPg from "./pages/Footer";


function App() {
  return(
    <div>
      <Routes>
        <Route path='/' element={<NavBarpg/>}>
          <Route path='/' element={<FooterPg />} >
            <Route index element={<ItemListPg/>}/>
            <Route path='additem' element={<AddItemPg/>} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
