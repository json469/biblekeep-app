import * as React from "react";

import '../App.css';

export interface IProps {

    getVerse: any;
}

class Search extends React.Component<IProps> {

    public state = {
        searchText: ""
    }

    // controlled input
    public handleSearchTextChange = (e: any) => this.setState({searchText: e.target.value})

    public handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.getVerse(this.state.searchText);
        this.setState({searchText: ""});
    }

    public render() {
        return (
            <div id="search-div">
                <form onSubmit={this.handleSubmit}>
                <div>
                    <input onChange={this.handleSearchTextChange} value={this.state.searchText} placeholder="Search a verse"/>
                    <input type="submit" value="Go" />
                </div>
                </form>
            </div>
        );
    }
};

export default Search;