import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-3xl mx-auto">
        {/* Back to home link */}
        <Link href="/" className="inline-block mb-8 text-gray-600 hover:text-gray-900">
          &larr; Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-6 glitch-text">About The Berry Challenge</h1>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">The World Record Attempt</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6 border-l-4 border-red-500">
            <p className="text-lg italic">
              &quot;Let&apos;s set a world record together and get the most liked post on Instagram. 
              Beating the current world record held by Kylie Jenner (18 million)! We got this 🙌&quot;
            </p>
          </div>
          <p className="mb-4">
            Inspired by the famous egg challenge that broke Instagram records, we&apos;re launching the Berry Challenge. 
            Our goal is simple but ambitious: to create the most liked post on Instagram, surpassing the current record.
          </p>
          <p className="mb-4">
            The countdown timer on our homepage shows how much time we have left to achieve this goal before the end of the year.
            Join us in making social media history!
          </p>
        </div>
        
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How You Can Participate</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <ol className="list-decimal pl-5 space-y-3">
              <li className="font-medium">Follow our official X page</li>
              <li className="font-medium">Like our Berry Challenge post</li>
              <li className="font-medium">Retweet to your followers</li>
              <li className="font-medium">Use the hashtag #BerryChallenge in your posts</li>
              <li className="font-medium">Check back on our website to see the countdown and progress updates</li>
            </ol>
          </div>
          
          <div className="mt-8 mb-4">
            <h3 className="text-xl font-semibold mb-3">Why Join The Challenge?</h3>
            <p className="mb-3">
              This is your chance to be part of internet history! Together, we can create a movement that shows the power of community and collective action online.
            </p>
            <p>
              The Berry Challenge isn't just about breaking records—it's about bringing people together for a fun, harmless goal that anyone can participate in. No special skills required, just a few clicks to make history!
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/" 
            className="cyber-button"
          >
            Join The Challenge
          </Link>
        </div>
      </div>
    </div>
  );
}
