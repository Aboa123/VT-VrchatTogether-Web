import React, {useState} from 'react';
import {Content} from 'react-mdl';
import {Redirect} from 'react-router-dom';
import {animated,useSpring} from 'react-spring';

const test = "test";

const App = () => {
    const progress = useSpring({
        config:{
            duration:1000,
            percent: "%"
        },
        from: {
            width:"0%",
            text: 0
        },
        to: {
            width:"100%",
            text: 100
        }
    });

    const jumpText = useSpring({
        config: {
            tension:2000000,
            
            duration:100
        },
        delay: 1000,
        from: {
            transform:"translate3d(0,0px,0)"
        },
        to: [
            {transform:"translate3d(0,-10px,0)"},
            {transform:"translate3d(0,-7px,0)"},
            {transform:"translate3d(0,5px,0)"},
            {transform:"translate3d(0,-3px,0)"},
            {transform:"translate3d(0,5px,0)"},
            {transform:"translate3d(0,-3px,0)"},
            {transform:"translate3d(0,0px,0)"},
        ],
    });

    const fadeText = useSpring({
        config: {
            duration: 1000
        },
        delay: 1500,
        from: {
            scale:1,
            opacity:1
        },
        to: {
            scale:1.1,
            opacity:0
        }
    });

    const loadingGround = useSpring({
        config:{
            duration: 1000
        },
        delay: 2500,
        from: {
            width: "0%"
        },
        to: {
            width: "200%"
        }
    });

    const [url,setUrl] = useState(false);

    setTimeout(()=>{
        setUrl(true);
    },4000);

    return(
        <Content className="loading-grid">
            <section className="loading-info" style={{zIndex:2}}>
                <div className="loading-info-box">
                    <animated.span style={{
                        opacity:fadeText.opacity,
                        transform:fadeText.scale
                        .interpolate(x => `scale(${x})`)
                    }}>언제 어디서나 간단하게</animated.span>
                    <animated.span style={{
                        opacity:fadeText.opacity,
                        color:"#1484e3",
                        transform:fadeText.scale
                        .interpolate(x => `scale(${x})`)}}>
                        <b>V</b>rchat <b>T</b>ogether
                    </animated.span>
                    <div style={{width:"100%",height:"55pt",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <animated.div style={{...jumpText,position:"absolute",display:"flex",justifyContent:"center",alignItems:"center"}}>
                            {progress.text.interpolate(x => Math.floor(x*1))}
                        </animated.div>
                        <div style={{width:"100%",height:"100%",border:"1px solid #1484e3",borderRadius:10}}>
                            <animated.div style={{height:"100%",borderRadius:5,width:progress.width,background:"#1484e3"}}/>
                        </div>
                    </div>
                </div>
            </section>
            <div style={{display:"flex",position:"absolute",width:"100%",height:"100%",left:0,top:0,justifyContent:"center",alignItems:"center",overflow:"hidden"}}>
                <animated.div style={{width:loadingGround.width,position:"absolute",height:"100%",background:"white",transform:"skewX(-20deg)"}}/>
            </div>
            {url && <Redirect to="/main"/>}
        </Content>
    )
}

export default App;