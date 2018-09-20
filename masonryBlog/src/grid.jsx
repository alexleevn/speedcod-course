'use strict'

import React from 'react';

import Block from './block';

// var MansonryMixin = require('react-masonry-mixin')(React);
import MansonryMixin from 'react-masonry-mixin';
var A = MansonryMixin(React);

export default class Grid extends React.Component {
    render() {
        let arrNew = [...Array(10).keys()];
        console.log('arrNew = ', arrNew);

        let lstBlock = arrNew.map((item, i) => (
            <Block key={i} content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore neque pariatur nostrum! Nulla facilis odit quam! <br/><br/>" repeat={i % 4} />
        ))

        return (
            <div className="grid pa2 ba b--gray fl w-90 center">
                {lstBlock}
            </div>
        )
    }
}