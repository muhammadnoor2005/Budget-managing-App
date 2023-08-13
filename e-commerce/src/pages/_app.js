import '../styles/globals.css'
import "../components/Form/LoginForm/LoginForm.css"
import "../components/Form/SignupForm/SignupForm.css"
import "../components/Nav/Nav.css"
import "../components/Nav/SideMenu/SideMenu.css"
import "../components/FrontMidd/FrontMidd.css"
import "../components/ProductCard/ProductCard.css"
import "../components/SubProducts/SubProducts.css"
import "../components/ProductDetail/ProductDetail.css"
export default function App({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
} 
