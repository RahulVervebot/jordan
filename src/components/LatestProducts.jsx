import React from 'react'
import { fetchLatestProducts } from '../services/api'
export default async function LatestProducts() {
  // Fetch the latest products data
  const latestProducts = await fetchLatestProducts()
  const baseimgurl = 'https://jordan.agoxn.cloud/storage'
  // Check if data is available
  if (!latestProducts || !latestProducts.data || latestProducts.data.length === 0) {
    return <div>No products available.</div>
  }

  return (
    <section className="latest-products py-10">
      <h2 className="text-2xl font-bold mb-6">Latest Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestProducts.data.map(product => (
          <div key={product.product_id} className="product-card border p-4 rounded">
            {/* Product Image */}
            <img
              src={`${baseimgurl}/${product.image}`}
              alt={product.product_name}
              className="w-full h-48 object-cover mb-4"
            />
            {/* Product Name */}
            <h3 className="text-xl font-semibold mb-2">{product.product_name}</h3>
            {/* Product Price */}
            <p className="text-gray-700 mb-2">
              Price: {parseInt(product.price) > 0 ?` Rs. ${product.price}` : 'Contact for price'}
            </p>
            {/* Variant Sizes */}
            {product.variants && product.variants['Size'] && product.variants['Size'].length > 0 && (
              <div className="variants">
                <p className="font-medium">Available Sizes:</p>
                <ul className="flex flex-wrap gap-2">
                  {product.variants['Size'].map((size, index) => (
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
  )
}
