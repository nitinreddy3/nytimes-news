import React from 'react';
import { connect } from 'react-redux';
import { Layout, Spin, Icon, Button, Modal } from 'antd';
import { Row, Col } from './components/GridComponent';
import { CONFIG } from './config';
import { ACTIONS } from './constants';
import Search from './components/Search';
import NewsItem from './components/NewsItem';
import CommonModal from './components/CommonModal';
import './App.css';

const { Header, Content } = Layout;

const Styles = {
  viewMore: {
    margin: '16px auto',
    display: 'block'
  },
  icon: {
    fontSize: 32
  },
  header: {
    background: '#001529'
  },
  h1: {
    color: "white",
    textAlign: "center"
  },
  content: {
    margin: '24px 16px 0',
    background: '#fff',
    padding: 24,
    minHeight: 280
  },
  topic: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    fontSize: 20,
    padding: 10
  }
}

class App extends React.Component {

  componentDidMount = () => {
    this.getNewsItems();
  }

  getNewsItems = (pageIndex = 0, search = 'india') => {
    let { dispatch } = this.props;
    dispatch({ type: ACTIONS.LOADING_DATA, loading: true });
    fetch(
      `${CONFIG.APP_BASE_URL}?api-key=${CONFIG.API_KEY}&q=${search}&page=${pageIndex}`,
    )
      .then(res => {
        return res.json();
      })
      .then(res => {
        dispatch({ type: ACTIONS.UPDATE_NEWS_LIST, newsList: res.response.docs });
        dispatch({ type: ACTIONS.LOADING_DATA, loading: false });
      });
  }

  onHandleChange = () => {
    let { dispatch } = this.props;
    let { pageIndex } = this.props;
    dispatch({ type: ACTIONS.UPDATE_PAGE_COUNT, pageIndex: pageIndex + 1 });
    this.getNewsItems(pageIndex + 1);
  }

  onHandleSearchField = subject => {
    let { dispatch } = this.props;
    dispatch({ type: ACTIONS.SEARCH, search: subject });
    dispatch({ type: ACTIONS.UPDATE_PAGE_COUNT, pageIndex: 0 });
  };

  onHandleSearch = () => {
    let { pageIndex, search } = this.props;
    this.getNewsItems(pageIndex, search);
  }

  renderList = () => {
    const { newsList } = this.props;
    return newsList.map(item => {
      return (<NewsItem key={item._id} data={item} onClickHandler={this.showModal} />)
    })
  }

  showModal = (data) => {
    let { dispatch } = this.props;
    dispatch({ type: ACTIONS.MODAL_VISIBLE, visible: true });
    dispatch({ type: ACTIONS.SELECTED_ITEM, selectedNews: data });
  }

  hideModal = () => {
    let { dispatch } = this.props;
    dispatch({ type: ACTIONS.MODAL_VISIBLE, visible: false });
  }

  render() {
    const { search, loading, visible, selectedNews } = this.props;
    return (
      <Spin
        spinning={loading}
        delay={500}
        indicator={<Icon type="loading" style={Styles.icon} spin />}
      >
        <Layout>
          <Header style={Styles.header}>
            <h1 style={Styles.h1}>The New York Times</h1>
          </Header>
          <Layout>
            <Content style={Styles.content}>
              <Row>
                <Col xs="12" md="6">
                  <Search
                    onHandleSearchField={this.onHandleSearchField}
                    onHandleSearch={this.onHandleSearch}
                    value={search}
                  />
                </Col>
              </Row>
              <Row>
                <p style={Styles.topic}>
                  Topic : {search}
                  <span style={{ display: 'block', fontSize: 12, fontStyle: 'italic' }}>
                    World news about {search}, including breaking news and archival articles published in The New York Times.
                </span>
                </p>
              </Row>
              {this.renderList()}
              <Button
                className='viewMore'
                style={Styles.viewMore}
                type="primary"
                onClick={this.onHandleChange}
              >
                View More
              </Button>
            </Content>
          </Layout>
          {
            selectedNews &&
            <CommonModal
              visible={visible}
              hideModal={this.hideModal}
              data={selectedNews}
            />
          }
        </Layout>
      </Spin>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newsList: state.newsList,
    pageIndex: state.pageIndex,
    search: state.search,
    loading: state.loading,
    visible: state.visible,
    selectedNews: state.selectedNews
  }
}
export default connect(mapStateToProps)(App);
