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
      for (let i = 0; i < 15; i++) {
        newSparkles.push({
          id: i,
          left: Math.random() * 100,
          animationDelay: Math.random() * 3,
          animationDuration: 3 + Math.random() * 2,
          size: 2 + Math.random() * 4,
          type: ['primary', 'secondary', 'accent'][Math.floor(Math.random() * 3)] as 'primary' | 'secondary' | 'accent',
        });
      }
      setSparkles(newSparkles);
    };

    generateSparkles();
    const interval = setInterval(generateSparkles, 5000);

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