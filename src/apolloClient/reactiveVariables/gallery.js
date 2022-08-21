import {makeVar} from "@apollo/client";

export const galleryVar = makeVar([]);
export const galleryCount = makeVar(0);
export const galleryCategory = makeVar('All products');

export function getGalleryCategories(gallery) {
    if (!gallery.length || !gallery[0].category) return;

    const categories = ["All products"];

    return [...categories, ...gallery.map(item => item.category)];
}

export function getPaginatedImages(gallery, count) {
    if (!gallery.length) return;

    return gallery?.slice(0, 10  + (10 * count));
}

export function getImagesToShow(gallery, category) {
    if (!gallery.length || !gallery[0].category) return;

    switch (category) {
        case 'Flower':
            return getPaginatedImages(galleryVar().find(item => item?.category === 'Flower')?.images, galleryCount());
        case 'Geodome':
            return getPaginatedImages(galleryVar().find(item => item?.category === 'Geodome')?.images, galleryCount());
        default:
            return galleryVar().reduce(function(previousValue, currentValue) {
                return [...previousValue?.images, ...currentValue?.images];
            }).slice(0, 10  + (10 * galleryCount()));
    }
}