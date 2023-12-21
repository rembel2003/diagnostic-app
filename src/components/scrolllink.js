const ScrollLink = ({ to, children }) => {
    const handleClick = (event) => {
        event.preventDefault();
        const target = document.getElementById(to);

        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <a href={`#${to}`} onClick={handleClick}>
            {children}
        </a>
    );
};

export default ScrollLink;