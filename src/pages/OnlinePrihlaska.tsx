import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { PageHeader } from '@/components/PageHeader';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const RECIPIENT_EMAIL = 'Ondrej.andel@email.cz';

const OnlinePrihlaska = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    courseType: 'B',
    street: '',
    city: '',
    postalCode: '',
    birthDate: '',
    nationality: 'Česká republika'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = encodeURIComponent(`Online přihláška - ${formData.firstName} ${formData.lastName}`);
    const body = encodeURIComponent(`
Nová online přihláška do autoškoly

OSOBNÍ ÚDAJE:
Jméno: ${formData.firstName}
Příjmení: ${formData.lastName}
E-mail: ${formData.email}
Telefon: ${formData.phone}
Datum narození: ${formData.birthDate}
Státní občanství: ${formData.nationality}

ADRESA:
Ulice a č.p.: ${formData.street}
Město: ${formData.city}
PSČ: ${formData.postalCode}

ŽÁDÁM O OPRÁVNĚNÍ:
${formData.courseType === 'B' ? 'Skupina B' : formData.courseType === 'kondice' ? 'Kondiční jízdy' : 'Navrácení ŘP'}

---
Odesláno z webové stránky Autoškola Müllerka
    `.trim());

    // Open mailto link
    window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Přihláška připravena",
        description: "Otevře se váš emailový klient pro odeslání přihlášky.",
      });
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <Layout>
        <PageHeader title="Online přihláška" />
        <section className="py-12 pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card max-w-lg mx-auto text-center"
            >
              <div className="h-16 w-16 rounded-full bg-traffic-green/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={32} className="text-traffic-green" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                Děkujeme za zájem!
              </h2>
              <p className="text-muted-foreground mb-6">
                Vaše přihláška byla připravena k odeslání. Pokud se emailový klient neotevřel, 
                prosím kontaktujte nás telefonicky.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="btn-hero"
              >
                <span className="relative z-10">Vyplnit novou přihlášku</span>
              </button>
            </motion.div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHeader 
        title="Přihláška On-line" 
        subtitle="Vyplňte formulář a přihlaste se do našeho kurzu"
      />

      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="glass-card max-w-2xl mx-auto"
          >
            <div className="grid gap-6 md:grid-cols-2">
              {/* First Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Křestní jméno *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Jan"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Příjmení *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Novák"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="jan.novak@email.cz"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Telefon *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="+420 123 456 789"
                />
              </div>

              {/* Course Type */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Žádám o oprávnění *
                </label>
                <select
                  name="courseType"
                  value={formData.courseType}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-border bg-input px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                >
                  <option value="B">Skupina B</option>
                  <option value="kondice">Kondiční jízdy</option>
                  <option value="navraceni">Navrácení ŘP</option>
                </select>
              </div>

              {/* Street */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Ulice a č.p. *
                </label>
                <input
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Hlavní 123"
                />
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Město *
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Klášterec nad Ohří"
                />
              </div>

              {/* Postal Code */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  PSČ *
                </label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{3}\s?[0-9]{2}"
                  className="w-full rounded-lg border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="431 51"
                />
              </div>

              {/* Birth Date */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Datum narození *
                </label>
                <input
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-border bg-input px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              {/* Nationality */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Státní občanství *
                </label>
                <input
                  type="text"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Česká republika"
                />
              </div>
            </div>

            {/* Info */}
            <div className="mt-6 p-4 rounded-lg bg-muted/50 flex items-start gap-3">
              <AlertCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground text-sm">
                Odesláním formuláře bude připraven email s vašimi údaji. 
                Po kliknutí na tlačítko se otevře váš emailový klient.
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-hero w-full mt-6 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={20} className="relative z-10 animate-spin" />
                  <span className="relative z-10">Odesílám...</span>
                </>
              ) : (
                <>
                  <Send size={20} className="relative z-10" />
                  <span className="relative z-10">Odeslat přihlášku</span>
                </>
              )}
            </button>

            <p className="text-center text-muted-foreground text-xs mt-4">
              * povinný údaj
            </p>
          </motion.form>
        </div>
      </section>
    </Layout>
  );
};

export default OnlinePrihlaska;
