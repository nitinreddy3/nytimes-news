import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from 'antd';

const { Search: AntSearch } = Input;

class Search extends React.Component {
  static propTypes = {
    onHandleSearchField: PropTypes.func.isRequired,
    onHandleSearch: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
  };

  render() {
    const { onHandleSearchField, onHandleSearch, value } = this.props;
    return (
      <div>
        <AntSearch
          style={{
            margin: 'auto',
            width: '28%',
            marginBottom: '2%',
          }}
          placeholder="Search The New York Times"
          enterButton
          size="large"
          defaultValue={value}
          onChange={e => onHandleSearchField(e.target.value)}
          onSearch={onHandleSearch}
        />
        {/* {value ? (
          <Button
            onClick={() => {
              this.setState({ searchValue: '' });
              handleSearch('');
            }}
            size="large"
            style={{ marginLeft: '2%' }}
          >
            Clear
          </Button>
        ) : null} */}
      </div>
    );
  }
}

export default Search;
