/**
 * Global JavaScript for Toppers Guru Redesign
 * Manages translation dictionaries, language switching, form submissions, and UI helpers
 */

// i18n Translation Dictionary
const translations = {
  en: {
    nav: {
      home: "Home",
      courses: "Courses",
      regularCourses: "Regular Courses",
      blog: "Blog",
      about: "About",
      contact: "Contact",
      gallery: "Gallery",
      applyNow: "Apply Now",
      call: "Call"
    },
    footer: {
      runningUnder: "Running under Sanjeevni Edu & Welfare Society (Govt. Recognised)",
      description: "Leading coaching institute with 30+ years of experience providing premium educational guidance and skill development programs in Krishna Nagar, Delhi.",
      quickLinks: "Quick Links",
      legalInfo: "Legal Info",
      contactUs: "Contact Us",
      rights: "All Rights Reserved.",
      developedBy: "Website Developed by"
    },
    home: {
      aiBadge: "AI-Powered Course Matcher",
      searchPlaceholder: "Search for NIOS, CBSE, CUET, Distance MBA, B.Com...",
      searchBtn: "Find Programs",
      bookCounsellingTitle: "Book Your Free Counseling Session",
      bookCounsellingDesc: "Our academic advisors will call you back within 24 hours.",
      accreditBadge: "ACCREDITATIONS",
      accreditTitle: "Our Authorisations, Recognitions & Registrations",
      accreditSubtitle: "Trusted by leading educational boards and institutions across the country. We maintain the highest standards of educational excellence.",
      compareTitle: "Why Choose Toppers Guru?",
      compareSubtitle: "How we differ from traditional tuition coaching centers",
      heroSubtitle: "NIOS | CBSE | CUET | CLAT | Distance Education | Skill Courses",
      heroTitle1: "Transform Your Future with",
      heroTitleHighlight: "Expert Coaching",
      heroTitle2: "& Skill Development",
      heroDesc: "Accelerate your career with expert-led preparation, memory science techniques, and job-ready skill courses. Join 10,000+ successful students.",
      affordableFee: "Affordable Fee Structure for Every Student",
      exploreCourses: "Explore Courses",
      bookCounselling: "Book Free Counselling",
      expertFaculty: "Expert Faculty",
      studyMaterial: "Study Material",
      placementSupport: "Placement Support",
      formName: "Full Name *",
      formEmail: "Email Address",
      formPhone: "Phone Number *",
      formCourse: "Course Interest *",
      formNamePlaceholder: "Enter your full name",
      formEmailPlaceholder: "Enter your email (optional)",
      formPhonePlaceholder: "Enter 10-digit mobile number",
      formSelectCourse: "Select Course *",
      formCourseNios: "NIOS Secondary / Sr. Secondary",
      formCourseCbse: "CBSE School Coaching (9th-12th)",
      formCourseCuet: "CUET / Competitive Entrance Prep",
      formCourseDistance: "Distance Education (UG, PG, Diploma)",
      formCourseSkill: "Skill & Vocational Courses",
      formCourseMemory: "Memory Science Training",
      stats: {
        years: "Years Experience",
        students: "Students Taught",
        courses: "Courses Offered",
        descYears: "Over 30 years of trust & academic legacy since 1989",
        descStudents: "10,000+ students guided to academic success",
        descCourses: "450+ active courses across multiple boards & domains"
      },
      pathway: "Your Pathway to Success",
      explorePrograms: "Explore Our Programs",
      viewAllPrograms: "View All Programs",
      higherEd: "Higher Education",
      regularMode: "Regular Mode Courses",
      admissionGuidance: "Admission Guidance & Assistance for Various UGC Approved Universities Across India",
      viewAllRegular: "View All Regular Courses",
      memoryScience: "Memory Science Based Learning",
      memoryDesc1: "Special coaching for weak students with concept clarity and fast learning.",
      memoryDesc2: "Memory Science techniques allow students to remember complex equations, histories, and answers easily. Learn to memorize anything faster and forget nothing.",
      memoryHindi: "कमजोर छात्रों के लिए विशेष प्रशिक्षण",
      memoryFeat1: "Concept clarity through visual association",
      memoryFeat2: "Fast learning techniques backed by cognitive science",
      memoryFeat3: "Special focus and tailored paths for weak students",
      memoryFeat4: "Memory-based learning methods for long-term retention",
      enquireNow: "Enquire Now",
      admissionPortalSub: "Direct Admission Guidance",
      admissionPortalTitle: "Get Admission Counseling from Experts",
      applyOnline: "Request a Call Back",
      galleryPreview: "Gallery Preview",
      galleryDesc: "A glimpse into our vibrant learning environment and student achievements.",
      viewFullGallery: "View Full Gallery",
      category: {
        nios: "NIOS/BOSSE",
        cbse: "CBSE Coaching",
        cuet: "CUET/CLAT",
        distance: "Distance Education",
        skill: "Skill Courses (NSDC)",
        mnemonic: "Mnemonics Science",
        ai: "AI Learning",
        prof: "Professional Courses",
        niosDesc: "Flexible secondary & senior secondary schooling with full guidance.",
        cbseDesc: "Strong conceptual foundation for board students (Classes 1–12).",
        cuetDesc: "Crack entrance exams for top central universities & NLUs.",
        distanceDesc: "Get recognized UGC approved degrees while you work.",
        skillDesc: "Job-ready vocational training and computing programs.",
        mnemonicDesc: "Fast learning and memory techniques for retention & grades.",
        aiDesc: "Smart study tools, prompt engineering, and digital planning.",
        profDesc: "Counseling & coaching for law, teaching, and pharmacy streams.",
        niosCount: "5 Courses",
        cbseCount: "4 Courses",
        cuetCount: "4 Courses",
        distanceCount: "4 Courses",
        skillCount: "6 Courses",
        mnemonicCount: "4 Courses",
        aiCount: "3 Courses",
        profCount: "6 Courses",
        exploreCategories: "Explore Our Learning Domains",
        categoryIntro: "Find the right path for your education. Click any category to view all available courses."
      }
    },
    courses: {
      comprehensive: "Comprehensive Programs",
      findPerfect: "Find Your Perfect Course",
      findDesc: "From foundational school education to advanced competitive preparation and skill development. Explore our comprehensive selection of UGC-approved programs, CBSE coaching, and memory science training designed to unlock your full potential and shape a brighter career.",
      selectCategory: "Select a Category",
      selectDesc: "Choose an area of study to view available courses.",
      coursesCount: "Courses",
      categories: "Categories",
      programs: "Programs"
    },
    courseDetail: {
      backToCourses: "Back to Courses",
      programDetails: "Program Details",
      comprehensiveProgram: "Comprehensive Course Program",
      programDesc: "Join our expertly crafted program designed to build strong fundamentals and ensure academic success.",
      flexibleTiming: "Flexible Timing",
      studyMaterial: "Study Material",
      expertFaculty: "Expert Faculty",
      whatYouWillLearn: "What You Will Learn",
      enquireNow: "Enquire Now",
      fillForm: "Fill out the form below to get complete details about this course."
    },
    regularCourses: {
      higherEd: "Higher Education Programs",
      title: "Regular Mode Courses",
      desc: "Empower your career with recognized undergraduate and <br> postgraduate degrees. We provide comprehensive admission <br> guidance for top UGC approved universities across India.",
      enrollNow: "Enroll Now",
      takeNextStep: "Take the Next Step in Your Education",
      admissionGuidance: "Admission Guidance & Assistance for Various UGC Approved Universities Across India",
      fillForm: "Fill out the form below to get expert counseling and admission support for your chosen program."
    },
    about: {
      established: "ESTABLISHED: 1989",
      title1: "Building future through",
      titleHighlight: "quality & Affordable education",
      desc: "Running under Sanjeevni Edu & Welfare Society (Govt. Recognised), Toppers Guru has stood as a beacon of academic excellence and skill development in Krishna Nagar, Delhi.",
      ourRoots: "Our Roots",
      est1989: "Established in 1989",
      evolution: "Evolution",
      growthJourney: "Our Growth Journey",
      ourPride: "Our Pride",
      studentTrust: "Student Trust",
      mission: "Our Mission",
      vision: "Our Vision",
      chanakyaWisdom: "Chanakya Wisdom for Success",
      trust1: "Personalized Attention",
      trust2: "Flexible learning Paths",
      trust3: "Govt. Recognised Excellence",
      quote1: '"Success comes with discipline."',
      quote2: '"Education is the best friend."',
      quote3: '"Think before every action."',
      quote4: '"Excellence is a habit, not an act."',
      quote5: '"Invest in yourself through education."',
      quote6: '"Knowledge is power when applied."',
      mindsBehind: "The Minds Behind The Success",
      meetLeadership: "Meet Our Leadership & Faculty"
    },
    contact: {
      title: "Contact Us",
      desc: "Get in touch with us for admissions, course enquiries, or any questions. We're here to help you succeed.",
      reachOut: "Reach Out to Us",
      reachOutDesc: "Have questions about our programs or admissions? Reach out to our team directly or fill out the inquiry form.",
      chatWhatsapp: "Chat on WhatsApp",
      callNow: "Call Now",
      followUs: "Follow Us",
      sendInquiry: "Send an Inquiry",
      fillForm: "Please fill out the form below and we will get back to you shortly.",
      guidelinesSub: "Frequently Asked Questions",
      guidelinesTitle: "Admission Guidelines & FAQ",
      guidelinesDesc: "Key information for candidates seeking admission and guidance at Toppers Guru.",
      faq1Title: "What documents are required?",
      faq1Desc: "You need to submit copies of previous mark sheets, Aadhaar Card / ID proof, and passport-size photographs during verification.",
      faq2Title: "How are batches allocated?",
      faq2Desc: "Batch timings are decided by management based on seat availability. While preferences are considered, final allocations are binding.",
      faq3Title: "What is the admission criteria?",
      faq3Desc: "Admissions are processed on a first-come, first-served basis. Seat confirmation occurs after document verification and registration fee payment."
    },
    gallery: {
      ourMemories: "Our Memories",
      title: "Our Journey, Success & Memories",
      desc: "Explore the moments that define Toppers Guru."
    },
    success: {
      title: "Inquiry Submitted!",
      desc: "Thank you for your interest. Our academic counselors will get back to you shortly to guide you through the process.",
      backBtn: "Close Window"
    },
    compare: {
      features: "Key Features",
      toppersGuru: "Toppers Guru Advantage",
      traditional: "Traditional Coaching",
      feat1: "Memory Science & Mnemonics",
      yesMnemonics: "Bilingual Mnemonics",
      noMnemonics: "Rote Memorization",
      feat2: "30+ Years Academic Legacy",
      yesLegacy: "Since 1989",
      noLegacy: "Temporary Tutors",
      feat3: "ISO 9001:2015 Certification",
      yesIso: "Govt Recognised Society",
      noIso: "Unregistered Tutors",
      feat4: "UGC-DEB University Guidance",
      yesUgc: "Direct Course Matching",
      noUgc: "No Career Counseling",
      feat5: "End-to-End Filing Support",
      yesFiling: "Form, TMA & Exam Booking",
      noFiling: "Self-applied only",
      feat6: "Bilingual Material & Batches",
      yesBilingual: "English & Hindi support",
      noBilingual: "Single language only"
    },
    course: {
      joinClass: "Join Our Class",
      reviews: "Reviews",
      tag: {
        secondary: "Secondary Board",
        senior: "Senior Secondary",
        foundations: "Foundations",
        academicRoi: "Academic ROI",
        trending: "Trending Prep",
        ugc: "UGC Approved",
        globalPg: "Global PG",
        placement: "Placement Support",
        bhoolna: "Bhoolna Bhool Jaoge"
      },
      duration: {
        nios10: "Duration: 1 Year",
        nios12: "Duration: 1 Year",
        cbse910: "Duration: Full Year",
        cbse1112: "Duration: Full Year",
        cuet: "Duration: 3-6 Months",
        ug: "Duration: 3 Years",
        pg: "Duration: 2 Years",
        skill: "Duration: 6-12 Months",
        memory: "Duration: 3 Months"
      },
      title: {
        nios10: "NIOS Class 10th Support",
        nios12: "NIOS Class 12th Coaching",
        cbse910: "CBSE Class 9-10 Coaching",
        cbse1112: "CBSE Class 11-12 Coaching",
        cuet: "CUET Entrance Prep",
        ug: "Distance UG Guidance",
        pg: "Distance PG Guidance",
        skill: "Vocational & IT Skills",
        memory: "Memory Science Training"
      },
      desc: {
        nios10: "Flexible open schooling tuition for Class 10 students. Covers syllabus planning, assignments filing, and exam counseling.",
        nios12: "Comprehensive academic preparation for Sr. Secondary NIOS streams (Arts, Commerce, Science) with expert counselors.",
        cbse910: "Concept-strengthening coaching for Science, Mathematics, English, and Social Studies. Weekly evaluations and board practice.",
        cbse1112: "Stream-specific prep for Board exams. Regular test series, memory mapping shortcuts, and board evaluation sessions.",
        cuet: "Prepare for Common University Entrance Test. Domain-specific tutorials, languages, and general mental ability mocks.",
        ug: "UGC-DEB approved Bachelor degrees (BA, B.Com, BBA). Get university options comparisons, eligibility checks, and guides.",
        pg: "Master degrees admissions (MA, MBA, MCA). Compare universities on approvals, e-learning libraries, and monthly EMI options.",
        skill: "Job-oriented training in digital marketing, computer applications, graphic design, and nursery teacher training certification.",
        memory: "Scientific mnemonics training to memorize historical timelines, formulas, and long descriptions quickly. Learn forget-proof recall."
      },
      feat: {
        nios10: {
          1: "Syllabus Mapping & Planning",
          2: "TMA & Practical Guidance",
          3: "Exam Form Submission Help"
        },
        nios12: {
          1: "Stream Matching (Sci/Com/Arts)",
          2: "Bilingual Study Guides",
          3: "Admission Registration Filing"
        },
        cbse910: {
          1: "Maths & Science Focus",
          2: "Weekly Performance Tracker",
          3: "Concept Clearing Tutorials"
        },
        cbse1112: {
          1: "Stream Prep (PCM/Com/Arts)",
          2: "Board Exam Mock Papers",
          3: "Memory Mnemonics Shortcuts"
        },
        cuet: {
          1: "Domain Subject Mock Exams",
          2: "General Test Mentoring",
          3: "University Admission Matching"
        },
        ug: {
          1: "UGC-DEB Approved Degree Selection",
          2: "Comparison of Fees & Approvals",
          3: "Complete Admission Counseling"
        },
        pg: {
          1: "Executive & General MBA Options",
          2: "EMI Fee Payment Advice",
          3: "E-Library & Study Resources"
        },
        skill: {
          1: "Digital Marketing & IT Skills",
          2: "Nursery Teacher Training (NTT)",
          3: "Placements & CV Building support"
        },
        memory: {
          1: "Bhoolna Bhool Jaoge recall system",
          2: "Fast Reading & Revision tricks",
          3: "Science-backed mnemonics"
        }
      }
    }
  },
  hi: {
    nav: {
      home: "होम",
      courses: "कोर्स",
      regularCourses: "रेगुलर कोर्स",
      blog: "ब्लॉग",
      about: "हमारे बारे में",
      contact: "संपर्क करें",
      gallery: "गैलरी",
      applyNow: "अभी आवेदन करें",
      call: "कॉल करें"
    },
    footer: {
      runningUnder: "संजीवनी एडु एंड वेलफेयर सोसाइटी (सरकार द्वारा मान्यता प्राप्त) के अंतर्गत संचालित",
      description: "कृष्णा नगर, दिल्ली में 30+ वर्षों के अनुभव के साथ प्रीमियम शैक्षिक मार्गदर्शन और कौशल विकास कार्यक्रम प्रदान करने वाला अग्रणी कोचिंग संस्थान।",
      quickLinks: "त्वरित लिंक",
      legalInfo: "कानूनी जानकारी",
      contactUs: "संपर्क करें",
      rights: "सर्वाधिकार सुरक्षित।",
      developedBy: "वेबसाइट विकसित कर्ता:"
    },
    home: {
      aiBadge: "एआई-संचालित कोर्स मैचर",
      searchPlaceholder: "NIOS, CBSE, CUET, डिस्टेंस MBA, B.Com खोजें...",
      searchBtn: "प्रोग्राम खोजें",
      bookCounsellingTitle: "मुफ्त काउंसलिंग सत्र बुक करें",
      bookCounsellingDesc: "हमारे शैक्षणिक सलाहकार 24 घंटे के भीतर आपसे संपर्क करेंगे।",
      accreditBadge: "प्राधिकरण और मान्यताएं",
      accreditTitle: "हमारे प्राधिकरण, मान्यताएं और पंजीकरण",
      accreditSubtitle: "देश भर के प्रमुख शैक्षणिक बोर्डों और संस्थानों द्वारा विश्वसनीय। हम शैक्षिक उत्कृष्टता के उच्चतम मानकों को बनाए रखते हैं।",
      compareTitle: "टॉपर्स गुरु को क्यों चुनें?",
      compareSubtitle: "हम पारंपरिक ट्यूशन कोचिंग सेंटरों से कैसे भिन्न हैं",
      heroSubtitle: "एनआईओएस | सीबीएसई | सीयूईटी | क्लैट | दूरस्थ शिक्षा | कौशल पाठ्यक्रम",
      heroTitle1: "अपने भविष्य को बदलें",
      heroTitleHighlight: "विशेषज्ञ कोचिंग",
      heroTitle2: "और कौशल विकास के साथ",
      heroDesc: "विशेषज्ञों द्वारा तैयारी, मेमोरी साइंस तकनीक और नौकरी के लिए तैयार कौशल पाठ्यक्रमों के साथ अपने करियर को गति दें। 10,000+ सफल छात्रों से जुड़ें।",
      affordableFee: "हर छात्र के लिए किफायती शुल्क संरचना",
      exploreCourses: "कोर्स देखें",
      bookCounselling: "मुफ्त काउंसलिंग बुक करें",
      expertFaculty: "विशेषज्ञ संकाय",
      studyMaterial: "अध्ययन सामग्री",
      placementSupport: "प्लेसमेंट सहायता",
      formName: "पूरा नाम *",
      formEmail: "ईमेल पता",
      formPhone: "फ़ोन नंबर *",
      formCourse: "कोर्स रुचि *",
      formNamePlaceholder: "अपना पूरा नाम दर्ज करें",
      formEmailPlaceholder: "अपना ईमेल दर्ज करें (वैकल्पिक)",
      formPhonePlaceholder: "10-अंकीय मोबाइल नंबर दर्ज करें",
      formSelectCourse: "कोर्स चुनें *",
      formCourseNios: "NIOS सेकेंडरी / सीनियर सेकेंडरी",
      formCourseCbse: "CBSE स्कूल कोचिंग (9वीं-12वीं)",
      formCourseCuet: "CUET / प्रतियोगी प्रवेश तैयारी",
      formCourseDistance: "दूरस्थ शिक्षा (UG, PG, डिप्लोमा)",
      formCourseSkill: "कौशल और व्यावसायिक पाठ्यक्रम",
      formCourseMemory: "मेमोरी साइंस प्रशिक्षण",
      stats: {
        years: "वर्षों का अनुभव",
        students: "छात्र पढ़ाए गए",
        courses: "कोर्स उपलब्ध",
        descYears: "1989 से शैक्षणिक उत्कृष्टता और 30+ वर्षों का विश्वास",
        descStudents: "10,000+ से अधिक छात्रों को शैक्षणिक सफलता के लिए मार्गदर्शन",
        descCourses: "विभिन्न बोर्डों और विश्वविद्यालयों में 450+ सक्रिय पाठ्यक्रम"
      },
      pathway: "सफलता का आपका मार्ग",
      explorePrograms: "हमारे कार्यक्रम देखें",
      viewAllPrograms: "सभी कार्यक्रम देखें",
      higherEd: "उच्च शिक्षा",
      regularMode: "रेगुलर मोड कोर्स",
      admissionGuidance: "भारत भर के विभिन्न यूजीसी अनुमोदित विश्वविद्यालयों के लिए प्रवेश मार्गदर्शन और सहायता",
      viewAllRegular: "सभी रेगुलर कोर्स देखें",
      memoryScience: "मेमोरी साइंस आधारित शिक्षा",
      memoryDesc1: "कॉन्सेप्ट क्लैरिटी और फास्ट लर्निंग के साथ कमजोर छात्रों के लिए विशेष कोचिंग।",
      memoryDesc2: "मेमोरी साइंस तकनीक छात्रों को जटिल समीकरणों, इतिहास और उत्तरों को आसानी से याद रखने की अनुमति देती है। किसी भी चीज़ को तेज़ी से याद करना सीखें और कुछ भी न भूलें।",
      memoryHindi: "कमजोर छात्रों के लिए विशेष प्रशिक्षण",
      memoryFeat1: "दृश्य संघ (visual association) के माध्यम से अवधारणा स्पष्टता",
      memoryFeat2: "संज्ञानात्मक विज्ञान (cognitive science) द्वारा समर्थित तीव्र सीखने की तकनीकें",
      memoryFeat3: "कमजोर छात्रों के लिए विशेष ध्यान और अनुकूलित मार्ग",
      memoryFeat4: "दीर्घकालिक प्रतिधारण (retention) के लिए स्मृति-आधारित शिक्षण विधियां",
      enquireNow: "अभी पूछताछ करें",
      admissionPortalSub: "सीधा प्रवेश मार्गदर्शन",
      admissionPortalTitle: "विशेषज्ञों से प्रवेश परामर्श प्राप्त करें",
      applyOnline: "कॉल बैक का अनुरोध करें",
      galleryPreview: "गैलरी पूर्वावलोकन",
      galleryDesc: "हमारे जीवंत सीखने के माहौल और छात्रों की उपलब्धियों की एक झलक।",
      viewFullGallery: "पूरी गैलरी देखें",
      category: {
        nios: "NIOS/BOSSE",
        cbse: "CBSE कोचिंग",
        cuet: "CUET/CLAT",
        distance: "डिस्टेंस एजुकेशन",
        skill: "स्किल कोर्सेज (NSDC)",
        mnemonic: "मेमोरी साइंस (निमोनिक्स)",
        ai: "AI लर्निंग",
        prof: "प्रोफेशनल कोर्सेज",
        niosDesc: "लचीली माध्यमिक और उच्च माध्यमिक शिक्षा पूर्ण मार्गदर्शन के साथ।",
        cbseDesc: "बोर्ड परीक्षा के छात्रों (कक्षा 1-12) के लिए मजबूत वैचारिक आधार।",
        cuetDesc: "शीर्ष केंद्रीय विश्वविद्यालयों और एनएलयू के लिए प्रवेश परीक्षाओं को क्रैक करें।",
        distanceDesc: "काम करने के साथ-साथ मान्यता प्राप्त यूजीसी स्वीकृत डिग्री प्राप्त करें।",
        skillDesc: "नौकरी के लिए तैयार व्यावसायिक प्रशिक्षण और कंप्यूटिंग कार्यक्रम।",
        mnemonicDesc: "याद रखने की शक्ति और ग्रेड में सुधार के लिए तीव्र गति से सीखने और याद रखने की तकनीकें।",
        aiDesc: "स्मार्ट अध्ययन उपकरण, प्रॉम्प्ट इंजीनियरिंग और डिजिटल योजना।",
        profDesc: "कानून, शिक्षण और फार्मेसी पाठ्यक्रमों के लिए काउंसलिंग और कोचिंग।",
        niosCount: "5 कोर्स",
        cbseCount: "4 कोर्स",
        cuetCount: "4 कोर्स",
        distanceCount: "4 कोर्स",
        skillCount: "6 कोर्स",
        mnemonicCount: "4 कोर्स",
        aiCount: "3 कोर्स",
        profCount: "6 कोर्स",
        exploreCategories: "हमारे शैक्षणिक डोमेन देखें",
        categoryIntro: "अपनी शिक्षा के लिए सही रास्ता चुनें। किसी भी श्रेणी पर क्लिक करके सभी उपलब्ध कोर्स देखें।"
      }
    },
    courses: {
      comprehensive: "व्यापक कार्यक्रम",
      findPerfect: "अपना आदर्श कोर्स खोजें",
      findDesc: "बुनियादी स्कूली शिक्षा से लेकर उन्नत प्रतियोगी तैयारी और कौशल विकास तक। अपने सपनों को साकार करने और एक बेहतर करियर बनाने के लिए हमारे यूजीसी-अनुमोदित कार्यक्रमों, सीबीएसई कोचिंग और मेमोरी साइंस प्रशिक्षण के व्यापक चयन को देखें।",
      selectCategory: "एक श्रेणी चुनें",
      selectDesc: "उपलब्ध कोर्स देखने के लिए अध्ययन का क्षेत्र चुनें।",
      coursesCount: "कोर्स",
      categories: "श्रेणियां",
      programs: "कार्यक्रम"
    },
    courseDetail: {
      backToCourses: "कोर्स पर वापस जाएं",
      programDetails: "कार्यक्रम विवरण",
      comprehensiveProgram: "व्यापक कोर्स कार्यक्रम",
      programDesc: "मजबूत बुनियादी ढांचे के निर्माण और शैक्षणिक सफलता सुनिश्चित करने के लिए डिज़ाइन किए गए हमारे विशेषज्ञ कार्यक्रम में शामिल हों।",
      flexibleTiming: "लचीला समय",
      studyMaterial: "अध्ययन सामग्री",
      expertFaculty: "विशेषज्ञ संकाय",
      whatYouWillLearn: "आप क्या सीखेंगे",
      enquireNow: "अभी पूछताछ करें",
      fillForm: "इस कोर्स के बारे में पूरी जानकारी प्राप्त करने के लिए नीचे दिया गया फॉर्म भरें।"
    },
    regularCourses: {
      higherEd: "उच्च शिक्षा कार्यक्रम",
      title: "रेगुलर मोड कोर्स",
      desc: "मान्यता प्राप्त स्नातक और स्नातकोत्तर डिग्री के साथ अपने करियर को सशक्त बनाएं। <br> हम भारत भर के शीर्ष यूजीसी अनुमोदित विश्वविद्यालयों के <br> लिए व्यापक प्रवेश मार्गदर्शन प्रदान करते हैं।",
      enrollNow: "अभी नामांकन करें",
      takeNextStep: "अपनी शिक्षा में अगला कदम उठाएं",
      admissionGuidance: "भारत भर के विभिन्न यूजीसी अनुमोदित विश्वविद्यालयों के लिए प्रवेश मार्गदर्शन और सहायता",
      fillForm: "अपने चुने हुए कार्यक्रम के लिए विशेषज्ञ परामर्श और प्रवेश सहायता प्राप्त करने के लिए नीचे दिया गया फॉर्म भरें।"
    },
    about: {
      established: "स्थापित: 1989",
      title1: "भविष्य का निर्माण",
      titleHighlight: "गुणवत्ता और किफायती शिक्षा",
      desc: "संजीवनी एडु एंड वेलफेयर सोसाइटी (सरकार द्वारा मान्यता प्राप्त) के तहत संचालित, टॉपर्स गुरु कृष्णा नगर, दिल्ली में शैक्षणिक उत्कृष्टता और कौशल विकास के एक प्रतीक के रूप में खड़ा है।",
      ourRoots: "हमारी जड़ें",
      est1989: "1989 में स्थापित",
      evolution: "विकास",
      growthJourney: "हमारी विकास यात्रा",
      ourPride: "हमारा गौरव",
      studentTrust: "छात्रों का विश्वास",
      mission: "हमारा मिशन",
      vision: "हमारा दृष्टिकोण",
      chanakyaWisdom: "सफलता के लिए चाणक्य का ज्ञान",
      trust1: "व्यक्तिगत ध्यान",
      trust2: "लचीले सीखने के मार्ग",
      trust3: "सरकारी मान्यता प्राप्त उत्कृष्टता",
      quote1: '"सफलता अनुशासन से आती है।"',
      quote2: '"शिक्षा सबसे अच्छी मित्र है।"',
      quote3: '"हर कार्य से पहले सोचें।"',
      quote4: '"उत्कृष्टता एक आदत है, कोई कार्य नहीं।"',
      quote5: '"शिक्षा के माध्यम से खुद पर निवेश करें।"',
      quote6: '"ज्ञान तब शक्ति है जब इसे लागू किया जाता है।"',
      mindsBehind: "सफलता के पीछे के दिमाग",
      meetLeadership: "हमारे नेतृत्व और संकाय से मिलें"
    },
    contact: {
      title: "संपर्क करें",
      desc: "प्रवेश, कोर्स पूछताछ, या किसी भी प्रश्न के लिए हमसे संपर्क करें। हम आपकी सफलता में मदद करने के लिए यहां हैं।",
      reachOut: "हमसे संपर्क करें",
      reachOutDesc: "हमारे कार्यक्रमों या प्रवेश के बारे में प्रश्न हैं? सीधे हमारी टीम से संपर्क करें या पूछताछ फॉर्म भरें।",
      chatWhatsapp: "WhatsApp पर चैट करें",
      callNow: "अभी कॉल करें",
      followUs: "हमें फॉलो करें",
      sendInquiry: "पूछताछ भेजें",
      fillForm: "कृपया नीचे दिया गया फॉर्म भरें और हम जल्द ही आपसे संपर्क करेंगे।",
      guidelinesSub: "अक्सर पूछे जाने वाले प्रश्न",
      guidelinesTitle: "प्रवेश दिशानिर्देश और सामान्य प्रश्न",
      guidelinesDesc: "टॉपर्स गुरु में प्रवेश और मार्गदर्शन चाहने वाले उम्मीदवारों के लिए महत्वपूर्ण जानकारी।",
      faq1Title: "कौन से दस्तावेज़ आवश्यक हैं?",
      faq1Desc: "सत्यापन के दौरान आपको पिछली अंकतालिकाओं, आधार कार्ड / पहचान पत्र, और पासपोर्ट आकार के फोटो की प्रतियां जमा करनी होंगी।",
      faq2Title: "बैच का आवंटन कैसे किया जाता है?",
      faq2Desc: "सीटों की उपलब्धता के आधार पर प्रबंधन द्वारा बैच के समय का निर्णय लिया जाता है। हालांकि प्राथमिकताओं पर विचार किया जाता है, अंतिम आवंटन बाध्यकारी हैं।",
      faq3Title: "प्रवेश मानदंड क्या है?",
      faq3Desc: "प्रवेश 'पहले आओ, पहले पाओ' के आधार पर संसाधित किए जाते हैं। दस्तावेज़ सत्यापन और पंजीकरण शुल्क भुगतान के बाद सीट की पुष्टि होती है।"
    },
    gallery: {
      ourMemories: "हमारी यादें",
      title: "हमारी यात्रा, सफलता और यादें",
      desc: "उन पलों का अन्वेषण करें जो टॉपर्स गुरु को परिभाषित करते हैं।"
    },
    success: {
      title: "पूछताछ सफलतापूर्वक जमा की गई!",
      desc: "आपकी रुचि के लिए धन्यवाद। हमारे शैक्षणिक सलाहकार प्रक्रिया में आपका मार्गदर्शन करने के लिए जल्द ही आपसे संपर्क करेंगे।",
      backBtn: "विंडो बंद करें"
    },
    compare: {
      features: "प्रमुख विशेषताएं",
      toppersGuru: "टॉपर्स गुरु लाभ",
      traditional: "पारंपरिक कोचिंग",
      feat1: "मेमोरी साइंस और निमोनिक्स",
      yesMnemonics: "द्विभाषी निमोनिक्स",
      noMnemonics: "रटना और रट्टा मारना",
      feat2: "30+ वर्षों की शैक्षणिक विरासत",
      yesLegacy: "1989 से कार्यरत",
      noLegacy: "अस्थायी शिक्षक",
      feat3: "ISO 9001:2015 प्रमाणन",
      yesIso: "सरकारी मान्यता प्राप्त संस्था",
      noIso: "गैर-पंजीकृत ट्यूटर",
      feat4: "UGC-DEB विश्वविद्यालय मार्गदर्शन",
      yesUgc: "सीधा कोर्स मिलान (Matching)",
      noUgc: "कोई करियर काउंसलिंग नहीं",
      feat5: "शुरुआत से अंत तक फॉर्म सपोर्ट",
      yesFiling: "फॉर्म, TMA और परीक्षा बुकिंग",
      noFiling: "स्वयं आवेदन करना पड़ता है",
      feat6: "द्विभाषी सामग्री और बैच",
      yesBilingual: "अंग्रेजी और हिंदी दोनों में",
      noBilingual: "केवल एक भाषा में"
    },
    course: {
      joinClass: "क्लास ज्वाइन करें",
      reviews: "रिव्यूज",
      tag: {
        secondary: "सेकेंडरी बोर्ड",
        senior: "सीनियर सेकेंडरी",
        foundations: "बुनियादी कोचिंग",
        academicRoi: "एकेडमिक ROI",
        trending: "ट्रेंडिंग तैयारी",
        ugc: "UGC स्वीकृत",
        globalPg: "ग्लोबल PG",
        placement: "प्लेसमेंट सहायता",
        bhoolna: "भूलना भूल जाओगे"
      },
      duration: {
        nios10: "अवधि: 1 वर्ष",
        nios12: "अवधि: 1 वर्ष",
        cbse910: "अवधि: पूरा वर्ष",
        cbse1112: "अवधि: पूरा वर्ष",
        cuet: "अवधि: 3-6 महीने",
        ug: "अवधि: 3 वर्ष",
        pg: "अवधि: 2 वर्ष",
        skill: "अवधि: 6-12 महीने",
        memory: "अवधि: 3 महीने"
      },
      title: {
        nios10: "NIOS 10वीं कक्षा सहायता",
        nios12: "NIOS 12वीं कक्षा कोचिंग",
        cbse910: "CBSE 9वीं-10वीं कक्षा कोचिंग",
        cbse1112: "CBSE 11वीं-12वीं कक्षा कोचिंग",
        cuet: "CUET प्रवेश परीक्षा तैयारी",
        ug: "डिस्टेंस ग्रेजुएशन (UG) मार्गदर्शन",
        pg: "डिस्टेंस पोस्ट-ग्रेजुएशन (PG) मार्गदर्शन",
        skill: "व्यावसायिक और आईटी कौशल",
        memory: "मेमोरी साइंस (स्मरण शक्ति) प्रशिक्षण"
      },
      desc: {
        nios10: "कक्षा 10 के छात्रों के लिए लचीली ओपन स्कूलिंग ट्यूशन। इसमें पाठ्यक्रम योजना, असाइनमेंट जमा करना और परीक्षा परामर्श शामिल है।",
        nios12: "सीनियर सेकेंडरी एनआईओएस स्ट्रीम (कला, वाणिज्य, विज्ञान) के लिए विशेषज्ञ सलाहकारों के साथ व्यापक शैक्षणिक तैयारी।",
        cbse910: "विज्ञान, गणित, अंग्रेजी और सामाजिक अध्ययन के लिए अवधारणा-मजबूत बनाने वाली कोचिंग। साप्ताहिक मूल्यांकन और बोर्ड अभ्यास।",
        cbse1112: "बोर्ड परीक्षाओं के लिए स्ट्रीम-विशिष्ट तैयारी। नियमित टेस्ट सीरीज़, मेमोरी मैपिंग शॉर्टकट और बोर्ड मूल्यांकन सत्र।",
        cuet: "कॉमन यूनिवर्सिटी एंट्रेंस टेस्ट की तैयारी। डोमेन-विशिष्ट ट्यूटोरियल, भाषाएं और सामान्य मानसिक योग्यता मॉक टेस्ट।",
        ug: "UGC-DEB स्वीकृत स्नातक डिग्री (BA, B.Com, BBA)। विश्वविद्यालय विकल्पों की तुलना, पात्रता जांच और मार्गदर्शन प्राप्त करें।",
        pg: "मास्टर डिग्री प्रवेश (MA, MBA, MCA)। अनुमोदन, ई-लर्निंग लाइब्रेरी और मासिक EMI विकल्पों पर विश्वविद्यालयों की तुलना करें।",
        skill: "डिजिटल मार्केटिंग, कंप्यूटर एप्लीकेशन, ग्राफिक डिजाइन और नर्सरी टीचर ट्रेनिंग प्रमाणन में नौकरी-उन्मुख प्रशिक्षण।",
        memory: "ऐतिहासिक समय-सीमाओं, सूत्रों और लंबे वर्णनों को जल्दी से याद रखने के लिए वैज्ञानिक निमोनिक्स प्रशिक्षण। भूलना भूल जाने वाली तकनीक सीखें।"
      },
      feat: {
        nios10: {
          1: "सिलेबस मैपिंग और योजना",
          2: "TMA और प्रैक्टिकल मार्गदर्शन",
          3: "परीक्षा फॉर्म जमा करने में सहायता"
        },
        nios12: {
          1: "स्ट्रीम मैचिंग (विज्ञान/वाणिज्य/कला)",
          2: "द्विभाषी अध्ययन सामग्री",
          3: "प्रवेश पंजीकरण फॉर्म भरना"
        },
        cbse910: {
          1: "गणित और विज्ञान पर विशेष ध्यान",
          2: "साारीरिक और मानसिक ट्रैकिंग",
          3: "कॉन्सेप्ट क्लियरिंग ट्यूटोरियल"
        },
        cbse1112: {
          1: "स्ट्रीम तैयारी (PCM/वाणिज्य/कला)",
          2: "बोर्ड परीक्षा मॉक पेपर",
          3: "मेमोरी निमोनिक्स शॉर्टकट्स"
        },
        cuet: {
          1: "डोमेन विषय मॉक परीक्षा",
          2: "सामान्य टेस्ट मेंटरिंग",
          3: "विश्वविद्यालय प्रवेश मिलान"
        },
        ug: {
          1: "UGC-DEB स्वीकृत डिग्री चयन",
          2: "शुल्क और स्वीकृतियों की तुलना",
          3: "पूर्ण प्रवेश परामर्श"
        },
        pg: {
          1: "एग्जीक्यूटिव और जनरल MBA विकल्प",
          2: "मासिक EMI शुल्क भुगतान सलाह",
          3: "ई-लाइब्रेरी और अध्ययन संसाधन"
        },
        skill: {
          1: "डिजिटल मार्केटिंग और आईटी कौशल",
          2: "नर्सरी टीचर ट्रेनिंग (NTT)",
          3: "प्लेसमेंट और सीवी बनाने में सहायता"
        },
        memory: {
          1: "भूलना भूल जाओगे रिकॉल सिस्टम",
          2: "फास्ट रीडिंग और रिवीजन ट्रिक्स",
          3: "विज्ञान-आधारित निमोनिक्स"
        }
      }
    }
  }
};

