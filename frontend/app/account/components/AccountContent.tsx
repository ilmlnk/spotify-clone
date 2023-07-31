"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { postData } from "@/libs/helpers";

const AccountContent = () => {
    const router = useRouter();
    const subscribeModal = useSubscribeModal();
    const { isLoading, subscription, user } = useUser();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!isLoading && !user) {
            router.replace('/');
        }
    }, [isLoading, user, router]);

    const redirectToCustomerPortal = async () => {
        setLoading(true);
        try {
            const { url, error } = await postData({
                url: "/api/create-portal-link"
            });
            window.location.assign(url);
        } catch (error) {
            if (error) return alert((error as Error).message);
        }
    }
    return (
        <div></div>
    );
}

export default AccountContent;