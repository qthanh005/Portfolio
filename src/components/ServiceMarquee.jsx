import { useLanguage } from '../context/LanguageContext'

const ServiceMarquee = () => {
  const { language } = useLanguage()

  const coreItems = [
    { title: language === 'vi' ? 'Website Doanh Nghiệp' : 'Corporate', image: '/services/corporate.jpg' },
    { title: language === 'vi' ? 'Website Bất Động Sản' : 'Real Estate', image: '/services/realestate.jpg' },
    { title: language === 'vi' ? 'Website Nội Thất' : 'Interior Design', image: '/services/interior.jpg' },
    { title: language === 'vi' ? 'Website Du Lịch' : 'Travel & Tourism', image: '/services/travel.jpg' },
    { title: language === 'vi' ? 'Website Xây Dựng' : 'Construction', image: '/services/construction.jpg' },
    { title: language === 'vi' ? 'Website Nhà Hàng' : 'Restaurant & Food', image: '/services/restaurant.jpg' },
    { title: language === 'vi' ? 'Website Tin Tức' : 'News & Magazine', image: '/services/news.jpg' },
    { title: language === 'vi' ? 'Website Bệnh Viện' : 'Healthcare', image: '/services/hospital.jpg' },
    { title: language === 'vi' ? 'Website Spa - Thẩm Mỹ' : 'Spa & Beauty', image: '/services/spa.jpg' },
    { title: language === 'vi' ? 'Website Thời Trang' : 'Fashion Ecommerce', image: '/services/fashion.jpg' },
  ]

  // Double the items for seamless infinite scroll
  const marqueeItems = [...coreItems, ...coreItems]

  return (
    <div className="w-full py-10 overflow-hidden relative border-y border-gray-100 bg-white shadow-sm mt-8">
      {/* Fade Gradients for smooth edges */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      
      {/* Sliding Marquee Track */}
      <div className="flex w-max animate-slide-left space-x-6 px-3">
        {marqueeItems.map((item, index) => (
          <div 
            key={index} 
            className="w-[280px] h-[190px] flex-shrink-0 group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200"
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
              loading="lazy" 
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            
            {/* Title Text */}
            <div className="absolute bottom-4 left-0 w-full px-4 text-center">
              <h4 className="text-white font-bold text-sm tracking-wide drop-shadow-md">
                {item.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServiceMarquee
