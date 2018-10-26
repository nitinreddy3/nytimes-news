import React from 'react';
import ItemContainer from './itemContainer/ItemContainer';

const NewsItem = (props) => (<>
    <hr/>
    <a
        style={{ width: '100%', marginBottom: 20, display: 'block', padding: 20 }}
        onClick={() => props.onClickHandler(props.data)}
        >
        <ItemContainer 
            data={props.data}
        />
    </a></>
);
export default NewsItem;