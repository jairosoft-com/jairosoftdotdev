import Hero from "@/components/hero";
import PricingCard from "@/components/pricing-card";
import { createClient } from "../../supabase/server";
import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowUpRight,
  Code,
  Palette,
  Rocket,
  Users,
  Globe,
  Zap,
  DollarSign,
  TrendingUp,
  Shield,
  FileText,
  Timer,
} from "lucide-react";

export const metadata: Metadata = {
  title: 'JairoSoft - Professional Software Development Services',
  description: 'Professional software development services specializing in modern web applications, mobile development, and technical consulting. Transform your ideas into successful digital products.',
}

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: plans } = await supabase.functions.invoke(
    "supabase-functions-get-plans",
  );

  return (
    <div className="min-h-screen bg-white">
      <Hero />

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Our Service Offerings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Access expert teams across all development disciplines. From initial concept to full deployment, 
              our TaaS model delivers specialized talent exactly when you need it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8" />,
                title: "Full-Stack Development",
                description:
                  "Complete web application development with React, Next.js, Node.js, and modern tech stacks",
                href: "/services#web-development"
              },
              {
                icon: <Palette className="w-8 h-8" />,
                title: "UI/UX Design",
                description:
                  "User-centered design that converts visitors into customers with beautiful, intuitive interfaces",
                href: "/services#ui-ux-design"
              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "MVP Development",
                description:
                  "Rapid prototyping and minimum viable product development to validate ideas quickly",
                href: "/services#mvp-development"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "API Integration",
                description:
                  "Seamless third-party integrations and custom API development for enhanced functionality",
                href: "/services#api-integration"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Performance Optimization",
                description:
                  "Lightning-fast applications optimized for speed, SEO, and exceptional user experience",
                href: "/services#performance-optimization"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Team Augmentation",
                description:
                  "Scale your existing team with our expert developers and designers on-demand",
                href: "/services#team-augmentation"
              },
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-indigo-300 bg-white">
                <CardHeader className="pb-4">
                  <div className="text-indigo-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </CardDescription>
                  <Link 
                    href={service.href}
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium transition-colors duration-200 group-hover:underline"
                  >
                    Learn More
                    <ArrowUpRight className="ml-1 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary CTA - After Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Get in touch with us to learn more
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to transform your development process? Let's discuss how our expert teams can accelerate your projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-lg">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-3 text-lg">
              <Link href="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition Sections */}
      <section id="value-propositions" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Why Choose Our Team-as-a-Service Model
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Transform your business with our proven TaaS approach. Get enterprise-level capabilities 
                without the complexity, costs, and commitments of traditional hiring.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Time & Cost Savings */}
              <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-indigo-300 bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    Time & Cost Savings
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 leading-relaxed">
                    Eliminate lengthy hiring processes, onboarding costs, and overhead expenses. 
                    Get expert teams deployed instantly at a fraction of traditional hiring costs.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Scalability & Flexibility */}
              <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-indigo-300 bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    Scalability & Flexibility
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 leading-relaxed">
                    Scale your team up or down based on project demands. Adapt quickly to market changes 
                    without long-term commitments or workforce management overhead.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Pre-vetted Expertise */}
              <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-indigo-300 bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    Pre-vetted Expertise
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 leading-relaxed">
                    Access top-tier talent that's already vetted, tested, and proven. Skip the uncertainty 
                    of hiring and get experts who deliver results from day one.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Reduced Administrative Burden */}
              <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-indigo-300 bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    Reduced Administrative Burden
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 leading-relaxed">
                    No HR headaches, no payroll complexity, no benefits management. Focus on your core business 
                    while we handle all team management and administrative tasks.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Accelerated Time-to-Market */}
              <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-indigo-300 bg-white md:col-span-2 lg:col-span-1">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Timer className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    Accelerated Time-to-Market
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 leading-relaxed">
                    Launch faster with experienced teams who understand modern development practices. 
                    Reduce project timelines and get to market ahead of competitors.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary CTA - After Value Propositions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Ready to scale?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Stop struggling with hiring challenges and overhead costs. Start building with our expert teams today.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-10 py-4 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            <Link href="#contact">Build Your Agile Team</Link>
          </Button>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section
        id="trust-indicators"
        className="py-24 bg-gradient-to-br from-indigo-50 via-white to-cyan-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Trusted by Growing Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of companies that have accelerated their growth with our expert teams. 
              Our proven track record speaks for itself.
            </p>
          </div>

          {/* Success Metrics */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-gray-200 hover:border-indigo-300 transition-colors duration-300 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-indigo-600 mb-2">150+</div>
                <div className="text-gray-600 font-medium">Projects Delivered</div>
              </CardContent>
            </Card>
            <Card className="text-center border-gray-200 hover:border-indigo-300 transition-colors duration-300 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-indigo-600 mb-2">98%</div>
                <div className="text-gray-600 font-medium">Client Satisfaction</div>
              </CardContent>
            </Card>
            <Card className="text-center border-gray-200 hover:border-indigo-300 transition-colors duration-300 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-indigo-600 mb-2">2-4x</div>
                <div className="text-gray-600 font-medium">Faster Delivery</div>
              </CardContent>
            </Card>
          </div>

          {/* Client Logos Placeholder */}
          <div className="mb-16">
            <h3 className="text-lg font-semibold text-gray-700 text-center mb-8">
              Trusted by companies of all sizes
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
              {/* Placeholder logos - these will be replaced with actual client logos */}
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div
                  key={index}
                  className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors duration-200"
                >
                  <span className="text-xs text-gray-500 font-medium">
                    Client Logo {index}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials Placeholder */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 text-center mb-8">
              What our clients say
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Placeholder testimonial cards */}
              {[
                {
                  quote: "Working with this team transformed our development process. We launched 3 months ahead of schedule.",
                  author: "Sarah Johnson",
                  role: "CTO, TechStart Inc."
                },
                {
                  quote: "The expertise and professionalism exceeded our expectations. Highly recommend their TaaS approach.",
                  author: "Michael Chen",
                  role: "Founder, Digital Solutions"
                },
                {
                  quote: "Seamless integration with our existing team. It felt like they had been with us from day one.",
                  author: "Emily Rodriguez",
                  role: "Product Manager, Growth Co."
                }
              ].map((testimonial, index) => (
                <Card key={index} className="border-gray-200 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="text-indigo-600 text-2xl mb-2">"</div>
                      <p className="text-gray-600 italic leading-relaxed">
                        {testimonial.quote}
                      </p>
                    </div>
                    <div className="border-t pt-4">
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white" id="pricing">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Flexible Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose the engagement model that works best for your project and
              budget.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans?.map((item: any) => (
              <PricingCard key={item.id} item={item} user={user} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Development Process?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
            Join the companies already scaling faster with our TaaS model. Get expert teams deployed instantly, 
            without the hassle of traditional hiring. Start your transformation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-gray-50 px-10 py-5 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <Link href="mailto:hello@jairosoft.dev" className="inline-flex items-center">
                Start Your Project
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-5 text-lg font-semibold transition-all duration-300">
              <Link href="/contact" className="inline-flex items-center">
                Schedule Consultation
              </Link>
            </Button>
          </div>
          
          {/* Additional micro-CTA */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-lg opacity-75 mb-4">
              Have questions? We're here to help.
            </p>
            <Button asChild variant="ghost" className="text-white hover:bg-white/10 text-base">
              <Link href="/contact">Get in touch with us →</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