// Global App State
let currentLang = 'en';

// Resolve translation keys dynamically
function getTranslation(lang, path) {
  const keys = path.split('.');
  let result = translations[lang];
  for (const key of keys) {
    if (result && result[key] !== undefined) {
      result = result[key];
    } else {
      // Fallback to English
      let fallback = translations['en'];
      for (const k of keys) {
        if (fallback && fallback[k] !== undefined) {
          fallback = fallback[k];
        } else {
          return path;
        }
      }
      return fallback;
    }
  }
  return result;
}

// Update UI Texts based on language
function updateUILanguage(lang) {
  currentLang = lang;
  localStorage.setItem('app_language', lang);

  // Set html lang attribute
  document.documentElement.setAttribute('lang', lang);

  // Set body class
  if (lang === 'hi') {
    document.body.classList.add('lang-hi');
  } else {
    document.body.classList.remove('lang-hi');
  }

  // Translate elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = getTranslation(lang, key);

    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
      element.placeholder = translation;
    } else if (element.tagName === 'OPTION') {
      element.text = translation;
    } else {
      element.innerHTML = translation;
    }
  });

  // Toggle active switch visual state
  const langToggleBtn = document.querySelector('.lang-switch-btn');
  if (langToggleBtn) {
    const textNode = langToggleBtn.querySelector('.lang-switch-text');
    if (textNode) {
      // Keep static text node to preserve "हिन्दी | EN" layout as requested
      // textNode.textContent = lang === 'en' ? 'हिन्दी (HI)' : 'English (EN)';
    }
  }
}

