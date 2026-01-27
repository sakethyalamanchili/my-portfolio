"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ExternalLink, Clock, ArrowUpRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface MediumPost {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  thumbnail: string;
  description: string;
  categories: string[];
}

export function BlogSection() {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sakethyalamanchili"
        );
        const data = await response.json();
        if (data.status === "ok") {
          // Only take the latest 6 posts
          setPosts(data.items.slice(0, 6));
        }
      } catch (error) {
        console.error("Error fetching Medium posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const getCleanDescription = (htmlSnippet: string) => {
    const text = htmlSnippet.replace(/<[^>]*>?/gm, ''); 
    return text.slice(0, 120) + "...";
  };

  return (
    <section id="blog" ref={ref} className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm tracking-[0.2em] uppercase text-primary mb-4">
            Blog
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latest Thoughts
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Automatically synced from Medium — writing about AI, AR development, and Data Science.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {posts.map((post, index) => (
              <motion.article
                key={post.guid}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-6 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-300 h-full flex flex-col"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {post.categories[0] || "Article"}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                    {getCleanDescription(post.description)}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground mt-auto">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {Math.ceil(post.description.split(' ').length / 200)} min read
                    </span>
                    <span>{new Date(post.pubDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Button variant="outline" size="lg" className="rounded-full bg-transparent" asChild>
            <Link
              href="https://medium.com/@sakethyalamanchili"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Read all on Medium
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}