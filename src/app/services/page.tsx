import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services - JairoSoft',
  description: 'Explore our comprehensive range of software development and consulting services.',
}

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
        We offer a comprehensive range of software development services to help your business 
        succeed in the digital world. From web applications to mobile solutions, we've got you covered.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3">Web Development</h3>
          <p className="text-muted-foreground">
            Custom web applications built with modern technologies like React, Next.js, and TypeScript. 
            Responsive, fast, and scalable solutions.
          </p>
        </div>
        
        <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3">Mobile Development</h3>
          <p className="text-muted-foreground">
            Native and cross-platform mobile applications for iOS and Android. 
            Built with React Native, Flutter, or native technologies.
          </p>
        </div>
        
        <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3">Technical Consulting</h3>
          <p className="text-muted-foreground">
            Expert technical consulting and architecture guidance to help you make the right 
            technology decisions for your business.
          </p>
        </div>
        
        <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
          <p className="text-muted-foreground">
            User-centered design solutions that create intuitive and engaging experiences 
            for your customers across all platforms.
          </p>
        </div>
        
        <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3">DevOps & Cloud</h3>
          <p className="text-muted-foreground">
            Cloud infrastructure setup, CI/CD pipelines, and DevOps practices to ensure 
            your applications are reliable and scalable.
          </p>
        </div>
        
        <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3">Performance Optimization</h3>
          <p className="text-muted-foreground">
            Optimize your existing applications for better performance, faster loading times, 
            and improved user experience.
          </p>
        </div>
      </div>
    </div>
  )
}