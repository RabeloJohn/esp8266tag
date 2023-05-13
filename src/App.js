import { Route, Routes } from "react-router-dom";
import NavBarpg from "./pages/NavBar.";
import ItemListPg from "./pages/ItemsList";
import AddItemPg from "./pages/AddItem";


function App() {
  return(
    <div>
      <Routes>
        <Route path='/' element={<NavBarpg/>}>
          <Route index element={<ItemListPg/>}/>
          <Route path='additem' element={<AddItemPg/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
