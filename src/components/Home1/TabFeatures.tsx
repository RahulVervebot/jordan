'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import Product from '../Product/Product';
import { ProductType } from '@/type/ProductType';
import { motion } from 'framer-motion';
import { fetchLatestProducts } from '@/services/api';
import BestSaleProduct from '../Home6/BestSaleProduct';

interface Props {
  data: Array<ProductType>;
  start: number;
  limit: number;
}

const baseimgurl = 'https://jordan.agoxn.cloud/storage';

const TabFeatures: React.FC<Props> = ({ data, start, limit }) => {
  const [activeTab, setActiveTab] = useState<string>('on sale');
  const [latestProducts, setLatestProducts] = useState<ProductType[]>([]);
  const [loadingLatest, setLoadingLatest] = useState<boolean>(false);

  const handleTabClick = (item: string) => {
    setActiveTab(item);
  };

  // Get filtered products from the passed in "data" prop or from latestProducts if active tab
  const getFilterData = () => {
    if (activeTab === 'on sale') {
      return data.filter((product) => product.sale && product.category === 'fashion');
    }
    if (activeTab === 'new arrivals') {
      return data.filter((product) => product.new && product.category === 'fashion');
    }
    if (activeTab === 'best sellers') {
      return data
        .filter((product) => product.category === 'fashion')
        .slice()
        .sort((a, b) => b.sold - a.sold);
    }
    if (activeTab === 'Latest Products') {
      return latestProducts;
    }
    return data;
  };

  const filteredProducts = getFilterData();

  // Fetch latest products when the Latest Products tab is active
  useEffect(() => {
    if (activeTab === 'Latest Products') {
      setLoadingLatest(true);
      const fetchLatest = async () => {
        try {
          const latestResponse = await fetchLatestProducts();
          if (latestResponse?.data) {
            const mapped = latestResponse.data.map((product: any) => ({
              ...product,
              name: product.product_name,
              thumbImage: [`${baseimgurl}/${product.image}`],
              price: product.price,
              originPrice: product.compare_price,
              variation: product.variants,
              new: 'new'

            }));
            setLatestProducts(mapped);
          } else {
            setLatestProducts([]);
          }
        } catch (error) {
          console.error('Error fetching latest products:', error);
          setLatestProducts([]);
        } finally {
          setLoadingLatest(false);
        }
      }
      fetchLatest();
    }
  }, [activeTab]);

  return (
    <>
      <div className="tab-features-block md:pt-20 pt-10">
        <div className="container">
          <div className="heading flex flex-col items-left text-left">
            <div className="menu-tab flex items-center gap-2 p-1 bg-surface rounded-2xl">
              {['best sellers', 'on sale', 'new arrivals', 'Latest Products'].map((item, index) => (
                <div
                  key={index}
                  className={`tab-item relative text-secondary heading5 py-2 px-5 cursor-pointer duration-500 hover:text-black ${
                    activeTab === item ? 'active' : ''
                  }`}
                  onClick={() => handleTabClick(item)}
                >
                  {activeTab === item && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-2xl bg-white"
                    ></motion.div>
                  )}
                  <span className="relative heading5 z-[1]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="list-product hide-product-sold section-swiper-navigation style-outline style-border md:mt-10 mt-6">
            {activeTab === 'Latest Products' && loadingLatest ? (
              <div>Loading latest products...</div>
            ) : filteredProducts.length ? (
              <Swiper
                spaceBetween={12}
                slidesPerView={2}
                navigation
                loop={true}
                modules={[Navigation, Autoplay]}
                breakpoints={{
                  576: {
                    slidesPerView: 2,
                    spaceBetween: 12,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1200: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                }}
              >
                {filteredProducts.slice(start, limit).map((prd, index) => (
                  <SwiperSlide key={index}>
                    <Product data={prd} type="grid" style="" />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div>No products available.</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TabFeatures;
