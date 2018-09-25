'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import Masonry from 'masonry-layout'

class SimpleApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            arrNotes: [
                { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo commodi atque vero nobis Tempore! <br>' },
                { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo commodi atque vero nobisofficiis ab temporibus voluptates ex non aut necessitatibus quia, natus, a explicabo nam iste esse.        Tempore! < br />        Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit quo commodi atque vero nobisofficiis ab temporibus voluptates ex non aut necessitatibus quia, natus, a explicabo nam iste esse.        Tempore! < br />' },
                { text: 'Lorem ipsum dolor sit amet consectetur adipisicing Tempore! <br>Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit quo commodi atque vero nobisofficiis ab temporibus voluptates ex non aut necessitatibus quia, natus, a explicabo nam iste esse.        Tempore! < br />' },
                { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo commodi atque vero nobisofficiis ab temporibus voluptates ex non aut necessitatibus quia, natus, a explicabo nam iste esse.        Tempore! < br />' },
                { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo commodi atque vero nobisofficiis ab temporibus voluptates ex non aut necessitatibus quia, natus, a explicabo nam iste esse.        Tempore! < br />        Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit quo commodi atque vero nobisofficiis ab temporibus voluptates ex non aut necessitatibus quia, natus, a explicabo nam iste esse.        Tempore! < br />' },

                { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo commodi atque vero nobis Tempore! <br>' },
                { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo commodi atque vero nobisofficiis ab temporibus voluptates ex non aut necessitatibus quia, natus, a explicabo nam iste esse.        Tempore! < br />        Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit quo commodi atque vero nobisofficiis ab temporibus voluptates ex non aut necessitatibus quia, natus, a explicabo nam iste esse.        Tempore! < br />' },
                { text: 'Lorem ipsum dolor sit amet consectetur adipisicing Tempore! <br>Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit quo commodi atque vero nobisofficiis ab temporibus voluptates ex non aut necessitatibus quia, natus, a explicabo nam iste esse.        Tempore! < br />' },
                { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo commodi atque vero nobisofficiis ab temporibus voluptates ex non aut necessitatibus quia, natus, a explicabo nam iste esse.        Tempore! < br />' },
                { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo commodi atque vero nobisofficiis ab temporibus voluptates ex non aut necessitatibus quia, natus, a explicabo nam iste esse.        Tempore! < br />        Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit quo commodi atque vero nobisofficiis ab temporibus voluptates ex non aut necessitatibus quia, natus, a explicabo nam iste esse.        Tempore! < br />' },

                { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo commodi atque vero nobis Tempore! <br>' },
                { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo commodi atque vero nobisofficiis ab temporibus voluptates ex non aut necessitatibus quia, natus, a explicabo nam iste esse.        Tempore! < br />        Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit quo commodi atque vero nobisofficiis ab temporibus voluptates ex non aut necessitatibus quia, natus, a explicabo nam iste esse.        Tempore! < br />' },
                { text: 'Lorem ipsum dolor sit amet consectetur adipisicing Tempore! <br>Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit quo commodi atque vero nobisofficiis ab temporibus voluptates ex non aut necessitatibus quia, natus, a explicabo nam iste esse.        Tempore! < br />' },
                { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo commodi atque vero nobisofficiis ab temporibus voluptates ex non aut necessitatibus quia, natus, a explicabo nam iste esse.        Tempore! < br />' },
                { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo commodi atque vero nobisofficiis ab temporibus voluptates ex non aut necessitatibus quia, natus, a explicabo nam iste esse.        Tempore! < br />        Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit quo commodi atque vero nobisofficiis ab temporibus voluptates ex non aut necessitatibus quia, natus, a explicabo nam iste esse.        Tempore! < br /' }
            ]
        }
    }

    addNote() {

        console.log("Adding note.");
        // let note = { text: "amet consectetur adipisicing elit. Reprehenderit quo commodi atque vero nobisofficiis ab temporibus voluptates ex non aut necessitatibus quia" }
        let note = { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo commodi atque vero nobisofficiis ab temporibus voluptates ex non aut necessitatibus quia, natus, a explicabo nam iste esse.        Tempore! < br />        Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit quo commodi atque vero nobisofficiis ab temporibus voluptates ex non aut necessitatibus quia, natus, a explicabo nam iste esse.        Tempore! < br />" }
        let arrNotes = this.state.arrNotes.slice();
        
        arrNotes.push(note);
        
        this.setState({
            arrNotes: arrNotes
        })
        console.log('State.notes = ', this.state.arrNotes);
    }

    componentDidUpdate(){
        console.log('Did update');
        this.msnry.reloadItems();
        this.msnry.layout();
    }

    componentDidMount() {
        let grid = this.refs.grid;
        this.msnry = new Masonry(grid, {
            itemSelector: '.note',
            percentPosition: true,
            gutter: 0
        });
    }

    render() {


        let lstHtmlNotes = this.state.arrNotes.map((note, i) => (
            <div key={i} className="note w-100 w-50-m w-third-l ph2 mb2">
                <div
                    className="ba b--black-30 ph2 br2 shadow-5 bg-white"
                    dangerouslySetInnerHTML={{ __html: `<span class="red">${i + 1} - </span> ${note.text}` }}
                />
            </div>
        ))

        return (
            <div>
                <div ref="grid" className="w-100 mv2 ba b--green">
                    {lstHtmlNotes}
                </div>
                <div className="tc">
                    <button
                        className="br2 ba b--light-blue pointer"
                        onClick={this.addNote.bind(this)}
                    >Hi everyone</button>
                </div>
            </div>
        )
    }
}


ReactDOM.render(<SimpleApp />, document.getElementById('app'));
