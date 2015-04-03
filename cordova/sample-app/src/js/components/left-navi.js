import React from 'react';
import MUI   from 'material-ui';

const RaisedButton = MUI.RaisedButton;
const LeftNav      = MUI.LeftNav;
const MenuItem     = MUI.MenuItem;

const menuItems = [
  { type: MenuItem.Types.SUBHEADER, text: 'カテゴリー1' },
  { route: 'menu1', text: 'メニュー1' },
  { route: 'menu2', text: 'メニュー2' },
  { type: MenuItem.Types.SUBHEADER, text: 'カテゴリー2' },
  { route: 'menu3', text: 'メニュー3' },
  { route: 'menu4', text: 'メニュー4' },
  { type: MenuItem.Types.SUBHEADER, text: 'カテゴリー3' },
  { route: 'menu5', text: 'メニュー5' }
];

export default React.createClass({
    render() {
        return (
          <LeftNav
            ref="leftNav"
            docked={false}
            isInitiallyOpen={false}
            menuItems={menuItems}
            />
        );
    },
    toggle : function() {
      this.refs.leftNav.toggle();
    }
});
