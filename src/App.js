import React, { Component } from 'react';
import './App.css';
import { database } from './Firebase';

class App extends Component {

  componentDidMount() {

    database.ref('/events')
      .on('value', (snapshot) => {
        const firebaseData = Object.entries(
          snapshot.val() || {}
        );

        const data = firebaseData.map(([id, value]) => {
          // value.id = id;
          return value;
        });

        // my data
        console.log(data);
      });

    const newEvent = {
      name: 'My new awesome event',
      date: 'Monday',
      description: 'Tańce, hulanki i swawole'
    };

    database.ref('/events').push(newEvent);
  }



  render() {
    return (
      <div>

      </div>
    );
  }
}

export default App;