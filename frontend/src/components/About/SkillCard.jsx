import React from 'react';

export default function SkillCard({ title, abbreviation, description, hoverBorderClass, iconColorClass }) {
  return (
    <div className={`p-6 rounded-xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm transition duration-300 hover:bg-slate-900/60 ${hoverBorderClass}`}>
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg mb-4 bg-slate-800/50 ${iconColorClass}`}>
        {abbreviation}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
