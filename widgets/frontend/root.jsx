import React from 'react';
import Clock from './clock';
import Tabs from './tabs';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tabs: [{title: 'One', content: 'I am number one!'},
        {title: 'Two', content: 'Second the best'},
        {title: 'Three', content: '3rd the nerd'}]
      };
  }

  render(){
    return (
    <div>
      <Clock />
      <Tabs tabTitle = { this.state.tabs } />
    </div>
    );
  }
}

export default Root;
