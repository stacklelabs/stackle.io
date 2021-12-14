import Head from "next/head";
import Image from "next/image";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div>
      <NextSeo
        title="Stackle"
        description="Fill holes, cracks, and other defects in your cloud provider's developer experience"
        canonical="https://stackle.io"
        openGraph={{
          url: "https://stackle.io",
          title: "Stackle",
          description:
            "Fill holes, cracks, and other defects in your cloud provider's developer experience",
        }}
      />
    </div>
  );
}
