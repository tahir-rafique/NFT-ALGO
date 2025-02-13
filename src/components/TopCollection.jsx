import { TopCollectionData } from "../constant/data"

import elicpLeft from "../assets/TopCollection/images/topCollectionElicpLeft.webp"

const TopCollection = () => {
  return (

    <div className="relative">

      <div className="flex justify-center relative z-50">
        <div className="container mx-auto px-5 sm:px-12 lg:px-20 py-10 flex flex-col gap-4 lg:gap-10 ">
          <div className="flex max-lg:flex-col flex-row lg:justify-between gap-2 lg:items-center">
            <h2>Top Collection</h2>
            <h4 className="">
              <a href="#" className="cursor-pointer text-main font-secondary">
                <h4 className="font-medium">
                  View More Collection
                </h4>
              </a>
            </h4>
          </div>
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-fit">
              {TopCollectionData.map((item, index) => (
                <div key={index} className="border-muted border-3 rounded-2xl shadow-lg p-4">
                  {/* card  */}
                  <div className=" rounded-xl p-2 bg-muted">
                    <div className="grid grid-cols-2 gap-2 p-2">
                      <img src={item.img1} alt="" />
                      <img src={item.img2} alt="" />

                    </div>
                    <div className="grid grid-cols-4 gap-2 p-2">

                      <img src={item.img3} alt="" />
                      <img src={item.img4} alt="" />
                      <img src={item.img5} alt="" />
                      <img src={item.img6} alt="" />
                    </div>
                  </div>

                  {/* person */}
                  <div className="flex gap-2 items-center py-2">
                    <div className="relative">
                      <img src={item.icon} alt="" className="absolute left-12.5 size-4" />
                      <img src={item.person} alt="" />
                    </div>
                    <div>
                      <h6 className="font-secondary font-bold">{item.name}</h6>
                      <p className="text-para-light">{item.owner}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>


          </div>
        </div>

      </div>
      <img src={elicpLeft} alt="" className="absolute left-0 z-1 top-0 size-110" />
    </div>
  )
}

export default TopCollection