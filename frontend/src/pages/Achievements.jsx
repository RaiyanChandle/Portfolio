import React from 'react';
import { ACHIEVEMENTS_DATA } from '../components/Achievements/achievementsData';
import AchievementCard from '../components/Achievements/AchievementCard';

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="min-h-screen w-full bg-black flex flex-col justify-center items-center select-none font-sans px-4 sm:px-6 md:px-10 lg:px-12 py-16"
    >
      <div className="w-full max-w-[1600px] 2xl:max-w-[1720px] mx-auto flex flex-col justify-center">
        {/* Section Heading */}
        <div className="mb-10 sm:mb-12 w-full text-center">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white select-none">
            Achievements
          </h2>
        </div>

        {/* Minimal 4-Card Responsive Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-6">
          {ACHIEVEMENTS_DATA.map((item) => (
            <AchievementCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
