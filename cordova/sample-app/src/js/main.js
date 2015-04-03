import React     from 'react';
import TapPlugin from 'react-tap-event-plugin';
import MainView  from './components/main-view';

(function () {
  window.React = React;
  TapPlugin();

  React.render(<MainView />, document.body);
})();
