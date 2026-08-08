import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderSuccess = () => {
    const navigate = useNavigate();

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '70vh',
            textAlign: 'center',
            padding: '20px'
        }}>
            <div style={{
                fontSize: '60px',
                color: '#28a745',
                marginBottom: '20px'
            }}>
                ✅
            </div>
            <h1 style={{ color: '#333', marginBottom: '10px' }}>Order Placed Successfully!</h1>
            <p style={{ color: '#666', marginBottom: '20px' }}>
                Thank you for your purchase. Your order has been placed and saved successfully.
            </p>
            <button
                onClick={() => navigate('/')}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#007bff',
                    color: '#white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                Continue Shopping
            </button>
        </div>
    );
};

export default OrderSuccess;