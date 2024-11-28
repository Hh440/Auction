import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Youtube, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-background">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Know More Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif">Know More</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Buy</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Sell</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Request an Estimate</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Blog</Link></li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif">Services</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Client Advisory</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Restoration</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Collection Services</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Museum Services</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Post Sale Services</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Private Services</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Storage</Link></li>
            </ul>
          </div>

          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif">About</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Who We Are</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Press</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Careers</Link></li>
            </ul>
          </div>

          {/* Discover Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif">Discover</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Record Price Artwork</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">FAQs</Link></li>
            </ul>
          </div>

          {/* Download App Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif">Download App</h3>
            <div className="flex flex-col gap-3">
              <Link href="#" className="inline-block">
                <Image
                  src="/placeholder.svg"
                  alt="Get it on Google Play"
                  width={140}
                  height={42}
                  className="dark:invert"
                />
              </Link>
              <Link href="#" className="inline-block">
                <Image
                  src="/placeholder.svg"
                  alt="Download on the App Store"
                  width={140}
                  height={42}
                  className="dark:invert"
                />
              </Link>
            </div>

            {/* Follow Us Section */}
            <div className="pt-8">
              <h3 className="text-xl font-serif mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <Link href="#" className="text-foreground hover:text-muted-foreground">
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-foreground hover:text-muted-foreground">
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-foreground hover:text-muted-foreground">
                  <Youtube className="h-6 w-6" />
                  <span className="sr-only">YouTube</span>
                </Link>
                <Link href="#" className="text-foreground hover:text-muted-foreground">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="text-foreground hover:text-muted-foreground">
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 mt-8 border-t">
          <nav className="flex gap-4 mb-4 md:mb-0">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms & Conditions
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Cookie Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Sitemap
            </Link>
          </nav>
          <p className="text-sm text-muted-foreground">
            © Copyright Astaguru 2024. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

