import React, { Component } from 'react';
import PagePreloader from './components/PagePreloader';
import Header from './components/Header';
import Hero from './components/Hero';
import FilterForm from './components/FilterForm';
import Properties from './components/Properties';
import Services from './components/Services';
// import Personal from './components/Personal';

class App extends Component {
  state = {
    todos: []
  };

  async componentDidMount() {
    // try {
    //   const res = await fetch('http://127.0.0.1:8000/api/');
    //   const todos = await res.json();
    //   this.setState({
    //     todos
    //   });
    // } catch (e) {
    //   console.log(e);
    // }
  }

  render() {
    return (
      <div>
        <PagePreloader></PagePreloader>
        <Header></Header>
        <Hero></Hero>
        <FilterForm></FilterForm>
        <Properties></Properties>
        <Services></Services>
      </div>
    );
  }
}

export default App;