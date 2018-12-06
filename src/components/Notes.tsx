import * as React from 'react';
import './Notes.css';

import CircularProgress from '@material-ui/core/CircularProgress';

interface INotesProp {
    loaded: boolean,
    notes: any[]
}

class Notes extends React.Component<INotesProp> {

    public colours = ['#CCEEF7', '#FCCDE7', '#C7FF92', '#E7E9EC', '#E2C9A8'];

    public render() {
        return (
            <div className="notes" >
                {this.props.notes.map((note: any, i: number) => {
                    if (note) {
                        return (
                            <div className="note" key={i} style={{ background: this.colours[i % 5] }}>
                                <h3>{note.canonical}</h3>
                                <p>{note.passages[0]}</p>
                            </div>
                        )
                    }
                    else {
                        return (<div className='loading-div'><CircularProgress thickness={5} /></div>)
                    }
                })}
            </div>
        )
    }
}

export default Notes