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
});