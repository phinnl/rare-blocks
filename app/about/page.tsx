import { Metadata } from "next"

export const metadata: Metadata = {
  openGraph: {
    title: "about",
    description: "about",
    url: "https://rare-blocks.vercel.app/about"
  }
}

export default function About() {
  return <div>about</div>
}