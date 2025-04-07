/**
 * Web Vitals Reporting Module
 * 
 * This module provides functionality to measure and report web performance metrics
 * using the web-vitals library. These metrics help analyze user experience quality.
 * 
 * Metrics reported:
 * - CLS (Cumulative Layout Shift): measures visual stability
 * - FID (First Input Delay): measures interactivity
 * - FCP (First Contentful Paint): measures perceived load speed
 * - LCP (Largest Contentful Paint): measures loading performance
 * - TTFB (Time to First Byte): measures time until first byte of response
 */
const reportWebVitals = onPerfEntry => {
  // Only execute if a valid callback function is provided
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Dynamically import the web-vitals library
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Register each metric with the provided callback
      getCLS(onPerfEntry); // Cumulative Layout Shift
      getFID(onPerfEntry); // First Input Delay
      getFCP(onPerfEntry); // First Contentful Paint
      getLCP(onPerfEntry); // Largest Contentful Paint
      getTTFB(onPerfEntry); // Time to First Byte
    });
  }
};

export default reportWebVitals;
