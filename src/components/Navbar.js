import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='ui menu'>
            <div className='item'>
                <Link to='/'> Hack Chat - Home </Link>
            </div>

            <div className='item'>
                <a href='http://localhost:3001'> Temp-link: chatbot page </a>
            </div>

            <div className='menu right' style={{marginTop:'5px'}}>

                <Link to='/Login'> 
                    <button className='ui primary button'>
                        Login 
                    </button>
                </Link>

                <Link to='/Signup'> 
                    <button className='ui primary button'>
                        Signup 
                    </button>
                </Link>
            </div>

        </div>
    )

}

export default Navbar;