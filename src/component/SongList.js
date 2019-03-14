import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {
  render() {
    console.log(this.props);
    //this.props === { songs:state.songs }
    return <div>SongList</div>;
  };
}

//take our state object (all data inside our redux store), run some calculation on it to cause it to show as props inside our component
const mapStateToProps = state => {
  return { songs:state.songs };
}

export default connect(mapStateToProps)(SongList);
