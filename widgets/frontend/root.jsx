import React from 'react';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';
import Autocomplete from './autocomplete'


const Names = [
  'Atai',
  'Andre',
  'Americo',
  'Gabriel',
  'Kimmy',
  'Liz',
  'Michael V',
  'Michael VP'
];

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
      <Weather />
      <Tabs tabTitle = { this.state.tabs } />
      <Autocomplete names = { Names }/>
    </div>
    );
  }
}

export default Root;
