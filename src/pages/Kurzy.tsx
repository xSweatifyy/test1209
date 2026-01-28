import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { PageHeader } from '@/components/PageHeader';
import { Check, ArrowRight, Clock, CreditCard } from 'lucide-react';

const Kurzy = () => {
  const mainCourses = [
    {
      title: 'B - Klasický',
      subtitle: '(Manuální převodovka)',
      price: '17 000 Kč',
      features: [
        'Délka 2-3 měsíce',
        'Po domluvě lze hradit na splátky'
      ],
      highlighted: false
    },
    {
      title: 'B - Rychlokurz',
      subtitle: '(Manuální převodovka)',
      price: '20 000 Kč',
      features: [
        'Délka cca 1 měsíc',
        'Po domluvě lze hradit na splátky'
      ],
      highlighted: true,
      badge: 'Oblíbený'
    },
    {
      title: 'L17',
      subtitle: '',
      price: '17 000 Kč',
      features: [
        'Po domluvě lze hradit na splátky',
        'Více informací o L17'
      ],
      highlighted: true,
      badge: 'Oblíbený',
      link: '/l17'
    }
  ];

  const additionalServices = [
    {
      title: 'Doplňující výuka po zkoušce',
      description: 'a 2 neúspěšných pokusech',
      price: '11 x 350 Kč = 3 850 Kč'
    },
    {
      title: 'Doplňující výcvik po zkoušce',
      description: 'a 2 neúspěšných jízdách',
      price: '28 x 450 Kč = 12 600 Kč'
    },
    {
      title: 'Opravná zkouška z jízdy',
      description: '',
      price: '45 minut = 500 Kč'
    },
    {
      title: 'Školení začínajících řidičů',
      description: '(Zákon č. 361/2000 Sb.)',
      price: '5 000 Kč'
    },
    {
      title: 'Doplňující kondiční jízdy',
      description: '',
      price: '45 minut = 400 Kč'
    },
    {
      title: 'Přezkoušení pro vrácení',
      description: 'řidičského průkazu',
      price: '4 000 Kč'
    }
  ];

  return (
    <Layout>
      <PageHeader 
        title="Kurzy v autoškole" 
        subtitle="Vyberte si kurz, který vám vyhovuje"
      />

      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          {/* Main Courses */}
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto mb-20">
            {mainCourses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`price-card ${course.highlighted ? 'ring-2 ring-primary' : ''}`}
              >
                {course.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-traffic-green text-white text-xs font-bold px-4 py-1.5 rounded-full z-10 shadow-lg">
                    {course.badge}
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {course.title}
                  </h3>
                  {course.subtitle && (
                    <p className="text-muted-foreground text-sm mt-1">
                      {course.subtitle}
                    </p>
                  )}
                </div>

                <div className="text-center mb-6">
                  <span className="font-heading text-3xl font-bold text-primary">
                    {course.price}
                  </span>
                </div>

                <ul className="space-y-3 mb-6">
                  {course.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <Check size={18} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  {course.link && (
                    <Link 
                      to={course.link}
                      className="flex items-center justify-center gap-2 text-primary hover:text-accent transition-colors text-sm"
                    >
                      Více informací o L17
                      <ArrowRight size={16} />
                    </Link>
                  )}
                  <Link 
                    to="/online-prihlaska"
                    className="btn-hero w-full flex items-center justify-center gap-2 text-sm py-3"
                  >
                    <span className="relative z-10">Přihláška On-line</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="section-title">
              <span>Ostatní</span>
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="glass-card flex items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <CreditCard size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">
                        {service.title}
                      </h4>
                      {service.description && (
                        <p className="text-muted-foreground text-sm">
                          {service.description}
                        </p>
                      )}
                    </div>
                  </div>
                  <span className="font-heading font-semibold text-primary whitespace-nowrap">
                    {service.price}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Kurzy;
