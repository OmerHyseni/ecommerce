import React, { useState } from 'react';
import Product from "./components/Product/Product";

function ProductsPage({ products, setCartItems }) {
    // Set the number of products per page
    const productsPerPage = 10;

    // Set up the current page state
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the index of the first and last product on the current page
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

    // Get the products for the current page
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Calculate the total number of pages
    const totalPages = Math.ceil(products.length / productsPerPage);

    // Function to change the page
    const changePage = (pageNumber) => {
        if (pageNumber < 1) {
            setCurrentPage(1);
        } else if (pageNumber > totalPages) {
            setCurrentPage(totalPages);
        } else {
            setCurrentPage(pageNumber);
        }
    };

    // Generate page numbers
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <div className="grid grid-cols-5">
                {currentProducts.map((product) => (
                    <Product setCartItems={setCartItems} key={product.id} product={product} />
                ))} 
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-4">
                <button
                    onClick={() => changePage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-300 rounded">
                    Previous
                </button>

                {/* Page Numbers */}
                {pageNumbers.map((pageNumber) => (
                    <button
                        key={pageNumber}
                        onClick={() => changePage(pageNumber)}
                        className={`px-4 py-2 mx-1 rounded ${currentPage === pageNumber ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    >
                        {pageNumber}
                    </button>
                ))}

                <button
                    onClick={() => changePage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-300 rounded">
                    Next
                </button>
            </div>
        </div >
    );
}

export default ProductsPage;
