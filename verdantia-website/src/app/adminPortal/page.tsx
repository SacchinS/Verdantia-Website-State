import Navbar from "@/app/components/navbar";
import LandingContent from "@/app/components/landingContent";
import React from "react";

export default function AdminPortal() {
    return (
        <main>
            <LandingContent
                heading="Welcome to \nYour Portal"
                subheading=""
                buttonText="Post Application"
            />
            
        </main>
    )
}