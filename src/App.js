import React from 'react';
import { connect } from 'react-redux';
import { Layout, Spin, Icon, Button } from 'antd';
import { CONFIG } from './config';
import Search from './components/Search';
import NewsItem from './components/NewsItem';
import './App.css';

const { Header, Content } = Layout;

const Styles = {
  viewMore: {
    margin: '16px auto',
    display: 'block'
  }
}

class App extends React.Component {

  componentDidMount = () => {
    this.getNewsItems();
  }

  getNewsItems = (pageIndex = 0, search = 'india') => {
    let { dispatch } = this.props;
    dispatch({ type: 'LOADING_DATA', loading: true });
    fetch(
      `${CONFIG.APP_BASE_URL}?api-key=${CONFIG.API_KEY}&q=${search}&page=${pageIndex || 0}`,
    )
      .then(res => {
        return res.json();
      })
      .then(res => {
        dispatch({ type: 'UPDATE_NEWS_LIST', newsList: res.response.docs });
        dispatch({ type: 'LOADING_DATA', loading: false });
      });
  }

  onHandleChange = () => {
    let { dispatch } = this.props;
    let { pageIndex } = this.props;
    dispatch({ type: 'UPDATE_LIST_COUNT', pageIndex: pageIndex + 1 });
    this.getNewsItems(pageIndex + 1);
  }

  onHandleSearchField = subject => {
    let { dispatch } = this.props;
    dispatch({ type: 'SEARCH', search: subject });
    dispatch({ type: 'UPDATE_LIST_COUNT', pageIndex: 0 });
  };

  onHandleSearch = () => {
    let { pageIndex, search } = this.props;
    this.getNewsItems(pageIndex, search);
  }

  render() {
    const { pageIndex, newsList, search, loading } = this.props;
    return (
      <Spin
        spinning={loading}
        delay={500}
        indicator={<Icon type="loading" style={{ fontSize: 32 }} spin />}
      >

        <Layout>
          <Header style={{ background: '#001529' }}>
            <h1 style={{ color: "white", textAlign: "center" }}>The New York Times</h1>
          </Header>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content style={{ margin: '24px 16px 0', background: '#fff', padding: 24, minHeight: 280 }}>
              <Search onHandleSearchField={this.onHandleSearchField} onHandleSearch={this.onHandleSearch} value={search} />
              {
                newsList.map(item => {
                  return (
                    <NewsItem key={item._id} data={item} />
                  )
                })
              }
              <Button
                className='viewMore'
                style={Styles.viewMore}
                type="primary"
                onClick={this.onHandleChange}
              >
                View More
              </Button>
              <p>{pageIndex}</p>
            </Content>
          </Layout>

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
    loading: state.loading
  }
}
export default connect(mapStateToProps)(App);
