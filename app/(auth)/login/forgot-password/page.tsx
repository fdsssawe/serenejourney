"use client"
import api from '@/http';
import React, { useState } from 'react';

const ForgotPasswordPage: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
            try {
                await api.post('/forgot-password', {email});
                alert('Password reset email sent');
            } catch (error) {
                console.error('An unexpected error happened occurred:', error);
                alert('An unexpected error happened occurred');
            }
        
    };

    return (
        <div>
            <h1>Forgot Password</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} />
                </label>
                <button type="submit">Reset Password</button>
            </form>
        </div>
    );
};

export default ForgotPasswordPage;