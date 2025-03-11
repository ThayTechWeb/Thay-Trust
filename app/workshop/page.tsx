import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function WorkshopPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 text-[#06ABEB]">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Workshop & Internship Programs
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Empowering people with disabilities and those from disadvantaged backgrounds through specialized
                software training and internship opportunities.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
              <Button className="border-[#06ABEB] text-[#06ABEB] hover:bg-[#06ABEB] hover:text-white transition-colors">
              Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#programs">
                <Button variant="outline">View Programs</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="approach" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Approach</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                We believe in the power of inclusive education and employment opportunities.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 py-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Personalized Learning</h3>
              <p className="text-muted-foreground">
                Our workshops are designed to accommodate different learning styles and needs. We provide personalized
                support to ensure each participant can fully engage with the material and develop their skills at their
                own pace.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#06ABEB]" />
                  <span>Adaptive learning environments</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#06ABEB]" />
                  <span>One-on-one mentoring</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#06ABEB]" />
                  <span>Flexible scheduling options</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Industry Connections</h3>
              <p className="text-muted-foreground">
                We partner with leading technology companies and organizations to provide real-world experience and job
                placement opportunities for our participants. Our network of industry partners is committed to inclusive
                hiring practices.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#06ABEB]" />
                  <span>Partnerships with tech companies</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#06ABEB]" />
                  <span>Job placement assistance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#06ABEB]" />
                  <span>Networking opportunities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="programs" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Programs</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Explore our range of workshop and internship opportunities.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 py-12">
            <Card>
              <CardHeader>
                <CardTitle>Web Development</CardTitle>
                <CardDescription>Frontend & Backend Technologies</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn modern web development technologies including HTML, CSS, JavaScript, React, Node.js, and more.
                  This program includes hands-on projects and mentorship from industry professionals.
                </p>
                <div className="mt-4 space-y-2">
                  <p className="font-medium">Duration: 12 weeks</p>
                  <p className="font-medium">Format: Hybrid (Online & In-person)</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Mobile App Development</CardTitle>
                <CardDescription>iOS & Android Development</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Develop skills in mobile application development for iOS and Android platforms. Learn Swift, Kotlin,
                  React Native, and Flutter. Create functional apps with guidance from experienced developers.
                </p>
                <div className="mt-4 space-y-2">
                  <p className="font-medium">Duration: 14 weeks</p>
                  <p className="font-medium">Format: Hybrid (Online & In-person)</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Data Science</CardTitle>
                <CardDescription>Analytics & Machine Learning</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Explore the world of data science, including data analysis, visualization, and machine learning. Learn
                  Python, R, SQL, and popular data science libraries and frameworks.
                </p>
                <div className="mt-4 space-y-2">
                  <p className="font-medium">Duration: 16 weeks</p>
                  <p className="font-medium">Format: Hybrid (Online & In-person)</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-[#06ABEB] hover:bg-[#0590c5]">
                Apply for a Program
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section id="success-stories" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Success Stories</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Hear from our program graduates who have transformed their careers.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 py-12">
            <Card className="p-6">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Profile"
                    className="rounded-full"
                    width={60}
                    height={60}
                  />
                  <div>
                    <h3 className="text-lg font-bold">Michael R.</h3>
                    <p className="text-sm text-muted-foreground">Web Development Graduate</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                The web development workshop changed my life. As someone with a physical disability, I struggled to
                  find employment opportunities that accommodated my needs. This program not only taught me valuable
                  skills but also connected me with an employer who values my contributions. I now work as a frontend
                  developer at a tech startup.
                </p>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Profile"
                    className="rounded-full"
                    width={60}
                    height={60}
                  />
                  <div>
                    <h3 className="text-lg font-bold">Priya S.</h3>
                    <p className="text-sm text-muted-foreground">Data Science Graduate</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                Coming from a disadvantaged background, I never thought a career in tech was possible for me. The
                  data science program provided me with not just technical skills, but also the confidence to pursue my
                  dreams. The mentorship and support I received were invaluable. I&#39;m now working as a data analyst and
                  continuing to grow in my career.
                </p>
              </div>
            </Card>
          </div>
          <div className="flex justify-center">
            <Link href="/testimonials">
              <Button variant="outline" size="lg">
                View More Success Stories
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

