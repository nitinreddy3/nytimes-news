import React from 'react';
import { Modal, Avatar } from 'antd';
import { Row, Col } from './GridComponent';
import { CONFIG } from './../config';
import { dateFormat } from './../utils/dateUtil';

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
        fontStyle: 'italic',
        textAlign: 'bottom'
    }
};


const CommonModal = (props) => {
    let { data } = props;
    let { multimedia, headline } = data;
    let imageUrl = multimedia && multimedia.length && multimedia[0];
    return (
        <Modal
            title={headline.main}
            visible={props.visible}
            onOk={props.hideModal}
            onCancel={props.hideModal}
            okText="Ok"
            cancelText="Close"
            width="90%"
            centered={true}
        >
            <Row>
            <Col xs="12" md="3" style={{textAlign: 'center'}}>
                <Avatar
                    icon="picture"
                    shape="square"
                    size={250}                
                    src={imageUrl ? `${CONFIG.IMAGE_BASE_URL}${imageUrl.url}` : ''}
                    alt="Media Image"
                />
            </Col>
            <Col xs="12" md="9" style={{marginTop: 10}}>
                <p style={Style.date}>{dateFormat(data.pub_date) || 'NA'}</p>
                <p style={Style.snippet}>{data.snippet}</p>
                <p style={Style.source}>{data.source}</p>
            </Col>
            </Row>
            <Row>
            </Row>
        </Modal>
    )
};

export default CommonModal;