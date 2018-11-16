import * as React from 'react';

import Notes from './components/Notes'
import Search from './components/Search'

import './App.css';

class App extends React.Component {

  private static fetchConfig = { headers: { Authorization: '145dd9bb843cbbb7139f1bd00ee2d16cc151fe54' } }

  private static requestUrl(verse: string) {
    const settings = {
      "q": verse,
      "include-verse-numbers": "false",
      "include-footnotes": "false",
      "include-headings": "false",
      "include-short-copyright": "false",
      "include-passage-references": "false",
      "indent-poetry=false": "false"
    }
    const params = Object.keys(settings).map(key => key + "=" + settings[key]).join("&");
    return "https://api.esv.org/v3/passage/text/?" + params;
  }

  public state = {
    verses: ['1 Tim 2:12', 'Exo 22:18', '1 Peter 2:18'],
    loaded: false,
    notes: []
  }

  public update() {

    const notesCopy: any[] = this.state.notes.slice();
    // array of verses that need to be loaded, gets populated with Promises
    const toLoad: any[] = [];
    this.state.verses.forEach((verse, i) => {
      if (notesCopy[i]) { return }; // already loaded, move on
      notesCopy[i] = null; // create blank space in notes array
      toLoad.push(new Promise((resolve, reject) => {
        fetch(App.requestUrl(verse), App.fetchConfig)
          .then(res => res.json())
          .then(res => {
            // resolve with object containing notes array id and server response
            resolve({ id: i, text: res });
          })
          .catch(e => {
            reject(e);
          });
      }));
    });
    // verses yet to be loaded have blank notes, push those to state
    this.setState({ notes: notesCopy }, () => {
      // load versers
      Promise.all(toLoad).then(res => {
        res.forEach(note => {
          // fill notes array copy
          notesCopy[note.id] = note.text;
        });
        // and finally, update state again
        this.setState({ notes: notesCopy, loaded: true });
      });
    });
  }

  public componentDidMount() {
    this.update();
  }

  public getVerse = (verse: string) => {
    // append search term to verses, then update()
    this.setState({ verses: this.state.verses.concat([verse]), loaded: false }, this.update);
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
