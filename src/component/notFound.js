import React,{useState} from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import {animated,useSpring} from 'react-spring';
import {Image} from 'antd';

export const NotFound = () => {
    const [arrowCheck,setArrowCheck] = useState(false);
    const jumpText = useSpring({
        config: {
            tension: 100,
            friction: 100,
            duration: 70
        },
        from: {
            transform: "translate3d(0px,0,0)"
        },
        to: [
            {transform:"translate3d(-12px,0,0)"},
            {transform:"translate3d(0px,0,0)"},
            {transform:"translate3d(-12px,0,0)"},
            {transform:"translate3d(0px,0,0)"},
            {transform:"translate3d(-12px,0,0)"},
            {transform:"translate3d(0px,0,0)"},
        ]
    });

    const his = useHistory();
    const back = () => {
        his.goBack();
    }

    return(
        <div className="page404">
            <animated.span style={{fontSize:"20rem",color:"#A52A2A",...jumpText}} class="material-icons">
                block
            </animated.span>
            <p className="error-code">404 error</p>
            <p className="error-header">페이지를 찾을 수 없습니다.</p>
            <p className="error-back" onClick={()=>back()}>돌아가기</p>
            <Redirect from='*' to='/error' />
        </div>
    )
}