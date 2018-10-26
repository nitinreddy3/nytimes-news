import React from 'react';
import styled from 'styled-components';
import { Avatar, Card } from 'antd';
import { CONFIG } from './../config';
import { dateFormat } from './../utils/dateUtil';

function getWidthString(span) {
    if (!span) return;

    let width = span / 12 * 100;
    return `width: ${width}%`;
}

const Row = styled.div`
    &::after {
      content: "";
      clear: both;
      display: table;
    }
  `;

const Col = styled.div`
    float: left;
    ${({ xs }) => (xs ? getWidthString(xs) : "width: 100%")};
    
    @media only screen and (min-width: 768px) {
      ${({ sm }) => sm && getWidthString(sm)};
    }
    @media only screen and (min-width: 992px) {
      ${({ md }) => md && getWidthString(md)};
    }
    @media only screen and (min-width: 1200px) {
      ${({ lg }) => lg && getWidthString(lg)};
    }
  `;

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

const NewsItem = (props) => {
    let { multimedia } = props.data;
    let imageUrl = multimedia.length && multimedia[0];
    return (
        <Card style={{ width: '100%', marginBottom: 20 }}
            hoverable>
            <Row>
                <Col xs="12" md="3">
                    <p style={Style.date}>{dateFormat(props.data.pub_date) || 'NA'}</p>
                </Col>
                <Col xs="12" md="6">
                    <p style={Style.snippet}>{props.data.snippet}</p>
                    <p style={Style.source}>{props.data.source}</p>
                </Col>
                <Col xs="12" md="3">
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
        </Card>
    )
};

export default NewsItem;