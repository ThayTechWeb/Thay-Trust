import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Briefcase, Heart, Users, Award, Lightbulb } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 text-[#06ABEB]">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Empowering Lives Through Inclusive Opportunities
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Thay Trust provides trusted workshop internships for people with disabilities and those from
                disadvantaged backgrounds, along with a dedicated matrimony service.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/workshop">
                <Button className="border-[#06ABEB] text-[#06ABEB] hover:bg-[#06ABEB] hover:text-white transition-colors">
                  Explore Workshops
                  <ArrowRight className="ml-2 h-4 w-4 " />
                </Button>
              </Link>
              <Link href="/matrimony">
                <Button variant="outline">Matrimony Service</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Services</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Dedicated to creating opportunities and connections for people with disabilities.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 py-12">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Briefcase className="h-8 w-8 text-[#06ABEB]" />
                <div className="grid gap-1">
                  <CardTitle>Workshop & Internships</CardTitle>
                  <CardDescription>For people with software skills</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <Image
                  src="/workshop.avif"
                  alt="Workshop session"
                  width={400}
                  height={300}
                  className="rounded-lg mb-4"
                />
                <p>
                  We provide specialized workshop internships for people with disabilities and those from disadvantaged
                  backgrounds who have knowledge in software development. Our program helps participants build skills,
                  gain experience, and connect with potential employers.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/workshop">
                  <Button className="border-[#06ABEB] text-[#06ABEB] hover:bg-[#06ABEB] hover:text-white transition-colors" variant="outline" size="sm">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Heart className="h-8 w-8 text-[#06ABEB]" />
                <div className="grid gap-1">
                  <CardTitle>Matrimony Service</CardTitle>
                  <CardDescription>For people with disabilities</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <Image
                  src="/matrimony.avif"
                  alt="Happy couple"
                  width={400}
                  height={300}
                  className="rounded-lg mb-4" />
                <p>
                  Our matrimony service is specifically designed for people with disabilities, providing a safe,
                  respectful platform to find life partners. We understand the unique needs and preferences of our
                  community and offer personalized matchmaking assistance.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/matrimony">
                  <Button className="border-[#06ABEB] text-[#06ABEB] hover:bg-[#06ABEB] hover:text-white transition-colors" variant="outline" size="sm">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      <section id="why-choose-us" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose Thay Trust</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Our commitment to inclusivity and excellence sets us apart.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 py-12">
            <Card className="flex flex-col items-center space-y-2 p-6">
              <Users className="h-12 w-12 text-[#06ABEB]" />
              <h3 className="text-xl font-bold">Inclusive Community</h3>
              <p className="text-center text-muted-foreground">
              We&#39;ve built a trusted community focused on respect, understanding, and support.
              </p>
            </Card>
            <Card className="flex flex-col items-center space-y-2 p-6">
              <Award className="h-12 w-12 text-[#06ABEB]" />
              <h3 className="text-xl font-bold">Expert Guidance</h3>
              <p className="text-center text-muted-foreground">
                Our team of experienced professionals provides personalized support and mentorship.
              </p>
            </Card>
            <Card className="flex flex-col items-center space-y-2 p-6">
              <Lightbulb className="h-12 w-12 text-[#06ABEB]" />
              <h3 className="text-xl font-bold">Innovative Approach</h3>
              <p className="text-center text-muted-foreground">
                We leverage technology and creative solutions to overcome barriers and create opportunities.
              </p>
            </Card>
          </div>
        </div>
      </section>
      <section id="get-involved" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get Involved</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Join us in our mission to create a more inclusive world. There are many ways to support Thay Trust.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 py-12">
            <Card>
              <CardHeader>
                <CardTitle>Volunteer</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Share your skills and time to support our programs and make a difference in someone&#39;s life.</p>
              </CardContent>
              <CardFooter>
                <Link href="/volunteer">
                  <Button className="border-[#06ABEB] text-[#06ABEB] hover:bg-[#06ABEB] hover:text-white transition-colors" variant="outline" size="sm">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Donate</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Your financial support helps us expand our programs and reach more people in need.</p>
              </CardContent>
              <CardFooter>
                <Link href="/donate">
                  <Button className="border-[#06ABEB] text-[#06ABEB] hover:bg-[#06ABEB] hover:text-white transition-colors" variant="outline" size="sm" >
                    Contribute Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

