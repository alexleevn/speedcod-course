import React from 'react';
// import PropTypes from 'prop-types';

function imagesLoaded(parentNote) {
    const imgElements = [...parentNote.querySelectorAll('img')];
    for (let i = 0; i < imgElements.length; i += 1) {
        const img = imgElements[i];
        if (!img.complete) {
            return false;
        }
    }
    return true;
}

class Gallery extends React.Component {

    constructor(props) {
        super(props);
        this.state = { loading: true }
    }

    renderSpinner() {
        if (!this.state.loading) {
            // Render nothing when loading is false (loaded)
            return null;
        }
        return (
            <span className="spinner">Spiner</span>
        )
    }

    handleStateChange() {
        this.setState({
            loading: !imagesLoaded(this.galleryElement),
        });
        console.log(' handleState Change: loading = ', !imagesLoaded(this.galleryElement))
    }

    renderImage(imageUrl, key) {
        return (
            <div key={key}>
                <img
                    src={imageUrl}
                    alt=""
                    style={{ width: '30%', margin: '10px' }}
                    // Hai hàm kiểm tra load, rồi thay đổi state
                    onLoad={this.handleStateChange.bind(this)}
                    onError={this.handleStateChange.bind(this)}
                />
            </div>
        )
    }

    render() {
        return (
            <div
                className="gallery"
                ref={element => { this.galleryElement = element; }}
            >
                {this.renderSpinner()}
                <div className="images">
                    {
                        this.props.imageUrls.map((imageUrl, i) => this.renderImage(imageUrl, i))
                    }
                </div>
            </div>
        )
    }
}

// Gallery.propTypes = {
//     imageUrls: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
// }

export default Gallery;