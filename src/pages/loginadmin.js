import React, { useState } from 'react'
import { useRouter } from 'next/router';
import urls from '@/config/urls';

export default function loginadmin() {
    const [loading, setLoading] = useState(false)
    const router = useRouter();

    const submitHandler = (ev) => {
        ev.preventDefault();
        setLoading(true)
        
        const username = document.querySelector('input#username').value;
        const password = document.querySelector('input#password').value;


        fetch(`${urls.api_base_domain}/login`, {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        }).then(respon => 
            respon.json()
        )
        .then(result => {
            setLoading(false)

            if (result.isAuth) {  router.push('/blog') }
            else { alert('wrong credentials') }
        });
    }
    return (
        <div>
            <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm max-w-sm mx-auto mt-12"
                data-v0-t="card"
            >
                <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="font-semibold tracking-tight text-2xl text-center">Login</h3>
                    <p className="text-sm text-muted-foreground text-center">
                        Please enter your credentials to proceed.
                    </p>
                </div>
                <div className="p-6 space-y-4">
                    <div className="space-y-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="username"
                        >
                            Username
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="username"
                            placeholder="Enter your username"
                            required=""
                            type="text"
                        />
                    </div>
                    <div className="space-y-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="password"
                            placeholder="Enter your password"
                            required=""
                            type="password"
                        />
                    </div>
                </div>
                <div className="flex items-center p-6">
                    <button 
                        onClick={e => submitHandler(e)} 
                        className="border bg-black text-white inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
                        {loading ? 'Loading...' : "Login"}
                    </button>
                </div>
            </div>

        </div>
    )
}
