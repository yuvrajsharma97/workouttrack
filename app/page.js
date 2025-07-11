"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";
import {
  FiPlay,
  FiUsers,
  FiCheckCircle,
  FiArrowRight,
  FiStar,
  FiZap,
  FiActivity,
  FiTrendingUp,
  FiAward,
} from "react-icons/fi";

export default function HomePage() {
  const [activeFeature, setActiveFeature] = useState(0);
  const { theme } = useTheme();

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <FiActivity className="w-6 h-6" />,
      title: "Smart Workout Plans",
      description:
        "AI-powered workout plans tailored to your fitness level and goals",
    },
    {
      icon: <FiTrendingUp className="w-6 h-6" />,
      title: "Progress Tracking",
      description:
        "Detailed analytics and progress visualization to keep you motivated",
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Community Support",
      description:
        "Connect with like-minded fitness enthusiasts and share your journey",
    },
    {
      icon: <FiAward className="w-6 h-6" />,
      title: "Achievement System",
      description:
        "Gamified experience with badges and milestones to celebrate progress",
    },
  ];

  const stats = [
    { number: "50K+", label: "Active Users" },
    { number: "1M+", label: "Workouts Completed" },
    { number: "4.9★", label: "App Rating" },
    { number: "98%", label: "User Satisfaction" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fitness Enthusiast",
      content:
        "FitTracker transformed my workout routine. I have never been more consistent!",
      rating: 5,
    },
    {
      name: "Mike Chen",
      role: "Personal Trainer",
      content:
        "The analytics help me track my clients progress like never before.",
      rating: 5,
    },
    {
      name: "Emma Davis",
      role: "Busy Professional",
      content:
        "Perfect for my hectic schedule. Quick workouts that actually work!",
      rating: 5,
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "Free",
      period: "",
      features: [
        "3 workout plans",
        "Basic progress tracking",
        "Community access",
      ],
      popular: true,
      buttonText: "Get Started",
    },
    {
      name: "Pro",
      price: "$9.99",
      period: "/month",
      features: [
        "Unlimited workout plans",
        "Advanced analytics",
        "Personal trainer chat",
        "Custom meal plans",
      ],
      popular: false,
      buttonText: "Comming Soon...",
    },
    {
      name: "Elite",
      price: "$19.99",
      period: "/month",
      features: [
        "Everything in Pro",
        "1-on-1 coaching",
        "Priority support",
        "Exclusive content",
      ],
      popular: false,
      buttonText: "Coming Soon...",
    },
  ];


  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[color:var(--background)] text-[color:var(--foreground)] transition-colors duration-300">
        <div className="absolute inset-0 bg-grid opacity-20 transition-opacity duration-300"></div>
        {/* <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-40 -right-40 w-80 h-80 bg-mauve-100 dark:bg-mauve-800 rounded-full filter blur-xl opacity-40 transition-all duration-300"></div>
          <div className="absolute bottom-10 -left-50 w-100 h-100 bg-purple-100 dark:bg-purple-800 rounded-full filter blur-xl opacity-40 transition-all duration-300"></div>
        </div> */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center space-y-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[color:var(--card-background)] border border-[color:var(--card-border)] shadow-sm">
            <FiZap className="w-4 h-4 text-mauve-600 dark:text-mauve-400 mr-2" />
            <span className="text-sm font-medium text-[color:var(--foreground)]">
              New: AI-Powered Workout Plans
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-[color:var(--foreground)]">
              Transform Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-500 via-mauve-500 to-blue-500 dark:from-mauve-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
              Fitness Journey
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-[color:var(--foreground)]/80 max-w-3xl mx-auto">
            Track workouts, monitor progress, and achieve your fitness goals
            with our comprehensive AI-powered fitness companion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <button className="group flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 via-mauve-500 to-blue-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
                <FiPlay className="w-5 h-5 mr-2" />
                Start Free Trial
                <FiArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1" />
              </button>
            </Link>
            <button className="flex items-center px-8 py-4 bg-[color:var(--card-background)] border border-[color:var(--card-border)] text-[color:var(--foreground)] rounded-xl font-semibold text-lg hover:bg-[color:var(--card-border)] shadow-sm">
              <FiPlay className="w-5 h-5 mr-2" />
              Watch Demo
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[color:var(--foreground)] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-[color:var(--foreground)]/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-[color:var(--background)] flex items-center justify-center py-4">
        <span className="w-6/12 h-1 bg-gradient-to-r from-purple-500 via-mauve-500 to-blue-500 rounded-full opacity-100"></span>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-[color:var(--background)] text-[color:var(--foreground)] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-[color:var(--foreground)]/80 max-w-3xl mx-auto">
              Powerful features designed to help you reach your fitness goals
              faster and more efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-[color:var(--card-background)] border border-[color:var(--card-border)] rounded-2xl hover:border-mauve-400 hover:shadow-lg transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setActiveFeature(index)}>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-400 text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-[color:var(--foreground)]/80 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-[color:var(--background)] flex items-center justify-center py-4">
        <span className="w-6/12 h-1 bg-gradient-to-r from-purple-500 via-mauve-500 to-blue-500 rounded-full opacity-100"></span>
      </div>

      {/* App Preview Section */}
      <section className="py-20 bg-[color:var(--background)] text-[color:var(--foreground)] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold">
                Your Fitness Data,
                <span className="block text-mauve-600 dark:text-mauve-400">
                  Beautifully Visualized
                </span>
              </h2>
              <p className="text-xl text-[color:var(--foreground)]/80 leading-relaxed">
                Get detailed insights into your progress with our advanced
                analytics dashboard. Track everything from workout frequency to
                strength gains.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FiCheckCircle className="w-6 h-6 text-mauve-500 dark:text-mauve-400 mr-3" />
                  <span className="text-[color:var(--foreground)]/80">
                    Real-time progress tracking
                  </span>
                </div>
                <div className="flex items-center">
                  <FiCheckCircle className="w-6 h-6 text-mauve-500 dark:text-mauve-400 mr-3" />
                  <span className="text-[color:var(--foreground)]/80">
                    Detailed workout analytics
                  </span>
                </div>
                <div className="flex items-center">
                  <FiCheckCircle className="w-6 h-6 text-mauve-500 dark:text-mauve-400 mr-3" />
                  <span className="text-[color:var(--foreground)]/80">
                    Goal setting and achievement
                  </span>
                </div>
              </div>
              <Link href="/dashboard">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 via-mauve-500 to-blue-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  Explore Dashboard
                </button>
              </Link>
            </div>
            <div className="relative">
              <div className="bg-[color:var(--card-background)] rounded-3xl p-8 border border-[color:var(--card-border)] shadow-xl transition-all duration-300">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Weekly Progress</h3>
                    <span className="text-mauve-600 dark:text-mauve-400 font-medium">
                      +12%
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[color:var(--foreground)]/60">
                        Workouts Completed
                      </span>
                      <span className="font-medium">5/5</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-mauve-500 to-purple-500 dark:from-mauve-400 dark:to-purple-400 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-mauve-50 dark:bg-mauve-900/20 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-mauve-600 dark:text-mauve-400">
                        2.5h
                      </div>
                      <div className="text-sm text-[color:var(--foreground)]/60">
                        Total Time
                      </div>
                    </div>
                    <div className="bg-mauve-50 dark:bg-mauve-900/20 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-mauve-600 dark:text-mauve-400">
                        850
                      </div>
                      <div className="text-sm text-[color:var(--foreground)]/60">
                        Calories
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-[color:var(--background)] flex items-center justify-center py-4">
        <span className="w-6/12 h-1 bg-gradient-to-r from-purple-500 via-mauve-500 to-blue-500 rounded-full opacity-100"></span>
      </div>

      {/* Testimonials Section */}
      <section className="py-20 bg-[color:var(--background)] text-[color:var(--foreground)] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Loved by Fitness Enthusiasts
            </h2>
            <p className="text-xl text-[color:var(--foreground)]/80">
              Join thousands of users who have transformed their fitness journey
              with FitTracker.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[color:var(--card-background)] rounded-2xl p-8 border border-[color:var(--card-border)] shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="w-5 h-5 text-amber-400 fill-current transition-colors duration-300"
                    />
                  ))}
                </div>
                <p className="text-[color:var(--foreground)]/80 mb-6 leading-relaxed">
                  {testimonial.content}
                </p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-[color:var(--foreground)]/60">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-[color:var(--background)] flex items-center justify-center py-4">
        <span className="w-6/12 h-1 bg-gradient-to-r from-purple-500 via-mauve-500 to-blue-500 rounded-full opacity-100"></span>
      </div>

      {/* Pricing Section */}
      <section className="py-20 bg-[color:var(--background)] text-[color:var(--foreground)] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-[color:var(--foreground)]/80">
              Start free and upgrade as you grow. No hidden fees, cancel
              anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-[color:var(--card-background)] rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular
                    ? "border-mauve-300 scale-105 shadow-xl"
                    : "border-[color:var(--card-border)] hover:border-mauve-400 shadow-lg hover:shadow-xl"
                }`}>
                {/* {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-mauve-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )} */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold">
                    {plan.price}
                    <span className="text-lg text-[color:var(--foreground)]/60">
                      {plan.period}
                    </span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <FiCheckCircle className="w-5 h-5 text-mauve-500 mr-3" />
                      <span className="text-[color:var(--foreground)]/80">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-200 cursor-pointer ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-500 via-mauve-500 to-blue-500 text-white hover:shadow-lg"
                      : "bg-gray-100 dark:bg-gray-700 text-white hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}>
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-mauve-600 via-purple-600 to-blue-600 dark:from-mauve-700 dark:via-purple-700 dark:to-blue-700 relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40 transition-colors duration-300"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Fitness?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of users who have already started their fitness
            journey with FitTracker.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login">
              <button className="px-8 py-4 bg-[color:var(--card-background)] text-[color:var(--foreground)] rounded-xl font-semibold text-lg hover:bg-[color:var(--card-border)] transition-colors duration-200">
                Start Free Trial
              </button>
            </Link>
            <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-200">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[color:var(--background)] text-[color:var(--foreground)] border-t border-[color:var(--card-border)] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-mauve-500 to-purple-500 rounded-lg flex items-center justify-center transition-colors">
                  <span className="text-white font-bold text-sm">F</span>
                </div>
                <span className="font-bold text-xl">FitTracker</span>
              </div>
              <p className="text-[color:var(--foreground)]/70">
                Transform your fitness journey with AI-powered workout plans and
                comprehensive progress tracking.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-[color:var(--foreground)]/70">
                <li>
                  <Link
                    href="#"
                    className="hover:text-mauve-500 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-mauve-500 transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-mauve-500 transition-colors">
                    API
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-[color:var(--foreground)]/70">
                <li>
                  <Link
                    href="#"
                    className="hover:text-mauve-500 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-mauve-500 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-mauve-500 transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-[color:var(--foreground)]/70">
                <li>
                  <Link
                    href="#"
                    className="hover:text-mauve-500 transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-mauve-500 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-mauve-500 transition-colors">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[color:var(--card-border)] mt-12 pt-8 text-center text-[color:var(--foreground)]/70">
            <p>&copy; 2024 FitTracker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
