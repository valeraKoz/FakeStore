import './App.css'
import {CatalogPage} from "./pages/Catalog/CatalogPage.jsx";
import {Route, Routes} from "react-router";
import {HomePage} from "./pages/Home/HomePage.jsx";
import {FavoritesPage} from "./pages/Favorites/FavoritesPage.jsx";
import {ShoppingCartPage} from "./pages/ShoppingCart/ShoppingCartPage.jsx";
import {LayoutPage} from "./pages/LayoutPage.jsx";
import {ProductPage} from "./pages/Product/ProductPage.jsx";


function App() {



  return (
    <>
        <Routes>
            <Route path='/' element={<LayoutPage/>}>
                <Route index element={<HomePage/>}/>
                <Route path='catalog' element={<CatalogPage/>}/>
                <Route path='/catalog/:category/:id' element={<ProductPage/>}/>
                <Route path='favorite-list' element={<FavoritesPage/>}/>
                <Route path='shopping-cart' element={<ShoppingCartPage/>}/>
            </Route>
        </Routes>
    </>
  )
}

export default App

















