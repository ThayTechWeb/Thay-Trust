import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12 max-w-6xl mx-auto">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="text-[#06ABEB]">Thay</span>Trust
          </div>
          <p className="text-sm text-muted-foreground">
            Empowering lives through inclusive opportunities for people with disabilities.
          </p>
        </div>
        <div className="flex flex-col gap-2 md:gap-4">
          <h3 className="text-lg font-medium">Quick Links</h3>
          <nav className="flex flex-col gap-2">
           {/*  <Link href="/" className="text-sm hover:underline underline-offset-4">
              Home
            </Link> */}
            <Link href="/workshop" className="text-sm hover:underline underline-offset-4">
              Workshop & Internships
            </Link>
            <Link href="/matrimony" className="text-sm hover:underline underline-offset-4">
              Matrimony Service
            </Link>
            <Link href="/testimonials" className="text-sm hover:underline underline-offset-4">
              Success Stories
            </Link>
            <Link href="/contact" className="text-sm hover:underline underline-offset-4">
              Contact Us
            </Link>
          </nav>
        </div>
        <div className="flex flex-col gap-2 md:gap-4">
          <h3 className="text-lg font-medium">Contact</h3>
          <p className="text-sm">
            Email: info@thaytrust.com
            <br />
            Phone: +91 06380454663
          </p>
        </div>
      </div>
      <div className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row max-w-6xl mx-auto">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Thay Trust. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

