import {FC} from "react";
import  { Button, Card } from 'antd';

import Test from "./Test";
import Third from "./Third";

import DemoImg from './img/StockSnap_PDFMJKBZCQ.jpg'

const App: FC = () => {
    return (
        <>
            <h1>Hello React 22</h1>
            <Button>点击</Button>
            <Test/>
            <Third/>
            <img src={DemoImg}/>
            <Card>
                我是Card
            </Card>
        </>
    )
};

export default App;
