import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { PageHeader } from '@/components/PageHeader';
import { FileText, Download } from 'lucide-react';

const KeStazeni = () => {
  // Dokumenty ke stažení - později budou nahrazeny soubory z Assets2
  const documents = [
    {
      title: 'Dokument 1',
      description: 'Popis dokumentu 1',
      filename: 'dokument-1.pdf'
    },
    {
      title: 'Dokument 2',
      description: 'Popis dokumentu 2',
      filename: 'dokument-2.pdf'
    },
    {
      title: 'Dokument 3',
      description: 'Popis dokumentu 3',
      filename: 'dokument-3.pdf'
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
                  href={`/assets2/${doc.filename}`}
                  download
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
