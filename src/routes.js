import React,{Suspense, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from "react-router-dom";
import PrivateRouters from 'routes/PrivateRouters';
import PublicRouters from 'routes/PublicRouters';
const Login = React.lazy(() => import("pages/Login"));
const Signup = React.lazy(() => import("pages/Signup"));
const MainLayout = React.lazy(() => import("mainlayout/MainLayout"));
const Addresslist = React.lazy(() => import("pages/dashboard"));



const Routers = () =>  {
    
    return (
        <React.Fragment>
            <Suspense fallback={<div>Loading...</div>}>
                <MainLayout>
                    <Routes>
                        <Route path="/" exact element={ <PublicRouters >  <Login/> </PublicRouters> } />
                        <Route path="/signup" exact element={ <PublicRouters >  <Signup/> </PublicRouters> } />
                        <Route path="/dashboard" exact element={ <PrivateRouters><Addresslist/></PrivateRouters> } />
                    </Routes>
                </MainLayout >
            </Suspense>
        </React.Fragment>
    )
}

export default Routers
