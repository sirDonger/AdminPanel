import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import Pagination from "react-pagination-bootstrap";
import {Button, Card, CardColumns, CardDeck, CardGroup, Col, Row,} from "react-bootstrap";
import {SingleProduct} from "../../components/Product/SingleProduct";
import './index.css'


const ProductsContainerComponent = ({products}) => {
    const [activePage, setActivePage] = useState(1);
    const productsPerPage = 15;

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber)
    }

    useEffect(() => {
        window.scrollTo(0,0);
    } , [activePage])

    const indexOfLastProduct = activePage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentPosts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <div className="product-container product-container-animation" >
            <CardDeck className="pagination-container">
                {currentPosts.map((product, i) => (
                    <div>
                        <SingleProduct key={i} product={product}/>
                    </div>
                ))}
            </CardDeck>
                <div className="pagination-container">
                    <Pagination
                        activePage={activePage}
                        itemsCountPerPage={10}
                        totalItemsCount={products.length}
                        onChange={handlePageChange}

                    />
                </div>
                <Row>
                    <Col className="to-top-container">
                        <Button  onClick={() => window.scroll(0,0)}>BACK TO TOP</Button>
                    </Col>
                </Row>


        </div>
    );
};
const mapStateToProps = state => {
    return {
        products: state.productReducer.products,
    }
}

export const ProductsContainer = connect(mapStateToProps, null)(ProductsContainerComponent);