import backgroundImage from '@/assets/background.png';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden"> 
      {/* Background Gradient */}
      <div className='absolute inset-0'>
        <img src={backgroundImage} alt="Hero image" className="w-full h-full object-cover opacity-40" />
        <div className='absolute inset-0 bg-gradient-to-b from-background/15 to-background
        '/>
      </div>
    </section>
  );
};
