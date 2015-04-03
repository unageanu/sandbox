import React      from 'react';
import AppBar     from './app-bar';
import LeftNavi   from './left-navi';
import TextPaper  from './text-paper';
import ImagePaper from './image-paper';

export default React.createClass({
    render() {
        return (
          <div className="app">
            <AppBar onMenuIconTapped={this.toggleLeftNavi}>
            </AppBar>
            <LeftNavi ref="leftNav" />
            <div className="content">
              <TextPaper />
              <ImagePaper />
              <TextPaper />
            </div>
          </div>
        );
    },

    toggleLeftNavi() {
        this.refs.leftNav.toggle();
    }
});
