'use strict'

import React from 'react';

export default class Block extends React.Component {
    render() {
        let content = this.props.content;
        for(let i = 0; i < this.props.repeat; i++){
            content = content + this.props.content;    
        }
        return (
            <div className="w-third ba b--red ma2 pa3 sans-serif black-70 "
                dangerouslySetInnerHTML={{ __html: content}}></div>
        )
    }
}