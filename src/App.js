import React from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"


import {Navbar} from "./components/Navbar";
import {Profile} from "./pages/Profile";
import {About} from "./pages/About";
import {Home} from "./pages/Home";
import {Alert} from "./components/Alert";
import {AlertState} from "./context/alert/AlertState";
import {GithubState} from "./context/github/GithubState";


function App() {
    return (
        <GithubState>
            <AlertState>
                <BrowserRouter>
                    <Navbar/>
                    <div className='container pt-4'>
                        <Alert alert={{text: "Alert!"}}/>
                        <Routes>
                            <Route path='/' exact element={<Home/>}/>
                            <Route path='/about' element={<About/>}/>
                            <Route path='/profile/:name' element={<Profile/>}/>
                            <Route path='/' element={<Navigate to='/'/>}/>
                        </Routes>
                    </div>
                </BrowserRouter>
            </AlertState>
        </GithubState>

    )
}

export default App
