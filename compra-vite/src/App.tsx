import './App.css';
import CartMenu from './components/CartMenu/CartMenu';
import { ContextProvider } from './components/Context/ContextProvider';
import { Header } from './components/Header/Header';
import Products from './components/Products/Products';

function App() {

  return (
    <ContextProvider>
          <>
            <div className='AppContext'>
              <CartMenu/>
            </div>
            <Header/>
            <Products/>
          </>
    </ContextProvider>
   
  )
}

export default App;
