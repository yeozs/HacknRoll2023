import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='ui raised container segment' 
            style={{ 
                marginTop:'80px',
                width: '38%',
                height: '500px',
                padding: '30px 30px 30px 30px'}}>
    
                <h1 style={{textAlign: 'center' }}>Sign Up</h1>
                
                <div class='ui form'>
                    <label style={{fontFamily: 'Sans-serif'}}>Full Name: </label>
                    <input placeholder="Full Name"/>
                </div>
                <p></p>

                <div class='ui form'>
                    <label style={{fontFamily: 'Sans-serif'}}>Preferred Username: </label>
                    <input placeholder="Preferred Username"/>
                </div>
                <p></p>

                <div class='ui form'>
                    <label style={{fontFamily: 'Sans-serif'}}>Password: </label>
                    <input placeholder="Password"/>
                </div>
                <p></p>

                <button class='ui button' type='submit' style={{ backgroundColor: 'lightseagreen'}}>
                    Submit
                </button>

                <p></p>
                <p>Signed up Already? Go to <Link to='/Login'>Login</Link> Page</p>




                

            
        </div>



    )

}

export default Signup;