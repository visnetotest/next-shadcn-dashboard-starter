'use client';

import { useEffect } from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

export default function ApiDoc() {
  useEffect(() => {
    // Add custom styles to fix dark mode issues
    const style = document.createElement('style');
    style.innerHTML = `
      .swagger-ui .opblock-body pre.microlight { 
        background: #333 !important; 
        color: #fff !important;
      }
      .swagger-ui .scheme-container {
        background: transparent !important;
      }
      .swagger-ui select {
        background: #fff !important;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className='container mx-auto py-8'>
      <SwaggerUI url='/api/docs' />
    </div>
  );
}
