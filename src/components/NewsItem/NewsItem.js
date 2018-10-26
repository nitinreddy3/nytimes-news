import React from 'react';
import { Card } from 'antd';
import ItemContainer from '../ItemContainer/ItemContainer';

const NewsItem = (props) => (
    <Card
        style={{ width: '100%', marginBottom: 20, display: 'block', padding: 10 }}
        onClick={() => props.onClickHandler(props.data)}
        hoverable
        >
        <ItemContainer 
            data={props.data}
        />
    </Card>
);
export default NewsItem;