import React, {useContext} from "react";
import {useProducts} from "../hooks/products";
import {ModalContext} from "../context/ModalContext";
import {IProduct} from "../models";
import {Loader} from "../components/Loader";
import {Error} from "../components/Error";
import {Product} from "../components/Product";
import {Modal} from "../components/Modal";
import {CreateProduct} from "../components/CreateProduct";

export function ProductsPage() {
    const {products, loading, error, addProduct} = useProducts();
    const {modal, open, close} = useContext(ModalContext)
    const createHandler = (product: IProduct) => {
        close()
        addProduct(product)
    };


    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {loading && <Loader/>}
            {error && <Error error={error}/>}
            {products.map(product => <Product product={product} key={product.id}/>)}

            {modal && <Modal title="Create new Product" onClose={() => close()}>
                <CreateProduct onCreate={createHandler}/>
            </Modal>}
            <button
                className="absolute bottom-5 right-5 rounded-full bg-red-700 text-while text-2xl px-4 py-2"
                onClick={() => open()}
            >
                +
            </button>
        </div>
    );
}