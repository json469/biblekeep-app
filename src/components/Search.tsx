import * as React from "react";

import '../App.css';

export interface IProps {

    getVerse: any;
}

class Search extends React.Component<IProps> {

    public render() {
        
        return (

            <div id="search-div">
                <form onSubmit={this.props.getVerse}>
                <div>
                    <input type="text" name="verse" placeholder="Search a verse"/>
                    <button>Go</button>
                </div>
                </form>
            </div>
        );
    }
};

export default Search;