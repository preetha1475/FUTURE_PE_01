import { motion } from "framer-motion";
import { Instagram, Camera } from "lucide-react";
import heroCafe from "@/assets/hero-cafe.jpg";
import coffeeArt from "@/assets/coffee-art.jpg";
import pastries from "@/assets/pastries.jpg";
import brunch from "@/assets/brunch.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";
import icedCoffee from "@/assets/iced-coffee.jpg";

const galleryImages = [
  { src: coffeeArt, alt: "Latte Art", size: "large" },
  { src: pastries, alt: "Fresh Pastries", size: "small" },
  { src: cafeInterior, alt: "Cozy Interior", size: "tall" },
  { src: brunch, alt: "Brunch Plate", size: "small" },
  { src: icedCoffee, alt: "Iced Coffee", size: "small" },
  { src: heroCafe, alt: "Cafe Ambiance", size: "large" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 gradient-warm">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-highlight/20 text-highlight-foreground font-body text-sm mb-4">
            <Camera className="w-4 h-4" />
            #CafeCrush
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Capture the Moment
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Every corner of Cafe Crush is designed to be Instagram-worthy. 
            Tag us in your photos for a chance to be featured!
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group rounded-2xl overflow-hidden cursor-pointer ${
                image.size === "large"
                  ? "md:col-span-2 md:row-span-1"
                  : image.size === "tall"
                  ? "row-span-2"
                  : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-2 text-primary-foreground">
                  <Instagram className="w-6 h-6" />
                  <span className="font-body text-sm">{image.alt}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-primary-foreground font-body font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <Instagram className="w-5 h-5" />
            Follow @cafecrush on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
