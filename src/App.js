import React, { useState } from 'react';

import './App.css';
import MultiSelectDropdown from './components/MultiSelectDropdown';
import Input from './components/Input';



const options = [
  { label: 'Image', value: 1 },
  { label: 'Live', value: 2 },
  { label: 'Notes', value: 3 },
  { label: 'Presentation', value: 4 },
  { label: 'Report', value: 5 },
  { label: 'Video', value: 6 },
]

const options2 = [
  { label: 'Category', value: 1 },
  { label: 'Podcast', value: 2 },
  { label: 'Show', value: 3 },
  { label: 'Movie', value: 4 }

]

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [categories, setCategories] = useState([]);
  const [others, setOthers] = useState([]);


  const onChangeCategories = (categories) => {
    let newCategories = []
    for (const property in categories) {
      categories[property] && newCategories.push(property)
    }
    setCategories(newCategories);
  }

  const onChangeOthers = (others) => {
    let newOthers = []
    for (const property in others) {
      others[property] && newOthers.push(property)
    }
    setOthers(newOthers);
  }

  const submitForm = () => {
    console.log('name', name)
    console.log('email', email)
    console.log('categories', categories)
    console.log('others', others)
  }

  return (
    <div className="App">
      <main>
        <h2>Test Form </h2>
        <form id='test-form' className='form' >
          <div><label htmlFor='name'>Name:</label>
            <Input className='default-input' type='text' name="name" value={name} onChange={(inputValue) => { setName(inputValue); }} />
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <Input className='default-input' type='email' name="email" value={email} onChange={(inputValue) => { setEmail(inputValue); }} />
          </div>
          <div className='seleted-options'>{categories.join(', ')}</div>
          <div className='seleted-options'>{others.join(', ')}</div>
          <div className='flex'>
            <label>Category:</label>
            <MultiSelectDropdown
              placeHolder='Search by Category'
              noItemsText='No category'
              options={options}
              isMulti={true}
              onChange={onChangeCategories} />
          </div>
          <div className='flex'>
            <label>Others:</label>
            <MultiSelectDropdown
              placeHolder='Search Others'
              noItemsText='No others'
              options={options2}
              onChange={onChangeOthers} />
          </div>
          <div className='button-section grid-col-2'>
            <input type='button' value='submit' onClick={submitForm} />
          </div>

        </form>
      </main>

    </div>
  );
}

export default App;
