import React from "react";
import "./SearchBar.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      location: "",
      sortBy: "best_match",
    };
  }

  getSortByClass = (sortByOption) => {
    if (this.state.sortBy === sortByOption) {
      return "active";
    }
    return "";
  };

  handleSortByChange = (sortByOption) => {
    this.setState({ sortBy: sortByOption });
  };

  handleTermChange = (event) => {
    this.setState({ term: event.target.value });
  };

  handleLocationChange = (event) => {
    this.setState({ location: event.target.value });
  };

  handleSearch = (event) => {
    this.props.searchYelp(
      this.state.term,
      this.state.location,
      this.state.sortBy
    );

    event.preventDefault();
  };

  renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((key) => {
      const value = sortByOptions[key];
      const isActive = this.state.sortBy === value;
      return (
        <li
          // className={this.getSortByClass(value)}
          style={{ color: isActive ? "#f0c36c" : "white" }}
          hover={{ color: "red" }}
          key={value}
          onClick={this.handleSortByChange.bind(this, value)}
        >
          {key}
        </li>
      );
    });
  };

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className="SearchBar-fields">
          <input
            placeholder="Search Businesses"
            onChange={this.handleTermChange}
          />
          <input placeholder="Where?" onChange={this.handleLocationChange} />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
