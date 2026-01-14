import { motion } from "framer-motion";
import { Heart, Award, Users, Sparkles } from "lucide-react";
import cafeInterior from "@/assets/cafe-interior.jpg";

const features = [
  {
    icon: Heart,
    title: "Made with Love",
    desc: "Every drink and dish is crafted with genuine care and passion",
  },
  {
    icon: Award,
    title: "Premium Quality",
    desc: "Ethically sourced beans and locally-sourced fresh ingredients",
  },
  {
    icon: Users,
    title: "Community First",
    desc: "A welcoming space for friends, families, and first dates",
  },
  {
    icon: Sparkles,
    title: "Unique Experience",
    desc: "Instagram-worthy moments in every corner of our cafe",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-warm">
              <img
                src={cafeInterior}
                alt="Cafe Crush Interior"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-card rounded-2xl p-6 shadow-warm max-w-xs"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-highlight/30 flex items-center justify-center">
                  <Heart className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-primary">
                    Est. 2019
                  </div>
                  <div className="font-body text-sm text-muted-foreground">
                    Serving love in every cup
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground font-body text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              Our Story
            </span>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Where Coffee Meets{" "}
              <span className="text-gradient">Romance</span>
            </h2>
            
            <p className="font-body text-muted-foreground mb-6 leading-relaxed">
              Cafe Crush was born from a simple belief: that the perfect cup of coffee 
              has the power to create magical moments. Founded by two coffee enthusiasts 
              with a love for creating warm, inviting spaces, we set out to build more 
              than just a cafe—we created a destination for connection.
            </p>
            
            <p className="font-body text-muted-foreground mb-10 leading-relaxed">
              Every detail, from our signature rose-infused lattes to our cozy velvet 
              seating, is designed to make you feel special. Whether you are on a first 
              date, catching up with friends, or enjoying a quiet moment alone, 
              Cafe Crush is your home away from home.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-highlight/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-primary mb-1">
                      {feature.title}
                    </h4>
                    <p className="font-body text-sm text-muted-foreground">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
