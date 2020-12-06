import React, {useState,useRef,useEffect} from 'react';
import {Grid, Cell, Content } from 'react-mdl';
import {animated,useSpring} from 'react-spring';

function app_download() {
    const fade = useSpring({
        config:{
            duration: 500,
        },
        from:{
            width:"0%",
        },
        to: {
            width:"100%"
        }
    });
    
    const text = useSpring({
        config:{
            duration:100,
        },
        delay:1000,
        from:{
            transform:"translate3d(0,40px,0)",
            opacity:0,
        },
        to:{
            transform:"translate3d(0,0,0)",
            opacity:1,
        },
    });

    return (
        <a href={"https://hello.vrchat.com/"} target="blank" className="app-download">
            <animated.div className="app-download-box" style={fade}>
                <animated.img src={'../imgs/app_icon.png'} style={{...text,width:"80pt",top:-40,left:-40,position:"absolute"}}/>
                <div style={{height:"30pt",overflow:"hidden"}}>
                    <animated.div className="down-text" style={text}>
                        지금바로 다운로드
                    </animated.div>
                </div>
            </animated.div>
        </a>
    )
}

function info_image() {
    const [fadeCheck, setFadeCheck] = useState(false);

    const fade = useSpring({
        config:{
            duration:1500,
        },
        from:{
            transform:"translate3d(-40px,0,0)",
            opacity:0,
        },
        to:{
            transform: fadeCheck ? "translate3d(0,0,0)" :"translate3d(-40px,0,0)" ,
            opacity:fadeCheck ? 1 : 0,
        },
    });

    const fadeImg = () => {
        if(window.scrollY >= 500)
        {
            setFadeCheck(true);
        }
        console.log(window.scrollY)
    }

    window.addEventListener("scroll",fadeImg);

    return (
        <div>
            <animated.img style={{...fade,width:"20%"}} src={"../imgs/1.jpg"}/>
            <animated.img style={{...fade,width:"20%"}} src={"../imgs/2.jpg"}/>
            <animated.img style={{...fade,width:"20%"}} src={"../imgs/3.jpg"}/>
            <animated.img style={{...fade,width:"20%"}} src={"../imgs/4.jpg"}/>
            <animated.img style={{...fade,width:"20%"}} src={"../imgs/5.jpg"}/>
            <animated.img style={{...fade,width:"20%"}} src={"../imgs/6.jpg"}/>
            <animated.img style={{...fade,width:"20%"}} src={"../imgs/7.jpg"}/>
        </div>
    )
}

const App = () => {
    return(
        <Content className="main-grid">
            <section className="main-info">
                <div className="main-info-box">
                    언제 어디서나 간단하게<br/>
                    <span style={{color:"#1484e3"}}>
                    <b>V</b>rchat <b>T</b>ogether
                    </span>
                </div>
            </section>
            {app_download()}
            <Grid className="main-contents">
                <Cell col={2}></Cell>
                <Cell col={8}>
                    <p>
                        로그인의 필요한 계정은 Vrchat 계정입니다.
                    </p>
                    <p>
                        Steam 계정과 Oculus 계정은 Vrchat계정으로 전환이 필요합니다.
                    </p>
                    {info_image()}
                </Cell>
                <Cell col={2}></Cell>
            </Grid>
            <Grid className="main-newbie">
                <Cell col={2}></Cell>
                <Cell col={8}>
                    3
                </Cell>
                <Cell col={2}></Cell>
            </Grid>
            <Grid className="footer">
                <Cell col={2}></Cell>
                <Cell col={8}>
                    App 문의
                </Cell>
                <Cell col={2}></Cell>
            </Grid>
        </Content>
    )
}

export default App;