import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <Layout>
      <section className="min-h-[70vh] flex items-center justify-center py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Stránka nenalezena</h2>
          <p className="text-muted-foreground mb-8">Omlouváme se, ale stránka neexistuje.</p>
          <Link to="/" className="btn-hero inline-flex items-center gap-2">
            <Home size={20} className="relative z-10" />
            <span className="relative z-10">Zpět na úvod</span>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
