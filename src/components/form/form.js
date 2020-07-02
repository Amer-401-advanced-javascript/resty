import React from "react";
import "./form.scss";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      method: "",
      request: {},
    };
  }

  handleMethod = (event) => {
    const method = event.target.value;
    this.setState({ method });
  };

  handleUrl = (event) => {
    let url = event.target.value;
    this.setState({ url });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    if (this.state.url && this.state.method) {
      let request = {
        url: this.state.url,
        method: this.state.method,
      };
      let proxyUrl = "https://cors-anywhere.herokuapp.com/";
      let response = await fetch(proxyUrl + this.state.url);
      let data = await response.json();

      let header = {};
      for (let [key, value] of response.headers) {
        header[key] = value;
      }

      let count;
      if (data.count) {
        count = data.results.length;
      } else {
        count = 0;
      }
      let responseData = data;
      let result = { responseData, header };
      this.props.handler(count, result);

      // Clear old settings
      let url = "";
      let method = "";

      this.setState({ request, url, method });
      let stringify = JSON.stringify(this.state.request);
            localStorage.setItem(`${this.state.request.url}`, stringify);
    } else {
      alert("Missing information");
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="url"> URL</label>
        <input type="text" onChange={this.handleUrl} id="url" />
        <button type="submit">GO!</button>

        <label for="get">GET</label>
        <input
          type="radio"
          name="rest"
          id="get"
          onClick={this.handleMethod}
          value="GET"
        />

        <label for="post">POST</label>
        <input
          type="radio"
          name="rest"
          id="post"
          onClick={this.handleMethod}
          value="POST"
        />

        <label for="put">PUT</label>
        <input
          type="radio"
          name="rest"
          id="put"
          onClick={this.handleMethod}
          value="PUT"
        />

        <label for="delete">DELETE</label>
        <input
          type="radio"
          name="rest"
          id="delete"
          onClick={this.handleMethod}
          value="DELETE"
        />
      </form>
    );
  }
}

export default Form;
