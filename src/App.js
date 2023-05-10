import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '조형우',
  'birthday': '970409',
  'gender': '남자',
  'job': '백수'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '조형규',
  'birthday': '941025',
  'gender': '남자',
  'job': '비행기메이커'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '조달이',
  'birthday': '201405',
  'gender': '여자',
  'job': '댕댕'
}]

class App extends Component {
  render() {
    return (
      <div>
        {
        customers.map(c => {
          return (
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
            />
        );
      })
    }   
    </div>
      );
    }
  }

export default App;
