// imports
import 'boxicons/css/boxicons.min.css'

const Header = () => {
    //function to toggle the mobile menu
    const toggleMenu = () => {
        const mobileMenu = document.getElementById('mobileMenu');
        

        // Toggle the icon between menu and close
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden')
        }else{
            mobileMenu.classList.add('hidden')
        }

    }
  return (
    <header className='flex justify-between items-center
    py-4 px-4 lg:px-20'>
        <h1 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"className='text-3xl md:text-4xl lg:text-5xl font-light m-0'>SUMIT</h1>
        {/* Desktop Navigation  */}
        <nav className='hidden md:flex text-center gap-12'>

            <a data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000" className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href="#">HOME</a>
            <a data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href="#">COMPANY</a>
            <a data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2000" className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href="#">SERVICES</a>
            <a data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2500" className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href="#">PORTFOLIO</a>            

        </nav>
        <button className='hidden md:block bg-[#a7a7a7] text-black py-3 px-8 
        rounded-full border-none font-medium transition-all duration-500 
        hover:bg-white coursor-pointer z-50'>
            SIGNIN
        </button>
        {/* Mobile Navigation - only visible on mobile screen*/}

    
        <button onClick={toggleMenu}  className='md:hidden text-3xl p-2 z-50'>

            < i class='bx  bx-menu' ></i>
            
        </button> 

        {/* Mobile menu hidden by default, will be shown when the menu icon is clicked */}

        <div id='mobileMenu' className='hidden fixed top-16 bottom-0 right-0 left-0 
        p-5 md:hidden z-40 
        bg-black bg-opacity-70 backdrop-blur- md'>
            <nav className='flex flex-col gap-6 items-center'>

            <a className='text-base tracking-wider 
            transition-colors 
            hover:text-gray-300 z-50' href="#">HOME</a>
           
            <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href="#">COMPANY</a>
           
            <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href="#">SERVICES</a>
           
            <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href="#">PORTFOLIO</a>            


            </nav>
        </div>
        
    
    </header>
  )
}

export default Header
