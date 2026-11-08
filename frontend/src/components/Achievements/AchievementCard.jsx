import React, { memo } from 'react';
import { MapPin, Calendar } from 'lucide-react';

const AchievementCard = memo(({ item }) => {
  return (
    <div className="group rounded-2xl bg-[#0c0c10]/95 border border-zinc-800/80 hover:border-[#6bee18] transition-all duration-300 p-4 sm:p-5 flex flex-col justify-between shadow-xl hover:shadow-[0_0_20px_rgba(107,238,24,0.12)] select-none min-h-[450px] sm:min-h-[470px] xl:min-h-[485px] h-full">
      {/* Top Section: Image & Event Meta */}
      <div className="flex flex-col">
        {/* Primary Image with uniform 16/10 aspect ratio */}
        <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800/60 group-hover:border-zinc-700 transition-colors shrink-0">
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Subtle bottom vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Content Section: Uniform vertical alignment across cards */}
        <div className="mt-3.5 flex flex-col">
          {/* Headline (locked height for 1 or 2 lines) */}
          <div className="h-[48px] xl:h-[52px] flex items-start overflow-hidden">
            <h3 className="text-white font-extrabold text-[15px] sm:text-base xl:text-[17px] leading-snug group-hover:text-[#6bee18] transition-colors line-clamp-2">
              {item.headline}
            </h3>
          </div>

          {/* Subtitle / Event name (uniform height) */}
          <p className="text-zinc-300 text-xs sm:text-[13px] font-medium mt-1 truncate h-[20px]">
            {item.title}
          </p>

          {/* Meta Row: Location & Date (uniform alignment across cards) */}
          <div className="flex items-center justify-between text-xs sm:text-[12.5px] text-zinc-300 mt-2.5 h-[24px] overflow-hidden">
            <span className="flex items-center gap-1.5 truncate max-w-[68%]">
              <MapPin className="w-3.5 h-3.5 text-[#6bee18] shrink-0" />
              <span className="truncate">{item.location}</span>
            </span>
            <span className="flex items-center gap-1.5 shrink-0 text-zinc-400 font-medium">
              <Calendar className="w-3.5 h-3.5 text-[#6bee18] shrink-0" />
              <span>{item.date}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Section: Team Members with LinkedIn Redirect Links (all IDs guaranteed visible) */}
      <div className="pt-3.5 border-t border-zinc-800/80 mt-auto">
        <div className="flex items-start gap-2 min-h-[96px] xl:min-h-[105px]">
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-zinc-400 pt-1 shrink-0">
            TEAM:
          </span>

          <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 flex-1 justify-start">
            {item.team.map((member, i) => {
              const profileUrl = member.linkedin || member.LinkedIn || member.github || '#';
              return (
                <a
                  key={i}
                  href={profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-0.5 rounded-md bg-zinc-900/90 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800 text-zinc-200 hover:text-white text-[11px] sm:text-xs font-medium inline-flex items-center gap-1.5 transition-colors shrink-0 cursor-pointer shadow-sm"
                  title={`View ${member.name} on LinkedIn`}
                >
                  {/* LinkedIn SVG Icon */}
                  <svg
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-[#0A66C2] shrink-0"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z" />
                  </svg>
                  <span>{member.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
});

AchievementCard.displayName = 'AchievementCard';

export default AchievementCard;
