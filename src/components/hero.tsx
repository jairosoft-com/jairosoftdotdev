import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50" />
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-50/30 via-transparent to-blue-50/30" />

      <div className="relative pt-32 pb-40 sm:pt-40 sm:pb-48">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 tracking-tight leading-tight animate-fade-in-up">
              Scale Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600">
                Digital Capacity
              </span>
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                On-Demand Expert Teams
              </span>{" "}
              for Growing Businesses
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up animation-delay-200">
              Access elite development teams instantly. No hiring hassles, no overhead costs, no administrative burden. 
              Just world-class talent ready to accelerate your digital transformation and scale your business efficiently.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up animation-delay-400">
              <Link
                href="#contact"
                className="inline-flex items-center px-10 py-5 text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Build Your Agile Team
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </Link>

              <Link
                href="#services"
                className="inline-flex items-center px-10 py-5 text-gray-700 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 text-lg font-semibold"
              >
                Explore Services
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-600 animate-fade-in-up animation-delay-600">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Pre-vetted expertise</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Instant scalability</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Cost-effective solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
