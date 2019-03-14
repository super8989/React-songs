import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>

          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    //this.props === { songs:state.songs }
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

//take our state object (all data inside our redux store), run some calculation on it to cause it to show as props inside our component
const mapStateToProps = state => {
  console.log(state);
  return { songs: state.songs };
};

//{ selectSong: selectSong }
export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);
