import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/30 bg-background/60 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-bold">
              <span className="text-primary">Autoškola</span>{' '}
              <span className="text-secondary">Müllerka</span>
            </h3>
            <p className="text-muted-foreground">
              Vaše autoškola v Klášterci nad Ohří a v Kadani
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-heading font-semibold text-foreground">Rychlé odkazy</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/kurzy" className="text-muted-foreground hover:text-primary transition-colors">
                  Kurzy
                </Link>
              </li>
              <li>
                <Link to="/online-prihlaska" className="text-muted-foreground hover:text-primary transition-colors">
                  Online přihláška
                </Link>
              </li>
              <li>
                <Link to="/ke-stazeni" className="text-muted-foreground hover:text-primary transition-colors">
                  Ke stažení
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-heading font-semibold text-foreground">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone size={16} className="text-primary" />
                <a href="tel:+420608534709" className="hover:text-primary transition-colors">
                  +420 608 534 709
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone size={16} className="text-primary" />
                <a href="tel:+420773282446" className="hover:text-primary transition-colors">
                  +420 773 282 446
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin size={16} className="text-primary mt-1" />
                <span>
                  Nad Tunýlkem 255<br />
                  Klášterec nad Ohří, 431 51
                </span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 font-heading font-semibold text-foreground">Sledujte nás</h4>
            <a
              href="https://www.facebook.com/profile.php?id=61585118112692"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Facebook size={20} />
              <span>Facebook</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-border/30 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Autoškola Müllerka. Všechna práva vyhrazena.
          </p>
          <div className="flex items-center justify-center gap-4 mt-2">
            <p className="text-muted-foreground/60 text-xs">
              IČO: 23685174
            </p>
            <span className="text-muted-foreground/40">•</span>
            <Link to="/cookies" className="text-muted-foreground/60 text-xs hover:text-primary transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
