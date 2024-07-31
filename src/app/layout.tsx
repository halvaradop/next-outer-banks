import type { Metadata } from "next"
import { Gemunu_Libre } from "next/font/google"
import { LayoutProps } from "@/lib/@types/props"
import "@/ui/globals.css"

const gemunu = Gemunu_Libre({ 
    subsets: ["latin"],
    weight: ["300", "400", "500", "700", "800"],
    variable: "--font-gemunu"
})

export const metadata: Metadata = {
    title: "Outer Banks Fans Site",
};

export default function RootLayout({ children }: LayoutProps) {
    return (
        <html lang="en">
            <body className={gemunu.className}>{children}</body>
        </html>
    );
}
