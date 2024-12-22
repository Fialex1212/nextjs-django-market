import visa from '@/app/static/icons/footer/visa.svg'
import mastercard from '@/app/static/icons/footer/mastercard.svg'
import payPal from '@/app/static/icons/footer/paypal.svg'
import applePay from '@/app/static/icons/footer/applePay.svg'
import googlePay from '@/app/static/icons/footer/googlePay.svg'

import twitter from '@/app/static/icons/footer/twitter.svg'
import facebook from '@/app/static/icons/footer/facebook.svg'
import instagram from '@/app/static/icons/footer/instagram.svg'
import github from '@/app/static/icons/footer/github.svg'

import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";


export const footerData = [
    {
        title: "Company",
        links: [
            {
                name: "About",
                slug: "/about"
            },
            {
                name: "Features",
                slug: "/features"
            },
            {
                name: "Works",
                slug: "/works"
            },
            {
                name: "Career",
                slug: "/career"
            }
        ]
    },
    {
        title: "Help",
        links: [
            {
                name: "Customer Support",
                slug: "/customer-support"
            },
            {
                name: "Delivery Details",
                slug: "/delivery-details"
            },
            {
                name: "Terms & Conditions",
                slug: "/terms-conditions"
            },
            {
                name: "Privacy Policy",
                slug: "/privacy-policy"
            }
        ]
    },
    {
        title: "FAQ",
        links: [
            {
                name: "Account",
                slug: "/account"
            },
            {
                name: "Manage Deliveries",
                slug: "/manage-deliveries"
            },
            {
                name: "Orders",
                slug: "/orders"
            },
            {
                name: "Payments",
                slug: "/payments"
            }
        ]
    },
    {
        title: "Resources",
        links: [
            {
                name: "Free eBooks",
                slug: "/free-ebooks"
            },
            {
                name: "Development Tutorial",
                slug: "/development-tutorial"
            },
            {
                name: "How to - Blog",
                slug: "/how-to-blog"
            },
            {
                name: "Youtube Playlist",
                slug: "/youtube-playlist"
            }
        ]
    }
];

export const paymentData = [
    {
        image: visa,
        alt: "visa"
    },
    {
        image: mastercard,
        alt: "mastercard"
    },
    {
        image: payPal,
        alt: "paypal"
    },
    {
        image: applePay,
        alt: "applePay"
    },
    {
        image: googlePay,
        alt: "googlePay"
    }
];

export const socialData = [
    {
        image: <FaTwitter />,
        url: "https://twitter.com"
    },
    {
        image: <FaFacebook />,
        url: "https://facebook.com"
    },
    {
        image: <FaInstagram />,
        url: "https://instagram.com"
    },
    {
        image: <FaGithub />,
        url: "https://github.com"
    }
];

