import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.term === "") {
      return alert("Please enter city or 5-digit zip code");
    }
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Weather Search</label>
            <input
              type="text"
              value={this.state.term}
              placeholder="Enter City or Zip"
              onChange={(e) => this.setState({ term: e.target.value })}
            />

            <button
              className="ui primary button"
              onClick={this.onFormSubmit}
              style={{ marginTop: "10px" }}
            >
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
