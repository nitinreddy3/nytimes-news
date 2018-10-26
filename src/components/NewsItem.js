import React from 'react';
import { Card } from 'antd';

const NewsItem = (props) => (
    <Card
        style={{ width: '100%', marginBottom: 20 }}
    >
        <p>{props.data.snippet}</p>
        <p>{props.data.source}</p>
    </Card>);

export default NewsItem;