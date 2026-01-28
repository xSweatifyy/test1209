import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { PageHeader } from '@/components/PageHeader';
import { Phone, MapPin, Clock, Facebook, Building } from 'lucide-react';

const Kontakty = () => {
  return (
    <Layout>
      <PageHeader 
        title="Kontakty" 
        subtitle="Neváhejte nás kontaktovat pro více informací"
      />

      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card"
            >
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                <span className="text-primary">Autoškola</span>{' '}
                <span className="text-secondary">Müllerka</span>
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Nad Tunýlkem 255</p>
                    <p className="text-muted-foreground">Klášterec nad Ohří</p>
                    <p className="text-muted-foreground">431 51</p>
                  </div>
                </div>

                {/* IČO */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Building size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">IČO</p>
                    <p className="font-medium text-foreground">23685174</p>
                  </div>
                </div>

                {/* Contacts */}
                <div className="space-y-4">
                  <h3 className="font-heading font-semibold text-foreground">Ivana Müllerová</h3>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-primary" />
                    </div>
                    <a 
                      href="tel:+420608534709" 
                      className="font-medium text-foreground hover:text-primary transition-colors"
                    >
                      +420 608 534 709
                    </a>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-heading font-semibold text-foreground">Nikola Müllerová</h3>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-primary" />
                    </div>
                    <a 
                      href="tel:+420773282446" 
                      className="font-medium text-foreground hover:text-primary transition-colors"
                    >
                      +420 773 282 446
                    </a>
                  </div>
                </div>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=61585118112692"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <Facebook size={20} className="text-primary" />
                  </div>
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    Stránka na Facebooku
                  </span>
                </a>
              </div>
            </motion.div>

            {/* Lesson Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="glass-card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      Výuka probíhá
                    </h3>
                    <p className="text-primary font-medium">
                      Každé pondělí od 16:00
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  v učebně v budově školy „Zemědělka"
                </p>
                <p className="text-muted-foreground mt-2">
                  v ulici 5. května 680, 432 01 Kadaň
                </p>
              </div>

              {/* Map */}
              <div className="glass-card overflow-hidden p-0">
                <div className="aspect-video relative">
                  <iframe
                    src="https://www.google.com/maps?q=5.+Května+680,+432+01+Kadaň,+Česká+republika&output=embed"
                    className="absolute inset-0 w-full h-full border-0"
                    title="Mapa - Autoškola Müllerka"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Kontakty;
