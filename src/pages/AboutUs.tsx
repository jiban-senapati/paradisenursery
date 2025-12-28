import { Leaf, Heart, Users, Award } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Leaf className="h-10 w-10 text-primary" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Paradise Nursery
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're passionate about bringing nature into your home and creating green spaces that inspire joy and tranquility.
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-16 animate-slide-up">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
            Our Story
          </h2>
          <div className="prose prose-lg text-muted-foreground space-y-4">
            <p>
              Paradise Nursery was founded with a simple mission: to make beautiful, healthy plants accessible to everyone. 
              What started as a small family garden has grown into a thriving nursery dedicated to nurturing both plants and people.
            </p>
            <p>
              We believe that every space deserves a touch of green. Whether you're a seasoned plant parent or just beginning 
              your botanical journey, we're here to help you find the perfect plants and provide the knowledge you need to 
              help them thrive.
            </p>
            <p>
              Our team of expert horticulturists carefully selects and nurtures each plant in our collection, ensuring that 
              only the healthiest and most beautiful specimens make their way to your home.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-8">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-xl border border-border animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Passion</h3>
              <p className="text-muted-foreground">
                We love what we do, and it shows in every plant we grow and every customer we serve.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Quality</h3>
              <p className="text-muted-foreground">
                We never compromise on quality. Every plant meets our rigorous standards before it leaves our nursery.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Community</h3>
              <p className="text-muted-foreground">
                We're building a community of plant lovers who share knowledge, experiences, and a love for greenery.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Sustainability</h3>
              <p className="text-muted-foreground">
                We're committed to sustainable practices that protect our planet for future generations.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center bg-primary/5 rounded-2xl p-8 animate-fade-in">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
            Visit Us Today
          </h2>
          <p className="text-muted-foreground mb-6">
            Come explore our nursery and discover the perfect plants for your space. Our friendly team is always ready to help!
          </p>
          <div className="text-muted-foreground space-y-2">
            <p><strong>Address:</strong> 123 Green Valley Road, Paradise City</p>
            <p><strong>Phone:</strong> (555) 123-4567</p>
            <p><strong>Hours:</strong> Mon-Sat 9am-6pm, Sun 10am-4pm</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
