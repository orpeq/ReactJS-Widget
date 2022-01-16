import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

// eslint-disable-next-line no-unused-vars

// Accordion Component
const items = [
  {
    title: 'What is React?',
    content: 'React is a front-end javascript framework',
  },
  {
    title: 'Why use react?',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'How do You use React?',
    content: 'You use React by creating components',
  },
];

// Dropdown Component
const options = [
  {
    label: 'A Color Violet',
    value: 'violet',
  },
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A Color Grey',
    value: 'grey',
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
