"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Camera, ExternalLink, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const selectedPhotos = [
  { id: "3", title: "Curious Muscovy Gaze", category: "Wildlife", imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272695/IMG_0978_tztmsm.jpg" },
  { id: "2", title: "Lakeside Muscovy Duo", category: "Wildlife", imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272700/IMG_1108_xhikjl.jpg" },
  { id: "9", title: "Grazing Muscovy Close-Up", category: "Wildlife", imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272703/IMG_2081_it9gfz.jpg" },
  { id: "6", title: "Fading Floral Melancholy", category: "Nature", imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272700/IMG_1511_avz6vn.jpg" },
  { id: "8", title: "Geometric Urban Glow", category: "Urban", imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272703/IMG_0283_tkxvrf.jpg" },
  { id: "18", title: "High Altitude Howdy", category: "Travel", imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275804/IMG_4017_jfvmqv.jpg" },
  { id: "13", title: "Mail Center Solitude", category: "Urban", imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272704/IMG_0252_kxnh8s.jpg" },
  { id: "17", title: "Nocturnal Fender Lines", category: "Automotive", imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275804/IMG_3884_zcbo9q.jpg" },
  { id: "23", title: "Blue Hour Minimalist Lamp", category: "Urban", imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275865/IMG_3943_g2gmok.jpg" },
  { id: "19", title: "Twilight Transit Motion", category: "Abstract", imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766275804/IMG_3890_v5e2pj.jpg" },
  { id: "27", title: "Iridescent Muscovy Interaction", category: "Wildlife", imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766276529/IMG_3893_dgxnjn.jpg" },
  { id: "14", title: "Flight Over Dark Waters", category: "Wildlife", imageUrl: "https://res.cloudinary.com/dlarshbqq/image/upload/v1766272704/IMG_1869_cfjiwq.jpg" },
];

export function PhotographySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="photography" ref={ref} className="py-24 md:py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-sm tracking-[0.2em] uppercase text-primary mb-4">Gallery</h2>
          <p className="text-3xl md:text-4xl font-bold text-foreground mb-4">Visual Stories</p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated collection of cinematic moments captured on the Canon EOS R50.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 mb-16">
          {selectedPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="break-inside-avoid"
            >
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-secondary shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-primary/10">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Subtle Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <div>
                    <h3 className="text-white text-sm font-bold leading-tight">{photo.title}</h3>
                    <p className="text-white/60 text-[10px] uppercase tracking-widest mt-1">{photo.category}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Photography Details Footer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          className="p-8 rounded-3xl bg-card border border-border flex flex-col md:flex-row items-center gap-8"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
            <Camera className="w-8 h-8 text-primary" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2">Technical Specs</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              All shots are uncropped and captured using a <strong>Canon EOS R50</strong>. 
              This gallery highlights the diverse wildlife and urban textures found across 
              Delray Beach and Boca Raton, Florida.
            </p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="rounded-full gap-2" asChild>
              <Link href="https://www.instagram.com/sakethyalamanchili" target="_blank">
                <Instagram className="w-4 h-4" /> Instagram
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}