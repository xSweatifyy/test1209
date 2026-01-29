import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { PageHeader } from '@/components/PageHeader';
import { FileText, Download, ExternalLink } from 'lucide-react';

const KeStazeni = () => {
  // Dokumenty ke stažení
  const documents = [
    {
      title: 'Žádosti',
      description: 'Žádost o řidičský průkaz a žádost o zkoušku',
      files: [
        { name: 'Žádost o ŘP', filename: 'Zadost_o_RP_zadost.pdf' },
        { name: 'Žádost o zkoušku', filename: 'Zadost_o_RP_zkouska.pdf' }
      ],
      type: 'multi'
    },
    {
      title: 'Zdravotní posudek',
      description: 'Lékařský posudek pro řidičské oprávnění',
      filename: 'posudek.pdf',
      type: 'single'
    }
  ];

  const externalLink = {
    title: 'Změny ve vydávání zdravotních posudků k řízení motorových vozidel pro prvožadatele o ŘO',
    url: 'https://md.gov.cz/Zivotni-situace/Novinky-2026/Zmeny-ve-vydavani-zdravotnich-posudku-k%E2%80%AFrizeni-mot',
    buttonText: 'Zde více informací'
  };

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
                <motion.div
                  key={doc.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <FileText size={28} className="text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading font-semibold text-foreground">
                        {doc.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {doc.description}
                      </p>
                    </div>
                  </div>
                  
                  {doc.type === 'multi' && doc.files && (
                    <div className="mt-4 flex flex-wrap gap-3">
                      {doc.files.map((file) => (
                        <a
                          key={file.filename}
                          href={`/assets2/${file.filename}`}
                          download
                          className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors text-sm font-medium"
                        >
                          <Download size={16} />
                          {file.name}
                        </a>
                      ))}
                    </div>
                  )}
                  
                  {doc.type === 'single' && doc.filename && (
                    <div className="mt-4">
                      <a
                        href={`/assets2/${doc.filename}`}
                        download
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors text-sm font-medium"
                      >
                        <Download size={16} />
                        Stáhnout
                      </a>
                    </div>
                  )}
                </motion.div>
              ))}

              {/* External link section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="glass-card"
              >
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <ExternalLink size={28} className="text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading font-semibold text-foreground">
                      {externalLink.title}
                    </h3>
                    <div className="mt-4">
                      <a
                        href={externalLink.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground hover:bg-accent/90 rounded-lg transition-colors text-sm font-medium"
                      >
                        <ExternalLink size={16} />
                        {externalLink.buttonText}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
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
