export function setSlide(images, idx) {
    let currentSlide;
    const currentImages = [...images];

    for (let i = 0; i < images.length; i++) {
        if (images[i] === images[idx]) {
            currentSlide = images[i];
        }
    }

    const filteredImages = currentImages.filter(img => img !== currentSlide)
    filteredImages.unshift(currentSlide)

    return filteredImages;
}