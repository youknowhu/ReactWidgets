import React from 'react';

class Tabs extends React.Component {
  constructor(props){
    super(props);
    this.state = {tabIndex: 0};
    this.tabBound = this.tabSelector.bind(this);
  }

  render() {
    return (
      <div className="tabs-div">
          <h1>Tabs </h1>
          <div className="tabs-main">
            <header>
              <ul className="tabs-titles">
                {
                  this.props.tabTitle.map((display, idx) =>
                    <li onClick={this.tabBound}
                      key={display['title']}
                      value={idx}
                      className={ this.state.tabIndex === idx ? "select-tab" : ""}>
                      <h2>{display['title']}</h2>
                    </li>
                  )
                }
              </ul>
            </header>
            <article className="tabs-content">
              {this.props.tabTitle[this.state.tabIndex]['content'] }
            </article>
          </div>
      </div>
    );
  }


  tabSelector(e) {
    this.setState({tabIndex: e.currentTarget.value});
  }


}

export default Tabs;
