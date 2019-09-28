import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      title: "",
      message: ""
    };
  }

  handleForm = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submit = e => {
    e.preventDefault();
    this.setState(state => {
      const messages = state.messages.concat({
        title: this.state.title,
        message: this.state.message
      });

      return {
        messages,
        title: "",
        message: ""
      };
    });
    console.log("mensaje enviado");
    console.log(this.state.messages);
  };

  render() {
    return (
      <div className="container">
        {this.state.messages &&
          this.state.messages.map(m => {
            return (
              <div key={m.title}>
                <h2>{m.title}</h2>
                <h4>{m.message}</h4>
              </div>
            );
          })}
        <form onSubmit={this.submit}>
          <label htmlFor="title">Título</label>
          <input
            autoComplete="off"
            placeholder="Escribe un Título"
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleForm}
          />
          <label htmlFor="message">Mensaje</label>
          <input
            autoComplete="off"
            placeholder="Escribe un mensaje"
            type="text"
            name="message"
            value={this.state.message}
            onChange={this.handleForm}
          />
          <input type="submit" />
        </form>
        <br />
        {this.state.title}
        <br />
        {this.state.message}
      </div>
    );
  }
}

export default App;
