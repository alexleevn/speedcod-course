 'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import Masonry from 'masonry-layout'


class Note extends React.Component {
    render() {
        var style = {
            backgroundColor: this.props.color
        }
        return (<div className="note" style={style}>{this.props.children}
            <span className="note-delete" onClick={this.props.onDelete}>x</span>
        </div>);
    }
}

class NoteEditor extends React.Component {
    constructor(props) {
        super(props);
        this.color = 'ff6680';
        this.state = { text: '', color: this.color };
    }
    handleChange(e) {
        this.setState({ text: e.target.value });
    }
    handleChangeColor(e) {
        this.setState({ color: e.target.value });
    }
    render() {
        return (<div className="note-editor">
            <textarea placeholder="Enter your note here..." onChange={this.handleChange.bind(this)}>{this.state.text}</textarea>
            <input className="jscolor" value={this.state.color} onBlur={this.handleChangeColor.bind(this)} />
            <button onClick={() => this.props.onNoteAdd(this.state.text, this.state.color)}>Add</button>
        </div>);
    }
}

class NotesGrid extends React.Component {
    componentDidMount() {
        var grid = this.refs.grid;
        this.msnry = new Masonry(grid, {
            // options
            itemSelector: '.note',
            columnWidth: 200,
            gutter: 10
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props.notes.length != prevProps.notes.length) {
            this.msnry.reloadItems();
            this.msnry.layout();
        }
    }

    render() {
        var onNoteDelete = this.props.onNoteDelete;
        return (<div className="notes-grid" ref="grid">
            {this.props.notes.map((note) => (
                <Note
                    key={note.id}
                    color={note.color}
                    onDelete={onNoteDelete.bind(null, note)}>
                    {note.text}
                </Note>))}
        </div>);
    }
}

class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [
                { id: 1, text: 'DemoNote', color: 'coral' },
                { id: 2, text: 'You can use Masonry with vanilla JS', color: 'aliceblue' },
                { id: 3, text: 'You can initialize Masonry in HTML, without writing any JavaScript', color: 'gold' },
                { id: 4, text: 'HTML initialization was previously done with a class of js-masonry and setting options in data-masonry-options in Masonry v3. Masonry v4 is backwards compatible with this code.', color: 'lightpink' },
                { id: 5, text: 'Masonry v4 is backwards compatible with this code.', color: '#C9A39C' }
            ]
        }
    }

    componentDidMount() {
        var localNotes = JSON.parse(localStorage.getItem('notes'));
        if (localNotes) {
            this.setState({ notes: localNotes });
        }
    }

    updateLocalStorage() {
        var notes = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', notes);
        console.log('update ls');
    }

    onNoteAdd(noteText, noteColor) {
        var notesNew = this.state.notes.slice();
        notesNew.unshift({ id: Date.now(), text: noteText, color: '#' + noteColor });
        this.setState({ notes: notesNew });
    }

    onNoteDelete(note) {
        var notesNew = this.state.notes.filter((_note) => _note.id != note.id);
        this.setState({ notes: notesNew });
    }

    componentDidUpdate() {
        this.updateLocalStorage();
    }

    render() {
        return (<div className="notes-app">
            <NoteEditor onNoteAdd={this.onNoteAdd.bind(this)} />
            <NotesGrid notes={this.state.notes} onNoteDelete={this.onNoteDelete.bind(this)} />
        </div>);
    }
}

ReactDOM.render(<NotesApp />, document.getElementById('app'));