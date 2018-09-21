'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import Masonry from 'masonry-layout'

class SimpleApp extends React.Component {
    componentDidMount() {
        let grid = this.refs.grid;
        this.msnry = new Masonry(grid, {
            // options
            itemSelector: '.note',
            percentPosition: true,
            gutter: 0,
        })
    }
    componentDidUpdate() {
        // Apply this code: when add & delete Items
        // this.msnry.reloadItems();
        // this.msnry.layout();
    }

    // $grid.imagesLoaded().progress( function() {
    //     $grid.masonry();
    // });  

    render() {
        let arrNotes = [
            { id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nostrum assumenda dicta repellat beataeTemporibus nostrum assumenda dicta repellat beataeTemporibus nostrum assumenda dicta repellat beataeTemporibus nostrum assumenda dicta repellat beataeTemporibus nostrum assumenda dicta repellat beataeTemporibus nostrum assumenda dicta repellat beatae' },
            { id: 2, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.dolor sit amet, consectetur adipisicing elit.dolor sit amet, consectetur adipisicing elit.dolor sit amet, consectetur adipisicing elit.dolor sit amet, consectetur adipisicing elit.dolor sit amet, consectetur adipisicing elit. ' },
            { id: 3, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nostrum assumenda dicta repellat beatae, corporis sunt enim, magnam a repudiandae eaque tempore perspiciatis distinctio!Vitae nisi sint repellat atque' },
            { id: 4, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nostrum assumenda dicta repellat beatae,corporis ' },
            { id: 5, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nostrum assumenda dicta repellat beatae,corporis sunt enim, magnam a repudiandae eaque tempore perspiciatis distinctio' },
            { id: 6, text: 'EveryDay, InspireUI, NordicShop, Trainning....EveryDay, InspireUI, NordicShop, Trainning....EveryDay, InspireUI, NordicShop, Trainning....' },
            { id: 7, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nostrum assumenda dicta repellat beataeTemporibus nostrum assumenda dicta repellat beataeTemporibus nostrum assumenda dicta repellat beataeTemporibus nostrum assumenda dicta repellat beataeTemporibus nostrum assumenda dicta repellat beataeTemporibus nostrum assumenda dicta repellat beatae' },
            { id: 8, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.dolor sit amet, consectetur adipisicing elit.dolor sit amet, consectetur adipisicing elit.dolor sit amet, consectetur adipisicing elit.dolor sit amet, consectetur adipisicing elit.dolor sit amet, consectetur adipisicing elit. ' },
            { id: 9, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nostrum assumenda dicta repellat beatae, corporis sunt enim, magnam a repudiandae eaque tempore perspiciatis distinctio!Vitae nisi sint repellat atque' },
            { id: 10, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nostrum assumenda dicta repellat beatae,corporis ' },
            { id: 11, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nostrum assumenda dicta repellat beatae,corporis sunt enim, magnam a repudiandae eaque tempore perspiciatis distinctio' },
            { id: 12, text: 'EveryDay, InspireUI, NordicShop, Trainning....EveryDay, InspireUI, NordicShop, Trainning....EveryDay, InspireUI, NordicShop, Trainning....' },
            { id: 13, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nostrum assumenda dicta repellat beataeTemporibus nostrum assumenda dicta repellat beataeTemporibus nostrum assumenda dicta repellat beataeTemporibus nostrum assumenda dicta repellat beataeTemporibus nostrum assumenda dicta repellat beataeTemporibus nostrum assumenda dicta repellat beatae' },
            { id: 14, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.dolor sit amet, consectetur adipisicing elit.dolor sit amet, consectetur adipisicing elit.dolor sit amet, consectetur adipisicing elit.dolor sit amet, consectetur adipisicing elit.dolor sit amet, consectetur adipisicing elit. ' },
            { id: 15, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nostrum assumenda dicta repellat beatae, corporis sunt enim, magnam a repudiandae eaque tempore perspiciatis distinctio!Vitae nisi sint repellat atque' },
            { id: 16, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nostrum assumenda dicta repellat beatae,corporis ' },
            { id: 17, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nostrum assumenda dicta repellat beatae,corporis sunt enim, magnam a repudiandae eaque tempore perspiciatis distinctio' },
            { id: 18, text: 'EveryDay, InspireUI, NordicShop, Trainning....EveryDay, InspireUI, NordicShop, Trainning....EveryDay, InspireUI, NordicShop, Trainning....' },
            { id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nostrum assumenda dicta repellat beataeTemporibus nostrum assumenda dicta repellat beataeTemporibus nostrum assumenda dicta repellat beataeTemporibus nostrum assumenda dicta repellat beataeTemporibus nostrum assumenda dicta repellat beataeTemporibus nostrum assumenda dicta repellat beatae' },
            { id: 2, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.dolor sit amet, consectetur adipisicing elit.dolor sit amet, consectetur adipisicing elit.dolor sit amet, consectetur adipisicing elit.dolor sit amet, consectetur adipisicing elit.dolor sit amet, consectetur adipisicing elit. ' },
            { id: 3, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nostrum assumenda dicta repellat beatae, corporis sunt enim, magnam a repudiandae eaque tempore perspiciatis distinctio!Vitae nisi sint repellat atque' },
            { id: 4, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nostrum assumenda dicta repellat beatae,corporis ' },
            { id: 5, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nostrum assumenda dicta repellat beatae,corporis sunt enim, magnam a repudiandae eaque tempore perspiciatis distinctio' },
            { id: 6, text: 'EveryDay, InspireUI, NordicShop, Trainning....EveryDay, InspireUI, NordicShop, Trainning....EveryDay, InspireUI, NordicShop, Trainning....' },
            { id: 7, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nostrum assumenda dicta repellat beataeTemporibus nostrum assumenda dicta repellat beataeTemporibus nostrum assumenda dicta repellat beataeTemporibus nostrum assumenda dicta repellat beataeTemporibus nostrum assumenda dicta repellat beataeTemporibus nostrum assumenda dicta repellat beatae' },
            { id: 8, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.dolor sit amet, consectetur adipisicing elit.dolor sit amet, consectetur adipisicing elit.dolor sit amet, consectetur adipisicing elit.dolor sit amet, consectetur adipisicing elit.dolor sit amet, consectetur adipisicing elit. ' },
            { id: 9, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nostrum assumenda dicta repellat beatae, corporis sunt enim, magnam a repudiandae eaque tempore perspiciatis distinctio!Vitae nisi sint repellat atque' },
            { id: 10, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nostrum assumenda dicta repellat beatae,corporis ' },
            { id: 11, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nostrum assumenda dicta repellat beatae,corporis sunt enim, magnam a repudiandae eaque tempore perspiciatis distinctio' },
            { id: 12, text: 'EveryDay, InspireUI, NordicShop, Trainning....EveryDay, InspireUI, NordicShop, Trainning....EveryDay, InspireUI, NordicShop, Trainning....' },
            { id: 13, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nostrum assumenda dicta repellat beataeTemporibus nostrum assumenda dicta repellat beataeTemporibus nostrum assumenda dicta repellat beataeTemporibus nostrum assumenda dicta repellat beataeTemporibus nostrum assumenda dicta repellat beataeTemporibus nostrum assumenda dicta repellat beatae' },
            { id: 14, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.dolor sit amet, consectetur adipisicing elit.dolor sit amet, consectetur adipisicing elit.dolor sit amet, consectetur adipisicing elit.dolor sit amet, consectetur adipisicing elit.dolor sit amet, consectetur adipisicing elit. ' },
            { id: 15, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nostrum assumenda dicta repellat beatae, corporis sunt enim, magnam a repudiandae eaque tempore perspiciatis distinctio!Vitae nisi sint repellat atque' },
            { id: 16, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nostrum assumenda dicta repellat beatae,corporis ' },
            { id: 17, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nostrum assumenda dicta repellat beatae,corporis sunt enim, magnam a repudiandae eaque tempore perspiciatis distinctio' },
            { id: 18, text: 'EveryDay, InspireUI, NordicShop, Trainning....EveryDay, InspireUI, NordicShop, Trainning....EveryDay, InspireUI, NordicShop, Trainning....' },
        ]

        let lstHtmlNotes = arrNotes.map((note, i) => (
            <div key={i} className="note pa1 w-third-l w-50-m w-100">
                <div className="br1 pa2 shadow-5 ba b--black-30 bg-white sans-serif lh-copy">
                    <span className="red">{note.id}</span> - {note.text}
                </div>
            </div>
        ))

        return (
            <div className="w-90 center" ref="grid">
                {lstHtmlNotes}
            </div>
        )
    }

}

ReactDOM.render(<SimpleApp />, document.getElementById('app'));

