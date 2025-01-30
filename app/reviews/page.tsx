"use client";

import { Star, ThumbsUp, MessageCircle, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      date: "March 15, 2024",
      rating: 5,
      service: "Home Deep Cleaning",
      review: "I cannot express how impressed I am with CleanPro's service. The team was professional, thorough, and went above and beyond my expectations. My house has never looked better!",
      helpful: 24,
      responses: 2,
      image: "https://images.unsplash.com/photo-1615109398623-88346a601842?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 2,
      name: "Michael Chen",
      date: "March 12, 2024",
      rating: 5,
      service: "Office Cleaning",
      review: "CleanPro has been handling our office cleaning for the past year, and they've been exceptional. Consistent quality, reliable service, and great attention to detail. Highly recommended for any business!",
      helpful: 18,
      responses: 1,
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 3,
      name: "Emily Davis",
      date: "March 10, 2024",
      rating: 5,
      service: "Move-out Cleaning",
      review: "Used CleanPro for my move-out cleaning and they did an amazing job! Got my full deposit back thanks to their thorough work. The team was punctual and very professional.",
      helpful: 15,
      responses: 1,
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 4,
      name: "David Wilson",
      date: "March 8, 2024",
      rating: 5,
      service: "Regular Home Cleaning",
      review: "Been using CleanPro for monthly cleaning services and couldn't be happier. They're consistent, trustworthy, and always do a fantastic job. The attention to detail is impressive!",
      helpful: 12,
      responses: 3,
      image: "https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?auto=format&fit=crop&q=80&w=400"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      {/* Header */}
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Customer Reviews</h1>
        <p className="text-muted-foreground">
          See what our satisfied customers have to say about our cleaning services
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="grid gap-8 max-w-4xl mx-auto">
        {reviews.map((review) => (
          <Card key={review.id} className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img
                  src={review.image}
                  alt={`${review.service} result`}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-lg">{review.name}</h3>
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{review.date}</span>
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-secondary px-3 py-1 rounded-full text-sm">
                    {review.service}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">{review.review}</p>
                <div className="flex items-center space-x-4">
                  <Button variant="outline" size="sm">
                    <ThumbsUp className="w-4 h-4 mr-2" />
                    Helpful ({review.helpful})
                  </Button>
                  <Button variant="outline" size="sm">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Responses ({review.responses})
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <Button size="lg">Write a Review</Button>
      </div>
    </div>
  );
}