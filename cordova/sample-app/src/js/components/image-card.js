import React from 'react';
import MUI   from 'material-ui';
import Mixin from './abstract-paper-mmixin';

const Paper = MUI.Paper;

export default React.createClass({
    mixins : [Mixin],
    render() {
        return (
          <Paper zDepth={1}
            innerClassName='image-card' className={this.className()}
            onTouchTap={this.touch}>
          </Paper>
        );
    }
});
