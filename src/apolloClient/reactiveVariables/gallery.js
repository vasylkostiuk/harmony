import {makeVar} from "@apollo/client";

export const galleryVar = makeVar([]);
export const galleryCount = makeVar(0);
export const galleryCategory = makeVar('All products');

export function getGalleryCategories(gallery) {
    if (!gallery?.length || !gallery[0]?.category) return;

    const categories = ["All products"];

    return [...categories, ...gallery.map(item => item?.category)];
}

export function getPaginatedImages(gallery, count) {
    if (!gallery?.length) return;

    const result = gallery?.slice(0, 30  + (30 * count));

    if (result) {
        return result;
    }

    return [];
}

export function getImagesToShow(gallery = [], category, count) {
    if (!gallery?.length || !gallery[0]?.category || !gallery[0]?.images) return;

    if (category !== "All products") {
        return getPaginatedImages(gallery.find(item => item?.category === category)?.images, count);
    } else if (gallery?.length > 1) {

        return gallery.reduce(function(previousValue, currentValue) {
            if (previousValue?.images) {
                return [...previousValue?.images, ...currentValue?.images];
            }
        })?.slice(0, 30  + (30 * count));
    } else {
        return gallery[0]?.images.slice(0, 30  + (30 * count));
    }
}

export function isMoreImagesToShow(gallery = [], category, images) {
    if (category !== "All products") {
        return gallery.find(item => item?.category === category)?.images?.length > images?.length;
    } else if (gallery && gallery?.length > 1) {
        return gallery.reduce(function(previousValue, currentValue) {
            if (previousValue?.images) {
                return [...previousValue?.images, ...currentValue?.images];
            }
        })?.length > images?.length;
    }
}