// Show Custom Alert Popup
function showSuccessAlert() {
  const overlay = document.getElementById('successOverlay');
  if (overlay) {
    overlay.classList.add('active');
  }
}

// Close Custom Alert Popup
function closeSuccessAlert() {
  const overlay = document.getElementById('successOverlay');
  if (overlay) {
    overlay.classList.remove('active');
  }
}

// Initial Loading
document.addEventListener('DOMContentLoaded', () => {
  // 0. Render dynamic layout components
  if (typeof Topbar === 'function' && document.getElementById('topbar-container')) {
    document.getElementById('topbar-container').innerHTML = new Topbar().render();
  }
  if (typeof Navbar === 'function' && document.getElementById('header-container')) {
    const header = document.getElementById('header-container');
    const activePage = header.getAttribute('data-active') || 'home';
    header.innerHTML = new Navbar(activePage).render();
  }
  if (typeof Footer === 'function' && document.getElementById('footer-container')) {
    document.getElementById('footer-container').innerHTML = new Footer().render();
  }

  // 1. Language preference initialization
  const savedLang = localStorage.getItem('app_language');
  if (savedLang === 'hi' || savedLang === 'en') {
    updateUILanguage(savedLang);
  } else {
    updateUILanguage('en');
  }

  // Bind language selector button click
  const langToggleBtn = document.querySelector('.lang-switch-btn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'en' ? 'hi' : 'en';
      updateUILanguage(nextLang);
    });
  }

  // 2. Header background transition on scroll
  const header = document.querySelector('.navbar-custom');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // 3. Enquiry / Counselling Form Handling (Simplified Mailto + On-Page Success Overlay)
  const setupEnquiryForm = (formElement) => {
    if (!formElement) return;
    const phoneInput = formElement.querySelector('input[type="tel"]');
    if (phoneInput) {
      phoneInput.addEventListener('input', (e) => {
        let value = e.target.value;
        if (value.startsWith('+91')) {
          value = value.replace('+91', '');
        }
        value = value.replace(/\D/g, ''); // strip non-digits
        if (value.length > 10) {
          value = value.substring(0, 10);
        }
        e.target.value = value;
      });
    }

    formElement.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = formElement.querySelector('input[type="text"]')?.value.trim();
      const phone = formElement.querySelector('input[type="tel"]')?.value.trim();
      const email = formElement.querySelector('input[type="email"]')?.value.trim() || 'N/A';
      const course = formElement.querySelector('select')?.value;

      if (!name || !phone || !course) {
        alert(currentLang === 'en' ? 'Please fill in all required fields marked with *' : 'कृपया * से चिह्नित सभी आवश्यक फ़ील्ड भरें');
        return;
      }

      if (phone.length < 10) {
        alert(currentLang === 'en' ? 'Please enter a valid 10-digit mobile number' : 'कृपया एक मान्य 10-अंकीय मोबाइल नंबर दर्ज करें');
        return;
      }

      // Build email body for direct client submission
      const subject = `Toppers Guru - Course Enquiry from ${name}`;
      const body = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nCourse: ${course}\nSubmitted on: ${new Date().toLocaleString()}`;
      const mailtoUrl = `mailto:info@toppersguru.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Show spinner state
      const submitBtn = formElement.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        const originalHtml = submitBtn.innerHTML;
        submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>${currentLang === 'en' ? 'Submitting...' : 'जमा किया जा रहा है...'}`;

        setTimeout(() => {
          // Reset Form
          formElement.reset();
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalHtml;

          // Show on-page custom alert modal
          showSuccessAlert();

          // Open default client email draft
          window.location.href = mailtoUrl;
        }, 800);
      }
    });
  };

  setupEnquiryForm(document.getElementById('enquiryForm'));
  setupEnquiryForm(document.getElementById('admissionsEnquiryForm'));

  // Bind close buttons for modal
  const closeAlertBtn = document.getElementById('closeAlertBtn');
  if (closeAlertBtn) {
    closeAlertBtn.addEventListener('click', closeSuccessAlert);
  }
  const successOverlay = document.getElementById('successOverlay');
  if (successOverlay) {
    successOverlay.addEventListener('click', (e) => {
      if (e.target === successOverlay) {
        closeSuccessAlert();
      }
    });
  }

  // Dynamic Tab Switcher for Course Matcher (Inspired by College Vidya)
  const tabButtons = document.querySelectorAll('.course-pill-btn');
  const courseCards = document.querySelectorAll('[data-course-category]');

  if (tabButtons.length > 0 && courseCards.length > 0) {
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Toggle active button
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-category');

        // Show/hide cards
        courseCards.forEach(card => {
          const cardCategories = card.getAttribute('data-course-category').split(',');
          if (category === 'all' || cardCategories.includes(category)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 4. Programs Scroll Slider Navigation
  const scrollTrack = document.getElementById('programsScrollTrack');
  const prevBtn = document.getElementById('slidePrevBtn');
  const nextBtn = document.getElementById('slideNextBtn');
  if (scrollTrack && prevBtn && nextBtn) {
    let activeIndex = 0;
    let autoSlideInterval = null;
    let isScrolling = false;

    const getVisibleCards = () => {
      return Array.from(scrollTrack.querySelectorAll('.scroll-card-item')).filter(card => card.style.display !== 'none');
    };

    const getVisibleCount = () => {
      if (window.innerWidth > 991) return 3;
      if (window.innerWidth > 767) return 2;
      return 1;
    };

    const scrollToActiveIndex = (behavior = 'smooth') => {
      const visibleCards = getVisibleCards();
      if (visibleCards.length === 0) return;

      const visibleCount = getVisibleCount();
      const maxIndex = Math.max(0, visibleCards.length - visibleCount);

      if (activeIndex > maxIndex) activeIndex = maxIndex;
      if (activeIndex < 0) activeIndex = 0;

      const targetCard = visibleCards[activeIndex];
      const targetScroll = targetCard.offsetLeft - scrollTrack.offsetLeft;

      isScrolling = true;
      scrollTrack.scrollTo({ left: targetScroll, behavior });
    };

    // Calculate current active index based on scroll position
    const updateActiveIndexFromScroll = () => {
      if (isScrolling) return; // Ignore scroll events triggered by programmatic scrolling

      const visibleCards = getVisibleCards();
      if (visibleCards.length === 0) return;

      const scrollLeft = scrollTrack.scrollLeft;
      const trackLeft = scrollTrack.offsetLeft;

      let closestIndex = 0;
      let minDiff = Infinity;

      visibleCards.forEach((card, index) => {
        const diff = Math.abs((card.offsetLeft - trackLeft) - scrollLeft);
        if (diff < minDiff) {
          minDiff = diff;
          closestIndex = index;
        }
      });

      activeIndex = closestIndex;
    };

    // Listen to scroll to update activeIndex on manual swipes/scrolls
    scrollTrack.addEventListener('scroll', () => {
      updateActiveIndexFromScroll();
    });

    scrollTrack.addEventListener('scrollend', () => {
      isScrolling = false;
    });

    // Fallback for browsers that don't support scrollend yet
    let scrollTimeout;
    scrollTrack.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 150);
    });

    prevBtn.addEventListener('click', () => {
      const visibleCards = getVisibleCards();
      const visibleCount = getVisibleCount();
      const maxIndex = Math.max(0, visibleCards.length - visibleCount);

      if (activeIndex <= 0) {
        activeIndex = maxIndex; // Wrap around to end
      } else {
        activeIndex--;
      }
      scrollToActiveIndex();
    });

    nextBtn.addEventListener('click', () => {
      const visibleCards = getVisibleCards();
      const visibleCount = getVisibleCount();
      const maxIndex = Math.max(0, visibleCards.length - visibleCount);

      if (activeIndex >= maxIndex) {
        activeIndex = 0; // Wrap around to start
      } else {
        activeIndex++;
      }
      scrollToActiveIndex();
    });

    const updateArrowVisibility = () => {
      setTimeout(() => {
        const totalWidth = scrollTrack.scrollWidth;
        const visibleWidth = scrollTrack.offsetWidth;
        if (totalWidth <= visibleWidth) {
          prevBtn.style.display = 'none';
          nextBtn.style.display = 'none';
        } else {
          if (window.innerWidth > 767) {
            prevBtn.style.display = 'flex';
            nextBtn.style.display = 'flex';
          } else {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
          }
        }
      }, 150);
    };

    updateArrowVisibility();
    window.addEventListener('resize', () => {
      updateArrowVisibility();
      scrollToActiveIndex('instant'); // Instantly re-align layout on resize
    });

    const startAutoSlide = () => {
      if (autoSlideInterval) clearInterval(autoSlideInterval);
      autoSlideInterval = setInterval(() => {
        const visibleCards = getVisibleCards();
        const visibleCount = getVisibleCount();
        const maxIndex = Math.max(0, visibleCards.length - visibleCount);

        if (maxIndex > 0) {
          if (activeIndex >= maxIndex) {
            activeIndex = 0;
          } else {
            activeIndex++;
          }
          scrollToActiveIndex();
        }
      }, 3000);
    };

    const stopAutoSlide = () => {
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
      }
    };

    // Start auto slide initially
    startAutoSlide();

    // Pause auto slide on hover/touch interactions to improve usability
    scrollTrack.addEventListener('mouseenter', stopAutoSlide);
    scrollTrack.addEventListener('mouseleave', startAutoSlide);
    scrollTrack.addEventListener('touchstart', stopAutoSlide, { passive: true });
    scrollTrack.addEventListener('touchend', startAutoSlide, { passive: true });

    prevBtn.addEventListener('mouseenter', stopAutoSlide);
    prevBtn.addEventListener('mouseleave', startAutoSlide);
    nextBtn.addEventListener('mouseenter', stopAutoSlide);
    nextBtn.addEventListener('mouseleave', startAutoSlide);

    // Reset timer on manual navigation clicks
    prevBtn.addEventListener('click', () => {
      stopAutoSlide();
      startAutoSlide();
    });
    nextBtn.addEventListener('click', () => {
      stopAutoSlide();
      startAutoSlide();
    });

    // Reset scroll and update visibility when filter tab changes
    if (tabButtons.length > 0) {
      tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          activeIndex = 0;
          scrollToActiveIndex('instant');
          updateArrowVisibility();
          stopAutoSlide();
          startAutoSlide();
        });
      });
    }
  }

  // Hero Search Function
  const searchBtn = document.getElementById('heroSearchBtn');
  const searchInput = document.getElementById('heroSearchInput');
  if (searchBtn && searchInput) {
    const performHeroSearch = () => {
      const query = searchInput.value.trim().toLowerCase();
      if (!query) return;

      // Scroll to courses section
      const coursesSection = document.getElementById('portalCoursesSection');
      if (coursesSection) {
        coursesSection.scrollIntoView({ behavior: 'smooth' });
      }

      // Filter course cards based on search query
      courseCards.forEach(card => {
        const title = card.querySelector('.portal-card-title')?.textContent.toLowerCase() || '';
        const desc = card.querySelector('.portal-card-desc')?.textContent.toLowerCase() || '';
        if (title.includes(query) || desc.includes(query)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    };

    searchBtn.addEventListener('click', performHeroSearch);
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        performHeroSearch();
      }
    });
  }

  // Stats Circular Progress & Counter Up Animation on scroll
  const statsBannerRow = document.querySelector('.stats-banner-row');
  if (statsBannerRow) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 1. Animate SVG circles
          document.querySelectorAll('.stat-svg-progress').forEach(progressCircle => {
            const targetOffset = progressCircle.getAttribute('data-target-offset');
            // Allow CSS transition to kick in
            setTimeout(() => {
              progressCircle.style.strokeDashoffset = targetOffset;
            }, 50);
          });

          // 2. Count Up Numbers
          document.querySelectorAll('.stat-circle-number').forEach(numberNode => {
            const targetValue = parseInt(numberNode.getAttribute('data-target-val'), 10);
            const suffix = numberNode.getAttribute('data-suffix') || '';
            const duration = 1800; // 1.8 seconds matching progress stroke transition
            const startTime = performance.now();

            function countUp(currentTime) {
              const elapsed = currentTime - startTime;
              const progressRatio = Math.min(elapsed / duration, 1);

              // Easing out cubic transition for smooth deceleration
              const easeOutCubic = 1 - Math.pow(1 - progressRatio, 3);
              const currentValue = Math.floor(easeOutCubic * targetValue);

              numberNode.textContent = currentValue + suffix;

              if (progressRatio < 1) {
                requestAnimationFrame(countUp);
              } else {
                numberNode.textContent = targetValue + suffix;
              }
            }
            requestAnimationFrame(countUp);
          });

          // Unobserve once animation triggers
          observer.unobserve(statsBannerRow);
        }
      });
    }, { threshold: 0.15 });
    observer.observe(statsBannerRow);
  }

  // 5. Accreditations Certificates Slider Scroll Logic
  const certsTrack = document.getElementById('certsScrollTrack');
  const certPrevBtn = document.getElementById('certPrevBtn');
  const certNextBtn = document.getElementById('certNextBtn');
  const certsDotsTrack = document.getElementById('certsDotsTrack');

  if (certsTrack && certPrevBtn && certNextBtn && certsDotsTrack) {
    const certSlides = certsTrack.querySelectorAll('.certificate-slide');
    const totalSlides = certSlides.length;

    const getVisibleSlidesCount = () => {
      if (window.innerWidth > 992) return 4;
      if (window.innerWidth > 768) return 2;
      return 1;
    };

    // Build dots dynamically
    const updateDots = () => {
      certsDotsTrack.innerHTML = '';
      const visibleCount = getVisibleSlidesCount();
      const numDots = Math.max(1, totalSlides - visibleCount + 1);

      const currentScroll = certsTrack.scrollLeft;
      const slideWidth = certSlides[0].offsetWidth;
      const activeDotIndex = Math.round(currentScroll / slideWidth);

      for (let i = 0; i < numDots; i++) {
        const dot = document.createElement('div');
        dot.className = `certificate-dot ${i === activeDotIndex ? 'active' : ''}`;
        dot.addEventListener('click', () => {
          certsTrack.scrollTo({
            left: i * slideWidth,
            behavior: 'smooth'
          });
        });
        certsDotsTrack.appendChild(dot);
      }
    };

    // Handle button clicks
    certPrevBtn.addEventListener('click', () => {
      const slideWidth = certSlides[0].offsetWidth;
      certsTrack.scrollBy({ left: -slideWidth * 2, behavior: 'smooth' });
    });

    certNextBtn.addEventListener('click', () => {
      const slideWidth = certSlides[0].offsetWidth;
      certsTrack.scrollBy({ left: slideWidth * 2, behavior: 'smooth' });
    });

    // Update dots on scroll
    let scrollDebounce;
    certsTrack.addEventListener('scroll', () => {
      clearTimeout(scrollDebounce);
      scrollDebounce = setTimeout(updateDots, 100);
    });

    // Initialize dots on load and resize
    updateDots();
    window.addEventListener('resize', updateDots);
  }

  // 7. Global Scroll Reveal & Animation Observer
  const initScrollAnimations = () => {
    // Find all grid/row containers and stagger their cards
    document.querySelectorAll('.row, .grid, .gallery-preview-grid, #galleryGrid').forEach(container => {
      const items = container.querySelectorAll(
        '.premium-course-card, .portal-course-card, .gallery-card, .gallery-preview-item, ' +
        '.contact-info-card-premium, .fee-card, .scroll-card-item, .card, ' +
        '.testimonial-card, .stat-item-premium, .stat-item'
      );
      items.forEach((item, index) => {
        item.classList.add('reveal-fade-up');
        // Stagger delays (0ms, 80ms, 160ms, 240ms) repeating
        item.style.transitionDelay = `${(index % 4) * 80}ms`;
      });
    });

    // Find other general sections or stand-alone elements that should fade up
    document.querySelectorAll('section:not(.hero-premium-banner):not(.courses-hero-premium-banner):not(.contact-hero-premium-banner):not(.gallery-hero-premium-banner):not(.higher-ed-section), .counselling-benefits-list, .admission-checklist, .admission-image-container').forEach(el => {
      if (!el.classList.contains('reveal-fade-up') && !el.closest('.row') && !el.closest('.grid')) {
        el.classList.add('reveal-fade-up');
      }
    });

    // Intersection Observer config
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px -50px 0px'
    });

    // Bind observer to all target elements
    document.querySelectorAll('.reveal-fade-up').forEach(el => {
      revealObserver.observe(el);
    });
  };

  // Run safe setup after a brief layout settle
  setTimeout(initScrollAnimations, 50);
});

// 6. Global Accreditations Certificate Lightbox Modal Controller
const certImagesList = [
  "Images/certificate_01.png",
  "Images/certificate_02.png",
  "Images/certificate_03.png",
  "Images/certificate_04.png",
  "Images/certificate_05.png",
  "Images/certificate_06.png",
  "Images/certificate_07.png",
  "Images/certificate_08.png",
  "Images/certificate_09.png",
  "Images/certificate_10.png",
  "Images/certificate_11.png"
];

let activeCertIndex = 0;

function openCertLightbox(index) {
  activeCertIndex = index;
  const lightbox = document.getElementById('certLightbox');
  const lightboxImg = document.getElementById('lightboxActiveImg');

  if (lightbox && lightboxImg) {
    lightboxImg.src = certImagesList[activeCertIndex];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Lock background scroll
  }
}

function closeCertLightbox(event) {
  const lightbox = document.getElementById('certLightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = ''; // Restore background scroll
  }
}

function toggleCertLightboxClose(event) {
  if (event) event.stopPropagation();
  closeCertLightbox();
}

function navigateLightbox(direction, event) {
  if (event) event.stopPropagation();

  activeCertIndex += direction;
  if (activeCertIndex >= certImagesList.length) {
    activeCertIndex = 0; // Wrap to start
  } else if (activeCertIndex < 0) {
    activeCertIndex = certImagesList.length - 1; // Wrap to end
  }

  const lightboxImg = document.getElementById('lightboxActiveImg');
  if (lightboxImg) {
    lightboxImg.src = certImagesList[activeCertIndex];
  }
}

// Bind keyboard escape and arrow keys to lightbox
document.addEventListener('keydown', (e) => {
  const lightbox = document.getElementById('certLightbox');
  if (lightbox && lightbox.classList.contains('active')) {
    if (e.key === 'Escape') {
      closeCertLightbox();
    } else if (e.key === 'ArrowRight') {
      navigateLightbox(1);
    } else if (e.key === 'ArrowLeft') {
      navigateLightbox(-1);
    }
  }
});
