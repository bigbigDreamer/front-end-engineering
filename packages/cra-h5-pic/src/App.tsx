import {FC} from "react";
import  { Button, Card } from 'antd';

import Test from "./Test";
import Third from "./Third";

const App: FC = () => {
    return (
        <>
            <h1>Hello React 22</h1>
            <Button>点击</Button>
            <Card>Card</Card>
            <Test/>
            <Third/>
        </>
    )
};

export default App;
