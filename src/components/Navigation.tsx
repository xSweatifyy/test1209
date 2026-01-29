import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
const logo = '/assets2/logo.jpg';

const navItems = [
  { path: '/', label: 'Úvod' },
  { path: '/o-nas', label: 'O nás' },
  { path: '/kurzy', label: 'Kurzy' },
  { path: '/l17', label: 'L17' },
  { path: '/kontakty', label: 'Kontakty' },
  { path: '/ke-stazeni', label: 'Ke stažení' },
  { path: '/online-prihlaska', label: 'Online přihláška' },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo & Title */}
        <Link 
          to="/" 
          className="flex items-center gap-3 group"
        >
          <motion.h1 
            className="font-heading text-xl font-bold text-foreground md:text-2xl"
            whileHover={{ scale: 1.02 }}
          >
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Autoškola
            </span>
            {' '}
            <span className="text-secondary">Müllerka</span>
          </motion.h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <motion.img 
            src={logo} 
            alt="Autoškola Müllerka logo" 
            className="h-14 w-14 md:h-16 md:w-16 rounded-lg object-contain"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </Link>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden border-t border-border/30 bg-background/95 backdrop-blur-xl"
          >
            <div className="container mx-auto flex flex-col py-4 px-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={item.path}
                    className={`block py-3 px-4 rounded-lg font-medium transition-all ${
                      location.pathname === item.path
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground/80 hover:bg-muted hover:text-primary'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
