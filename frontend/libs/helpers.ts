import { Price } from "@/types";

export const getURL = () => {
    let url = process?.env?.NEXT_PUBLIC_SITE_URL ??
    process?.env?.NEXT_PUBLIC_VERCEL_URL ??
    'http://localhost:3000/';
    url = url.includes('http') ? url : `https://${url}`;
    return url;
};

export const postData = async ({
    url,
    data
} : {
    url: string,
    data?: {price: Price};
}) => {
    console.log('posting', url, data);
}