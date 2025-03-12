import Link from "next/link"
import { ArrowRight, Heart, Shield, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { CoverImage } from "@/components/coverImage"

export default function MatrimonyPage() {
  return (
    <>
        <CoverImage
        src="/matrimony-cover.avif"
        alt="Thay Trust Matrimony Service"
        title="Matrimony Service for People with Disabilities"
        subtitle="A trusted platform to find your life partner in a safe, respectful, and inclusive environment."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link href="/contact">
            <Button className="bg-[#06ABEB] hover:bg-[#0590c5]">
              Register Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="#how-it-works">
          <Button variant="outline" className="text-black hover:text-[#06ABEB]">
              How It Works</Button>
          </Link>
        </div>
      </CoverImage>
      <section id="why-choose" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose Our Service</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                We understand the unique needs of people with disabilities in finding life partners.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 py-12">
            <Card className="flex flex-col items-center text-center p-6">
              <Shield className="h-12 w-12 text-[#06ABEB] mb-4" />
              <CardTitle className="text-xl mb-2">Safe & Secure</CardTitle>
              <CardContent className="p-0">
                <p className="text-muted-foreground">
                  We verify all profiles and maintain strict privacy standards to ensure a safe experience for all our
                  members.
                </p>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center p-6">
              <Users className="h-12 w-12 text-[#06ABEB] mb-4" />
              <CardTitle className="text-xl mb-2">Inclusive Community</CardTitle>
              <CardContent className="p-0">
                <p className="text-muted-foreground">
                  Our platform is designed specifically for people with disabilities, creating an understanding and
                  supportive community.
                </p>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center p-6">
              <Heart className="h-12 w-12 text-[#06ABEB] mb-4" />
              <CardTitle className="text-xl mb-2">Personalized Matching</CardTitle>
              <CardContent className="p-0">
                <p className="text-muted-foreground">
                  Our matching algorithm considers your preferences, interests, and specific needs to suggest compatible
                  partners.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How It Works</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Our simple process to help you find your perfect match.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-4 lg:gap-12 py-12">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#06ABEB] text-white">1</div>
              <h3 className="text-xl font-bold">Register</h3>
              <p className="text-muted-foreground">Create your profile with personal details and preferences.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#06ABEB] text-white">2</div>
              <h3 className="text-xl font-bold">Verification</h3>
              <p className="text-muted-foreground">We verify your profile to ensure authenticity and safety.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#06ABEB] text-white">3</div>
              <h3 className="text-xl font-bold">Connect</h3>
              <p className="text-muted-foreground">Browse profiles and connect with potential matches.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#06ABEB] text-white">4</div>
              <h3 className="text-xl font-bold">Meet</h3>
              <p className="text-muted-foreground">
                When comfortable, arrange to meet in person with our guidance and support.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-[#06ABEB] hover:bg-[#0590c5]">
                Start Your Journey
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
                Couples who found love through our matrimony service.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 py-12">
            <Card className="p-6">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=80&width=160"
                    alt="Couple"
                    className="rounded-md"
                    width={160}
                    height={80}
                  />
                  <div>
                    <h3 className="text-lg font-bold">Rahul & Anita</h3>
                    <p className="text-sm text-muted-foreground">Married for 2 years</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                &quot; We both have hearing impairments and found it difficult to meet people who understood our
                  experiences. This platform connected us, and we instantly felt a connection. The support from the team
                  made our journey smooth and comfortable. We&#39;re now happily married and grateful for this service. &quot;
                </p>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=80&width=160"
                    alt="Couple"
                    className="rounded-md"
                    width={160}
                    height={80}
                  />
                  <div>
                    <h3 className="text-lg font-bold">David & Sarah</h3>
                    <p className="text-sm text-muted-foreground">Engaged</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                &quot; As someone with a physical disability, I was hesitant to try online matchmaking. But this platforms
                  focus on creating a respectful environment made all the difference. I met Sarah, who understood my
                  challenges and saw beyond them. We&#39;re now planning our wedding and couldn&#39;t be happier. &quot;
                </p>
              </div>
            </Card>
          </div>
          <div className="flex justify-center">
            <Link href="/testimonials">
              <Button className="border-[#06ABEB] text-[#06ABEB] hover:bg-[#06ABEB] hover:text-white transition-colors" variant="outline" size="lg">
                Read More Success Stories
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

