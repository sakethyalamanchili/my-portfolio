"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Send,
  Ghost,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "syalamanchil2025@fau.edu",
    href: "mailto:syalamanchil2025@fau.edu",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "sakethyalamanchili",
    href: "https://www.linkedin.com/in/sakethyalamanchili/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "sakethyalamanchili",
    href: "https://github.com/sakethyalamanchili",
  },
  {
    icon: Ghost,
    label: "Snapchat",
    value: "saketh05",
    href: "https://www.snapchat.com/add/saketh05",
  },
];

const quickLinks = [
  {
    label: "Medium",
    href: "https://medium.com/@sakethyalamanchili",
  },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1cwJz2ClHNJeBsl0sy3mzU_avh4LtTyXU/view?usp=drive_link",
  },
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const hireEmail =
    "mailto:syalamanchil2025@fau.edu?subject=Let's%20Connect&body=Hello%20Saketh,%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.";

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm tracking-[0.2em] uppercase text-primary mb-4">
            Contact
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {"Let's"} Build Something Amazing Together
          </p>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            {"I'm"} always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-center gap-2 text-muted-foreground mb-12"
        >
          <MapPin className="w-4 h-4" />
          <span>Delray Beach, Florida | Open to Remote & Relocation</span>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-4 mb-12"
        >
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Link
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground">
                      {contact.label}
                    </div>
                    <div className="text-foreground font-medium group-hover:text-primary transition-colors">
                      {contact.value}
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {quickLinks.map((link) => (
            <Button
              key={link.label}
              variant="outline"
              size="sm"
              className="rounded-full bg-transparent"
              asChild
            >
              <Link href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
                <ExternalLink className="w-3 h-3 ml-2" />
              </Link>
            </Button>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Button size="lg" className="rounded-full px-8" asChild>
            <Link href={hireEmail}>
              <Send className="w-4 h-4 mr-2" />
              Get In Touch
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
