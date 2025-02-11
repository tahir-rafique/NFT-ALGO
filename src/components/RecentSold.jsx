import { RecentSoldData } from "../constant/data"
import rselicp from "../assets/RecentSold/images/SoldElipcRight.webp"
const RecentSold = () => {
  return (
    <div className="flex justify-center">
      <div className="container mx-auto px-5 sm:px-12 lg:px-20 py-10 flex flex-col gap-4 lg:gap-10 relative z-30">
        <h2>Recently Sold </h2>
        <div className="grid max-md:grid-cols-1 max-xl:grid-cols-2 max-2xl:grid-cols-3 grid-cols-4 w-fit gap-10">
          {
            RecentSoldData.map((item, index) => (
              <div className="px-2 py-6 drop-shadow-xl w-fit" key={index} style={{
                backgroundImage: `url(${item.frame})`,
                backgroundRepeat: "no-repeat"
              }} >
                <div className="flex flex-col gap-2 relative">
                  <div className="flex gap-2 items-center">
                    <img src={item.personImg} alt="" />
                    <div>
                      <h6>{item.name}</h6>
                      <p className="text-para-light">{item.username}</p>
                    </div>
                  </div>
                  <img src={item.url} alt="" className="w-fit" />

                  <div className="navbtn-size text-small  navbtn-border font-medium soldbg text-inverted px-4 py-2 shrink-0 z-50 absolute top-54 left-28">
                    SOLD
                  </div>
                </div>


              </div>
            ))
          }
        </div>
      </div>

      <img src={rselicp} alt="" className="absolute right-0 z-1"/>
    </div>
  )
}
export default RecentSold;