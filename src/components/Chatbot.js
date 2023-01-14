import React, { useEffect } from 'react';
import $ from 'jquery';

/*import { io } from "socket.io-client";*/



const clearChat = () => {
    window.location.reload(false);
}

const keydown = (down) => {
    if (down.key === 'Enter') {
        sendButton()
    }

}

const sendButton = () => {
    let typedMessage = $("#message").val();
    let output = '<p><i class="user icon"></i>' + typedMessage + '</p>';

    $("#message").val("");
    $("#chatbox").append(output);

}

const Chatbot = () => {
    /*useEffect(() => {
        const socket = require('socket.io')(http, {
            cors: {
                origin: "http://localhost:3000"
            }
        })

        socket.on('connect', () => {
            console.log('hi')
        })
    
    });*/

    return (

        <div className='ui container segment'
            onKeyDown={keydown}
            style={{
                marginTop: '80px',
                width: '38%',
                height: '500px',
                borderRadius: '12px'
            }}>
            <h2 style={{
                backgroundColor: 'dodgerblue'
            }}>
                <i className="phone volume icon"></i>Chat Room
            

            </h2>

               <div className='ui container segment' style={{ 
                    padding: '30px 30px 0px 30px', 
                    overflowY: 'scroll',
                    height: '350px'

                    }}>
                        <div id="chatbox" style={{
                            backgroundColor: 'Gainsboro',
                            borderRadius: '6px',
                            display: 'table',
                            marginLeft: 'auto'
                        }}>

                        </div>
                </div>

{/*}             <div style={{ padding: '30px 30px 0px 30px' }}>
                <p style={{
                    backgroundColor: 'PaleTurquoise',
                    borderRadius: '6px',
                    display: 'table'
                }}>
                    <i class="user icon"></i>Hello, how is everyone?
                </p>
                <br></br>

                <p style={{
                    backgroundColor: 'Gainsboro',
                    borderRadius: '6px',
                    display: 'table',
                    marginLeft: 'auto'
                }}>
                    I'm Good <i class="user circle icon"></i>
                </p>
            </div>
*/}
            <button onClick={clearChat}
            style={{ 
                position: 'absolute',
                right: '30px',
                height: '20px',
                fontSize: '10px',
                backgroundColor: 'chocolate'

                }}>
                clear chat
            </button>

            <div className='ui container' style={{
                    position: 'absolute',
                    bottom: '5px',
                    width: '93%',
                    textAlign: 'center'
                }}>

                    <input id="message" placeholder="Type your message..." style={{
                        width: '80%',
                        height: '35px'
                    }}></input>
                
                    <button className='ui button' onClick={sendButton}
                        style={{ 
                            backgroundColor: 'Khaki',
                            borderRadius: '0px'

                        }}>
                        Send
                    </button>
            
            </div>

        </div> 

    )

}

export default Chatbot;

/*
        <div className='ui raised text container segment' style={{marginTop:'80px'}}>
            <h3 className='ui header'>Chatbot under maintenance!</h3>
            <p> Chatbot Page in progress</p>

        </div>
*/