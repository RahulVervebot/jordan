'use client'; // Needed for using React hooks in Next.js 13 app directory

import { useState } from 'react';
import Image from 'next/image';

export default function TabSection({ tabsData }) {
  // Keep track of which tab is active
  const [activeTab, setActiveTab] = useState(0);

  // Helper to render star ratings
  const renderRating = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          style={{ color: i <= rating ? '#FFD700' : '#ccc', marginRight: '2px' }}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div style={styles.container}>
      {/* Tabs Menu */}
      <ul style={styles.tabList}>
        {tabsData.map((tab, index) => (
          <li
            key={index}
            onClick={() => setActiveTab(index)}
            style={{
              ...styles.tabItem,
              borderBottom:
                index === activeTab ? '2px solid black' : '2px solid transparent',
            }}
          >
            {tab.title}
          </li>
        ))}
      </ul>

      {/* Active Tab Content */}
      <div style={styles.tabContent}>
        {/* 
          Instead of using inline grid styles for columns,
          we use a class that we'll style via <style jsx> below.
        */}
        <div className="responsive-grid">
          {tabsData[activeTab]?.items.map((item, idx) => (
            <div key={idx} style={styles.productCard}>
              <div style={{ width: '100%', height: '150px', position: 'relative' }}>
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  fill
                  style={{ objectFit: 'cover', borderRadius: '25px 25px 0 0' }}
                />
              </div>
              <div style={styles.cardBody}>
                <h3 style={styles.productTitle}>{item.title}</h3>
                <div style={styles.rating}>{renderRating(item.rating)}</div>
                <p style={styles.price}>{item.price}</p>
                <div style={styles.actions}>
                  <button style={styles.cartButton}>Add to Cart</button>
                  <button style={styles.wishlistButton}>
                    <span style={{ fontSize: '16px', color: '#e74c3c' }}>♥</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Styled JSX for the responsive grid */}
      <style jsx>{`
        .responsive-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }

        /* On screens 768px wide or below, use 2 columns */
        @media (max-width: 768px) {
          .responsive-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
}

// Inline styles for the container and cards
const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px', // Add some padding for space on left/right
  },
  tabList: {
    display: 'flex',
    listStyle: 'none',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
    borderBottom: '1px solid #ccc',
    marginBottom: '20px',
  },
  tabItem: {
    cursor: 'pointer',
    margin: '0 10px',
    padding: '10px 0',
    fontWeight: 'bold',
  },
  tabContent: {
    width: '100%',
  },
  productCard: {
    backgroundColor: '#f0f0f0',
    borderRadius: '25px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  cardBody: {
    padding: '10px',
  },
  productTitle: {
    fontSize: '16px',
    margin: '10px 0 5px',
  },
  rating: {
    marginBottom: '5px',
  },
  price: {
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartButton: {
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    padding: '8px 12px',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  wishlistButton: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
};
