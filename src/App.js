import React, { useState } from 'react';
import './index.css';
import './App.css';
import {Header, Layout, Navigation, Drawer } from 'react-mdl';
import Router from './component/router';
import { useLocation } from 'react-router-dom';
import {animated,useSpring} from 'react-spring';

const App = () =>{
    const [nav, setNav] = useState(false);
    
    const changeNav = () => {
        if(window.scrollY >= 80)
        {
            setNav(true);
        }
        else
        {
            setNav(false);
        }
    }

    const fade = useSpring({
        from:{
          background: "rgb(0,0,0,0)"
        },
        to:{
          background: !nav ? "rgb(0,0,0,0)" : "#1484e3"
        }
    });

    window.addEventListener("scroll",changeNav);
    
    let locate = useLocation();
    locate = locate.pathname;

    return (
        <Layout>
            {
                locate != "/" &&
                <Header id="header" className="header" style={{position:"fixed"}}>
                    <animated.div className={nav ? "header-scroll" : ""} style={{...fade,height:"100%",width:"100%",alignItems:"center",display:"flex"}}>
                        <Navigation style={{justifyContent:"flex-end",width:"100%"}}>
                            <a href="/">VT</a>
                        </Navigation>
                    </animated.div>
                </Header>
            }
            {
                locate != "/" &&
                <Drawer title="Title">
                    <Navigation>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                    </Navigation>
                </Drawer>
            }
            <Router/>
        </Layout>
    );
}

export default App;
