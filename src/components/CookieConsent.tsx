import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const COOKIE_CONSENT_KEY = 'cookie-consent-accepted';

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'false');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto glass-card border border-border/50 shadow-2xl">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex items-center gap-3 flex-shrink-0">
                <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Cookie size={24} className="text-primary" />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="font-heading font-semibold text-foreground mb-1">
                  Používáme cookies
                </h3>
                <p className="text-muted-foreground text-sm">
                  Tento web používá cookies pro zajištění správného fungování a analýzu návštěvnosti.{' '}
                  <Link to="/cookies" className="text-primary hover:underline">
                    Více informací
                  </Link>
                </p>
              </div>

              <div className="flex items-center gap-3 flex-shrink-0 w-full md:w-auto">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={declineCookies}
                  className="flex-1 md:flex-none"
                >
                  Odmítnout
                </Button>
                <Button
                  size="sm"
                  onClick={acceptCookies}
                  className="flex-1 md:flex-none"
                >
                  Přijmout vše
                </Button>
              </div>

              <button
                onClick={declineCookies}
                className="absolute top-3 right-3 md:hidden text-muted-foreground hover:text-foreground"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
