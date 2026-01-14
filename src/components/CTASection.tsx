import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail, Heart, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="visit" className="py-24 gradient-coffee relative overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -top-32 -right-32 w-64 h-64 border border-primary-foreground/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-48 -left-48 w-96 h-96 border border-primary-foreground/10 rounded-full"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground font-body text-sm mb-6">
              <Heart className="w-4 h-4" />
              Visit Us Today
            </span>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
              Ready to Fall in Love?
            </h2>
            
            <p className="font-body text-primary-foreground/80 mb-10 leading-relaxed text-lg">
              Whether you are craving our signature rose latte, looking for the perfect 
              brunch spot, or need a cozy space for your next date — Cafe Crush is 
              waiting to welcome you with open arms and warm cups.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="blush"
                size="xl"
                className="gap-2"
              >
                <Phone className="w-5 h-5" />
                Call to Reserve
              </Button>
              <Button
                variant="heroOutline"
                size="xl"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Get Directions
              </Button>
            </div>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Location Card */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-primary-foreground mb-2">
                    Find Us
                  </h4>
                  <p className="font-body text-primary-foreground/80">
                    123 Love Lane, Downtown<br />
                    San Francisco, CA 94102
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-primary-foreground mb-2">
                    Opening Hours
                  </h4>
                  <div className="font-body text-primary-foreground/80 space-y-1">
                    <p>Mon - Fri: 7:00 AM - 9:00 PM</p>
                    <p>Sat - Sun: 8:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-primary-foreground mb-2">
                    Get in Touch
                  </h4>
                  <div className="font-body text-primary-foreground/80 space-y-1">
                    <p>hello@cafecrush.com</p>
                    <p>+1 (415) 555-LOVE</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Special Offer Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-primary-foreground/10 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Coffee className="w-6 h-6 text-primary-foreground" />
            <span className="font-body text-primary-foreground/80 text-sm uppercase tracking-wider">
              Special Offer
            </span>
            <Coffee className="w-6 h-6 text-primary-foreground" />
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
            Your First Coffee is On Us! ☕💕
          </h3>
          <p className="font-body text-primary-foreground/80 max-w-xl mx-auto mb-6">
            Sign up for our newsletter and get a complimentary signature drink on your first visit. 
            Because everyone deserves a little love at first sip.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 font-body focus:outline-none focus:border-primary-foreground/40"
            />
            <Button variant="blush" size="lg">
              Get Free Coffee
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
