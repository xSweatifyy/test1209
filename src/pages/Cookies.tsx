import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { PageHeader } from '@/components/PageHeader';
import { Cookie, Shield, BarChart3, Settings, Info } from 'lucide-react';

const Cookies = () => {
  const cookieTypes = [
    {
      icon: Settings,
      title: 'Nezbytné cookies',
      description: 'Tyto cookies jsou nezbytné pro správné fungování webových stránek. Bez nich by stránky nefungovaly správně.',
      examples: [
        'Zapamatování souhlasu s cookies',
        'Uchovávání stavu přihlášení',
        'Základní funkce webu'
      ],
      required: true
    },
    {
      icon: BarChart3,
      title: 'Analytické cookies',
      description: 'Pomáhají nám pochopit, jak návštěvníci používají naše stránky. Všechna data jsou anonymizována.',
      examples: [
        'Počet návštěv stránek',
        'Délka návštěvy',
        'Použitá zařízení a prohlížeče'
      ],
      required: false
    },
    {
      icon: Shield,
      title: 'Bezpečnostní cookies',
      description: 'Zajišťují bezpečnost našich stránek a ochranu před škodlivými útoky.',
      examples: [
        'Ochrana proti podvodům',
        'Ověření identity',
        'Bezpečnostní tokeny'
      ],
      required: true
    }
  ];

  const dataCollected = [
    {
      category: 'Údaje o zařízení',
      items: ['Typ prohlížeče', 'Operační systém', 'Rozlišení obrazovky', 'Jazyk prohlížeče']
    },
    {
      category: 'Údaje o návštěvě',
      items: ['Navštívené stránky', 'Čas strávený na stránce', 'Odkud jste přišli', 'Datum a čas návštěvy']
    },
    {
      category: 'Údaje z formulářů',
      items: ['Jméno a příjmení (při registraci)', 'E-mailová adresa', 'Telefonní číslo', 'Údaje z přihlášky']
    }
  ];

  return (
    <Layout>
      <PageHeader 
        title="Cookies a ochrana soukromí" 
        subtitle="Informace o zpracování vašich údajů"
      />

      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card"
            >
              <div className="flex items-start gap-4">
                <div className="h-14 w-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Cookie size={28} className="text-primary" />
                </div>
                <div>
                  <h2 className="font-heading text-xl font-semibold text-foreground mb-2">
                    Co jsou cookies?
                  </h2>
                  <p className="text-muted-foreground">
                    Cookies jsou malé textové soubory, které se ukládají do vašeho prohlížeče při návštěvě webových stránek. 
                    Pomáhají nám zapamatovat si vaše preference a zlepšit váš zážitek z používání našeho webu. 
                    Cookies samy o sobě neshromažďují žádné osobní údaje.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Cookie Types */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-heading text-2xl font-bold text-foreground mb-6"
              >
                Typy cookies, které používáme
              </motion.h2>

              <div className="space-y-4">
                {cookieTypes.map((type, index) => (
                  <motion.div
                    key={type.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card"
                  >
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <type.icon size={24} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-heading font-semibold text-foreground">
                            {type.title}
                          </h3>
                          {type.required && (
                            <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                              Nezbytné
                            </span>
                          )}
                        </div>
                        <p className="text-muted-foreground text-sm mb-3">
                          {type.description}
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {type.examples.map((example) => (
                            <li key={example} className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Data Collected */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-heading text-2xl font-bold text-foreground mb-6"
              >
                Jaké údaje shromažďujeme
              </motion.h2>

              <div className="grid gap-4 md:grid-cols-3">
                {dataCollected.map((data, index) => (
                  <motion.div
                    key={data.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card"
                  >
                    <h3 className="font-heading font-semibold text-foreground mb-3">
                      {data.category}
                    </h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      {data.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Your Rights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card"
            >
              <div className="flex items-start gap-4">
                <div className="h-14 w-14 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Info size={28} className="text-accent" />
                </div>
                <div>
                  <h2 className="font-heading text-xl font-semibold text-foreground mb-2">
                    Vaše práva
                  </h2>
                  <div className="text-muted-foreground space-y-2">
                    <p>Máte právo:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Odmítnout použití cookies (kromě nezbytných)</li>
                      <li>Požádat o výmaz vašich osobních údajů</li>
                      <li>Získat kopii údajů, které o vás vedeme</li>
                      <li>Odvolat souhlas s cookies kdykoliv</li>
                      <li>Smazat cookies ve svém prohlížeči</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* How to manage cookies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card"
            >
              <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                Jak spravovat cookies
              </h2>
              <div className="text-muted-foreground space-y-3">
                <p>
                  Cookies můžete spravovat přímo v nastavení svého prohlížeče. Většina prohlížečů umožňuje:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Zobrazit všechny uložené cookies</li>
                  <li>Smazat jednotlivé nebo všechny cookies</li>
                  <li>Blokovat cookies třetích stran</li>
                  <li>Blokovat všechny cookies</li>
                  <li>Nastavit upozornění při ukládání cookies</li>
                </ul>
                <p className="text-sm mt-4">
                  <strong>Upozornění:</strong> Blokování všech cookies může ovlivnit funkčnost některých částí našich stránek.
                </p>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card text-center"
            >
              <p className="text-muted-foreground">
                Máte-li dotazy ohledně zpracování vašich údajů nebo cookies, neváhejte nás kontaktovat.
              </p>
              <a 
                href="tel:+420608534709"
                className="inline-flex items-center gap-2 mt-4 text-primary hover:text-accent transition-colors font-medium"
              >
                Zavolejte nám: +420 608 534 709
              </a>
            </motion.div>

            {/* Last updated */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-muted-foreground/60 text-sm"
            >
              Naposledy aktualizováno: {new Date().toLocaleDateString('cs-CZ')}
            </motion.p>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cookies;
