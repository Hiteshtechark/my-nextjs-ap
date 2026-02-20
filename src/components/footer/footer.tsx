import Link from "next/link";

export function Footer() {
  return (
    <div className="text-center mt-8">
      <p>&copy; 2024 Lite &middot; Built with NextJs v15 &middot; <Link  className="mt-6 px-4 py-2 bg-amber-700 text-white rounded hover:bg-amber-700 transition" href={'/sitemap.xml'}>Go back home</Link></p>
    </div>
  )
}