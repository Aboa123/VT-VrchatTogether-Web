import React,{useState} from 'react';
import {Grid, Cell } from 'react-mdl';
import Modal from 'react-responsive-modal';

export const Footer = () => {

    const [open,setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const closeIcon = (
        <div className="modal-colose">
            X
        </div>
    );

    return(
        <div>
            <Modal
                classNames={{
                    overlay: 'custom-overlay',
                    modal: 'custom-modal',
                }}
                open={open}
                closeIcon={closeIcon}
                onClose={onCloseModal}>
                    <div className="modal-title">
                        안내
                    </div>
                    <div className="modal-info">
                        <ul>
                            <li>VT는 <b>절대로</b> 유저들의 로그인 정보를 따로 기록하여 <b>사용하지 않습니다.</b></li>
                            <li>개발소스는 Github에 공개되어있습니다.</li>
                            <li>후원문의는 대표메일 혹은 Discord로 연락바랍니다.</li>
                            <li>후원금은 웹서버 성능향상과 도메인 유지, IOS 지원을 우선적으로 합니다.</li>
                        </ul>
                    </div>
            </Modal>
            <Grid className="footer">
                <Cell col={3}></Cell>
                <Cell col={6} className="footer-info-box">
                    <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                        <p className="footer-link">
                            <a target="blank" href="https://github.com/Aboa123/VT-VrchatTogether-">
                                <img alt="" width="40" src={"../imgs/git.png"}/>
                            </a>
                        </p>
                        <p className="footer-link">
                            <a target="blank" href="https://twitter.com/AboaVT">
                                <img alt="" width="40" src={"../imgs/twitter.png"}/>
                            </a>
                        </p>
                        <p
                        onClick={onOpenModal}
                        className="footer-link footer-link-text">
                            후원 및 앱 안내
                        </p>
                    </div>
                    <Grid>
                        <Cell col={6} className="footer-info-box">
                            <p className="footer-info">
                                대표메일 : wlxm9999@gmail.com<br/>
                                Discord : Aboa#9076<br/>
                                © 2020 VrchatTogether All rights reserved.
                            </p>
                        </Cell>
                        <Cell col={6} className="footer-info-box">
                            <p className="footer-info">
                                VT는 비공식 앱입니다.<br/>
                                앱을 악용할 경우 Vrchat 계정을 정지 당할 수 있습니다.<br/>
                                그에 따른 책임은 사용자에게 있으며,<br/>
                                해당 앱을 사용하는 것은 이 부분을 동의하는 것으로 간주합니다.<br/>
                            </p>
                        </Cell>
                    </Grid>
                </Cell>
                <Cell col={3}></Cell>
            </Grid>
        </div>
    )
}