import LoginService from '../service/LoginService';
import React from 'react'
import { Link } from 'react-router-dom';
import '../css/HeaderFooter.css';


function HeaderComponent() {
    if (LoginService.id !== "Profile") {
        if (LoginService.role === "user") {
            return (
                <div>
                    <div className="fixed-header">
                        <div className="container">
                            <nav>
                                <span className="logo">SHOPIFY</span>
                                <Link to={'/'} ><img
													className="header__logo"
													src="https://as1.ftcdn.net/v2/jpg/01/98/91/58/1000_F_198915888_OpYSQ0FvfA6z85cWPJnUFp5jiJkfdhur.jpg"
													alt="e shopping cart"
												/></Link>
                                <Link to={'/cart'} ><img
													className="header__logo"
													src="https://thumbs.dreamstime.com/z/shopping-icon-shopping-cart-icon-dark-background-simple-vector-icon-shopping-icon-shopping-cart-icon-dark-background-116659167.jpg"
													alt="e shopping cart"
												/></Link>
                                <Link to={'/toorder'} ><img
													className="header__logo1"
													src="https://thumbs.dreamstime.com/z/shopping-bag-icon-black-background-black-flat-style-vector-illustration-shopping-bag-icon-black-background-black-flat-style-170442753.jpg"
													alt="e shopping cart"
												/></Link>
                                <Link to={'/profile'} >{LoginService.id}</Link>
                                <Link to={'/logout'} >logout</Link>

                            </nav>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <div className="fixed-header">
                        <div className="container">
                            <nav>
                                <span className="logo">SHOPIFY</span>
                                <Link to={'/admin'} >Home</Link>
                                <Link to={'/addPro'} >Add</Link>
                                <Link to={'/profile'} >{LoginService.id}</Link>
                                <Link to={'/logout'} >logout</Link>

                            </nav>
                        </div>
                    </div>
                </div>
            )
        }
    }
    return (
        <div>
            <div className="fixed-header">
                <div className="container">
                    <nav>
                        <span className="logo"> SHOPIFY</span>
                        <Link to={'/'} ><img
													className="header__logo"
													src="https://as1.ftcdn.net/v2/jpg/01/98/91/58/1000_F_198915888_OpYSQ0FvfA6z85cWPJnUFp5jiJkfdhur.jpg"
													alt="e shopping cart"
												/></Link>

                        <Link to={'/login'}><img
													className="header__logo"
													src="https://thumbs.dreamstime.com/z/user-icon-glyph-gray-background-106603565.jpg"
													alt="e shopping cart"
												/></Link>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent