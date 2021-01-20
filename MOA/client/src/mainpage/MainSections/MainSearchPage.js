import React from 'react';
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import '../Mainpage.css';


function MainSearchPage() {
    return (
        
        <div className="mainfirst">
            <h1 className="Enjoy-Your-Concert-At-Home">Enjoy &nbsp;Your&nbsp;Concert<br/>At&nbsp;Home</h1>
            <br/>
            
            <input className="searchinput" type="text" placeholder="고려대학교 해커톤" />
            
            <a href="/search"><BiIcons.BiSearch className="searchicon" /></a>
            <div style={{ display: 'flex', marginTop: '20px', justifyContent:'flex-end', paddingRight: '2rem' }}>
                <div className="live">LIVE</div>
                <button className="livebutton" onClick={() => window.scrollTo({top:820, behavior:'smooth'})}><AiIcons.AiFillCaretRight style={{color: "#F3868D", fontSize: '1.3rem', width: '110%'}}/></button>
            </div>
        </div>
    )
}

export default MainSearchPage

