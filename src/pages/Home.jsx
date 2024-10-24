import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Book,
  GraduationCap,
  Award,
  FileCheck,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <section id="home" className="py-20 relative">
        {/* <img
          src="/banner.jpg"
          alt="Banner Image"
          className="absolute h-full w-full object-cover inset-0 z-0 overflow-hidden"
        /> */}
        <div className="absolute h-full w-full object-cover inset-0 z-0 overflow-hidden dotted-bg opacity-20"></div>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 mb-10 md:mb-0"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
                Trusted And Professional
                <br />
                Education Provider
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Empowering futures through quality education
              </p>
              <Button size="lg">Get Started</Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 flex justify-center"
            >
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-background p-4 rounded-lg shadow-lg">
                  <img
                    src="/zakaria.webp"
                    alt="Zakaria"
                    className="w-36 h-36 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold text-foreground">
                    Zakaria
                  </h3>
                  <p className="text-primary">Program Director</p>
                </div>
                <div className="bg-background p-4 rounded-lg shadow-lg">
                  <img
                    src="/tehreem.webp"
                    alt="Tehreem"
                    className="w-36 h-36 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold text-foreground">
                    Tehreem
                  </h3>
                  <p className="text-primary">Q.A Director</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Short Term Courses",
                icon: Book,
                image: "/services/short.webp",
              },
              {
                title: "Graduate Courses",
                icon: GraduationCap,
                image: "/services/graduate.webp",
              },
              {
                title: "Diploma Courses",
                icon: Award,
                image: "/services/diploma.webp",
              },
              {
                title: "Certification Courses",
                icon: FileCheck,
                image: "/services/certificate.webp",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary/5 rounded hover:shadow-lg transition-shadow overflow-hidden"
              >
                {/* Service Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full aspect-square object-cover"
                />

                <div className=" p-6">
                  {/* Service Icon */}
                  {/* <service.icon className="w-12 h-12 text-primary mb-4" /> */}

                  {/* Service Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-muted-foreground">
                    Comprehensive programs designed to enhance your skills and
                    knowledge.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="about-us" className="py-12">
        <div className="bg-primary/5">
          <div className="container mx-auto px-6">
            {/* Left Side: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 items-center"
            >
              <div className="py-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  About Us
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Welcome to TZ Education Provider, where we believe in
                  empowering individuals through knowledge and skill
                  development. Our mission is to offer high-quality, accessible
                  education that equips learners with the tools they need to
                  succeed in today's competitive world.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src="/about2.png" // Replace with your image path
                  alt="About Us"
                  className="object-cover h-full max-w-72"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="contact-us" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Mail,
                title: "Email",
                content: "qadirzakaria@gmail.com",
              },
              { icon: Phone, title: "Phone", content: "0435599266" },
              {
                icon: MapPin,
                title: "Location",
                content: "Sydney, Australia",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary/5 p-6 rounded hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <item.icon className="w-6 h-6 text-primary mr-2" />
                  <h3 className="text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                </div>
                <p className="text-muted-foreground">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
