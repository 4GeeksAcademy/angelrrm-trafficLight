import React, { useState } from "react";

const TrafficLight = () => {
    const [color, setColor] = useState("red");
    const [showPurple, setShowPurple] = useState(false);

    const handleClick = (selectedColor) => {
        setColor(selectedColor);
    };

    const cycleColors = () => {
        const colors = showPurple ? ["red", "yellow", "green", "purple"] : ["red", "yellow", "green"];
        const currentIndex = colors.indexOf(color);
        const nextIndex = (currentIndex + 1) % colors.length;
        setColor(colors[nextIndex]);
    };

    return (
        <div className="text-center">
            <div className="traffic-light">
                <div 
                    className={`light red ${color === "red" ? "active" : ""}`} 
                    onClick={() => handleClick("red")}>
                </div>
                <div 
                    className={`light yellow ${color === "yellow" ? "active" : ""}`} 
                    onClick={() => handleClick("yellow")}>
                </div>
                <div 
                    className={`light green ${color === "green" ? "active" : ""}`} 
                    onClick={() => handleClick("green")}>
                </div>
                {showPurple && (
                    <div 
                        className={`light purple ${color === "purple" ? "active" : ""}`} 
                        onClick={() => handleClick("purple")}>
                    </div>
                )}
            </div>
            <button className="btn btn-primary mt-3" onClick={cycleColors}>
                Cambiar Color
            </button>
            <button className="btn btn-secondary mt-3" onClick={() => setShowPurple(!showPurple)}>
                {showPurple ? "Quitar Púrpura" : "Añadir Púrpura"}
            </button>
        </div>
    );
};

export default TrafficLight;
