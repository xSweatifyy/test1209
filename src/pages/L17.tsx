import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { PageHeader } from '@/components/PageHeader';
import { AlertTriangle, BookOpen, Car as CarIcon, UserCheck, ArrowRight } from 'lucide-react';

const L17 = () => {
  const trainingComponents = [
    { icon: BookOpen, label: '1 hodina teorie' },
    { icon: CarIcon, label: '3 hodiny praktické jízdy' },
    { icon: UserCheck, label: '1 hodina vyhodnocení chování řidiče' }
  ];

  return (
    <Layout>
      <PageHeader 
        title="L17 - Řízení s mentorem" 
        subtitle="Program L17 umožňuje mladým uchazečům získat zkušenosti s řízením vozidla ještě před dosažením 18 let."
      />

      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          {/* Main Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card max-w-4xl mx-auto mb-12"
          >
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              Řidičský průkaz „na zkoušku"
            </h2>
            <p className="text-muted-foreground">
              Od 1. 1. 2024 je každý řidič ve lhůtě 2 let od udělení řidičského oprávnění sledován, 
              zda nespáchal přestupek nebo trestný čin, za který mu bylo v registru řidičů zaznamenáno 6 bodů.
            </p>
          </motion.div>

          {/* Warning */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card max-w-4xl mx-auto mb-12 border-l-4 border-l-traffic-orange"
          >
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-lg bg-traffic-orange/20 flex items-center justify-center flex-shrink-0">
                <AlertTriangle size={24} className="text-traffic-orange" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-2">POZOR!</h3>
                <p className="text-muted-foreground">
                  Podle dikce zákona se následující podmínky vztahují i na ty řidiče, 
                  kteří mají ke dni 1. 1. 2024 udělené řidičské oprávnění méně než 2 roky.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Consequences */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card max-w-4xl mx-auto mb-12"
          >
            <p className="text-muted-foreground mb-6">
              Pokud je začínajícímu řidiči v registru řidičů zaznamenán takový přestupek, 
              za který je mu zaznamenáno 6 bodů, potom je registrem řidičů vyzván k tomu, aby absolvoval:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-foreground">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary text-sm font-bold">1</span>
                </div>
                Dopravně psychologický pohovor u dopravního psychologa
              </li>
              <li className="flex items-start gap-3 text-foreground">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary text-sm font-bold">2</span>
                </div>
                Školení začínajících řidičů v autoškole
              </li>
            </ul>
          </motion.div>

          {/* Training Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card max-w-4xl mx-auto mb-12"
          >
            <h3 className="font-heading text-xl font-bold text-foreground mb-4">
              Školení začínajících řidičů v autoškole
            </h3>
            <p className="text-primary font-semibold mb-6">
              Je v rozsahu 5 x 45 minut!
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {trainingComponents.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center text-center p-4 rounded-lg bg-muted/50"
                >
                  <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center mb-3">
                    <item.icon size={24} className="text-primary" />
                  </div>
                  <span className="text-muted-foreground text-sm">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card max-w-4xl mx-auto mb-12"
          >
            <h3 className="font-heading text-xl font-bold text-foreground mb-4">
              Požadované dokumenty
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Účastník školení začínajících řidičů předloží provozovateli autoškoly 
                výpis svých údajů z registru řidičů, který není starší než 30 dní.
              </p>
              <p>
                Do 3 měsíců od doručení výzvy musí na registru řidičů předložit potvrzení 
                o splnění těchto dvou povinností. Jinak v souvislosti s přestupkem, za který 
                je zaznamenáno 6 bodů, začínající řidič pozbyde řidičské oprávnění z důvodu 
                zákazu činnosti, potom musí výše uvedené dvě povinnosti splnit pro jeho vrácení.
              </p>
              <p className="text-sm italic">
                Podrobnosti jsou uvedeny v zákoně č. 361/2000 Sb., o silničním provozu v § 102 a dalších.
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link to="/online-prihlaska" className="btn-hero inline-flex items-center gap-2">
              <span className="relative z-10">Přihlásit se na L17</span>
              <ArrowRight size={20} className="relative z-10" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default L17;
