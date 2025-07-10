import React, { useEffect, useState } from 'react';

interface LazyImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, width, height }) => {
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const imgElement = document.getElementById(alt);

        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsIntersecting(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (imgElement) {
            observer.observe(imgElement);
        }

        return () => {
            if (imgElement) observer.unobserve(imgElement);
        };
    }, [alt]);

    return (
        <img
            id={alt}
            src={isIntersecting ? src : ''}
            alt={alt}
            width={width}
            height={height}
            loading={isIntersecting ? 'eager' : 'lazy'}
        />
    );
};

export default LazyImage;
