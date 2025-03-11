import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#06ABEB]">Contact Us</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              We&#39;re here to answer your questions and provide support. Reach out to us through any of the channels
                below.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
                <p className="text-muted-foreground md:text-xl">
                Whether you&#39;re interested in our workshop internships, matrimony service, or have general inquiries,
                  we&#39;re here to help.
                </p>
              </div>
              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-[#06ABEB] shrink-0 mt-1" />
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Our Location</h3>
                    <p className="text-muted-foreground">
                      Plot 897, 10th St, H Block, Anna Nagar West, Anna Nagar West Extension,
                      <br />
                      Anna Nagar
                      <br />
                      Chennai, Tamil Nadu 600040
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-[#06ABEB] shrink-0 mt-1" />
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Email Us</h3>
                    <p className="text-muted-foreground">info@thaytech.com</p>
                    <p className="text-muted-foreground">support@thaytech.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-[#06ABEB] shrink-0 mt-1" />
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Call Us</h3>
                    <p className="text-muted-foreground">+91 06380454663</p>
                    <p className="text-muted-foreground">Monday - Friday, 9am - 5pm IST</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                Fill out the form below and we&#39;ll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Enter your full name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="inquiry">Inquiry Type</Label>
                    <Select>
                      <SelectTrigger id="inquiry">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="workshop">Workshop & Internships</SelectItem>
                        <SelectItem value="matrimony">Matrimony Service</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="support">Support</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Enter your message" className="min-h-[120px]" />
                  </div>
                  <Button type="submit" className="w-full bg-[#06ABEB] hover:bg-[#0590c5] mt-2">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

