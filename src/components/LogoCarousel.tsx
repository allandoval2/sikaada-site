'use client';

export default function LogoCarousel() {
  return (
    <div className="overflow-hidden py-8 bg-white/90">
      <div className="flex gap-36 opacity-60 animate-marquee">
        {/* Primeira sequência de logos */}
        <img src="/logos/logos_sikaada_1.png" alt="Red Cast" className="h-16 object-contain" />
        <img src="/logos/logos_sikaada_2.png" alt="BTB Sports" className="h-16 object-contain" />
        <img src="/logos/logos_sikaada_3.png" alt="Gringo Club" className="h-16 object-contain" />
        {/* Duplicação para continuidade */}
        <img src="/logos/logos_sikaada_1.png" alt="Red Cast" className="h-16 object-contain" />
        <img src="/logos/logos_sikaada_2.png" alt="BTB Sports" className="h-16 object-contain" />
        <img src="/logos/logos_sikaada_3.png" alt="Gringo Club" className="h-16 object-contain" />
        {/* Duplicação para continuidade */}
        <img src="/logos/logos_sikaada_1.png" alt="Red Cast" className="h-16 object-contain" />
        <img src="/logos/logos_sikaada_2.png" alt="BTB Sports" className="h-16 object-contain" />
        <img src="/logos/logos_sikaada_3.png" alt="Gringo Club" className="h-16 object-contain" />
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 50s linear infinite;
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
}
