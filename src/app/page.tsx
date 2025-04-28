'use client';

import { motion } from 'framer-motion';
import Navbar from "../components/Navbar";
import LogoCarousel from "../components/LogoCarousel";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex flex-col min-h-screen bg-white text-gray-800 pt-20">
      
        {/* Hero Section */}
        <motion.section 
        className="flex flex-col items-center justify-center py-56 px-6 md:px-8 bg-black text-white text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Sikaada</h1>
          <p className="text-lg md:text-2xl max-w-2xl">
            Private Equity com tíquete inteligente para empresas de mídia.
          </p>

        
        </motion.section>
        
        {/* Logo Carousel Section */}
        <LogoCarousel />

        {/* Sobre nós Section */}
        <motion.section 
          className="py-16 px-6 md:px-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Sobre nós</h2>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            Somos um fundo de Private Equity focado em acelerar o crescimento de empresas de mídia. 
            Atuamos com tíquete de até R$ 5 milhões, combinando capital financeiro e suporte estratégico para expansão operacional.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Nosso diferencial é oferecer smart money: além de investimento, entregamos expertise real em mídia, operações e escala.
          </p>
        </motion.section>

        {/* Contato Section */}
        <motion.section 
          className="py-16 px-6 md:px-8 bg-gray-100 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Entre em Contato</h2>
          <p className="text-base md:text-lg mb-6">Quer conversar sobre investimentos ou apresentar uma oportunidade?</p>
          <a
            href="mailto:a.doval@kobemedia.com"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Falar com o Sikaada
          </a>
        </motion.section>
      </main>
    </>
    )
}
