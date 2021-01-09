import React, { Component, useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import MainSearchPage from './Sections/MainSearchPage';
import MainLivePage from './MainSecttions/MainLivePage';


function Mainpage () {
    return(
        <div style={{margin: '0', padding: '0'}}>
            <MainSearchPage />
            <MainLivePage />
            <MainCategoryButton />
            <CurrentExhibitPage />
            <PlannedExhibitPage />
        </div>
    )
}