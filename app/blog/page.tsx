"use client";

import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Blog() {
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
      excerpt: "Learn why professional deep cleaning services are essential for maintaining a healthy and comfortable living environment...",
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
      excerpt: "Discover how a clean office environment can boost productivity and employee well-being...",
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
    <div className="container mx-auto px-4 py-20">
      {/* Header */}
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Cleaning Tips & Insights</h1>
        <p className="text-muted-foreground">
          Expert advice, cleaning guides, and industry insights to help you maintain a cleaner space
        </p>
      </div>

      {/* Featured Post */}
      <Card className="mb-12 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative h-64 md:h-auto">
            <img
              src={blogPosts[0].image}
              alt={blogPosts[0].title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="p-6 flex flex-col justify-center">
            <div className="mb-4">
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                {blogPosts[0].category}
              </span>
            </div>
            <h2 className="text-2xl font-bold mb-4">{blogPosts[0].title}</h2>
            <p className="text-muted-foreground mb-4">{blogPosts[0].excerpt}</p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {blogPosts[0].date}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {blogPosts[0].readTime}
              </div>
            </div>
            <Button className="self-start">
              Read More
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </Card>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.slice(1).map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <div className="relative h-48">
              <img
                src={post.image}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="mb-4">
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                  {post.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {post.readTime}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <Button variant="outline" size="lg">
          Load More Articles
        </Button>
      </div>
    </div>
  );
}