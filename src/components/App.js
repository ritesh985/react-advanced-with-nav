import React, { Component } from 'react';
import axios from 'axios';
import PeopleItem from './PeopleItem';
import Loader from './Loader';
import './App.css';

class App extends Component {
  state = { data: [], loading: true };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        this.setState({ data: response.data, loading: false });
        // console.log(response)
      })
      .catch((error) => console.log(error));
  }

  removeItem = (item) => {
    const { data } = this.state;
    const newList = data.filter((test) => {
      return test.id !== item;
    });
    this.setState({
      data: [...newList],
    });
  };

  handleDataEdit = (editedItem, editId) => {
    // console.log(editedItem);
    // console.log(editId);
    const { data } = this.state;
    const editList = data.map((item) => {
      if (item.id === editId) {
        return { ...item, ...editedItem };
      }
      return item;
    });
    // console.log(editList);
    this.setState({
      data: [...editList],
    });
  };

  render() {
    const { loading, data } = this.state;
    // console.log(this.props);
    if (loading) {
      return <Loader />;
    }
    return (
      <div>
        {data.map((person) => {
          return (
            <PeopleItem
              key={person.id}
              person={person}
              removeItem={this.removeItem}
              handleDataEdit={this.handleDataEdit}
            />
          );
        })}
        {data.map((r) => {
          return (
            <div key={r.id}>
              <p key={r.id}>{r.name}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
