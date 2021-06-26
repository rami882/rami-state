import React, {Component} from 'react';
import './App.css';
import imgSrc from './téléchargement.png'


export default class App extends Component {

  counting = () => this.setState({ counter: this.state.counter + 1 })

componentDidMount() {
  setInterval(this.counting, 1000)
}
  state = {
    person: "rami",
    isShown: true,
    profession: "profession:Developer"
    
  };

  handleShow = () => this.setState({isShown: !this.state.isShown});
  render() {
    return (
      <div className="main">
        <button onClick={this.handleShow}>show</button>
        {this.state.isShown && (
          <div>
        <h1>profile {this.state.person}</h1>
        <h2>{this.state.profession}</h2>
        <img src={imgSrc} />
        <h2></h2>
          </div>
        )}

      </div>
    )
  }
};
