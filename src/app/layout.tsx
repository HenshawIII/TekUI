import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "HIC TECH | Technology Solutions",
  description: "Transforming businesses with cutting-edge automation, AI integration, and custom software development.",
  openGraph: {
    title: "HIC TECH | Technology Solutions",
    description: "Transforming businesses with cutting-edge automation, AI integration, and custom software development with a focus on customer satisfaction.",
    url: "https://hictech.com", // TODO: Replace with your real domain
    siteName: "HIC TECH",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "HIC TECH Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HIC TECH | Technology Solutions",
    description: "Transforming businesses with cutting-edge automation, AI integration, and custom software development.",
    site: "@hictech", // TODO: Replace with your Twitter handle
    creator: "@hictech", // TODO: Replace with your Twitter handle
    images: ["/favicon.png"],
  },
  alternates: {
    canonical: "https://tek-ui.vercel.app", // TODO: Replace with your real domain
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link rel="icon" type="image/png" href="/Hick.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement(\"script\"),s0=document.getElementsByTagName(\"script\")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/688036cb1786aa1911e7031d/default';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </head>
      <body className="font-['Helvetica']">
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
