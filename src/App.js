import React, { useState,useEffect } from 'react';
import './index.css';
import './App.css';
import {Header, Layout, Navigation, Drawer } from 'react-mdl';
import Router from './component/router';
import {animated,useSpring} from 'react-spring';

const App= () =>{
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

    return (
      <div style={{height: '300px', position: 'relative'}}>
        <Layout>
            <Header className="header" style={{position:"fixed"}}>
                <animated.div className={nav ? "header-scroll" : ""} style={{...fade,height:"100%",width:"100%",alignItems:"center",display:"flex"}}>
                    <Navigation style={{justifyContent:"flex-end",width:"100%"}}>
                        <a href="/">VT</a>
                    </Navigation>
                </animated.div>
            </Header>
            <Drawer title="Title">
                <Navigation>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                </Navigation>
            </Drawer>
            <Router/>
        </Layout>
    </div>
    );
}

export default App;
