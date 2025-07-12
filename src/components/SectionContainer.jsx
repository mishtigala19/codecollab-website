// SectionContainer.jsx - Reusable section wrapper components

// Main Section Container - for full-width sections
export const Section = ({ children, className = "", id = "" }) => {
  return (
    <section id={id} className={`w-full ${className}`}>
      {children}
    </section>
  );
};

// Container - for content width limiting and centering
export const Container = ({ children, className = "", size = "default" }) => {
  const sizeClasses = {
    sm: "max-w-4xl",
    default: "max-w-6xl", 
    lg: "max-w-7xl",
    full: "max-w-full"
  };

  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
};

// Card Container - for card-style sections with background
export const CardSection = ({ children, className = "" }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 sm:p-8 ${className}`}>
      {children}
    </div>
  );
};

// Hero Section Container - for hero/banner sections
export const HeroSection = ({ children, className = "" }) => {
  return (
    <section className={`relative py-16 sm:py-24 lg:py-32 ${className}`}>
      <Container>
        {children}
      </Container>
    </section>
  );
};

// Content Section Container - for main content areas
export const ContentSection = ({ children, className = "", padding = "default" }) => {
  const paddingClasses = {
    none: "",
    sm: "py-8",
    default: "py-12 sm:py-16",
    lg: "py-16 sm:py-24"
  };

  return (
    <section className={`${paddingClasses[padding]} ${className}`}>
      <Container>
        {children}
      </Container>
    </section>
  );
};

// Grid Section Container - for grid-based layouts
export const GridSection = ({ children, className = "", cols = "3" }) => {
  const gridClasses = {
    "1": "grid-cols-1",
    "2": "grid-cols-1 md:grid-cols-2",
    "3": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    "4": "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
  };

  return (
    <div className={`grid ${gridClasses[cols]} gap-6 sm:gap-8 ${className}`}>
      {children}
    </div>
  );
};

// Default export for the main container
export default Container;
