import React, { useState, useEffect } from 'react';

const imgPlaceholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII="

const Image = ({src, alt}) => {
    const [imageSrc, setImageSrc] = useState(imgPlaceholder);
    const [imageRef, setImageRef] = useState();

    const onLoad = event => {
        event.target.classList.add('img-loaded');
    }

    const onError = event => {
        event.target.classList.add('img-error');
    }

    useEffect(() => {
        let observer;
        let didCancel = false;

        if(imageRef && imageSrc !== src) {
            if(IntersectionObserver) {
                observer = new IntersectionObserver(
                    entries => {
                      entries.forEach(entry => {
                        if (
                          !didCancel &&
                          (entry.intersectionRatio > 0 || entry.isIntersecting)
                        ) {
                          setImageSrc(src)
                          observer.unobserve(imageRef)
                        }
                      })
                    },
                    {
                      threshold: 0.01,
                      rootMargin: "10%",
                    }
                  )
                  observer.observe(imageRef)
            } else {
                // Fallback
                setImageSrc(src);
            }
        }

        return () => {
            didCancel = true;
            if (observer && observer.unobserve) {
                observer.unobserve(imageRef);
            }
        }
    }, [src, imageSrc, imageRef])

    return (
        <img src={imageSrc} className='h-img-thumb-sizer' ref={setImageRef} alt={alt} onLoad={onLoad} onError={onError}/>
    )

}


export default Image