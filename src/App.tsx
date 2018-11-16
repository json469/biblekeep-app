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
          this.setState({
            notes: this.state.notes.concat(res.data),
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
