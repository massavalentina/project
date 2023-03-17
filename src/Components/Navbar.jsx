import React from "react";
// import { useState } from "react";
// import { TfiAlignJustify } from "react-icons/tfi";
import { FiShoppingCart } from "react-icons/fi"
import Logo from "./logomaome.png"
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import "./Navbar.css"
// import { useSelector } from "react-redux";
import { TfiHeart } from "react-icons/tfi";
import { MdAccountCircle } from "react-icons/md";



const Navbar = () => {

    // const [showNavbar, setShowNavbar] = useState(false)
    // const shopCart = useSelector(state => state.shopCart)

    // const favourites = useSelector(state => state.favourites);

    // const location = useLocation();

    const linkStyle = {
        "text-decoration": "none",
        "color": "#fff"
    };

    return (
        <nav className="navbarContainer">
            {
                // location.pathname !== "/" &&

                <div className="wrapper">

                    <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
                        <div className="logo_container">
                            <Link to="/home">
                                <img id="logoNN" src={Logo} alt="a happy dog icon" height={"50px"}/>
                            </Link> 
                            <p>
                                
                            </p>
                        </div>

                        {/* <div className="mobile_icon"
                            onClick={() => setShowNavbar(!showNavbar)}
                        >
                            <TfiAlignJustify />
                        </div> */}

                        {/* <div className="menu" style={showNavbar ? { left: "0" } : { left: "-100%" }}
                            onClick={() => setShowNavbar(!showNavbar)}
                        > */}
                            <div className="menu_item">
                                <Link to="/home" style={linkStyle}> <div className="items">Home</div></Link>
                            </div>

                            <div className="menu_item">
                                <Link to="/services" style={linkStyle}><div className="items">Servicios</div></Link>
                            </div>

                            <div className="menu_item">
                                <Link to="/us" style={linkStyle}><div className="items">Nosotros</div></Link>
                            </div>

                            <div className="menu_item">
                                <Link to="/qa" style={linkStyle}><div className="items">Preguntas Frecuentes</div></Link>
                            </div>

                            <div className="menu_item">
                                <Link to="/contact" style={linkStyle}><div className="items">Contáctenos</div></Link>
                            </div>

                            <div className="container_icons">

                                <div className="shopping_cart">
                                    {/* <Link to="/favourites" style={linkStyle}><div className="">
                                        <TfiHeart /> */}
                                        
                                           {/* <span className="length_cart">{favourites.length}</span> */}
                                        
                                    {/* </div>
                                    </Link> */}
                                </div>

                                 <div className="shopping_cart">
                                <Link to="/shopcart" style={linkStyle}><FiShoppingCart /></Link>
                                {/* <span className="length_cart">{shopCart.length}</span> */}
                            </div>

                                <div className="shopping_cart">
                                    <Link to="/dashboard" style={linkStyle}><MdAccountCircle /></Link>
                                </div>
                            </div>



                        {/* </div> */}
                    </IconContext.Provider>
                </div>
            }
        </nav>
    )
}


export default Navbar