import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { QuoteProvider } from './contexts/QuoteContext';
import { Home } from './pages/Home';

const Products = lazy(() => import('./pages/Products').then((m) => ({ default: m.Products })));
const ProductDetail = lazy(() =>
import('./pages/ProductDetail').then((m) => ({ default: m.ProductDetail }))
);
const Impellers = lazy(() => import('./pages/Impellers').then((m) => ({ default: m.Impellers })));
const Industries = lazy(() => import('./pages/Industries').then((m) => ({ default: m.Industries })));
const IndustryDetail = lazy(() =>
import('./pages/IndustryDetail').then((m) => ({ default: m.IndustryDetail }))
);
const Applications = lazy(() =>
import('./pages/Applications').then((m) => ({ default: m.Applications }))
);
const ApplicationDetail = lazy(() =>
import('./pages/ApplicationDetail').then((m) => ({ default: m.ApplicationDetail }))
);
const Technology = lazy(() => import('./pages/Technology').then((m) => ({ default: m.Technology })));
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })));
const Support = lazy(() => import('./pages/Support').then((m) => ({ default: m.Support })));
const Resources = lazy(() => import('./pages/Resources').then((m) => ({ default: m.Resources })));
const ResourceDetail = lazy(() => import('./pages/ResourceDetail').then((m) => ({ default: m.ResourceDetail })));
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })));
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })));

function RouteFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-live="polite">
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-steel-200 border-t-brand" />
      <span className="sr-only">Loading page</span>
    </div>);

}

export function App() {
  return (
    <BrowserRouter>
      <QuoteProvider>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/impellers" element={<Impellers />} />
              <Route path="/products/:slug" element={<ProductDetail />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/industries/:slug" element={<IndustryDetail />} />
              <Route path="/applications" element={<Applications />} />
              <Route path="/applications/:slug" element={<ApplicationDetail />} />
              <Route path="/technology" element={<Technology />} />
              <Route path="/about" element={<About />} />
              <Route path="/support" element={<Support />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/resources/:slug" element={<ResourceDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </QuoteProvider>
    </BrowserRouter>);

}