import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import * as Routes from './Routes';
import '../styles/App.css';
import Header from './Header';
import Sidebar from './Sidebar';

export default class App extends Component {
  state = {
    isOpen: false,
  };

  componentDidMount() {
    this.showMenu();
  }

  componentDidUpdate() {
    this.showMenu();
  }

  getAsideRef = (node) => { this.asideEl = node; };

  toggleMenu = (event) => {
    const { isOpen } = this.state;
    event.preventDefault();
    this.setState({
      isOpen: !isOpen,
    });
  };

  showMenu = () => {
    const { state } = this;
    return (!state.isOpen)
      ? this.asideEl.classList.add('hide_aside')
      : this.asideEl.classList.remove('hide_aside');
  };

  render() {
    const { getAsideRef, toggleMenu } = this;
    return (
      <BrowserRouter>
        <div className="main">
          <aside ref={getAsideRef}>
            <Sidebar toggleMenu={toggleMenu} />
          </aside>
          <div className="wrap">
            <Header toggleMenu={toggleMenu} />
            <main className="content">
              <Route exact path="/" component={Routes.Home} />
              <Route path="/catalog" component={Routes.Catalog} />
            </main>
            <footer>© Copyright</footer>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
