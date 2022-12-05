import logo from '../images/nav1.svg'
import logo2 from '../images/nav2.svg'


function HomePage( ) {
    


    return (

        <>
            <main className='font-Mulish'>
                <nav className='flex justify-between px-[3rem] border drop-shadow-lg items-center'>
                    <div className='flex'>
                        <button className='mx-3 text-[0.9rem] text-[#745895]'>
                            <img src={logo} alt="logo" />
                        </button>
                        <button className='mx-3 text-[0.9rem] text-[#745895]'>Features</button>
                        <button className='flex mx-3 text-[0.9rem] text-[#745895]'>
                            <p>Business</p>
                            <p className='mx-2 text-[#745895]'>Beta</p>
                        </button>
                        <button className='mx-3 text-[0.9rem] text-[#745895]'>Company</button>
                        <button className='mx-3 text-[0.9rem] text-[#745895]'>Help</button>
                    </div>
                    <div className='flex p-[1rem] items-center'>
                        <button className='mx-3 text-[0.9rem] text-[#745895]'>Sign In</button>
                        <button className='mx-3 bg-[#40196d] rounded-[0.7rem] text-white font-bold py-2 px-7 translate-y-1 duration-700'>Get Kuda</button>
                        <div className='border'>
                           <img src={logo2} alt="logo 2" />
                        </div>
                    </div>
                </nav>
            </main>
        
        </>

    )

}

export default HomePage