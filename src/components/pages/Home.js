import React from 'react';
import Footer from '../layout/Footer';

const Home = () => {
    return (
        <div className="container">
            <div className="py-4">
                <div className="container">
                    <div className="card">
                        <div className="card-header">
                            <h1>Home Page</h1>
                        </div>
                        <div className="card-body">
                            <p>element defines a part of text in an alternate voice or mood. The content inside is typically displayed in</p>
                        </div>
                        <div className="card-footer">
                            <Footer/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
