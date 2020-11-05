import React, { useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import { authState, newSignUp, signIn, signOut } from '../utilities/firebaseLogin';

// import firebase from "../utilities/firebase.js";
// const auth = firebase.auth();

function Home() {
    const [temp, setTemp] = useState({})

    // useEffect(() => {
    //     // newSignUp("abc@gmail.com", "1234abcd");

    //     firebase.auth().onAuthStateChanged(function(user) {
    //         if (user) {
    //           // User is signed in.
    //           var displayName = user.displayName;
    //           var email = user.email;
    //           var emailVerified = user.emailVerified;
    //           var photoURL = user.photoURL;
    //           var isAnonymous = user.isAnonymous;
    //           var uid = user.uid;
    //           var providerData = user.providerData;
    //           console.log("signed in");
    //           // ...
    //         } else {
    //           // User is signed out.
    //           // ...
    //           console.log("signed out");
    //         }
    //       });

    // }, [])

    // function changeHandler(e) {
    //     // console.log(e.target.value);
    //     setTemp({...temp,[e.target.name]: e.target.value})
    //     // console.log(temp);
    // }

    // function clickSignIn() {
    //     signIn(temp.email, temp.password);
    //     // console.log(temp.email);
    // }

    // function clickSignOut() {
    //     signOut();
    //     // console.log(temp.email);
    // }

    return (
    <div className="home">
        <Container className="text-center d-flex align-items-center justify-content-center" style={{height: "90vh", width: "100vw"}}>
            <div className="align-items-center col-sm">
                <h1>MANA</h1>
                <h3>All geared up and ready to go. But one question still remains, where to? Mana is here to help you plan and decide your next ride.</h3>

                <div className="d-flex justify-content-center info">
                    <div className="mx-3 p-3 item">
                    <i class="fas fa-road d-block"></i>
                    <NavLink to={`/roads`} className="font-weight-bold nav-link">Roads</NavLink>
                    </div>
                    <div className="mx-3 p-3 item">
                    <i class="fas fa-camera d-block"></i>
                    <NavLink to={`/places`} className="font-weight-bold nav-link">Places</NavLink>
                    </div>

            
                    {/* <Form>
                        <input name="email" onChange={changeHandler} type="email" class="form-control" placeholder="email"></input>
                        <input name="password" onChange={changeHandler} type="password" class="form-control" placeholder="password"></input>
                        <Button onClick={clickSignIn}>Sign In</Button>
                        <Button onClick={clickSignOut}>Sign Out</Button>
                    </Form> */}
                  

                </div>
            </div>
        </Container>

    </div>
    )
}

export default Home


