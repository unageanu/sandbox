import React from 'react';
import MUI   from 'material-ui';
import Mixin from './abstract-paper-mmixin';

const Paper = MUI.Paper;

export default React.createClass({
    mixins : [Mixin],
    render() {
        const content   = this.state.status == "normal"
          ? <p>テキストコンテンツ<br/>タップで回転</p>
          : <p>再タップで戻る</p>;

        return (
          <Paper zDepth={1}
            innerClassName='text-card' className={this.className()}
            onTouchTap={this.touch}>
              {content}
          </Paper>
        );
    }
});
