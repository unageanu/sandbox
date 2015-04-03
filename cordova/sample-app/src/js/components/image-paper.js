import React    from 'react';
import MUI   from 'material-ui';

const Paper = MUI.Paper;

export default React.createClass({
    render() {
        return (
          <Paper zDepth={1} innerClassName='image-paper'>
          </Paper>
        );
    }
});
