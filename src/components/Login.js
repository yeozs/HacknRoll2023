import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='ui raised container segment' 
            style={{ 
                marginTop:'80px',
                width: '38%',
                height: '500px',
                padding: '30px 30px 30px 30px'}}>
    
                <h1 style={{textAlign: 'center' }}>Login</h1>

                <div className='ui form'>
                    <label style={{fontFamily: 'Sans-serif'}}>Username: </label>
                    <input placeholder="Username"/>
                </div>
                <p></p>

                <div className='ui form'>
                    <label style={{fontFamily: 'Sans-serif'}}>Password: </label>
                    <input placeholder="Password"/>
                </div>
                <p></p>

                <button class='ui button' type='submit' style={{ backgroundColor: 'lightseagreen'}}>
                    Submit
                </button>

                <p></p>
                <p>Haven't Signed Up? Go to <Link to='/signup'>Sign Up</Link> Page</p>

 
        </div>
    )

}

export default Login;