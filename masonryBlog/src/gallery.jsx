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
        const childElements = this.props.elements.map(function (e) {
            return (
                <li className="image-element-class">
                    <img src={element.src} />
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