import * as React from 'react';
import Axios from 'axios'

import Notes from './components/Notes'
import Search from './components/Search'

import './App.css';

class App extends React.Component {

  public state = {

    loaded: false,
    verses: ['heb 4:14-16', 'Phil 4:4-7', 'Psalm 31:7-10'],
    notes: []
  }

  public async componentDidMount() {

    await this.state.verses.forEach( async verse => {

      const request = `https://api.esv.org/v3/passage/text/?q=${verse}&include-verse-numbers=false&include-footnotes=false&include-headings=false&include-short-copyright=false&include-passage-references=false&indent-poetry=false`;
      const config = {headers : {Authorization : '145dd9bb843cbbb7139f1bd00ee2d16cc151fe54'}}

      Axios.get(request, config)
        .then(res => {
          const note = res.data;
          const joined = this.state.notes.concat(note);   // Could not yet find a clean way to add object to a state array, so just joined them before and updated it to the new one
          this.setState({
            notes: joined,
            loaded : true
          })
        });
    });
  }

  public getVerse = (e:any) => {

    e.preventDefault();

    const verse = e.target.elements.verse.value;

    this.setState({
      verses: this.state.verses.concat(verse)
    })
  }

  public render() {
    return (
      <div>
        <Search getVerse={this.getVerse} />
        <Notes notes={this.state.notes} loaded={this.state.loaded} />
      </div>
    );
  }
}

export default App;
