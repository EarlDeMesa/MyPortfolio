export default function Footer() {
  return (
    <footer
      className='
      flex flex-col md:flex-row justify-between items-center py-6 bg-background text-primaryText 
      border-t-[1px] border-primaryText/20 shadow-lg px-8 text-xs text-primaryText/60
    '
    >
      <div className='text-center md:text-left md:pl-12 md:ml-12'>
        <p className='text-sm tracking-wide'>
          Designed & built by{" "}
          <span className='text-accentTerracotta font-semibold'>Earl.DM</span>
        </p>
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>

      <div className='flex flex-wrap justify-center md:justify-end gap-2 sm:gap-4 md:gap-5'>
        <a
          href='https://www.flaticon.com/free-icons/temperature'
          title='temperature icons'
          target='_blank'
          rel='noopener noreferrer'
          className='underline hover:text-accentTerracotta'
        >
          Temperature icons by Ehtisham Abid - Flaticon
        </a>
        <a
          href='https://www.flaticon.com/free-icons/ecommerce'
          title='ecommerce icons'
          target='_blank'
          rel='noopener noreferrer'
          className='underline hover:text-accentTerracotta'
        >
          Ecommerce icons by Freepik - Flaticon
        </a>
        <a
          href='https://www.flaticon.com/free-icons/food-truck'
          title='food truck icons'
          target='_blank'
          rel='noopener noreferrer'
          className='underline hover:text-accentTerracotta'
        >
          Food truck icons by Flat Icons - Flaticon
        </a>
      </div>
    </footer>
  );
}
