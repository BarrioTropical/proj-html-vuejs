import { reactive } from "vue";
export const store = reactive({
    headerMenu: [
        'Home',
        'Shop',
        'About',
        'Blog',
        'Contact',
        'Shop by brand',
    ],
    footerMenu: [
        'Home',
        'About',
        'Blog',
        'Contact',
        'Shop',
    ],
    newArrival: [
        {
            image: '/img/product-8.jpg',
            title: 'Colored pet bed',
            price: '$25.00',
        },
        {
            image: '/img/product-2.jpg',
            title: 'Colorful ball set',
            price: '$29.00',
        },
        {
            image: '/img/product-3.jpg',
            title: 'Dog bone',
            discount: '$29.00',
            price: '$18.00',
        },
        {
            image: '/img/product-4.jpg',
            title: 'Animal transport bag',
            price: '$29.00',
        },
        {
            image: '/img/product-5.jpg',
            title: 'Animal transport cage',
            price: '$35.00',
        },
        {
            image: '/img/product-10.jpg',
            title: 'Closable cat litter',
            price: '$16.00',
        },
    ],
    favouriteProduct: [
        {
            image: '/img/product-21.jpg',
            title: 'Transport cage',
            price: '$25.00',
        },
        {
            image: '/img/product-20.jpg',
            title: 'Dog leash',
            price: '$25.00',
        },
        {
            image: '/img/product-16.jpg',
            title: 'Animal transport cage',
            price: '$25.00',
        },
        {
            image: '/img/product-11.jpg',
            title: 'Colorful cat leash',
            price: '$12.00',
        },
    ],
});