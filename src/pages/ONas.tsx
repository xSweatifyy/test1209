import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { PageHeader } from '@/components/PageHeader';
import { Users, Award, Clock, Car } from 'lucide-react';

const ONas = () => {
  const features = [
    {
      icon: Users,
      title: 'Zkušený tým',
      description: 'Profesionální instruktoři s dlouholetou praxí'
    },
    {
      icon: Award,
      title: 'Vysoká úspěšnost',
      description: 'Kvalitní příprava na zkoušky'
    },
    {
      icon: Clock,
      title: 'Flexibilita',
      description: 'Přizpůsobíme se vašemu časovému rozvrhu'
    },
    {
      icon: Car,
      title: 'Moderní vozidla',
      description: 'Výuka na bezpečných a dobře vybavených vozech'
    }
  ];

  return (
    <Layout>
      <PageHeader 
        title="O nás" 
        subtitle="Vaše autoškola v Klášterci nad Ohří a v Kadani"
      />

      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card max-w-4xl mx-auto mb-16"
          >
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
              <span className="text-primary">Autoškola</span>{' '}
              <span className="text-secondary">Müllerka</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Vítejte v Autoškole Müllerka! Jsme rodinná autoškola působící v Klášterci nad Ohří 
                a v Kadani, která se specializuje na kvalitní přípravu budoucích řidičů.
              </p>
              <p>
                Nabízíme profesionální výuku řízení motorových vozidel skupiny B s důrazem na 
                bezpečnost a praktické dovednosti. Naši zkušení instruktoři vám pomohou získat 
                jistotu za volantem a úspěšně složit řidičské zkoušky.
              </p>
              <p>
                Poskytujeme jak klasické kurzy, tak i rychlokurzy a program L17 pro mladé řidiče. 
                Individuální přístup ke každému žákovi je pro nás prioritou.
              </p>
            </div>
          </motion.div>

          {/* Features grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card text-center group hover:border-primary/50 transition-all"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 text-primary group-hover:scale-110 transition-transform">
                  <feature.icon size={28} />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ONas;
