'use client'
import { useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import api from '@/http';
import { useRouter } from 'next/navigation';


const ResetPasswordPage: React.FC = () => {

    const router = useRouter()

    const varification = async (id: string | string[], token: string | string[]) => {
        try {
            const response = await api.get(`/reset-password/${id}/${token}`);
            console.log(response);
            if (response.data != true) {
                router.push('/')
            }
        } catch (error) {
            console.error('An unexpected error happened occurred:', error);
        }
    
    }
    
    const { id, token } = useParams();
    


    useEffect( () => {
        varification(id, token);
   }, []);


    const [password, setpassword] = useState('');
    const [cpassword, setcpassword] = useState('');

    const handlePasswordChange = async () => {
        if (password !== cpassword) {
            console.log("Passwords do not match");
            return;
        }
        try {
            await api.post(`/reset-password-change/${id}/${token}`, { password, cpassword });
            alert('Password reset successfully');
            router.push('/login')
        } catch (error) {
            console.error('An unexpected error happened occurred:', error);
            alert('An unexpected error happened occurred');
        }
    };

    return (
        <div>
            <h1>Reset Password</h1>
            <p>Reset your password by entering a new one below.</p>
            <form onSubmit={handlePasswordChange}>
                <label htmlFor="password">New Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                />
                <label htmlFor="cpassword">Confirm Password:</label>
                <input
                    type="password"
                    id="cpassword"
                    value={cpassword}
                    onChange={(e) => setcpassword(e.target.value)}
                />
                <button type="submit">Change Password</button>
            </form>
        </div>
    );
};

export default ResetPasswordPage;