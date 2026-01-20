import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { PageHeader } from '@/components/PageHeader';
import { FileText, Download, ExternalLink } from 'lucide-react';

const KeStazeni = () => {
  const documents = [
    {
      title: 'Žádost o přijetí k výuce a výcviku',
      description: 'Formulář pro přihlášení do autoškoly',
      url: 'https://www.autoskola-mullerka.cz/docs/zadost-o-prijeti.pdf'
    },
    {
      title: 'Lékařský posudek o zdravotní způsobilosti',
      description: 'Formulář pro lékaře',
      url: 'https://www.autoskola-mullerka.cz/docs/lekarsky-posudek.pdf'
    },
    {
      title: 'Čestné prohlášení zákonného zástupce',
      description: 'Pro žadatele mladší 18 let',
      url: 'https://www.autoskola-mullerka.cz/docs/cestne-prohlaseni.pdf'
    },
    {
      title: 'Souhlas zákonného zástupce',
      description: 'Souhlas pro nezletilé žadatele',
      url: 'https://www.autoskola-mullerka.cz/docs/souhlas-zakonneho-zastupce.pdf'
    },
    {
      title: 'Žádost o řidičské oprávnění',
      description: 'Formulář pro úřad',
      url: 'https://www.autoskola-mullerka.cz/docs/zadost-ridicske-opravneni.pdf'
    }
  ];

  return (
    <Layout>
      <PageHeader 
        title="Ke stažení" 
        subtitle="Všechny potřebné dokumenty a formuláře"
      />

      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {documents.map((doc, index) => (
                <motion.a
                  key={doc.title}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card flex items-center gap-4 group hover:border-primary/50 transition-all cursor-pointer"
                >
                  <div className="h-14 w-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <FileText size={28} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {doc.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <Download size={20} />
                    <ExternalLink size={16} className="opacity-50" />
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card mt-12 text-center"
            >
              <p className="text-muted-foreground">
                Pokud máte problém se stažením dokumentů nebo potřebujete pomoc s vyplněním, 
                neváhejte nás kontaktovat.
              </p>
              <a 
                href="tel:+420608534709"
                className="inline-flex items-center gap-2 mt-4 text-primary hover:text-accent transition-colors font-medium"
              >
                Zavolejte nám: +420 608 534 709
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default KeStazeni;
