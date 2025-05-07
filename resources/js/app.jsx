import React from 'react';
import Header from './components/Header/Header';
import ServiceCenter from './components/ServiceCenter/ServiceCenter';
import Footer from './components/Footer/Footer';
import Banner from "./components/Banner/Banner";
import ReactDOM from "react-dom/client";

function App() {
    return (
        <div className="app">
            <Header />
            <main className="main-content">
                <Banner />
                <ServiceCenter />
                <Footer />
            </main>
        </div>
    );
}

export default App;

ReactDOM.createRoot(document.getElementById('app')).render(
    <App />
);
