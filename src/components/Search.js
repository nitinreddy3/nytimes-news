import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

const { Search: AntSearch } = Input;

class Search extends React.Component {
  static propTypes = {
    onHandleSearchField: PropTypes.func.isRequired,
    onHandleSearch: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
  };

  render() {
    const { onHandleSearchField, onHandleSearch } = this.props;
    return (
      <div>
        <AntSearch
          style={{
            margin: 'auto',
            marginBottom: '2%',
          }}
          placeholder="Search The New York Times"
          enterButton
          size="large"
          onChange={e => onHandleSearchField(e.target.value)}
          onSearch={onHandleSearch}
        />
      </div>
    );
  }
}

export default Search;
