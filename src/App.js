import React from 'react';
import AnimatedSection from "./components/AnimatedSection";

const App = () => {
    return (
        <div>
            {/* Other content */}
            <div style={{ height: '100vh' }}>Scroll down to see the animation</div>
            <AnimatedSection />
            <div style={{ height: '100vh' }}>More content after the animation</div>
        </div>
    );
};

export default App;