import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { ArrowRight, Car, Calendar, MapPin } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Link to="/online-prihlaska" className="btn-hero inline-flex items-center gap-2">
              <span className="relative z-10">Přihláška On-line</span>
              <ArrowRight size={20} className="relative z-10" />
            </Link>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 font-heading text-4xl font-bold text-secondary md:text-5xl lg:text-6xl"
          >
            Začátek kurzu 1. 1. 2026
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12 text-xl text-primary md:text-2xl font-medium"
          >
            Vaše autoškola v Klášterci nad Ohří a v Kadani
          </motion.h3>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto mt-16"
          >
            <div className="glass-card text-center group hover:border-primary/50 transition-all">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 text-primary group-hover:scale-110 transition-transform">
                <Car size={28} />
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-2">Kvalitní výuka</h4>
              <p className="text-muted-foreground text-sm">Profesionální přístup a moderní vozidla</p>
            </div>

            <div className="glass-card text-center group hover:border-primary/50 transition-all">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 text-primary group-hover:scale-110 transition-transform">
                <Calendar size={28} />
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-2">Flexibilní termíny</h4>
              <p className="text-muted-foreground text-sm">Přizpůsobíme se vašim potřebám</p>
            </div>

            <div className="glass-card text-center group hover:border-primary/50 transition-all">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 text-primary group-hover:scale-110 transition-transform">
                <MapPin size={28} />
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-2">Dvě lokace</h4>
              <p className="text-muted-foreground text-sm">Klášterec nad Ohří a Kadaň</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card max-w-3xl mx-auto text-center"
          >
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 md:text-3xl">
              Připraveni na získání řidičského průkazu?
            </h3>
            <p className="text-muted-foreground mb-6">
              Přihlaste se ještě dnes a začněte svou cestu k řidičskému oprávnění.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/online-prihlaska" className="btn-hero">
                <span className="relative z-10">Přihlásit se online</span>
              </Link>
              <Link 
                to="/kurzy" 
                className="px-8 py-4 rounded-lg border border-primary/50 text-primary font-semibold hover:bg-primary/10 transition-all"
              >
                Zobrazit kurzy
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
