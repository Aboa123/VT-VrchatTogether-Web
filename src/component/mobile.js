import React, { useState } from 'react';
import {Grid,Cell} from 'react-mdl';
import {
    Select,
    Badge,
    Row,
    Col
} from 'antd';
import {
    LeftOutlined,
    RedoOutlined
} from '@ant-design/icons';
import {animated,useSpring} from 'react-spring';

function Header (props) {
    return (
        <div className="main-mobile-form-header">
            <div className="main-mobile-form-header-back" onClick={()=>props.back()}>
                <LeftOutlined />
            </div>
            <div style={{lineHeight:"28px"}}>{props.name}</div>
            <div className="main-mobile-form-header-back">
                <RedoOutlined />
            </div>
        </div>
    )
}

function Fheader (props) {
    return (
        <div>
            <div className="main-mobile-form-header main-mobile-form-fheader">
                <div className="main-mobile-form-header-back" onClick={()=>props.back()}>
                    <LeftOutlined />
                </div>
                <div style={{lineHeight:"28px"}}>{props.name}</div>
                <div className="main-mobile-form-header-back">
                    <RedoOutlined />
                </div>
            </div>
            <Row className="main-mobile-form-fheader-friends">
                <Col span={8} style={{textAlign:"center"}}>
                    전체<br/>
                    123명
                </Col>
                <Col span={8} style={{borderLeft:"1px solid #222",borderRight:"1px solid #222",textAlign:"center"}}>
                    온라인<br/>
                    23명
                </Col>
                <Col span={8} style={{textAlign:"center"}}>
                    오프라인<br/>
                    100명
                </Col>
            </Row>
        </div>
    )
}

