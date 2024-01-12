import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <div className='container-fluid'>
                   <Link class="navbar-brand" to="/AboutMe">AboutMe</Link> 
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <Link class="nav-link" to="/AboutMe">AboutMe</Link>

                            </li>
                            <li className='nav-item dropdown'>
                                <button className='nav-link dropdown-toggle'   id='navbarDropdown'  data-bs-toggle='dropdown' aria-expanded='false'>Logical </button>
                               
                                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                                    <li>
                                        <Link class="dropdown-item" to="/GroceryApp">GroceryApp</Link>
                                        </li>
                                        <li>
                                        <Link class="dropdown-item" to="/Dependent-Dropdown">Dependent-Dropdown</Link>
                                        </li>
                                        <li>
                                        <Link class="dropdown-item" to="/Single-Multple">Single With Multple</Link>
                                        </li>
                                    {/* <li><a className='dropdown-item' href='#'>Another action</a></li>
                                    <li><hr className='dropdown-divider' /></li>
                                    <li><a className='dropdown-item' href='#'>Something else here</a></li> */}
                                </ul>
                            </li>
                            
                        </ul>
                        <form className='d-flex'>
                            <button className='btn btn-danger' type='button'>youTube</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;