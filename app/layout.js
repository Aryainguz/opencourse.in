import { ClerkProvider } from "@clerk/nextjs";
import { Outfit } from "next/font/google";
import Head from "next/head";
import "./globals.css";
const inter = Outfit({ subsets: ["latin"] });
export const metadata = {
  title: "OpenCourse | Create Your Customized Learning Path",
  description: "Easily generate tailored AI courses with our OpenCourse tool. Customize your curriculum, explore various topics, and enhance your learning experience.",
  keywords: "AI courses, course generator, custom learning, artificial intelligence, online learning, educational tool",
  author: "Pankaj Kumar Pandey", // Your name or organization
  openGraph: {
    title: "OpenCourse",
    description: "Transform your learning experience with our OpenCourse. Create personalized courses tailored to your needs.",
    url: "", // Replace with your actual URL
    image: "/images/og-image.png", // Path to an Open Graph image
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenCourse",
    description: "Generate custom AI courses effortlessly. Start your learning journey today!",
    image: "/images/twitter-image.png", // Path to a Twitter image
  },
};


export default function RootLayout({ children }) {
  return (
    <>
    
    <ClerkProvider>
    <Head>
          {/* SEO Metadata */}
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <meta name="keywords" content={metadata.keywords} />
          <meta name="author" content={metadata.author} />

          {/* Open Graph Meta Tags */}
          <meta property="og:title" content={metadata.openGraph.title} />
          <meta property="og:description" content={metadata.openGraph.description} />
          <meta property="og:url" content={metadata.openGraph.url} />
          <meta property="og:image" content={metadata.openGraph.image} />
          <meta property="og:type" content={metadata.openGraph.type} />

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content={metadata.twitter.card} />
          <meta name="google-adsense-account" content="ca-pub-1034833348897670" />
          <meta name="twitter:title" content={metadata.twitter.title} />
          <meta name="twitter:description" content={metadata.twitter.description} />
          <meta name="twitter:image" content={metadata.twitter.image} />

          {/* Google AdSense Script */}
          <script
            data-ad-client={process.env.NEXT_PUBLIC_AD_CLIENT_ID} // Replace with your AdSense client ID
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
        </Head>
    <html lang="en">
      <body className={inter.className}>{children}
    
      </body>
    </html>
    </ClerkProvider>
    </>
  );
}
