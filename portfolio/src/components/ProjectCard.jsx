import temperatureIcon from "../assets/icons/smart-temperature.png";
import ecommerceIcon from "../assets/icons/shopping.png";
import foodTruckIcon from "../assets/icons/food-truck.png";

const iconMap = {
  "smart-temperature.png": temperatureIcon,
  "shopping.png": ecommerceIcon,
  "food-truck.png": foodTruckIcon,
};

export default function ProjectCard({
  id,
  title,
  description,
  tech,
  link,
  screenshot,
}) {
  const filename = screenshot.split("/").pop();
  const iconSrc = iconMap[filename] || null;

  return (
    <div
      key={id}
      className='
        group flex flex-col md:flex-row items-stretch gap-10 w-full 
        ml-0 md:ml-8
      '
      style={{ minHeight: "18rem" }}
    >
      <a
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        className='
          relative w-full md:w-[85%] h-72 md:h-auto rounded-2xl 
          overflow-hidden cursor-pointer shadow-lg flex-shrink-0
          bg-white border-2 border-primaryText/40 transition-transform duration-300 
          hover:scale-105
        '
      >
        <div
          className='
            relative flex flex-col items-center justify-center h-full p-6 
            transition-filter duration-500 group-hover:blur-md
          '
        >
          {iconSrc ? (
            <img
              src={iconSrc}
              alt={`${title} Icon`}
              className='max-w-[120px] max-h-[120px] mb-4 object-contain'
            />
          ) : (
            <div
              className='w-[120px] h-[120px] flex items-center justify-center rounded-full'
              style={{
                background:
                  "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 50%, #f5f7fa 100%)",
              }}
            >
              <span className='text-primaryText/40 italic text-lg select-none'>
                No Image
              </span>
            </div>
          )}
          <h2 className='text-2xl font-bold text-primaryText/70 leading-relaxed text-center'>
            {title}
          </h2>
        </div>

        <div
          className='
            absolute inset-0 bg-background bg-opacity-90 p-8 
            flex flex-col justify-center opacity-0 group-hover:opacity-100 
            transition-all duration-600 shadow-xl rounded-2xl 
            transform overflow-hidden translate-x-0 translate-y-0 group-hover:translate-x-0 group-hover:translate-y-0
          '
        >
          <h2 className='text-3xl font-heading mb-3 text-primaryText'>
            {title}
          </h2>
          <p className='text-primaryText/70 mb-6 leading-relaxed overflow-hidden text-ellipsis max-h-[6rem]'>
            {description}
          </p>
          <div className='flex flex-wrap gap-3'>
            {tech.map((t) => (
              <span
                key={t}
                className='
                  text-sm bg-accentTerracotta/30 text-accentTerracotta  
                  rounded-full px-4 py-1 font-semibold  
                  hover:bg-accentTerracotta/50 transition-colors
                '
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
}
