import React, { useState } from "react";
import './MainCategoryButton.css';
import '../Mainpage.css';

function MainCategoryButton(){

    var category=["전시","공연","학술","이벤트"];
    var now="전시";
    const [nowtext, setNowtext] = useState(now); 
    
    const changeText = (text) => setNowtext(text);
    

    
    return(
        <div style={{ height: '300px'}}>
        <div className="hr-sect">카테고리</div>
        <span style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>

        <span className="category" >
            <button className="categorybutton1" onClick={() => changeText(category[0])}  ><image src="./display.png"/>전시</button>
            <div className="verticalLine"></div>
            <button className="categorybutton2" onClick={() => changeText(category[1])} ><image src="./stage.png"/>공연</button>
            <div className="verticalLine"></div>
            <button className="categorybutton3" onClick={() => changeText(category[2])} ><image src="./haksul.png"/>학술</button>
            <div className="verticalLine"></div>
            <button className="categorybutton4" onClick={() => changeText(category[3])} ><image src="./event.png"/>이벤트</button>
            {/* onMouseEnter={() => setIsShown2(!hovered2)} onMouseLeave={() => setIsShown2(false)} */}
        </span>


        </span>
        
        
        </div>
    )
}

export default MainCategoryButton;