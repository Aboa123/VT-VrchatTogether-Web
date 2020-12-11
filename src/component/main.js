import React, {useEffect, useState} from 'react';
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
        delay:500,
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
        <a href={"https://play.google.com/store/apps/details?id=com.vrct"} target="blank" className="app-download">
            <animated.div className="app-download-box" style={fade}>
                <animated.img src={'../imgs/app_icon.png'} style={{...text,width:"80pt",top:-40,left:-40,position:"absolute"}}/>
                <div style={{height:"30pt",overflow:"hidden"}}>
                    <animated.div className="down-text" style={text}>
                        지금 바로 다운로드
                    </animated.div>
                </div>
            </animated.div>
        </a>
    )
}

function down_arrow() {
    const [arrowCheck,setArrowCheck] = useState(false);

    const jumpText = useSpring({
        config: {
            tension:2000000,
            friction: 100,
            duration:100
        },
        from: {
            transform: "translate3d(0,0px,0)"
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
        onRest:()=>{
            if(arrowCheck)
            {
                setArrowCheck(false)
            }
            else
            {
                setArrowCheck(true)
            }
        },
        reset: arrowCheck,
        reverse:arrowCheck
    });

    const [hideCheck,setHideCheck] = useState(true);

    const hideArrow = useSpring({
        from: {
            opacity: 1,
        },
        to: {
            opacity: hideCheck ? 1 : 0,
        }
    });
    
    const scroll = () => {
        if(window.scrollY >= 80)
        {
            setHideCheck(false);
        }
        else
        {
            setHideCheck(true);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",scroll);
    });

    return (
        <div className="down-arrow">
            <animated.span class="material-icons" style={{...jumpText,...hideArrow,color:"#1484e3"}}>
                arrow_circle_down
            </animated.span>
        </div>
    )
}

function info_image_1() {
    const [fadeCheck, setFadeCheck] = useState(false);

    const fadeImage = useSpring({
        config:{
            duration:300,
        },
        delay:500,
        from:{
            transform:"translate3d(40px,0,0)",
            opacity:0,
        },
        to:{
            transform: fadeCheck ? "translate3d(0,0,0)" :"translate3d(40px,0,0)" ,
            opacity:fadeCheck ? 1 : 0,
        },
    });

    const fadeText = useSpring({
        config:{
            duration:300,
        },
        from:{
            transform:"translate3d(0,-40px,0)",
            opacity:0,
        },
        to:{
            transform: fadeCheck ? "translate3d(0,0,0)" :"translate3d(0,-40px,0)" ,
            opacity:fadeCheck ? 1 : 0,
        },
    });

    const scrollImg = () => {
        if(window.scrollY >= 400)
        {
            setFadeCheck(true);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",scrollImg);
        return () => window.removeEventListener("scroll",scrollImg);
    });

    return (
        <div>
            <div style={{display:"flex",alignItems:"center"}}>
                <animated.div style={fadeText}>
                    <p className="info-image-text">
                        친구확인
                    </p>
                    <p className="info-image-subtext">
                        온라인 친구와 오프라인친구 목록<br/>
                        친구의 접속월드 확인<br/>
                        친구가 제작한 public 아바타, 월드 즐겨찾기가 가능합니다
                    </p>
                </animated.div>
            </div>
            <div>
                <animated.img style={{...fadeImage,width:"20%"}} src={"../imgs/2.jpg"}/>
                <animated.img style={{...fadeImage,width:"20%"}} src={"../imgs/3.jpg"}/>
                <animated.img style={{...fadeImage,width:"20%"}} src={"../imgs/10.jpg"}/>
                <animated.img style={{...fadeImage,width:"20%"}} src={"../imgs/5.jpg"}/>
            </div>
        </div>
    )
}

function info_image_2() {
    const [fadeCheck, setFadeCheck] = useState(false);

    const fadeImage = useSpring({
        config:{
            duration:300,
        },
        delay:500,
        from:{
            transform:"translate3d(-40px,0,0)",
            opacity:0,
        },
        to:{
            transform: fadeCheck ? "translate3d(0,0,0)" :"translate3d(-40px,0,0)" ,
            opacity:fadeCheck ? 1 : 0,
        },
    });

    const fadeText = useSpring({
        config:{
            duration:300,
        },
        from:{
            transform:"translate3d(40px,0,0)",
            opacity:0,
        },
        to:{
            transform: fadeCheck ? "translate3d(0,0,0)" :"translate3d(40px,0,0)" ,
            opacity:fadeCheck ? 1 : 0,
        },
    });

    const scrollImg = () => {
        if(window.scrollY >= 1000)
        {
            setFadeCheck(true);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",scrollImg);
        return () => window.removeEventListener("scroll",scrollImg);
    });

    return (
        <div style={{borderTop:"3px solid #333",borderBottom:"3px solid #333"}}>
            <Grid>
                <Cell col={7} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <animated.img style={{...fadeImage,width:"30%"}} src={"../imgs/6.jpg"}/>
                    <animated.img style={{...fadeImage,width:"30%"}} src={"../imgs/7.jpg"}/>
                    <animated.img style={{...fadeImage,width:"30%"}} src={"../imgs/4.jpg"}/>
                </Cell>
                <Cell col={5} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <animated.div style={fadeText}>
                        <p className="info-image-text">
                            맵 목록, 아바타목록
                        </p>
                        <p className="info-image-subtext">
                            pulbic 월드와 아바타를 바로 즐겨찾기 하며,<br/>
                            이미지를 선택하여 제작자의 상세정보를 볼 수 있습니다.
                        </p>
                    </animated.div>
                </Cell>
            </Grid>
        </div>
    )
}

function info_image_3() {
    const [fadeCheck, setFadeCheck] = useState(false);

    const fadeImage = useSpring({
        config:{
            duration:300,
        },
        delay:500,
        from:{
            transform:"translate3d(40px,0,0)",
            opacity:0,
        },
        to:{
            transform: fadeCheck ? "translate3d(0,0,0)" :"translate3d(40px,0,0)" ,
            opacity:fadeCheck ? 1 : 0,
        },
    });

    const fadeText = useSpring({
        config:{
            duration:300,
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

    const scrollImg = () => {
        if(window.scrollY >= 1500)
        {
            setFadeCheck(true);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",scrollImg);
        return () => window.removeEventListener("scroll",scrollImg);
    });

    return (
        <div>
            <Grid>
                <Cell col={6} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <animated.div style={fadeText}>
                        <p className="info-image-text">
                            즐겨찾기 관리, 블락관리
                        </p>
                        <p className="info-image-subtext">
                            선택하여 해당 유저의 상세정보를 제공하며,<br/>
                            블락관리는 자신을 블락한 유저목록까지 제공합니다.
                        </p>
                    </animated.div>
                </Cell>
                <Cell col={6} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <animated.img style={{...fadeImage,width:"40%"}} src={"../imgs/8.jpg"}/>
                    <animated.img style={{...fadeImage,width:"40%"}} src={"../imgs/9.jpg"}/>
                </Cell>
            </Grid>
        </div>
    )
}

const App = () => {
    
    const upText = useSpring({
        config:{
            duration: 500
        },
        from: {
            transform:"translate3d(0, 60pt, 0)"
        },
        to: {
            transform:"translate3d(0, 0px, 0)"
        }
    });

    const upText2 = useSpring({
        config:{
            duration: 500
        },
        delay:500,
        from: {
            transform:"translate3d(0, 70pt, 0)"
        },
        to: {
            transform:"translate3d(0, 0px, 0)"
        }
    });

    return(
        <Content className="main-grid">
            <section className="main-info">
                <div className="main-info-box">
                    <div style={{height:"70pt",overflow:"hidden"}}>
                        <animated.div style={upText} className="main-info-title">
                            언제 어디서나 간단하게<br/>
                        </animated.div>
                    </div>
                    <div style={{color:"#1484e3",height:"70pt",overflow:"hidden"}}>
                        <animated.div style={upText2} className="main-info-subtitle">
                            <b>V</b>rchat <b>T</b>ogether
                        </animated.div>
                    </div>
                </div>
            </section>
            {app_download()}
            {down_arrow()}
            <Grid className="main-contents">
                <Cell col={1}></Cell>
                <Cell col={10}>
                    {info_image_1()}
                    {info_image_2()}
                    {info_image_3()}
                </Cell>
                <Cell col={1}></Cell>
            </Grid>
            <Grid className="main-newbie">
                <Cell col={1}></Cell>
                <Cell col={10}>
                    <p className="main-newbie-title">
                        친구가 없어서 설치할 이유가 없다고 말하는 당신!
                    </p>
                    <p className="main-newbie-subtext">
                        Vrchat에는 여러사람을 만날수있는 다양한 교류회가 진행중입니다.<br/>
                        해당 캘린더는 <a href="https://sites.google.com/view/vrcevent-kr" target="blank">이곳</a>에서 제공됩니다.
                    </p>
                    <iframe 
                    width="90%"
                    height="80%"
                    frameBorder="none"
                    src="https://calendar.google.com/calendar/u/0/embed?color=%239fe1e7&deb=-&embed_style=WyJhdDplbWI6c3QiLCIjZTBlMGUwIiwiI2VkZWRlZCIsIiM0MTg0ZjMiLCJyb2JvdG8iLCIjNjM2MzYzIiw1MDAsIiNmZmYiXQo&eopt=0&mode=month&showCalendars=1&showPrint=0&showTz=0&src=vrchatcalendarkr@gmail.com"/>
                </Cell>
                <Cell col={1}></Cell>
            </Grid>
        </Content>
    )
}

export default App;