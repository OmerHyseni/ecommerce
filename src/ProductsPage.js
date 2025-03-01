import React, { useState } from 'react';
import Product from "./components/Product/Product";

function ProductsPage({ products, setCartItems }) {
    const productsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(products.length / productsPerPage);

    const changePage = (pageNumber) => {
        if (pageNumber < 1) {
            setCurrentPage(1);
        } else if (pageNumber > totalPages) {
            setCurrentPage(totalPages);
        } else {
            setCurrentPage(pageNumber);
        }
    };

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {currentProducts.map((product) => (
                    <Product setCartItems={setCartItems} key={product.id} product={product} />
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center space-x-2 mt-8">
                <button
                    onClick={() => changePage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md shadow-sm hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition duration-300"
                >
                    Previous
                </button>

                {/* Page Numbers */}
                {pageNumbers.map((pageNumber) => (
                    <button
                        key={pageNumber}
                        onClick={() => changePage(pageNumber)}
                        className={`px-4 py-2 rounded-md text-sm font-semibold ${currentPage === pageNumber ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition duration-300`}
                    >
                        {pageNumber}
                    </button>
                ))}

                <button
                    onClick={() => changePage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md shadow-sm hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition duration-300"
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default ProductsPage;
