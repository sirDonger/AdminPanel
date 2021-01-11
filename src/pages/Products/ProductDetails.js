import React, {useState} from 'react';
import {Button, Carousel, Col, Image, Jumbotron, Row} from "react-bootstrap";
import {handleModal, handleModalConfirmDelete, handleModalEditProduct} from "../../actions/modalActions";
import {connect} from "react-redux";
import {ConfirmDeleteModal} from "../../components/ConfirmDeleteModal/ConfirmDeleteModal";
import {EditProductModal} from "../../components/EditProductModal/EditProductModal";

const product = {
    "ID": "1115718",
    "Model": "EE5665",
    "Variant": "WHT/CONAVY/GUM3",
    "Season": "AI19",
    "Brand": "Adidas",
    "Category": "Sneakers",
    "Code": "EE5665WHT/CONAVY/GUM3",
    "Color": "Bianco",
    "Composition": "Synthetic->Polyurethane100 % Synthetic->Polyurethane100 % Synthetic->Polyester100 % Synthetic->Polyester100 % Natural (other)->Rubber100 %",
    "SizeAndFit": " ",
    "MadeIn": "Vietnam",
    "Pictures": [
        {
            "No": "1",
            "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Adidas---EE5665WHT()CONAVY()GUM3.jpg",
            "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Adidas---EE5665WHT()CONAVY()GUM3.jpg"
        },
        {
            "No": "2",
            "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Adidas---EE5665WHT()CONAVY()GUM3_1_D.jpg",
            "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Adidas---EE5665WHT()CONAVY()GUM3_1_D.jpg"
        },
        {
            "No": "4",
            "PictureUrl": "https://www.atelieronweb.com/foto/AI19---Adidas---EE5665WHT()CONAVY()GUM3_3_P.jpg",
            "PictureThumbUrl": "https://www.atelieronweb.com/foto/Thumbs_AI19---Adidas---EE5665WHT()CONAVY()GUM3_3_P.jpg"
        }
    ],
    "Inventory": [
        {"Barcode": "210932594517", "Size": "50", "Qty": "0"},
        {"Barcode": "211135947187", "Size": "55", "Qty": "0"},
        {"Barcode": "200389394873", "Size": "60", "Qty": "0"},
        {"Barcode": "201824614981", "Size": "65", "Qty": "0"},
        {"Barcode": "211497374409", "Size": "70", "Qty": "0"},
        {"Barcode": "210768331492", "Size": "75", "Qty": "0"},
        {"Barcode": "200214984461", "Size": "80", "Qty": "0"}
    ],
    "Prices": [
        {
            "Retailer": "AtelierOnWeb",
            "BrandReferencePrice": "0,00",
            "BrandReferencePriceExVAT": "0,00",
            "Discount": "",
            "NetPrice": "0,00",
            "Currency": "EUR",
            "PercentTax": "22",
            "Country": "IT"
        }
    ],
    "Supplier": "Atelier"
}

const ProductDetailsComponent = props => {
    const [activeIndex, setActiveIndex] = useState(0);

    const {actions: { handleModalConfirmDelete, handleModalEditProduct } } = props;

    const handleSelect = (selectedIndex, e) => {
        setActiveIndex(selectedIndex);
    };

    return (
        <div style={{width: '90%', margin: "50px auto"}} className={'product-container-animation'}>
            <Jumbotron>
                <Row>
                    <Col sm={3}>
                        <Carousel indicators={false} slide={true} activeIndex={activeIndex} onSelect={handleSelect}>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={product.Pictures[0].PictureUrl}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={product.Pictures[1].PictureUrl}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={product.Pictures[2].PictureUrl}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col sm={3} style={{
                        display: "flex",
                        justifyContent: "start",
                        flexDirection: "column",
                        alignItems: 'start'
                    }}>
                        <h3>Main Info</h3>
                        <div>
                            <strong>ID:</strong> {product.ID}</div>
                        <div>
                            <strong>Model:</strong> {product.Model}</div>
                        <div>
                            <strong>Variant:</strong> {product.Variant}</div>
                        <div>
                            <strong>Season:</strong> {product.Season}</div>
                        <div>
                            <strong>Category:</strong> {product.Category}</div>
                        <div>
                            <strong>Code:</strong> {product.Code}</div>
                        <div>
                            <strong>Color:</strong> {product.Color}</div>
                        {/*<div>Composition: {product.Composition}</div>*/}
                        <div>
                            <strong>Made In:</strong> {product.MadeIn}</div>
                    </Col>
                    <Col sm={3} style={{
                        display: "flex",
                        justifyContent: "start",
                        flexDirection: "column",
                        alignItems: 'start'
                    }}>
                        <h3>Prices</h3>
                        {product.Prices.map((el, index) => {
                            const keys = Object.keys(el)
                            return keys.map(key =>
                                <div style={{textAlign: "start"}}><strong>{key}:</strong> {el[key]}</div>
                            )
                        })}
                    </Col>
                    <Col sm={3} style={{
                        display: "flex",
                        justifyContent: "start",
                        flexDirection: "column",
                        alignItems: 'start'
                    }}>

                        <h3>Inventory</h3>
                        <ul>
                            {product.Inventory.map(el => (
                                <li>Barcode: {el.Barcode} Size: {el.Size} Qty: {el.Qty}</li>
                            ))}
                        </ul>
                    </Col>
                    <Col sm={3} style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center',
                        marginTop: 10
                    }}>
                        Supplier: {product.Supplier}
                    </Col>
                </Row>
                <Row>
                    <Col style={{display: "flex", justifyContent: "flex-end"}}>
                        <Button style={{marginRight: "10px"}} onClick={() => handleModalEditProduct()}>Edit</Button>
                        <Button variant="danger" onClick={() => handleModalConfirmDelete()}>Delete</Button>
                    </Col>
                </Row>
            </Jumbotron>
            <ConfirmDeleteModal/>
            <EditProductModal />
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        actions: {
            handleModalConfirmDelete: () => dispatch(handleModalConfirmDelete()),
            handleModalEditProduct: () => dispatch(handleModalEditProduct())
        }
    }
}

export const ProductDetails = connect(null, mapDispatchToProps)(ProductDetailsComponent)
