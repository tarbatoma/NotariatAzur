
import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="py-20 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-8xl font-bold text-notary-navy mb-6 font-playfair">404</h1>
          <h2 className="text-3xl font-bold text-notary-navy mb-6 font-playfair">Pagină Negăsită</h2>
          <p className="text-xl text-gray-600 mb-10">
            Ne pare rău, pagina pe care o căutați nu există sau a fost mutată.
          </p>
          
          <Button
            asChild
            className="bg-notary-navy hover:bg-notary-accent text-white px-8 py-6 text-lg"
          >
            <Link to="/">Înapoi la Pagina Principală</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
