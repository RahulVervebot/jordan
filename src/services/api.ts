

export async function fetchLatestProducts() {
    try {
      const res = await fetch('https://jordan.agoxn.cloud/api/latest-product', {
        // Next.js fetch options, if needed
        // cache: 'no-store',
      });
  
      if (!res.ok) {
        throw new Error(`Failed to fetch latest products: ${res.statusText}`);
      }
  
      const data = await res.json();
      return data; // Returns the entire JSON, including data, pagination info, etc.
    } catch (error) {
      console.error('Error fetching latest products:', error);
      return null; // Or handle the error state in your preferred way
    }
  }
  
  export async function fetchCategories() {
    try {
      const res = await fetch('https://jordan.agoxn.cloud/api/master/category', {
        // Next.js fetch options, if needed
        // cache: 'no-store',
      });
  
      if (!res.ok) {
        throw new Error(`Failed to fetch categories: ${res.statusText}`);
      }
  
      const data = await res.json();
      return data; // { image_base_url: "...", data: [...] }
    } catch (error) {
      console.error('Error fetching categories:', error);
      return null;
    }
  }
  