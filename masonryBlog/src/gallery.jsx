'use strict'

import React from 'react';
import Masonry from 'react-masonry-component';

const masonryOptions = {
    transitionDuration: 0
}

const style = { backgroundColor: 'tomato' }

const imagesLoadedOptions = { background: '.my-bg-image-el' }

export default class Gallery extends React.Component {

    handleClick() {
        console.log('Handle Click...')
    }

    handleLayoutComplete() {
        console.log('Handle Layout: ...');
    }

    componentDidMount() {
        console.log('Gallery Did Mount: ...');
        this.masonry.on('layoutComplete', this.handleLayoutComplete);
    }

    componentWillUnMount() {
        console.log('Gallery Will UnMount: ...');
        this.masonry.off('layoutComplete', this.handleLayoutComplete);
    }

    render() {

        const imagesLoadedOptions = { background: '.my-bg-image-el' }


        let arrTest = [1, 2, 3, 4, 5, 6, 7, 8, 9]

        // const childElements = this.props.elements.map(function (e) {
        const childElements = arrTest.map(function (item) {
            return (
                <li className="image-element-class" key={item}>
                    <img src={`./images/${item}.jpg`} />
                </li>
            )
        })

        return (
            <Masonry
                className="my-gallery-class" // default ''
                elementType={'ul'} // default 'div'
                options={masonryOptions} // default {}

                onClick={this.handleClick.bind(this)}

                ref={
                    function (c) {
                        this.masonry = this.masonry || c.masonry
                    }.bind(this)
                }

                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImageLoaded is false
                imagesLoadedOptions={imagesLoadedOptions} // default {}
            >
                {childElements}
            </Masonry>
        )
    }
}