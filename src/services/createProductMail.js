import {reduceTotalAmount} from "./changeCheckoutObj";

function formExtraFeatures(features) {
    const featuresStrings = [];
    if (features && features?.length) {
        for (let i = 0; i < features.length; i++) {
            featuresStrings.push(`<br/>${features[i]?.title}`);
        }
    }
    return featuresStrings.join(' ');
}

function formColor(colors) {
    const [currentColor] = colors;
    return `
    <br/>
    <u>External Color:</u>
    <br/>
    <br/>
    ${currentColor?.title}
    <br/>
    <br/>
    `
}

function formInternalColor(internalColors) {
    if (internalColors && internalColors?.length) {
        return `
            <br/>
            <br/>
            <u>Internal Color:</u>
            <br/>
            <br/>
            ${internalColors[0]?.title}
            <br/>
            <br/>
        `
    }
    return '';
}

function formCheckoutItem(name, quantity, price) {
    return `
        <div style="display: flex; align-items: center; margin-bottom: 13px;">
            <p style="margin: 0 15px 0 0;">${name}</p>
            <p style="margin: 0 15px 0 0;">x ${quantity}</p>
            <p style="margin: 0 15px 0 0;">$ ${price}</p>
        </div>
    `
}

function formCheckout(products) {
    const result = [];
    for (let i = 0; i < products.length; i++) {
        result.push(formCheckoutItem(products[i]?.product?.info?.title, products[i]?.quantity, ((products[i]?.price + products[i]?.internalColorPrice + products[i]?.calculatePrice) * products[i]?.quantity)))
    }

    return `
        <div>
            ${result.join('')}
        </div> 
    `;
}

function formSummary(products) {
    return `
    <br/>
    <b>Summary</b>
    <br/>
        <div style="display: flex; align-items: center;">
            <p style="margin-right: 15px">Total amount</p>
            <p>$ ${reduceTotalAmount(products)}</p>
        </div>
    <br/>
    `
}

function createLetterBody(checkoutProducts, contacts, products) {
    return `
        <br/>
        <b>Order</b>
        <br/>
        ${formCheckout(checkoutProducts)}
        ${formSummary(checkoutProducts)}
        <br/>
        ${products}
        ${createContactMail(contacts)}
    `
}

export function createProductMail(checkoutProducts, contacts) {
    const products = [];

    if (checkoutProducts && checkoutProducts?.length) {
        for (let i = 0; i < checkoutProducts?.length; i++) {
            products.push(`
                <b>${checkoutProducts[i]?.product?.info?.title}</b>
                <br/>
                ${formColor(checkoutProducts[i]?.product?.colors)}
                ${ checkoutProducts[i]?.product?.extraFeatures && checkoutProducts[i]?.product?.extraFeatures?.length
                   ?
                    `
                    <br/>
                    <u>Features:</u>
                    <br/>
                    ${formExtraFeatures(checkoutProducts[i]?.product?.extraFeatures)}
                    `
                    :
                    ''
                }
                ${formInternalColor(checkoutProducts[i]?.product?.internalColor)}
            `);
        }
    }
    return createLetterBody(checkoutProducts, contacts, products.join(' '));
}

export function createContactMail(contacts) {
    return `
        <br/>
        <br/>
        <b>Contact</b>
        <br/>
        <p>First name: ${contacts?.firstName}</p>
        <p>Second name: ${contacts?.secondName}</p>
        <p>Email: ${contacts?.email}</p>
        <p>Phone: ${contacts?.phone}</p>
        <p>Address: ${contacts?.address}</p>
        <p>Apartment: ${contacts?.apartment}</p>
        <p>City: ${contacts?.city}</p>
        <p>State: ${contacts?.state}</p>
        <p>Country: ${contacts?.country}</p>
        <p>Zip Code: ${contacts?.zipCode}</p>
    `
}

function createHubBody(contacts) {
    return `
        <div>
            <br/>
            <br/>
            <b>Contacts</b>
            <br/>
            <p>First name: ${contacts?.firstName}</p>
            <p>Second name: ${contacts?.secondName}</p>
            <p>Email: ${contacts?.email}</p>
            <p>Phone: ${contacts?.phone}</p>
            <p>Comment: ${contacts?.message}</p>
            <br/>
            <b>Date and time</b>
            <br/>
            <p>First name: ${contacts?.date}</p>
            <p>Second name: ${contacts?.time}</p>
        </div>
    `
}

export function createHubLetter(contacts) {
    return createHubBody(contacts);
}

