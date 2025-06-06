import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - JairoSoft',
  description: 'Learn more about JairoSoft and our mission to deliver quality software solutions.',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-muted-foreground mb-6">
          Welcome to JairoSoft - your trusted partner in software development and digital solutions.
        </p>
        <p className="text-muted-foreground mb-6">
          We specialize in creating innovative software solutions that help businesses thrive in the digital age. 
          Our team combines technical expertise with creative problem-solving to deliver exceptional results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              To empower businesses with cutting-edge technology solutions that drive growth, 
              efficiency, and innovation in an ever-evolving digital landscape.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="text-muted-foreground space-y-2">
              <li>• Excellence in every project</li>
              <li>• Transparent communication</li>
              <li>• Continuous innovation</li>
              <li>• Client-focused approach</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}