const Mobile = () => {
    const [mobilePage,setMobilePage] = useState(1);
    const back = () => {
        setMobilePage(1);
    }
    const { Option } = Select;

    const alramList = [
        {
            name: "Aboa",
            date:"2020-01-01"
        },
        {
            name: "Aboa",
            date:"2020-01-02"
        },
        {
            name: "Aboa",
            date:"2020-01-03"
        },
        {
            name: "Aboa",
            date:"2020-01-04"
        },
        {
            name: "Aboa",
            date:"2020-01-05"
        },
        {
            name: "Aboa",
            date:"2020-01-06"
        },
        {
            name: "Aboa",
            date:"2020-01-07"
        },
    ];
    
    const [modalCheck,setModalCheck] = useState(false);
    const customModal = useSpring({
        config: {
            duration: 100
        },
        from: {
            opacity: 0,
            scale:0
        },
        to: {
            opacity: modalCheck ? 1 : 0,
            scale: modalCheck ? 1 : 0
        },
    });

    const blockData = [
        {
            name: "Aboa",
            date: "2020-01-01"
        },
        {
            name: "Aboa",
            date: "2020-01-02"
        },
        {
            name: "Aboa",
            date: "2020-01-03"
        },
        {
            name: "Aboa",
            date: "2020-01-04"
        },
        {
            name: "Aboa",
            date: "2020-01-05"
        },
        {
            name: "Aboa",
            date: "2020-01-06"
        },
        {
            name: "Aboa",
            date: "2020-01-07"
        },
        {
            name: "Aboa",
            date: "2020-01-08"
        },
        {
            name: "Aboa",
            date: "2020-01-09"
        },
        {
            name: "Aboa",
            date: "2020-01-10"
        },
        {
            name: "Aboa",
            date: "2020-01-11"
        },
        {
            name: "Aboa",
            date: "2020-01-12"
        },
        {
            name: "Aboa",
            date: "2020-01-13"
        },
        {
            name: "Aboa",
            date: "2020-01-14"
        },
    ];

    const againstData = [
        {
            name: "test",
            date: "2020-01-01"
        },
        {
            name: "test",
            date: "2020-01-01"
        },
        {
            name: "test",
            date: "2020-01-01"
        },
        {
            name: "test",
            date: "2020-01-01"
        },
        {
            name: "test",
            date: "2020-01-01"
        },
    ];

    const [blockCheck,setBlockCheck] = useState(true);

    return (
        <Grid className="main-mobile">
            <Cell col={6} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <div>
                    <p className="main-mobile-title">
                        VT 체험판
                    </p>
                    <p className="main-mobile-subtitle">
                        앱을 설치하지 않아도 웹에서 앱을 체험해볼 수 있습니다.<br/>
                        (UI는 실제 앱과 조금씩 다를 수 있으며, 기능이 몇가지 제한됩니다.)
                    </p>
                </div>
            </Cell>
            <Cell col={6} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <div className="main-mobile-form">
                    <img alt="" className="main-mobile-view" src={"../imgs/mobile.png"} />
                    <div style={{display:"flex",justifyContent:"center",marginTop:"30px",zIndex:1,width:"100%"}}>
                        {
                            mobilePage === 1 &&
                            <div className="main-mobile-form-main">
                                <div className="main-mobile-form-main-header">
                                    <div style={{display:"flex",flexDirection:"row"}}>
                                        <div style={{marginRight:"10px"}}>
                                            <p style={{textAlign:"center",margin:0,color:"#be64a5"}}>Veteran</p>
                                            <img alt="" width={80} src={"../imgs/mobile/profile.png"}/>
                                        </div>
                                        <div style={{textAlign:"left",marginTop:"20px"}}>
                                            Aboa<br/>
                                            Aboa #9076
                                        </div>
                                    </div>
                                    <Row style={{borderTop:"1px solid #222",marginTop:"10px"}}>
                                        <Col span={8}>
                                            전체<br/>
                                            123명
                                        </Col>
                                        <Col span={8} style={{borderLeft:"1px solid #222",borderRight:"1px solid #222"}}>
                                            온라인<br/>
                                            23명
                                        </Col>
                                        <Col span={8}>
                                            오프라인<br/>
                                            100명
                                        </Col>
                                    </Row>
                                </div>
                                <div className="main-mobile-form-main-menus">
                                    <div onClick={()=>setMobilePage(2)} className="main-mobile-form-main-menu">
                                        <div>
                                            <div>
                                                <Badge count={7}>
                                                    <img alt="" style={{width:35}} src={"/imgs/mobile/alram.png"}/>
                                                </Badge>
                                            </div>
                                            알림
                                        </div>
                                    </div>
                                    <div onClick={()=>setMobilePage(3)} className="main-mobile-form-main-menu">
                                        <div>
                                            <div>
                                                <img alt="" style={{width:35}} src={"/imgs/mobile/flist.png"}/>
                                            </div>
                                            친구목록
                                        </div>
                                    </div>
                                    <div onClick={()=>setModalCheck(true)} className="main-mobile-form-main-menu">
                                        <div>
                                            <div>
                                                <img alt="" style={{width:35}} src={"/imgs/mobile/favorite.png"}/>
                                            </div>
                                            즐겨찾기 관리
                                        </div>
                                    </div>
                                    <div onClick={()=>setMobilePage(5)} className="main-mobile-form-main-menu">
                                        <div>
                                            <div>
                                                <img alt="" style={{width:35}} src={"/imgs/mobile/avatar.png"}/>
                                            </div>
                                            아바타 목록
                                        </div>
                                    </div>
                                    <div onClick={()=>setMobilePage(6)} className="main-mobile-form-main-menu">
                                        <div>
                                            <div>
                                                <img alt="" style={{width:35}} src={"/imgs/mobile/block.png"}/>
                                            </div>
                                            블락 관리
                                        </div>
                                    </div>
                                    <div onClick={()=>setModalCheck(true)} className="main-mobile-form-main-menu">
                                        <div>
                                            <div>
                                                <img alt="" style={{width:35}} src={"/imgs/mobile/world.png"}/>
                                            </div>
                                            맵 목록
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        {
                            mobilePage === 2 &&
                            <div className="main-mobile-form-alram">
                                <Header name={"알림"} back={()=>back()}/>
                                <div style={{padding:"0px 10px"}}>
                                    <div className="main-mobile-form-search">
                                        이름검색
                                    </div>
                                    <div className="main-mobile-form-select">
                                        <Select defaultValue="all" style={{width: 100}}>
                                            <Option value="all">모두보기</Option>
                                            <Option value="on">온라인</Option>
                                            <Option value="off">오프라인</Option>
                                        </Select>
                                    </div>
                                    {alramList.map(data => 
                                        <div className="main-mobile-form-alram-list">
                                            <Grid>
                                                <Cell col={6}>{data.name}</Cell>
                                                <Cell col={6}>{data.date}</Cell>
                                            </Grid>
                                            <Grid>
                                                <Cell col={6}>
                                                    <div onClick={()=>setModalCheck(true)} className="main-mobile-form-alram-button">수락</div>
                                                </Cell>
                                                <Cell col={6}>
                                                    <div onClick={()=>setModalCheck(true)} className="main-mobile-form-alram-button">거절</div>
                                                </Cell>
                                            </Grid>
                                        </div>
                                    )}
                                </div>
                            </div>
                        }
                        {
                            mobilePage === 3 &&
                            <div className="main-mobile-form-flist">
                                <Fheader name={"친구목록"} back={()=>back()}/>
                                <div style={{padding:"0px 10px"}}>
                                    <div className="main-mobile-form-search">
                                        검색
                                    </div>
                                    <div className="main-mobile-form-select">
                                        <Select defaultValue="all" style={{width: 100}}>
                                            <Option value="all">모두보기</Option>
                                            <Option value="on">온라인</Option>
                                            <Option value="off">오프라인</Option>
                                        </Select>
                                    </div>
                                    <div className="main-mobile-form-flist-imgs">
                                        <img alt="" onClick={()=>setModalCheck(true)} src={"/imgs/mobile/flist/1.png"}/>
                                        <img alt="" onClick={()=>setModalCheck(true)} src={"/imgs/mobile/flist/2.png"}/>
                                        <img alt="" onClick={()=>setModalCheck(true)} src={"/imgs/mobile/flist/3.png"}/>
                                        <img alt="" onClick={()=>setModalCheck(true)} src={"/imgs/mobile/flist/1.png"}/>
                                        <img alt="" onClick={()=>setModalCheck(true)} src={"/imgs/mobile/flist/2.png"}/>
                                        <img alt="" onClick={()=>setModalCheck(true)} src={"/imgs/mobile/flist/3.png"}/>
                                        <img alt="" onClick={()=>setModalCheck(true)} src={"/imgs/mobile/flist/1.png"}/>
                                        <img alt="" onClick={()=>setModalCheck(true)} src={"/imgs/mobile/flist/2.png"}/>
                                        <img alt="" onClick={()=>setModalCheck(true)} src={"/imgs/mobile/flist/3.png"}/>
                                        <img alt="" onClick={()=>setModalCheck(true)} src={"/imgs/mobile/flist/1.png"}/>
                                        <img alt="" onClick={()=>setModalCheck(true)} src={"/imgs/mobile/flist/2.png"}/>
                                        <img alt="" onClick={()=>setModalCheck(true)} src={"/imgs/mobile/flist/3.png"}/>
                                    </div>
                                </div>
                            </div>
                        }
                        {
                            mobilePage === 4 &&
                            <div className="main-mobile-form-favorite">
                                <Header name={"즐겨찾기 관리"} back={()=>back()}/>
                            </div>
                        }
                        {
                            mobilePage === 5 &&
                            <div className="main-mobile-form-avatar">
                                <Header name={"아바타 목록"} back={()=>back()}/>
                                <div style={{padding:"0px 10px"}}>
                                    <div className="main-mobile-form-search">
                                        검색
                                    </div>
                                    <div className="main-mobile-form-alist-imgs">
                                        <img alt="" onClick={()=>setModalCheck(true)} src={"/imgs/mobile/alist/1.png"}/>
                                        <img alt="" onClick={()=>setModalCheck(true)} src={"/imgs/mobile/alist/2.png"}/>
                                        <img alt="" onClick={()=>setModalCheck(true)} src={"/imgs/mobile/alist/3.png"}/>
                                        <img alt="" onClick={()=>setModalCheck(true)} src={"/imgs/mobile/alist/4.png"}/>
                                        <img alt="" onClick={()=>setModalCheck(true)} src={"/imgs/mobile/alist/1.png"}/>
                                        <img alt="" onClick={()=>setModalCheck(true)} src={"/imgs/mobile/alist/2.png"}/>
                                        <img alt="" onClick={()=>setModalCheck(true)} src={"/imgs/mobile/alist/3.png"}/>
                                        <img alt="" onClick={()=>setModalCheck(true)} src={"/imgs/mobile/alist/4.png"}/>
                                    </div>
                                </div>
                            </div>
                        }
                        {
                            mobilePage === 6 &&
                            <div className="main-mobile-form-block">
                                <Header name={"블락 관리"} back={()=>back()}/>
                                <div style={{padding:"0px 10px"}}>
                                    <div className="main-mobile-form-search">
                                        검색
                                    </div>
                                    <div className="main-mobile-form-select">
                                        <Select defaultValue="block" style={{width: 120}} onChange={()=>setBlockCheck(!blockCheck)}>
                                            <Option value="block">내가 블락한</Option>
                                            <Option value="against">나를 블락한</Option>
                                        </Select>
                                    </div>
                                    {blockCheck ? blockData.length : againstData.length} 명
                                    {
                                        blockCheck ? 
                                        blockData.map(data => 
                                            <div onClick={()=>setModalCheck(true)} className="main-mobile-form-block-list">
                                                <Row>
                                                    <Col span={10}>{data.name}</Col>
                                                    <Col span={14} style={{textAlign:"right"}}>{data.date}</Col>
                                                </Row>
                                            </div>)
                                        :
                                        againstData.map(data => 
                                            <div onClick={()=>setModalCheck(true)} className="main-mobile-form-block-list">
                                                {data.size}
                                                <Row>
                                                    <Col span={10}>{data.name}</Col>
                                                    <Col span={14} style={{textAlign:"right"}}>{data.date}</Col>
                                                </Row>
                                            </div>)
                                    }
                                </div>
                            </div>
                        }{
                            mobilePage === 7 &&
                            <div className="main-mobile-form-world">
                                <Header name={"맵 목록"} back={()=>back()}/>
                            </div>
                        }
                        <animated.div className="main-mobile-madal" style={{
                        transform:customModal.scale.interpolate(x => `scale(${x})`)}}>
                            앱을 다운로드하여 확인해주세요!
                            <div onClick={()=>setModalCheck(false)} className="main-mobile-modal-button">
                                확인
                            </div>
                        </animated.div>
                    </div>
                </div>
            </Cell>
        </Grid>
    )
}

export default Mobile;