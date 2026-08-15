import { useState } from 'react';

const Folder = ({ 
  color = '#5227FF', 
  size = 1, 
  logo = null, 
  name = '', 
  isLogoFilter = false,
  className = '' 
}) => {
  const [hovered, setHovered] = useState(false);

  const folderStyle = {
    '--folder-color': color,
  };

  const scaleStyle = { transform: `scale(${size})` };

  const faintBorderColor = color; 
  const solidBorderColor = color; 

  return (
    <div 
      style={scaleStyle} 
      className={`inline-block relative ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="group relative transition-all duration-300 ease-out cursor-pointer hover:-translate-y-2"
        style={folderStyle}
        role="img"
        aria-label={`Folder for ${name}`}
      >
        {/* Main Folder Back Panel (Wireframe Back) */}
        <div
          className="relative w-[100px] h-[80px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] border"
          style={{ 
            backgroundColor: '#000000',
            borderColor: faintBorderColor
          }}
        >
          {/* Folder Tab */}
          <span
            className="absolute z-10 bottom-full left-[-1px] w-[30px] h-[10px] rounded-tl-[5px] rounded-tr-[5px] border-t border-l border-r"
            style={{ 
              backgroundColor: '#000000',
              borderColor: faintBorderColor
            }}
          >
            {/* Mask to cover the parent's top border under the tab without protruding borders */}
            <span className="absolute bottom-[-1px] left-0 right-0 h-[1px] bg-black z-20"></span>
          </span>

          {/* Sliding Single Page Tooltip - styled as a rustic manila/typewriter paper sheet */}
          <div
            className={`absolute z-20 left-1/2 transition-[bottom,transform,opacity] duration-300 ease-out will-change-[bottom,transform,opacity] bg-[#f5ebd3] text-zinc-900 text-[9px] md:text-[10px] font-bold font-mono tracking-wider uppercase flex items-center justify-center px-1.5 rounded-[3px] border border-[#d9cca5] shadow-lg ${
              hovered 
                ? 'bottom-[55%] -translate-x-1/2 opacity-100 scale-100 rotate-3' 
                : 'bottom-[10%] -translate-x-1/2 opacity-0 scale-95 pointer-events-none'
            }`}
            style={{ 
              width: '85%', 
              height: '80%',
              textAlign: 'center',
              lineHeight: '1.2'
            }}
          >
            {name}
          </div>

          {/* Folder Front Flap (Wireframe Front) - tilts down on hover */}
          {/* The logo is nested inside the front flap so it bends, skews, and scales in sync with the flap! */}
          <div
            className="absolute z-30 w-full h-full inset-0 origin-bottom transition-transform duration-300 ease-out will-change-transform group-hover:[transform:skew(-12deg)_scaleY(0.75)] border flex items-center justify-center"
            style={{
              backgroundColor: '#000000',
              borderColor: solidBorderColor,
              borderRadius: '5px 10px 10px 10px',
            }}
          >
            {logo && (
              <img 
                src={logo} 
                alt={name} 
                className={`w-12 h-12 object-contain transition-transform duration-300 ease-out will-change-transform group-hover:scale-110 ${
                  isLogoFilter ? 'brightness-0 invert' : ''
                }`}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Folder;
