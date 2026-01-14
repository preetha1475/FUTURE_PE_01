import { useState } from "react";
import { motion } from "framer-motion";
import { Coffee, Cake, Salad, IceCream, Heart, Star } from "lucide-react";
import coffeeArt from "@/assets/coffee-art.jpg";
import pastries from "@/assets/pastries.jpg";
import brunch from "@/assets/brunch.jpg";
import icedCoffee from "@/assets/iced-coffee.jpg";

const categories = [
  { id: "coffee", name: "Coffee", icon: Coffee },
  { id: "pastries", name: "Pastries", icon: Cake },
  { id: "brunch", name: "Brunch", icon: Salad },
  { id: "cold", name: "Cold Drinks", icon: IceCream },
];

const menuItems = {
  coffee: [
    { name: "Crush Signature Latte", price: "$5.50", desc: "Our secret recipe with a hint of rose and vanilla", popular: true, image: coffeeArt },
    { name: "Espresso Amore", price: "$3.50", desc: "Double shot of pure Italian love" },
    { name: "Caramel Dream", price: "$5.00", desc: "Silky caramel with Ethiopian beans" },
    { name: "Mocha Romance", price: "$5.50", desc: "Rich chocolate meets bold espresso" },
    { name: "Oat Milk Latte", price: "$5.00", desc: "Creamy oat milk with smooth espresso" },
    { name: "Flat White", price: "$4.50", desc: "Velvety microfoam, perfect balance" },
  ],
  pastries: [
    { name: "Butter Croissant", price: "$4.00", desc: "Flaky, golden, baked fresh daily", popular: true, image: pastries },
    { name: "Rose Almond Tart", price: "$6.00", desc: "Delicate rose cream with toasted almonds" },
    { name: "Chocolate Éclair", price: "$5.00", desc: "Silky chocolate ganache filling" },
    { name: "Berry Danish", price: "$4.50", desc: "Mixed berries with cream cheese" },
    { name: "Cinnamon Roll", price: "$4.50", desc: "Warm, gooey, with cream cheese frosting" },
    { name: "Matcha Mochi", price: "$3.50", desc: "Chewy Japanese-style treat" },
  ],
  brunch: [
    { name: "Avocado Toast Supreme", price: "$12.00", desc: "Sourdough, poached eggs, microgreens", popular: true, image: brunch },
    { name: "Crush Breakfast Bowl", price: "$14.00", desc: "Quinoa, eggs, avocado, cherry tomatoes" },
    { name: "Smoked Salmon Bagel", price: "$13.00", desc: "Cream cheese, capers, red onion" },
    { name: "French Toast Royale", price: "$11.00", desc: "Brioche, berries, maple syrup" },
    { name: "Mediterranean Plate", price: "$12.00", desc: "Hummus, falafel, pita, fresh veggies" },
    { name: "Açaí Bowl", price: "$11.00", desc: "Açaí, granola, fresh fruits, honey" },
  ],
  cold: [
    { name: "Iced Rose Latte", price: "$6.00", desc: "Our signature with cold foam", popular: true, image: icedCoffee },
    { name: "Cold Brew Classic", price: "$4.50", desc: "18-hour steeped perfection" },
    { name: "Matcha Crush", price: "$5.50", desc: "Ceremonial grade matcha, oat milk" },
    { name: "Strawberry Refresher", price: "$5.00", desc: "Fresh strawberries, mint, sparkling" },
    { name: "Lavender Lemonade", price: "$4.50", desc: "House-made with real lavender" },
    { name: "Chai Frappe", price: "$5.50", desc: "Spiced chai, blended with ice" },
  ],
};

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("coffee");

  return (
    <section id="menu" className="py-24 gradient-warm">
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
            <Star className="w-4 h-4" />
            Crafted with Love
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Menu
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Every item on our menu is crafted with passion and the finest ingredients. 
            Discover flavors that will make your heart skip a beat.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-body text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-warm"
                  : "bg-card text-foreground hover:bg-secondary shadow-card"
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover-lift"
            >
              {item.image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
              )}
              <div className={`p-6 ${item.image ? "-mt-12 relative z-10" : ""}`}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-xl font-semibold text-primary">
                        {item.name}
                      </h3>
                      {item.popular && (
                        <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-accent/20 text-accent text-xs">
                          <Heart className="w-3 h-3" />
                          Popular
                        </span>
                      )}
                    </div>
                    <p className="font-body text-sm text-muted-foreground mt-2">
                      {item.desc}
                    </p>
                  </div>
                  <span className="font-display text-lg font-semibold text-accent whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
