import { useState } from 'react';

export default function ProductDescription() {
  const [activeTab, setActiveTab] = useState('description');

  const features = [
    {
      icon: "/assets/imgs/flash_drive.png",
      label: 'Compatible'
    },
    {
      icon: "/assets/imgs/robot.png",
      label: 'Voice AI'
    },
    {
      icon: "/assets/imgs/wifi_router.png",
      label: 'Connection'
    },
    {
      icon: "/assets/imgs/battery.png",
      label: 'Battery'
    },
    {
      icon: "/assets/imgs/eye_scan.png",
      label: 'Face ID'
    }
  ];

  const boxItems = [
    {
      image: '/assets/imgs/wireless-charger.png',
      title: 'Wireless Charger',
      link: 'View Specs'
    },
    {
      image: '/assets/imgs/mobile-phone.png',
      title: 'Mobile Phone',
      link: 'View Specs'
    },
    {
      image: '/assets/imgs/tws.png',
      title: 'Tws Headphones',
      link: 'View Specs'
    }
  ];

  return (
    <div className="pt-12 pb-2 px-4 ">
      <div className="max-w-5xl mx-auto border-1 border-[#00000017] rounded-[25px] py-6 px-12">
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <div className="flex flex-wrap gap-8 sm:gap-12">
            <button
              onClick={() => setActiveTab('description')}
              className={`pb-4 text-[14px] font-semibold transition-colors relative ${
                activeTab === 'description'
              }`}
            >
              Description
              {activeTab === 'description' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#800080] p-[2px] rounded-t-3xl" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('additional')}
              className={`pb-4 text-[14px] font-medium transition-colors relative ${
                activeTab === 'additional'
              }`}
            >
              Additional Information
              {activeTab === 'additional' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#800080] p-[2px] rounded-t-3xl" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('review')}
              className={`pb-4 text-[14px] font-medium transition-colors relative ${
                activeTab === 'review'
              }`}
            >
              Review
              {activeTab === 'review' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#800080] p-[2px] rounded-t-3xl" />
              )}
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Description */}
          <div className="flex flex-col h-full">
            <p className="text-[#707070] text-sm sm:text-base leading-relaxed mb-8">
              Cras aliquam ultricies ante, eu sollicitudin nulla mattis et. Proin non sapien commodo, maximus libero eu, dictum massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris posuere sem a tellus posuere, non aliquet lacus faucibus. Aliquam sodales vestibulum sollicitudin. Proin ullamcorper gravida mi, sit amet pharetra justo rhoncus vitae. Suspendisse volutpat tempor massa id efficitur. Ut fermentum rhoncus hendrerit. Vestibulum maximus tempus turpis, vel aliquet odio euismod at. Sed sed justo non mauris cursus varius in a leo. Proin iaculi placerat placerat.icitudin. Proin ullamcorper gravida mi, sit amet pharetra justo rhoncus vitae. 
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex flex-col items-center justify-between text-center gap-2">
                  <div className="text-black mb-2">
                    <img src={feature.icon} alt="" />
                  </div>
                  <span className="text-sm text-[#707070]">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image, height matches left side */}
          <div className="flex items-stretch justify-center">
            <div className="w-full max-w-md flex items-stretch">
              <div className="w-full h-full flex items-stretch">
                <img
                  src="https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=800&q=80"
                  alt="iPhone Camera"
                  className="w-full h-[75%] rounded-3xl shadow-lg object-cover"
                  style={{ aspectRatio: "1/1" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* What's Inside The Box Section */}
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1.5 text-sm font-semibold text-[#800080] border border-[#800080] rounded-full mb-4">
            EXCHANGE BONUS
          </span>
          <h2 className="text-3xl font-bold text-black">
            What's Inside The Box?
          </h2>
        </div>

        {/* Box Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {boxItems.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-black mb-2">
                  {item.title}
                </h3>
                <button className="text-[12px] font-semibold text-[#707070] hover:text-black border-b border-gray-400 hover:border-[#800080] transition-colors">
                  {item.link}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}