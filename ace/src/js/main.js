
import React     from 'react'
import AceEditor from 'react-ace'

// webpackで統合するので、必要なテーマや拡張モジュールは
// 明示的にimportしておく必要があります。
import 'brace/mode/ruby'
import 'brace/theme/github'
import 'brace/ext/searchbox'

class RubyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <AceEditor
        mode="ruby"
        theme="github"
        value={this.props.source}
        onChange={this.onChange.bind(this)}
        name="editor"
      />
    );
  }

  onChange(newValue) {
    console.log(newValue);
  }
}
RubyEditor.propTypes =  {
  source: React.PropTypes.string.isRequired
};
RubyEditor.defaultProps =  {
  source: "# test. \nclass Foo\nend"
};

React.render(
  <RubyEditor />,
  document.body );
