import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - JairoSoft',
  description: 'Get in touch with JairoSoft for your software development needs.',
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
        Ready to start your next project? We'd love to hear from you. 
        Get in touch and let's discuss how we can help bring your ideas to life.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-muted-foreground">hello@jairosoft.dev</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-muted-foreground">Remote & Global</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Response Time</h3>
                <p className="text-muted-foreground">Within 24 hours</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="font-semibold mb-4">Why Choose JairoSoft?</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>10+ years of software development experience</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Custom solutions tailored to your needs</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Transparent communication throughout the project</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Ongoing support and maintenance</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name *
              </label>
              <input 
                type="text" 
                id="name" 
                required
                className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                placeholder="Your full name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address *
              </label>
              <input 
                type="email" 
                id="email" 
                required
                className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2">
                Company (Optional)
              </label>
              <input 
                type="text" 
                id="company" 
                className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                placeholder="Your company name"
              />
            </div>
            
            <div>
              <label htmlFor="project" className="block text-sm font-medium mb-2">
                Project Type
              </label>
              <select 
                id="project" 
                className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">Select project type</option>
                <option value="web-development">Web Development</option>
                <option value="mobile-development">Mobile Development</option>
                <option value="consulting">Technical Consulting</option>
                <option value="ui-ux">UI/UX Design</option>
                <option value="devops">DevOps & Cloud</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="budget" className="block text-sm font-medium mb-2">
                Budget Range
              </label>
              <select 
                id="budget" 
                className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">Select budget range</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k+">$50,000+</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Project Description *
              </label>
              <textarea 
                id="message" 
                rows={5} 
                required
                className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical" 
                placeholder="Tell us about your project, goals, and any specific requirements..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 text-white font-semibold shadow-md hover:shadow-lg px-6 py-3 rounded-md"
            >
              Send Message
            </button>
            
            <p className="text-sm text-muted-foreground">
              * Required fields. We'll get back to you within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}