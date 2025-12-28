import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Droplets, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="hero-overlay absolute inset-0" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Leaf className="h-12 w-12 text-primary-foreground" />
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Paradise Nursery
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Transform your space into a lush sanctuary. Discover our curated collection of beautiful houseplants.
          </p>
          <Link to="/products">
            <Button size="lg" className="btn-accent text-lg gap-2">
              Get Started
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Why Choose Paradise Nursery?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl text-center shadow-lg animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">Premium Quality</h3>
              <p className="text-muted-foreground">
                Each plant is carefully nurtured and inspected to ensure the highest quality for your home.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl text-center shadow-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplets className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">Expert Care Tips</h3>
              <p className="text-muted-foreground">
                Get personalized care instructions to help your plants thrive in any environment.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl text-center shadow-lg animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sun className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">Sustainable Practices</h3>
              <p className="text-muted-foreground">
                We use eco-friendly packaging and sustainable growing methods for a greener future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Plant Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Browse our collection and find the perfect plants for your space.
          </p>
          <Link to="/products">
            <Button size="lg" className="btn-accent text-lg gap-2">
              Shop Now
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
