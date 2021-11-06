import React, {useState, useEffect} from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom';
import { Button } from './Button.js';

function Navbar() {
    const[click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }
        else{ setButton(true)}
        };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    
    return (
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                    <h1>asdf</h1>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                   <li className='nav-item'>
                       <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                           Home
                       </Link>
                    </li> 
                    <li className='nav-item'>
                    <Link to='/create-account' className='nav-links-mobile' onClick={closeMobileMenu}>
                           Create Account
                       </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='/log-in' className='nav-links-mobile' onClick={closeMobileMenu}>
                           Log in
                    </Link>
                    </li> 
                </ul>
                <div className='nav-btns'>
                {button && <Button className='btns' buttonStyle='btn--outline' linkTo='/createAccount'>Create account</Button>}
                {button && <Button className='btns' buttonStyle='btn--outline' linkTo='/logIn'>Log in</Button>}
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar
