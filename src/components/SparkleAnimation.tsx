import { useEffect, useState } from 'react';

interface Sparkle {
  id: number;
  left: number;
  animationDelay: number;
  animationDuration: number;
  size: number;
  type: 'primary' | 'secondary' | 'accent';
}

const SparkleAnimation = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles: Sparkle[] = [];
      for (let i = 0; i < 20; i++) {
        newSparkles.push({
          id: i,
          left: Math.random() * 100,
          animationDelay: Math.random() * 4,
          animationDuration: 4 + Math.random() * 3, // Longer duration for smoother animation
          size: 3 + Math.random() * 5, // Larger sparkles
          type: ['primary', 'secondary', 'accent'][Math.floor(Math.random() * 3)] as 'primary' | 'secondary' | 'accent',
        });
      }
      setSparkles(newSparkles);
    };

    generateSparkles();
    const interval = setInterval(generateSparkles, 6000); // Less frequent regeneration

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className={`sparkle ${sparkle.type === 'secondary' ? 'sparkle-secondary' : sparkle.type === 'accent' ? 'sparkle-accent' : ''}`}
          style={{
            left: `${sparkle.left}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            animationDelay: `${sparkle.animationDelay}s`,
            animationDuration: `${sparkle.animationDuration}s`,
            animation: `sparkleMove ${sparkle.animationDuration}s linear infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default SparkleAnimation;