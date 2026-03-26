export const translations = {
  en: {
    // Navbar
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      services: 'Services',
      contact: 'Contact'
    },

    // Hero Section
    hero: {
      greeting: "Hello World, I'm",
      name: 'LE QUANG',
      surname: 'THANH',
      role: 'Full-Stack Software Developer',
      description: 'Specialized in Full-Stack Web Development, Android Applications, and Game Development. Building scalable, high-performance applications with modern technologies and automation systems.',
      viewProjects: 'View Projects',
      getInTouch: 'Get In Touch',
      resume: 'Resume',
      initSequence: {
        init: 'SYSTEM INITIALIZING...',
        loading: 'Loading development environment...',
        connected: 'Connection established.'
      }
    },

    // About Section
    about: {
      title: 'ABOUT',
      titleHighlight: 'ME',
      professionalProfile: 'Professional Profile',
      technicalOverview: 'Technical Overview',

      profile: {
        fullName: 'Full Name',
        fullNameValue: 'Le Quang Thanh',
        position: 'Position',
        positionValue: 'Full-Stack Software Developer',
        specialization: 'Specialization',
        specializationValue: 'Web Development • Mobile Apps • Game Development',
        currentFocus: 'Current Focus',
        currentFocusValue: 'Full-Stack • Android • Unity • Web Automation',
        experience: 'Experience',
        experienceValue: 'Personal Projects since 08/2023',
        expertise: 'Expertise',
        expertiseValue: 'Full-Stack Development • Mobile Apps • Web Crawling'
      },

      overview: {
        paragraph1: 'Passionate software engineer with hands-on experience in full-stack development, mobile applications, and game development. Specialized in building scalable web applications, implementing automation systems, and creating interactive experiences across multiple platforms.',
        paragraph2: 'Experienced in developing Android applications, Unity games, and web crawling systems. Committed to writing clean, maintainable code while continuously learning new technologies to deliver innovative solutions.'
      },

      experience: {
        title: 'Software Developer',
        subtitle: 'Personal Projects',
        period: '08/2023 - Present',
        location: 'Ho Chi Minh City, Vietnam',
        responsibilities: [
          'Developed full-stack web applications using React and Node.js',
          'Built Android applications with Java/Kotlin, focusing on UI/UX and API integration',
          'Created interactive applications and games using Unity (C#)',
          'Managed and optimized databases using MongoDB, MySQL, and PostgreSQL',
          'Implemented secure authentication mechanisms using JWT-based systems',
          'Deployed and maintained applications on Vercel and Netlify',
          'Built scalable web crawling systems using Puppeteer, Cheerio, and BeautifulSoup',
          'Designed fault-tolerant data extraction pipelines with anti-blocking strategies and retry mechanisms',
          'Automated data workflows using cron jobs',
          'Structured and integrated collected data for backend systems',
          'Processed subtitle/video data with BeautiSub'
        ]
      },

      highlights: {
        fullstack: {
          title: 'Full-Stack Development',
          description: 'Building complete web applications with React, Node.js, and modern databases (MongoDB, MySQL, PostgreSQL).'
        },
        mobile: {
          title: 'Mobile Development',
          description: 'Creating Android applications with Java/Kotlin, focusing on intuitive UI/UX and seamless API integration.'
        },
        automation: {
          title: 'Web Automation & Crawling',
          description: 'Developing scalable web scraping systems with Puppeteer, Cheerio, and BeautifulSoup with anti-blocking strategies.'
        },
        game: {
          title: 'Game Development',
          description: 'Building interactive games and applications using Unity engine with C# for cross-platform deployment.'
        }
      }
    },

    // Skills Section
    skills: {
      title: 'TECHNICAL',
      titleHighlight: 'STACK',
      toolsTitle: 'Tools & Frameworks',

      categories: {
        backend: 'Backend Development',
        frontend: 'Frontend & UI',
        databases: 'Databases',
        realtime: 'Real-time Communication',
        devops: 'DevOps & Cloud',
        ml: 'Machine Learning'
      },

      additionalSkills: [
        {
          name: 'Web Crawling',
          description: 'Puppeteer, Cheerio, BeautifulSoup'
        },
        {
          name: 'Automation',
          description: 'Data workflows, Cron jobs'
        },
        {
          name: 'System Design',
          description: 'Scalable architectures'
        },
        {
          name: 'Data Processing',
          description: 'ETL pipelines, Data integration'
        },
        {
          name: 'Business Analysis',
          description: 'Requirements gathering'
        }
      ]
    },

    // Projects Section
    projects: {
      title: 'FEATURED',
      titleHighlight: 'PROJECTS',
      active: 'Active',
      sourceCode: 'Source Code',
      liveDemo: 'Live Demo',
      viewAllGithub: 'View All Projects on GitHub',

      projectList: {
        webrtc: {
          title: 'Comic Website Platform',
          description: 'Modern comic reading platform built with React and Node.js. Features include comic viewer with smooth page transitions, user authentication, favorite comics, reading progress tracking, and responsive design optimized for all devices.'
        },
        ml: {
          title: 'TinyChess Game',
          description: 'Interactive chess game built with Unity and C#. Features include intelligent AI opponent with multiple difficulty levels, smooth 3D animations, piece movement validation, game state management, and cross-platform deployment for desktop and mobile devices.'
        },
        microservices: {
          title: 'StoryCrawler',
          description: 'Automatic comic and novel crawling tool that downloads chapter images, extracts metadata (title, author, genre, views, likes) and saves directly to database or via API. Supports chapter management, genre synchronization, and can be integrated into larger systems. Designed for easy use, fast and stable when processing hundreds of stories. Demo: https://www.youtube.com/watch?v=Kd5_8eiA2Zo'
        },
        desktop: {
          title: 'BankingApp',
          description: 'Modern mobile banking application built with Android (Java/Kotlin) and Firebase. Provides comprehensive financial management solution with multi-layer security authentication (PIN, biometric), account and card management, detailed transaction history, quick money transfers, bill payments, QR code scanning, real-time push notifications, and intuitive user interface. The system is designed to be secure, stable and compliant with banking security standards.'
        }
      }
    },

    // Services Section
    services: {
      title: 'MY',
      titleHighlight: 'SERVICES',
      description: 'Professional web development services tailored to your needs.',
      packages: {
        portfolio: {
          name: 'Portfolio',
          price: '500k',
          originalPrice: '750k',
          badge: 'BEST SELLER -30%',
          deliveryTime: '1 - 2 days',
          baseDesc: 'Basic portfolio or resume website to showcase your work.',
          features: [
            '1 Page limit',
            'Pre-made template',
            'Responsive design'
          ]
        },
        landing: {
          name: 'Landing Page',
          price: '500k',
          originalPrice: '750k',
          badge: 'FLASH SALE -30%',
          deliveryTime: '2 - 3 days',
          baseDesc: 'Basic landing page for marketing.',
          features: [
            'Basic layout',
            'Contact form',
            'Mobile friendly'
          ],
          upsell: {
            title: 'Premium Upgrade (+1 - 2M)',
            desc: 'Higher quality design, custom animations, and better conversion optimization.'
          }
        },
        ecommerce: {
          name: 'E-Commerce',
          price: 'From 3M',
          badge: '💎 POPULAR',
          negotiable: 'Price is negotiable',
          deliveryTime: '5 - 7 days',
          baseDesc: 'Basic online store setup.',
          features: [
            'Custom UI',
            'Product listing',
            'Contact/Order link'
          ],
          upsell: {
            title: 'Advanced Features (+500k - 1M)',
            desc: 'Add advanced product filtering and intelligent shopping cart system.'
          }
        },
        webapp: {
          name: 'Advanced Website',
          price: 'From 5M',
          badge: '👑 PREMIUM',
          negotiable: 'Price is negotiable',
          deliveryTime: 'From 10 days',
          baseDesc: 'Basic web application with database.',
          features: [
            'User Authentication (Login)',
            'Basic CRUD operations',
            'Database integration'
          ],
          upsell: {
            title: 'Admin Dashboard (+1 - 3M)',
            desc: 'Full admin dashboard, complex analytics, and role-based access control.'
          }
        }
      }
    },

    // Testimonials Section
    testimonials: {
      title: 'CLIENT',
      titleHighlight: 'FEEDBACK',
      description: 'What our clients say about our services.',
      items: [
        {
          id: 1,
          name: 'Truong Giang',
          role: 'Portfolio Client',
          content: 'Fast implementation and website delivery. Very fast and stable website speed. The support team is very enthusiastic.',
          image: 'https://ui-avatars.com/api/?name=TG&background=0D8ABC&color=fff'
        },
        {
          id: 2,
          name: 'Mr. Dung',
          role: 'E-Commerce Client',
          content: 'We send our thanks to Thanh. Thank you personally for your enthusiastic support to complete the project.',
          image: 'https://ui-avatars.com/api/?name=D&background=f97316&color=fff'
        },
        {
          id: 3,
          name: 'Tran Thuy Linh',
          role: 'Landing Page Client',
          content: 'Professional website design service, meticulous from layout, ideas, to appropriate and modern colors.',
          image: 'https://ui-avatars.com/api/?name=TL&background=ec4899&color=fff'
        },
        {
          id: 4,
          name: 'Le Cong Du',
          role: 'Advanced Website Client',
          content: 'I needed a new direction for my business, so I found you. You advised me on a complete digital transformation solution.',
          image: 'https://ui-avatars.com/api/?name=CD&background=8b5cf6&color=fff'
        }
      ]
    },

    // FAQ Section
    faq: {
      title: 'COMMON',
      titleHighlight: 'QUESTIONS',
      description: 'Find answers to the most frequently asked questions about our web development services.',
      items: [
        {
          question: 'Does the price include Domain and Hosting?',
          answer: 'My service quotes cover only design and development costs. However, I provide full consultation for purchasing domains and hosting at the best prices, and I offer free deployment of the system to your server.'
        },
        {
          question: 'How long is the warranty period for the source code?',
          answer: 'All websites developed by me come with a 1-year bug-fixing warranty from the handover date for any system-related issues. During the first month, I also provide free support for minor text/image adjustments.'
        },
        {
          question: 'If I lack technical skills, can I still manage the website?',
          answer: 'Absolutely! All website packages include an intuitive, user-friendly Admin Panel. I will also provide clear documentation or a video tutorial to guide you through managing your content effortlessly.'
        },
        {
          question: 'What is your payment policy?',
          answer: 'To ensure mutual commitment, payments are typically split into two stages: A 50% deposit before design and development begins, and the remaining 50% upon completion, demo approval, and prior to final source code handover.'
        },
        {
          question: 'Will the website be SEO-friendly and responsive on mobile?',
          answer: 'Definitely. 100% of the websites I build comply with the latest Google SEO standards, are optimized for blazing-fast loading speeds, and are fully responsive across all devices (Mobile, Tablet, Desktop).'
        }
      ]
    },

    // Contact Section
    contact: {
      title: 'GET IN',
      titleHighlight: 'TOUCH',
      description: "Let's collaborate on your next project. I'm always open to discussing new opportunities, innovative ideas, or partnership possibilities.",

      form: {
        sendMessage: 'Send Message',
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'your.email@example.com',
        subject: 'Subject',
        subjectPlaceholder: 'Project inquiry, collaboration, etc.',
        message: 'Message',
        messagePlaceholder: 'Tell me about your project or inquiry...',
        send: 'Send Message'
      },

      info: {
        title: 'Contact Information',
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
        locationValue: 'Ho Chi Minh City, Vietnam'
      },

      social: {
        title: 'Connect on Social',
        facebook: 'Facebook',
        zalo: 'Zalo'
      },

      availability: {
        title: 'Available for Opportunities',
        description: 'Currently open to full-time positions, freelance projects, and technical consulting.'
      }
    }
  },

  vi: {
    // Navbar
    nav: {
      about: 'Về Tôi',
      skills: 'Kỹ Năng',
      projects: 'Dự Án',
      services: 'Dịch Vụ',
      contact: 'Liên Hệ'
    },

    // Hero Section
    hero: {
      greeting: "Xin chào, tôi là",
      name: 'LÊ QUANG',
      surname: 'THÀNH',
      role: 'Lập Trình Viên Full-Stack',
      description: 'Chuyên về Phát Triển Web Full-Stack, Ứng Dụng Android và Phát Triển Game. Xây dựng các ứng dụng có khả năng mở rộng, hiệu suất cao với công nghệ hiện đại và hệ thống tự động hóa.',
      viewProjects: 'Xem Dự Án',
      getInTouch: 'Liên Hệ',
      resume: 'Hồ Sơ',
      initSequence: {
        init: 'ĐANG KHỞI ĐỘNG HỆ THỐNG...',
        loading: 'Đang tải môi trường phát triển...',
        connected: 'Kết nối thành công.'
      }
    },

    // About Section
    about: {
      title: 'VỀ',
      titleHighlight: 'TÔI',
      professionalProfile: 'Hồ Sơ Chuyên Nghiệp',
      technicalOverview: 'Tổng Quan Kỹ Thuật',

      profile: {
        fullName: 'Họ và Tên',
        fullNameValue: 'Lê Quang Thành',
        position: 'Vị Trí',
        positionValue: 'Lập Trình Viên Full-Stack',
        specialization: 'Chuyên Môn',
        specializationValue: 'Phát Triển Web • Ứng Dụng Mobile • Phát Triển Game',
        currentFocus: 'Trọng Tâm Hiện Tại',
        currentFocusValue: 'Full-Stack • Android • Unity • Tự Động Hóa Web',
        experience: 'Kinh Nghiệm',
        experienceValue: 'Dự Án Cá Nhân từ 08/2023',
        expertise: 'Chuyên Sâu',
        expertiseValue: 'Phát Triển Full-Stack • Ứng Dụng Mobile • Web Crawling'
      },

      overview: {
        paragraph1: 'Kỹ sư phần mềm đam mê với kinh nghiệm thực tế trong phát triển full-stack, ứng dụng di động và phát triển game. Chuyên về xây dựng ứng dụng web có khả năng mở rộng, triển khai hệ thống tự động hóa và tạo các trải nghiệm tương tác trên nhiều nền tảng.',
        paragraph2: 'Có kinh nghiệm phát triển ứng dụng Android, game Unity và hệ thống web crawling. Cam kết viết code sạch, dễ bảo trì đồng thời không ngừng học hỏi công nghệ mới để cung cấp các giải pháp sáng tạo.'
      },

      experience: {
        title: 'Lập Trình Viên',
        subtitle: 'Dự Án Cá Nhân',
        period: '08/2023 - Hiện tại',
        location: 'TP. Hồ Chí Minh, Việt Nam',
        responsibilities: [
          'Phát triển các ứng dụng web full-stack sử dụng React và Node.js',
          'Xây dựng các ứng dụng Android bằng Java/Kotlin, tập trung vào UI/UX và tích hợp API',
          'Phát triển các ứng dụng và trò chơi tương tác bằng Unity (C#)',
          'Quản lý và tối ưu hóa cơ sở dữ liệu sử dụng MongoDB, MySQL và PostgreSQL',
          'Triển khai cơ chế xác thực bảo mật bằng JWT-based mechanisms',
          'Triển khai và bảo trì các ứng dụng trên Vercel và Netlify',
          'Xây dựng hệ thống web crawling có khả năng mở rộng bằng Puppeteer, Cheerio và BeautifulSoup',
          'Thiết kế các pipeline trích xuất dữ liệu có khả năng chịu lỗi với các chiến lược anti-blocking và retry',
          'Tự động hóa quy trình làm việc của dữ liệu bằng cron jobs',
          'Cấu trúc và tích hợp dữ liệu thu thập được cho các hệ thống backend',
          'Xử lý dữ liệu phụ đề/video bằng BeautiSub'
        ]
      },

      highlights: {
        fullstack: {
          title: 'Phát Triển Full-Stack',
          description: 'Xây dựng ứng dụng web hoàn chỉnh với React, Node.js và các cơ sở dữ liệu hiện đại (MongoDB, MySQL, PostgreSQL).'
        },
        mobile: {
          title: 'Phát Triển Mobile',
          description: 'Tạo các ứng dụng Android bằng Java/Kotlin, tập trung vào UI/UX trực quan và tích hợp API liền mạch.'
        },
        automation: {
          title: 'Tự Động Hóa & Web Crawling',
          description: 'Phát triển hệ thống web scraping có khả năng mở rộng với Puppeteer, Cheerio và BeautifulSoup cùng chiến lược anti-blocking.'
        },
        game: {
          title: 'Phát Triển Game',
          description: 'Xây dựng game và ứng dụng tương tác sử dụng Unity engine với C# để triển khai đa nền tảng.'
        }
      }
    },

    // Skills Section
    skills: {
      title: 'CÔNG NGHỆ',
      titleHighlight: 'SỬ DỤNG',
      toolsTitle: 'Công Cụ & Framework',

      categories: {
        backend: 'Phát Triển Backend',
        frontend: 'Frontend & UI',
        databases: 'Cơ Sở Dữ Liệu',
        realtime: 'Giao Tiếp Thời Gian Thực',
        devops: 'DevOps & Cloud',
        ml: 'Machine Learning'
      },

      additionalSkills: [
        {
          name: 'Web Crawling',
          description: 'Puppeteer, Cheerio, BeautifulSoup'
        },
        {
          name: 'Tự Động Hóa',
          description: 'Quy trình dữ liệu, Cron jobs'
        },
        {
          name: 'Thiết Kế Hệ Thống',
          description: 'Kiến trúc có khả năng mở rộng'
        },
        {
          name: 'Xử Lý Dữ Liệu',
          description: 'Pipeline ETL, Tích hợp dữ liệu'
        },
        {
          name: 'Phân Tích Nghiệp Vụ',
          description: 'Thu thập yêu cầu'
        }
      ]
    },

    // Projects Section
    projects: {
      title: 'DỰ ÁN',
      titleHighlight: 'NỔI BẬT',
      active: 'Hoạt Động',
      sourceCode: 'Mã Nguồn',
      liveDemo: 'Demo Trực Tuyến',
      viewAllGithub: 'Xem Tất Cả Dự Án Trên GitHub',

      projectList: {
        webrtc: {
          title: 'Website Truyện Tranh',
          description: 'Nền tảng đọc truyện tranh hiện đại được xây dựng với React và Node.js. Các tính năng bao gồm trình đọc truyện với chuyển tiếp trang mượt mà, xác thực người dùng, truyện yêu thích, theo dõi tiến trình đọc, và thiết kế responsive tối ưu cho mọi thiết bị.'
        },
        ml: {
          title: 'Game Cờ Vua TinyChess',
          description: 'Game cờ vua tương tác được xây dựng với Unity và C#. Các tính năng bao gồm AI thông minh với nhiều mức độ khó, hoạt ảnh 3D mượt mà, xác thực di chuyển quân cờ, quản lý trạng thái game, và triển khai đa nền tảng cho desktop và mobile.'
        },
        microservices: {
          title: 'StoryCrawler',
          description: 'Công cụ crawl truyện tranh và truyện chữ tự động, tải ảnh chương, trích xuất thông tin (tên truyện, tác giả, thể loại, lượt xem, lượt thích) và lưu trực tiếp vào database hoặc qua API. Hỗ trợ quản lý chapters, đồng bộ thể loại, và có thể mở rộng để tích hợp vào hệ thống lớn. Tool được thiết kế để dễ dùng, nhanh chóng và ổn định khi xử lý hàng trăm truyện. Demo: https://www.youtube.com/watch?v=Kd5_8eiA2Zo'
        },
        desktop: {
          title: 'BankingApp',
          description: 'Ứng dụng ngân hàng di động hiện đại được xây dựng với Android (Java/Kotlin) và Firebase. Cung cấp giải pháp quản lý tài chính toàn diện với xác thực bảo mật đa lớp (PIN, sinh trắc học), quản lý tài khoản và thẻ, lịch sử giao dịch chi tiết, chuyển tiền nhanh chóng, thanh toán hóa đơn, quét mã QR, thông báo đẩy thời gian thực, và giao diện người dùng trực quan. Hệ thống được thiết kế an toàn, ổn định và tuân thủ các chuẩn bảo mật ngân hàng.'
        }
      }
    },

    // Services Section
    services: {
      title: 'DỊCH VỤ',
      titleHighlight: 'CỦA TÔI',
      description: 'Cung cấp các giải pháp phát triển web chuyên nghiệp phù hợp với nhu cầu và ngân sách của bạn.',
      packages: {
        portfolio: {
          name: 'Portfolio',
          price: '500.000đ',
          originalPrice: '750.000đ',
          badge: '🔥 BEST SELLER',
          deliveryTime: 'Bàn giao: 1 - 2 ngày',
          baseDesc: 'Website hồ sơ năng lực cá nhân, giữ được chất lượng ổn định.',
          features: [
            'Giới hạn 1 trang',
            'Sử dụng các template có sẵn',
            'Tối ưu hiển thị đa cấu hình'
          ]
        },
        landing: {
          name: 'Landing Page',
          price: '500.000đ',
          originalPrice: '750.000đ',
          badge: 'FLASH SALE -30%',
          deliveryTime: 'Bàn giao: 2 - 3 ngày',
          baseDesc: 'Gói cơ bản (Basic) đáp ứng nhu cầu quảng bá nhanh.',
          features: [
            'Thiết kế layout cơ bản',
            'Form tư vấn / thu thập Data',
            'Responsive thiết bị'
          ],
          upsell: {
            title: 'Gói Chuẩn Hơn (+1 - 2 triệu)',
            desc: 'Nâng cấp UI/UX cao cấp, hiệu ứng chuyên nghiệp và tăng chuyển đổi mua hàng cao.'
          }
        },
        ecommerce: {
          name: 'Web Bán Hàng',
          price: 'Từ 3 triệu',
          badge: '💎 PHỔ BIẾN',
          negotiable: 'Giá có thể thương lượng thêm',
          deliveryTime: 'Thoả thuận từ 5 - 7 ngày',
          baseDesc: 'Gói cơ bản (Basic) cho thương mại điện tử nhỏ.',
          features: [
            'Thiết kế giao diện (UI)',
            'Danh sách sản phẩm (List)',
            'Thông tin liên hệ đặt hàng'
          ],
          upsell: {
            title: 'Option Mở Rộng (+500k - 1 triệu)',
            desc: 'Bổ sung ngay tính năng Lọc (Filter) thông minh và Hệ thống Giỏ hàng (Cart).'
          }
        },
        webapp: {
          name: 'Website Nâng Cao',
          price: 'Từ 5 triệu',
          badge: '👑 CAO CẤP',
          negotiable: 'Giá có thể thương lượng thêm',
          deliveryTime: 'Chi tiết theo dự án (Từ 10 ngày)',
          baseDesc: 'Hệ thống ứng dụng Web cơ bản.',
          features: [
            'Tính năng Đăng nhập (Login)',
            'Thao tác dữ liệu (CRUD đơn giản)',
            'Tích hợp kết nối Database'
          ],
          upsell: {
            title: 'Nâng Cấp Quản Trị (+1 - 3 triệu)',
            desc: 'Bao gồm Dashboard hệ thống phân tích và Phân quyền sử dụng (Role-based access).'
          }
        }
      }
    },

    // Testimonials Section
    testimonials: {
      title: 'ĐÁNH GIÁ',
      titleHighlight: 'KHÁCH HÀNG',
      description: 'Những lời nhận xét chân thành từ các đối tác và khách hàng đã làm việc cùng tôi.',
      items: [
        {
          id: 1,
          name: 'Anh Trường Giang',
          role: 'Khách hàng dự án Portfolio',
          content: 'Thời gian triển khai và bàn giao website nhanh chóng, Website tốc độ rất nhanh và ổn định. Đội ngũ support rất nhiệt tình và chu đáo.',
          image: 'https://ui-avatars.com/api/?name=TG&background=0D8ABC&color=fff'
        },
        {
          id: 2,
          name: 'Anh Dũng',
          role: 'Khách hàng dự án Web Bán Hàng',
          content: 'Công Ty chúng tôi gửi lời cảm ơn. Cảm ơn cá nhân bạn Thành đã nhiệt tình hỗ trợ Sơn Hà hoàn thiện hệ thống xuất sắc.',
          image: 'https://ui-avatars.com/api/?name=D&background=f97316&color=fff'
        },
        {
          id: 3,
          name: 'Chị Trần Thùy Linh',
          role: 'Khách hàng dự án Landing Page',
          content: 'Dịch vụ thiết kế website chuyên nghiệp, tỉ mỉ từ khâu lên bố cục, ý tưởng đến, màu sắc phù hợp, hiện đại.',
          image: 'https://ui-avatars.com/api/?name=TL&background=ec4899&color=fff'
        },
        {
          id: 4,
          name: 'Anh Lê Công Du',
          role: 'Khách hàng dự án Website Nâng Cao',
          content: 'Tôi cần tìm hướng đi mới cho doanh nghiệp, nên đã tìm đến nền tảng này. Các bạn đã tư vấn cho tôi bộ giải pháp hệ thống số rất tốt.',
          image: 'https://ui-avatars.com/api/?name=CD&background=8b5cf6&color=fff'
        },
        {
          id: 5,
          name: 'Anh Lê',
          role: 'Khách hàng dự án Web Bán Hàng',
          content: 'Website là nền tảng cốt lõi để bán hàng online, đã giúp chúng tôi tiếp cận được nhiều khách hàng mới hơn qua các kênh online.',
          image: 'https://ui-avatars.com/api/?name=AL&background=14b8a6&color=fff'
        },
        {
          id: 6,
          name: 'Anh Trọng',
          role: 'Khách hàng dự án Portfolio',
          content: 'Giao diện web giúp định vị được thương hiệu công ty và giới thiệu dịch vụ sản phẩm đầy đủ và tiếp cận được nhiều khách hàng hơn.',
          image: 'https://ui-avatars.com/api/?name=Tr&background=3b82f6&color=fff'
        },
        {
          id: 7,
          name: 'Anh Văn Vượng',
          role: 'Khách hàng dự án Website Nâng Cao',
          content: 'Hệ thống cung cấp nhiều tính năng hữu ích như quản lý phòng trọ, hóa đơn, và có thiết kế thân thiện, dễ sử dụng cho mọi người.',
          image: 'https://ui-avatars.com/api/?name=VV&background=10b981&color=fff'
        },
        {
          id: 8,
          name: 'Bảo Trâm',
          role: 'Khách hàng dự án Landing Page',
          content: 'Dịch vụ vận hành luôn hoạt động rất ổn định, chạy nhanh, đáp ứng kịp tiến độ kinh doanh của chúng tôi trong thời gian qua.',
          image: 'https://ui-avatars.com/api/?name=BT&background=f43f5e&color=fff'
        }
      ]
    },

    // FAQ Section
    faq: {
      title: 'CÂU HỎI',
      titleHighlight: 'THƯỜNG GẶP',
      description: 'Giải đáp những thắc mắc phổ biến nhất của khách hàng trước khi bắt đầu dự án.',
      items: [
        {
          question: 'Giá trên đã bao gồm Tên miền và Hosting chưa?',
          answer: 'Báo giá dịch vụ chỉ bao gồm chi phí thiết kế và lập trình (Source Code). Tuy nhiên, tôi sẽ hỗ trợ tư vấn mua tên miền và hosting với giá tốt nhất, đồng thời miễn phí công cài đặt hệ thống lên Server để trang web chạy hoàn chỉnh.'
        },
        {
          question: 'Thời gian bảo hành mã nguồn là bao lâu?',
          answer: 'Toàn bộ website do tôi phát triển đều được bảo hành mã nguồn (Fix bug) trong vòng 1 năm kể từ ngày nghiệm thu đối với các lỗi phát sinh do hệ thống. Trong tháng đầu tiên sau khi vận hành, tôi hỗ trợ miễn phí chỉnh sửa text, ảnh nhỏ hoặc tinh chỉnh tỉ lệ giao diện.'
        },
        {
          question: 'Tôi không rành về kỹ thuật thì có quản lý web được không?',
          answer: 'Hoàn toàn được! Gói Web Bán Hàng và Nâng Cao được tích hợp trang Quản trị (Admin Panel) với giao diện tiếng Việt cực kỳ trực quan, dễ như lướt Facebook. Tôi sẽ cung cấp tài liệu chi tiết hoặc video hướng dẫn cụ thể sau khi bàn giao để bạn làm chủ hệ thống.'
        },
        {
          question: 'Chính sách thanh toán như thế nào?',
          answer: 'Để đảm bảo cam kết công việc, dự án sẽ được chia làm 2 giai đoạn thanh toán: Tạm ứng 50% trước khi thiết kế giao diện và 50% còn lại sẽ được thanh toán sau khi hoàn thiện đầy đủ, duyệt demo, đẩy lên tên miền thực tế và bàn giao Source Code.'
        },
        {
          question: 'Website có dùng được cho điện thoại và hỗ trợ chuẩn SEO không?',
          answer: 'Chắc chắn rồi. 100% website được bộ phận của tôi thiết kế tuân thủ các nguyên tắc chuẩn SEO mới nhất của Google, tối ưu điểm tốc độ tải cực nhanh và cấu trúc UI linh hoạt co giãn hoàn hảo trên cả 3 giao diện Mobile, Tablet và Desktop.'
        }
      ]
    },

    // Contact Section
    contact: {
      title: 'LIÊN HỆ',
      titleHighlight: 'VỚI TÔI',
      description: 'Hãy cùng hợp tác trong dự án tiếp theo của bạn. Tôi luôn sẵn sàng thảo luận về các cơ hội mới, ý tưởng sáng tạo hoặc khả năng hợp tác.',

      form: {
        sendMessage: 'Gửi Tin Nhắn',
        name: 'Tên',
        namePlaceholder: 'Tên của bạn',
        email: 'Email',
        emailPlaceholder: 'email.cua.ban@example.com',
        subject: 'Chủ Đề',
        subjectPlaceholder: 'Yêu cầu dự án, hợp tác, v.v...',
        message: 'Tin Nhắn',
        messagePlaceholder: 'Hãy cho tôi biết về dự án hoặc yêu cầu của bạn...',
        send: 'Gửi Tin Nhắn'
      },

      info: {
        title: 'Thông Tin Liên Hệ',
        email: 'Email',
        phone: 'Điện Thoại',
        location: 'Địa Điểm',
        locationValue: 'Thành Phố Hồ Chí Minh, Việt Nam'
      },

      social: {
        title: 'Kết Nối Mạng Xã Hội',
        facebook: 'Facebook',
        zalo: 'Zalo'
      },

      availability: {
        title: 'Sẵn Sàng Cho Cơ Hội Mới',
        description: 'Hiện đang mở cho các vị trí toàn thời gian, dự án freelance và tư vấn kỹ thuật.'
      }
    }
  }
}
