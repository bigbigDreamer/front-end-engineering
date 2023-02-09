import {FC} from "react";
import  { Button } from 'antd';

import Test from "./Test";
import Third from "./Third";

const App: FC = () => {
    return (
        <>
            <h1>Hello React 22</h1>
            <Button>点击</Button>
            <Test/>
            <Third/>
        </>
    )
};

export default App;
