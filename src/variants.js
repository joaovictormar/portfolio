export const fadeIn = (direction, delay) => {
    return {
        hidden: {
            y: direction === 'up' ? 100 : direction === 'down' ? -80 : 0,
            x: direction === 'left' ? 150 : direction === 'right' ? -150 : 0,
            opacity: 0, 
        }, 
        trembling:{
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? 150 : direction === 'right' ? -150 : 0,
            opacity: 1, 
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1.2,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75], // Removida a vírgula extra no final
            },
        },
    };
};
