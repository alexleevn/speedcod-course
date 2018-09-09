'use strict'

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBooks } from '../../actions/booksActions';
import { Grid, Col, Row, Button } from 'react-bootstrap';

import BookItem from './bookItem';
import BooksForm from './booksForm';
import Cart from './cart';

class BooksList extends React.Component {
    componentDidMount() {
        // Dispatch Action
        this.props.getBooks();
    }
    render() {

        // console.log('ARE WE ACCESSING THE STATE??: ', this.props.books);

        'need to replace id by _id'
        ///..................

        console.log('BooksList rendering...');

        const booksList = this.props.books.map(function (booksArr, i) {
            return (
                <Col xs={12} md={4} key={i}>
                    <BookItem
                        _id={booksArr._id}
                        title={booksArr.title}
                        description={booksArr.description}
                        price={booksArr.price}
                    />
                </Col>
            )
        })

        return (
            <Grid>
                <Row>
                    <Cart/>
                </Row>
                <Row style={{ marginTop: '15px' }}>
                    <Col xs={12} sm={4}>
                        <BooksForm/>
                    </Col>
                    {booksList}
                </Row>
            </Grid>
        )
    }
}


function mapStateToProps(state) {
    return {
        books: state.books.books
    }
}

function mapDispatchtoProps(dispatch) {
    return bindActionCreators({
        getBooks: getBooks
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchtoProps)(BooksList)