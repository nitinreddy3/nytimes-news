import React from 'react';
import {connect} from 'react-redux';
import {CONFIG} from './config';
import './App.css';

class App extends React.Component {

  componentDidMount = () => {
    this.getNewsItems();
  }

  getNewsItems = (pageIndex = 0) => {
    let { dispatch } = this.props;
    let { newsList } = this.props;
    fetch(
      `${CONFIG.API_URL}?api-key=${CONFIG.API_KEY}&q=singapore&page=${pageIndex || 0}`,
    )
    .then( res => {
      return res.json();
    })
    .then(res => {
      dispatch({ type: 'UPDATE_NEWS_LIST', newsList: res.response.docs });
    });
    // const data = await response.json();

  }

  onHandleChange = () => {
    let { dispatch } = this.props;
    let { pageIndex } = this.props;
    dispatch({ type: 'UPDATE_LIST_COUNT', pageIndex: pageIndex + 1});
    console.log(pageIndex);
    this.getNewsItems(pageIndex);
  }

  render() {
    const { pageIndex, newsList } = this.props;
    return (
      <div>
        Hello
        <button onClick={this.onHandleChange}>View More</button>
        <p>{pageIndex}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newsList: state.newsList,
    pageIndex: state.pageIndex
  }
}
export default connect(mapStateToProps)(App);
