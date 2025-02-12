import { RecentSoldData } from "../constant/data"
import rselicp from "../assets/RecentSold/images/SoldElipcRight.webp"
const RecentSold = () => {
  return (
    <div className="flex justify-center">
      <div className="container mx-auto px-5 sm:px-12 lg:px-20 py-10 relative z-30 ">

        <div className="flex flex-col max-sm:items-center gap-4 lg:gap-10 ">
          <h2>Recently Sold </h2>
          <div className=' grid max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 xl:grid-cols-4 gap-4'>
            {
              RecentSoldData.map((item, index) => (
                <div key={index} className='p-1 h-full'>
                  <div className="pt-6 px-2 sm:px-5 md:px-4.2 drop-shadow-md max-sm:w-84 max-sm:pb-4 sm:pb-4.5 overflow-visible " key={index}
                    style={{
                      backgroundImage: `url(${item.frame})`, backgroundRepeat: "no-repeat",
                      backgroundSize: "cover"
                    }}
                  >
                    <div className='flex flex-col gap-3'>

                      <div className="flex gap-2 items-center w-full">
                        <img src={item.personImg} alt="" />
                        <div>
                          <h6>{item.name}</h6>
                          <p className='text-secondary'>{item.username}</p>
                        </div>
                      </div>

                      <div className='px-2 pb-3 max-lg:pb-4 2xl:pb-7 relative'>
                        <img src={item.url} alt="" className='max-md:w-full max-md:h-fit' />

                        <div className="navbtn-size text-small  navbtn-border font-medium soldbg text-inverted px-4 py-2 shrink-0 z-50 absolute top-34 left-28">
                          SOLD
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              ))}
          </div>
        </div>

      </div>

      <img src={rselicp} alt="" className="absolute right-0 z-1" />
    </div>
  )
}
export default RecentSold;


