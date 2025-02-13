import { RecentSoldData } from "../constant/data"
import rselicp from "../assets/RecentSold/images/SoldElipcRight.webp"
const RecentSold = () => {
  return (
    <div className="flex justify-center">
      <div className="container mx-auto px-5 sm:px-12 lg:px-20 py-10 relative z-30 ">

        <div className="flex flex-col max-sm:items-center gap-4 lg:gap-10 ">
          <h2>Recently Sold </h2>
          <div className='grid max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 xl:grid-cols-4 gap-4'>
            {
              RecentSoldData.map((item, index) => (
                <div key={index} className=' h-full'>
                  <div className="drop-shadow-md" key={index}
                    style={{
                      backgroundImage: `url(${item.frame})`, backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      width: "318px", 
                    }}
                  >
                    <div className='flex flex-col gap-2 relative'>

                      <div className="flex gap-2 items-center w-full">
                        <img src={item.personImg} alt="" />
                        <div>
                          <h6 className="font-light">{item.name}</h6>
                          <p className='text-xs text-para-light font-light'>{item.username}</p>
                        </div>
                      </div>

                      <div className=''>
                        <img src={item.url} alt="" className='max-md:w-full max-md:h-fit' />

                        <div className="font-secondary navbtn-border font-semibold soldbg text-inverted px-6 py-2 shrink-0 z-50 absolute top-50 left-22 text-l ">
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


