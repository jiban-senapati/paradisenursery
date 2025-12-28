import { getPlantsByCategory } from '@/data/plants';
import ProductCard from '@/components/ProductCard';

const ProductList = () => {
  const categorizedPlants = getPlantsByCategory();

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Plant Collection
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the perfect plants to transform your home into a green paradise.
          </p>
        </div>

        {Object.entries(categorizedPlants).map(([category, plants], categoryIndex) => (
          <section key={category} className="mb-16">
            <div 
              className="flex items-center gap-4 mb-8 animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
                {category}
              </h2>
              <div className="flex-1 h-px bg-border" />
              <span className="text-muted-foreground text-sm">
                {plants.length} plants
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {plants.map((plant, index) => (
                <div 
                  key={plant.id}
                  style={{ animationDelay: `${(categoryIndex * 0.1) + (index * 0.05)}s` }}
                >
                  <ProductCard plant={plant} />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
