'use client';

import React, { useEffect, useState } from 'react';
import { fetchLatestProducts } from '@/services/api';

const baseimgurl = 'https://jordan.agoxn.cloud/storage';

const LatestProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const latestProducts = await fetchLatestProducts();
        if (latestProducts?.data) {
          // Mapping API response to match expected data structure
          const mappedProducts = latestProducts.data.map(product => ({
            ...product,
            name: product.product_name, // Ensure name is taken from product_name
            thumbImage: [`${baseimgurl}/${product.image}`],
            price: product.price,
            variants: product.variants,
          }));
          setProducts(mappedProducts);
        } else {
          setProducts([]);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]);
      }
    }
    fetchData();
  }, []);

  if (!products.length) {
    return <div>No products available.</div>;
  }

  return (
    <section className="latest-products py-10">
      <h2 className="text-2xl font-bold mb-6">Latest Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <div key={product.product_id} className="product-card border p-4 rounded">
            <img
              src={product.thumbImage[0]}
              alt={product.name}
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-700 mb-2">
              Price: {parseInt(product.price) > 0 ? `Rs. ${product.price}` : 'Contact for price'}
            </p>
            {product.variants?.Size?.length > 0 && (
              <div className="variants">
                <p className="font-medium">Available Sizes:</p>
                <ul className="flex flex-wrap gap-2">
                  {product.variants.Size.map((size, index) => (
                    <li key={index} className="border rounded px-2 py-1">
                      {size}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestProducts;
