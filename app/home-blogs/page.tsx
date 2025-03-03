"use client";

import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image"; 
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Blog() {
  const router = useRouter();

  const blogPosts = [
    {
      id: 1,
      title: "10 Tips for Maintaining a Clean Home Year-Round",
      excerpt: "Discover practical tips and habits that will help you keep your home clean and organized throughout the year...",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Home Cleaning",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 2,
      title: "The Benefits of Professional Deep Cleaning Services",
      excerpt: "Learn why professional deep cleaning services are essential for maintaining a healthy living environment...",
      date: "March 12, 2024",
      readTime: "4 min read",
      category: "Professional Cleaning",
      image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      title: "Eco-Friendly Cleaning: A Guide to Sustainable Practices",
      excerpt: "Explore environmentally conscious cleaning methods and products that are both effective and sustainable...",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Green Cleaning",
      image: "https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 4,
      title: "Office Cleaning: Creating a Productive Workspace",
      excerpt: "Discover how a clean office environment can boost productivity well-being...",
      date: "March 8, 2024",
      readTime: "4 min read",
      category: "Commercial Cleaning",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 5,
      title: "Spring Cleaning Checklist: A Complete Guide",
      excerpt: "Get ready for spring with our comprehensive cleaning checklist and expert tips...",
      date: "March 5, 2024",
      readTime: "7 min read",
      category: "Seasonal Cleaning",
      image: "https://images.unsplash.com/photo-1613323593608-abc90fec84ff?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 6,
      title: "The Ultimate Guide to Move-In/Move-Out Cleaning",
      excerpt: "Everything you need to know about preparing your home for moving in or out...",
      date: "March 3, 2024",
      readTime: "5 min read",
      category: "Specialized Cleaning",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=400",
    },
  ];

  return (
    <div className=" px-4 pt-10">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4 text-purple-700">Cleaning Tips & Insights</h1>
        <p className="text-gray-800">
          Expert advice, cleaning guides, and industry insights to help you maintain a cleaner space
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="overflow-hidden group text-black">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-purple-700 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Button
                  variant="outline"
                  className="w-full group bg-purple-700 hover:bg-purple-800 text-white hover:text-white"
                  onClick={() => router.push(`/blog/${post.id}`)}
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
