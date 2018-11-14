import * as React from 'react';
import '../App.css';

import CircularProgress from '@material-ui/core/CircularProgress';

interface INotesProp {

    loaded: boolean,
    notes: {}
}

class Notes extends React.Component<INotesProp> {

    public colours = ['#CCEEF7','#FCCDE7', '#C7FF92', '#E7E9EC', '#E2C9A8'];

    public render() {
        
        if (!this.props.loaded) { return (<div id='loading-div'><CircularProgress thickness={5}/></div>) }

        return (
            <div>
                {Object.keys(this.props.notes).map((key:any) => (
                    <div id="note" key={key} style={{background: this.colours[key]}}>
                        <h3>{this.props.notes[key].canonical}</h3>
                        <p>{this.props.notes[key].passages[0]}</p>
                    </div>
                ))}
            </div>
        )}    
}

export default Notes