import Image from 'next/image';
import Link from 'next/link';
import CountdownTimer from '@/components/CountdownTimer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center max-w-4xl w-full mx-auto">
        {/* Mysterious digital strawberry with glitch effect */}
        <div className="glitch-effect mb-12" style={{ width: '200px', height: '200px', position: 'relative' }}>
          <Image 
            src="/Strawberry_PNG_Clipart.png" 
            alt="Strawberry" 
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          {/* Stylish cyberpunk button for tweet link */}
          <a 
            href="https://x.com/StrawberryShare/status/1919488321459192139" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cyber-button"
          >
            Access Tweet
          </a>
          
          {/* About page link */}
          <Link href="/about" className="cyber-button">
            About Challenge
          </Link>
        </div>
        
        {/* Clean countdown timer without box */}
        <CountdownTimer />
      </div>
      
      {/* Digital noise background effect */}
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 250 250\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
          width: '100%',
          height: '100%'
        }}></div>
      </div>
    </div>
  );
}
