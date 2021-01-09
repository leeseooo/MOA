import React, { useState } from 'react';
import { Input, Button, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import ReasultCards from './ResultBooths';
// import NavigationBar from '../navbar/NavigationBar';

const {Option} = Select

function SearchResultPage() {
    const [alignType, setAlignType] = useState("date");

    const onChangeHandler = (value) => {
        setAlignType(value)
    }

    return (
        <div>
            {/* <NavigationBar></NavigationBar> */}
            <div style={{ textAlign: "right" }}>
                <Input placeholder="입력된 검색어"
                    //size="large"
                    //onSearch={} 
                    suffix={<Button type="text" icon={<SearchOutlined style={{ color: "purple", fontSize: "20px" }} />}></Button>}
                    style={{ margin: "50px 100px", width: "600px", textAlign: "right", }}
                />
            </div>
            <div style={{ float: "right", margin: "0 100px 0 0" }}>
                <Select
                    defaultValue = {alignType}
                    style={{ width: "100px" }}
                    onChange={onChangeHandler}
                >
                    <Option value="date">날짜순</Option>
                    <Option value="name">이름순</Option>
                </Select>
            </div>
            <ReasultCards
             alignType={alignType}></ReasultCards>
        </div>
    );
}

export default SearchResultPage;