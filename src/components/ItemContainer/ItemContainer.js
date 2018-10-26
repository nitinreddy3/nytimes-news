import React from 'react';
import { Avatar } from 'antd';
import { Row, Col } from './../GridComponent';
import { CONFIG } from './../../config';
import { MESSAGES } from './../../constants';
import { dateFormat } from './../../utils/dateUtil';

const Style = {
    date: {
        fontSize: 10
    },
    snippet: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000'
    },
    source: {
        fontStyle: 'italic'
    }
};

const ItemContainer = (props) => {
    let { data } = props;
    let { multimedia } = data;
    let imageUrl = multimedia.length && multimedia[0];
    return (
        <Row>
            <Col xs="12" md="3">
                <p style={Style.date}>{dateFormat(data.pub_date) || MESSAGES.NA}</p>
            </Col>
            <Col xs="12" md="6">
                <p style={Style.snippet}>{data.snippet}</p>
                <p style={Style.source}>{data.source || MESSAGES.NO_SOURCE}</p>
            </Col>
            <Col xs="12" md="3" style={{textAlign: 'center'}}>
                <Avatar
                    icon="picture"
                    shape="square"
                    style={{ width: 200, height: 150 }}
                    size={150}
                    src={imageUrl ? `${CONFIG.IMAGE_BASE_URL}${imageUrl.url}` : ''}
                    alt="Media Image"
                />
            </Col>
        </Row>
    )
};

export default ItemContainer;