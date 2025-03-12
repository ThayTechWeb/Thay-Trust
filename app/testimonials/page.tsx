import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { CoverImage } from "@/components/coverImage"

export default function TestimonialsPage() {
  return (
    <>
      <CoverImage
        src="/Success.avif"
        alt="Thay Trust Success Stories"
        title="Success Stories"
        subtitle="Read inspiring stories from individuals who have benefited from our workshop internships and matrimony service."
      />
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Workshop & Internship Success</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Stories from individuals who have transformed their careers through our programs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12">
            <Card className="p-6">
              <CardContent className="p-0">
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
                  &quot;The web development workshop changed my life. As someone with a physical disability, I struggled to
                    find employment opportunities that accommodated my needs. This program not only taught me valuable
                    skills but also connected me with an employer who values my contributions. I now work as a frontend
                    developer at a tech startup. &quot;
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
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
                  &quot;Coming from a disadvantaged background, I never thought a career in tech was possible for me. The
                    data science program provided me with not just technical skills, but also the confidence to pursue
                    my dreams. The mentorship and support I received were invaluable. I&#39;m now working as a data analyst
                    and continuing to grow in my career. &quot;
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
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
                      <h3 className="text-lg font-bold">James T.</h3>
                      <p className="text-sm text-muted-foreground">Mobile App Development Graduate</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                  &quot;After my accident left me with limited mobility, I thought my career in technology was over. The
                    mobile app development workshop showed me that I could still pursue my passion. The instructors were
                    patient and understanding, adapting the curriculum to my needs. I&#39;ve now developed several apps and
                    work remotely for a software company. &quot;
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
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
                      <h3 className="text-lg font-bold">Elena K.</h3>
                      <p className="text-sm text-muted-foreground">UI/UX Design Graduate</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                  &quot;As someone with a learning disability, traditional education was always challenging for me. The
                    UI/UX design workshop provided a hands-on, practical approach that worked with my learning style.
                    The supportive environment and personalized attention helped me develop my skills and build a
                    portfolio. I now work as a freelance designer with several regular clients. &quot;
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Matrimony Success Stories</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Couples who found love and companionship through our matrimony service.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12">
            <Card className="p-6">
              <CardContent className="p-0">
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
                  &quot;We both have hearing impairments and found it difficult to meet people who understood our
                    experiences. This platform connected us, and we instantly felt a connection. The support from the
                    team made our journey smooth and comfortable. We&#34;re now happily married and grateful for this
                    service. &quot;
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
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
                  &quot;As someone with a physical disability, I was hesitant to try online matchmaking. But this
                    platform&#39;s focus on creating a respectful environment made all the difference. I met Sarah, who
                    understood my challenges and saw beyond them. We&#39;re now planning our wedding and couldn&#39;t be
                    happier. &quot;
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
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
                      <h3 className="text-lg font-bold">Maya & Robert</h3>
                      <p className="text-sm text-muted-foreground">Dating for 1 year</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                  &quot;I have a visual impairment, and Robert has a mobility disability. We might never have met without
                    this platform. The matching algorithm suggested us based on our shared interests in music and
                    literature, not just our disabilities. The platform&#34;s accessibility features made communication
                    easy, and we&#34;ve been together for a year now.&quot;
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
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
                      <h3 className="text-lg font-bold">Thomas & Jennifer</h3>
                      <p className="text-sm text-muted-foreground">Married for 1 year</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                  &quot;After my spinal cord injury, I thought finding love would be impossible. This platform showed me
                    otherwise. Jennifer and I connected over our shared love of cooking and travel. The team helped
                    arrange our first meeting and provided support throughout our relationship journey. We got married
                    last year and are planning our first accessible travel adventure together. &quot;
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Share Your Story</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            &quot;Have you found success through our services? We&#39;d love to hear your story and share it with others who
              might benefit from our programs.&quot;
            </p>
            <div className="flex justify-center pt-4">
              <Link href="/contact">
                <Button size="lg" className="border-[#06ABEB] text-[#06ABEB] hover:bg-[#06ABEB] hover:text-white transition-colors">
                  Contact Us to Share Your Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

