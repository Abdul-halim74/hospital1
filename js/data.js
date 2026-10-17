// Demo data (structure based on a real hospital site; names of hospital units are fictional). In production, load it from your PHP/MySQL backend.
const UNITS = [
 {
  "key": "dhanmondi-dic",
  "name": "Nirmol Diagnostic & Imaging Center, Dhanmondi",
  "area": "Dhanmondi",
  "type": "Diagnostic",
  "phone": "09610-777101",
  "site": ""
 },
 {
  "key": "doyagonj",
  "name": "Nirmol D.Lab & Consultation Center, Doyagonj",
  "area": "Doyagonj",
  "type": "Diagnostic",
  "phone": "09610-777102",
  "site": ""
 },
 {
  "key": "dhanmondi-hospital",
  "name": "Nirmol Specialized Hospital, Dhanmondi",
  "area": "Dhanmondi",
  "type": "Hospital",
  "phone": "09610-777103",
  "site": ""
 },
 {
  "key": "kallyanpur-mch",
  "name": "Nirmol Medical College Hospital, Kallyanpur",
  "area": "Kallyanpur",
  "type": "Hospital",
  "phone": "09610-777104",
  "site": ""
 },
 {
  "key": "ismc",
  "name": "Nirmol Medical College, Kallyanpur",
  "area": "Kallyanpur",
  "type": "Education",
  "phone": "",
  "site": ""
 },
 {
  "key": "zigatola",
  "name": "Nirmol Medical Imaging Center, Zigatola",
  "area": "Zigatola",
  "type": "Diagnostic",
  "phone": "09610-777106",
  "site": ""
 },
 {
  "key": "badda-checkup",
  "name": "Nirmol Medical Check-up Unit, Badda",
  "area": "Badda",
  "type": "Diagnostic",
  "phone": "09610-777107",
  "site": ""
 },
 {
  "key": "badda",
  "name": "Nirmol Diagnostic & Consultation Center, Badda",
  "area": "Badda",
  "type": "Diagnostic",
  "phone": "09610-777108",
  "site": ""
 },
 {
  "key": "isni",
  "name": "Nirmol Nursing Institute, Kallyanpur",
  "area": "Kallyanpur",
  "type": "Education",
  "phone": "",
  "site": ""
 },
 {
  "key": "uttara",
  "name": "Nirmol Diagnostic & Consultation Center, Uttara",
  "area": "Uttara",
  "type": "Diagnostic",
  "phone": "09610-777110",
  "site": ""
 },
 {
  "key": "jashore",
  "name": "Nirmol Diagnostic & Consultation Center, Jessore",
  "area": "Jashore",
  "type": "Diagnostic",
  "phone": "09610-777111",
  "site": ""
 },
 {
  "key": "bogra",
  "name": "Nirmol Diagnostic & Consultation Center, Bogra",
  "area": "Bogura",
  "type": "Diagnostic",
  "phone": "09610-777112",
  "site": ""
 },
 {
  "key": "malibagh",
  "name": "Nirmol Diagnostic & Consultation Center, Malibagh",
  "area": "Malibagh",
  "type": "Diagnostic",
  "phone": "09610-777113",
  "site": ""
 },
 {
  "key": "savar",
  "name": "Nirmol Diagnostic & Consultation Center, Savar",
  "area": "Savar",
  "type": "Diagnostic",
  "phone": "09610-777114",
  "site": ""
 },
 {
  "key": "mirpur",
  "name": "Nirmol Diagnostic & Consultation Center, Mirpur",
  "area": "Mirpur",
  "type": "Diagnostic",
  "phone": "09610-777115",
  "site": ""
 },
 {
  "key": "chattogram",
  "name": "Nirmol Diagnostic & Consultation Center, Chattogram",
  "area": "Chattogram",
  "type": "Diagnostic",
  "phone": "09610-777116",
  "site": ""
 },
 {
  "key": "cumilla",
  "name": "Nirmol Diagnostic & Consultation Center, Cumilla",
  "area": "Cumilla",
  "type": "Diagnostic",
  "phone": "09610-777117",
  "site": ""
 },
 {
  "key": "jatrabari",
  "name": "Nirmol Diagnostic & Consultation Center, Jatrabari",
  "area": "Jatrabari",
  "type": "Diagnostic",
  "phone": "09610-777118",
  "site": ""
 },
 {
  "key": "rajshahi",
  "name": "Nirmol Diagnostic & Consultation Center, Rajshahi",
  "area": "Rajshahi",
  "type": "Diagnostic",
  "phone": "09610-777119",
  "site": ""
 },
 {
  "key": "keraniganj",
  "name": "Nirmol Diagnostic & Consultation Center Keraniganj Ltd.",
  "area": "Keraniganj",
  "type": "Diagnostic",
  "phone": "09610-777120",
  "site": ""
 },
 {
  "key": "lalbagh",
  "name": "Nirmol Diagnostic Center Lalbagh Ltd.",
  "area": "Lalbagh",
  "type": "Diagnostic",
  "phone": "09610-777121",
  "site": ""
 },
 {
  "key": "sylhet",
  "name": "Nirmol Hospital Sylhet Ltd.",
  "area": "Sylhet",
  "type": "Hospital",
  "phone": "09610-777122",
  "site": ""
 },
 {
  "key": "noakhali",
  "name": "Nirmol Hospital & Diagnostic Center, Noakhali",
  "area": "Noakhali",
  "type": "Hospital",
  "phone": "09610-777123",
  "site": ""
 },
 {
  "key": "cancer",
  "name": "Nirmol Cancer Diagnostic Center, Dhanmondi",
  "area": "Dhanmondi",
  "type": "Diagnostic",
  "phone": "09610-777124",
  "site": ""
 },
 {
  "key": "bogura-hospital",
  "name": "Nirmol Hospital & Diagnostic Center, Bogura",
  "area": "Bogura",
  "type": "Hospital",
  "phone": "09610-777125",
  "site": ""
 },
 {
  "key": "arshinagar",
  "name": "Nirmol Diagnostic and Consultation Center, Arshinagar",
  "area": "Arshinagar",
  "type": "Diagnostic",
  "phone": "09610-777126",
  "site": ""
 }
];
const DOCTORS = [
 {
  "id": "dr-md-nabid-alam",
  "name": "Dr. Md. Nabid Alam",
  "dept": "Urology",
  "unit": "mirpur",
  "photo": "images/avatars/doctor-m1.svg"
 },
 {
  "id": "asso-prof-dr-md-wahiduzzaman",
  "name": "Asso. Prof. Dr. Md. Wahiduzzaman",
  "dept": "ENT",
  "unit": "dhanmondi-hospital",
  "photo": "images/avatars/doctor-m2.svg"
 },
 {
  "id": "prof-dr-syed-zakir-hossain",
  "name": "Prof. Dr. Syed Zakir Hossain",
  "dept": "Medicine",
  "unit": "badda",
  "photo": "images/avatars/doctor-m3.svg"
 },
 {
  "id": "dr-md-imam-hosen",
  "name": "Dr. Md. Imam Hosen",
  "dept": "Cardiology",
  "unit": "jatrabari",
  "photo": "images/avatars/doctor-m4.svg"
 },
 {
  "id": "asst-prof-dr-umme-habiba-jyoti",
  "name": "Asst. Prof. Dr. Umme Habiba Jyoti",
  "dept": "Medicine",
  "unit": "rajshahi",
  "photo": "images/avatars/doctor-f1.svg"
 },
 {
  "id": "dr-a-g-chowdhury",
  "name": "Dr. A. G. Chowdhury",
  "dept": "Paediatrics",
  "unit": "chattogram",
  "photo": "images/avatars/doctor-m1.svg"
 },
 {
  "id": "prof-dr-md-touhidul-islam",
  "name": "Prof. Dr. Md. Touhidul Islam",
  "dept": "General & Colorectal Surgery",
  "unit": "kallyanpur-mch",
  "photo": "images/avatars/doctor-m2.svg"
 },
 {
  "id": "dr-golam-mahabub-shikder",
  "name": "Dr. Golam Mahabub Shikder",
  "dept": "Nephrology",
  "unit": "cumilla",
  "photo": "images/avatars/doctor-m3.svg"
 },
 {
  "id": "dr-syed-imtiaz-ahmed",
  "name": "Dr. Syed Imtiaz Ahmed",
  "dept": "Nephrology",
  "unit": "kallyanpur-mch",
  "photo": "images/avatars/doctor-m4.svg"
 },
 {
  "id": "dr-saifun-nahar",
  "name": "Dr. Saifun Nahar",
  "dept": "Psychiatry",
  "unit": "lalbagh",
  "photo": "images/avatars/doctor-f2.svg"
 },
 {
  "id": "asst-prof-dr-ali-akbar",
  "name": "Asst. Prof. Dr. Ali Akbar",
  "dept": "Orthopaedics",
  "unit": "uttara",
  "photo": "images/avatars/doctor-m1.svg"
 },
 {
  "id": "dr-baha-uddin",
  "name": "Dr. Baha Uddin",
  "dept": "ENT",
  "unit": "keraniganj",
  "photo": "images/avatars/doctor-m2.svg"
 },
 {
  "id": "dr-mostafa-mamun-warid",
  "name": "Dr. Mostafa Mamun Warid",
  "dept": "Liver & Gastroenterology",
  "unit": "malibagh",
  "photo": "images/avatars/doctor-m3.svg"
 },
 {
  "id": "dr-shish-mohammad-sarkar",
  "name": "Dr. Shish Mohammad Sarkar",
  "dept": "Chest & Respiratory",
  "unit": "rajshahi",
  "photo": "images/avatars/doctor-m4.svg"
 },
 {
  "id": "prof-dr-kazi-farhana-begum",
  "name": "Prof. Dr. Kazi Farhana Begum",
  "dept": "Gynae & Obstetrics",
  "unit": "badda",
  "photo": "images/avatars/doctor-f3.svg"
 },
 {
  "id": "dr-seirina-parvin",
  "name": "Dr. Seirina Parvin",
  "dept": "Dental",
  "unit": "mirpur",
  "photo": "images/avatars/doctor-f4.svg"
 },
 {
  "id": "dr-khaled-monsoor-murad",
  "name": "Dr. Khaled Monsoor (Murad)",
  "dept": "Orthopaedics",
  "unit": "lalbagh",
  "photo": "images/avatars/doctor-m1.svg"
 },
 {
  "id": "dr-md-tayob-ali",
  "name": "Dr. Md. Tayob Ali",
  "dept": "ENT",
  "unit": "savar",
  "photo": "images/avatars/doctor-m2.svg"
 },
 {
  "id": "dr-md-abdul-momin",
  "name": "Dr. Md. Abdul Momin",
  "dept": "Diabetes & Endocrinology",
  "unit": "savar",
  "photo": "images/avatars/doctor-m3.svg"
 },
 {
  "id": "prof-dr-md-sanaul-hoque-mia",
  "name": "Prof. Dr. Md. Sanaul Hoque Mia",
  "dept": "Paediatrics",
  "unit": "rajshahi",
  "photo": "images/avatars/doctor-m4.svg"
 },
 {
  "id": "dr-zinat-ara-sarker",
  "name": "Dr. Zinat Ara Sarker",
  "dept": "Paediatrics",
  "unit": "kallyanpur-mch",
  "photo": "images/avatars/doctor-f1.svg"
 },
 {
  "id": "dr-laila-areju-man-banu",
  "name": "Dr. Laila Areju Man Banu",
  "dept": "Paediatric Neurology",
  "unit": "cancer",
  "photo": "images/avatars/doctor-f2.svg"
 },
 {
  "id": "dr-md-saifur-rahman",
  "name": "Dr. Md. Saifur Rahman",
  "dept": "Diabetes & Endocrinology",
  "unit": "uttara",
  "photo": "images/avatars/doctor-m1.svg"
 },
 {
  "id": "prof-dr-kamal-mahmood-khan",
  "name": "Prof. Dr. Kamal Mahmood Khan",
  "dept": "Orthopaedics",
  "unit": "doyagonj",
  "photo": "images/avatars/doctor-m2.svg"
 },
 {
  "id": "prof-dr-ahamaduz-zaman",
  "name": "Prof. Dr. Ahamaduz Zaman",
  "dept": "General & Colorectal Surgery",
  "unit": "uttara",
  "photo": "images/avatars/doctor-m3.svg"
 },
 {
  "id": "prof-dr-shahidul-haque",
  "name": "Prof. Dr. Shahidul Haque",
  "dept": "Paediatrics",
  "unit": "badda",
  "photo": "images/avatars/doctor-m4.svg"
 },
 {
  "id": "dr-md-mehedi-hasan",
  "name": "Dr. Md. Mehedi Hasan",
  "dept": "ENT",
  "unit": "kallyanpur-mch",
  "photo": "images/avatars/doctor-m1.svg"
 },
 {
  "id": "assoc-prof-dr-mohammad-aftab-rassel",
  "name": "Assoc. Prof. Dr. Mohammad Aftab Rassel",
  "dept": "Neuromedicine",
  "unit": "uttara",
  "photo": "images/avatars/doctor-m2.svg"
 },
 {
  "id": "asst-prof-dr-saymun-jesmin",
  "name": "Asst. Prof. Dr. Saymun Jesmin",
  "dept": "Dermatology",
  "unit": "zigatola",
  "photo": "images/avatars/doctor-f3.svg"
 },
 {
  "id": "dr-a-b-m-lutful-kobir",
  "name": "Dr. A.B.M Lutful Kobir",
  "dept": "ENT",
  "unit": "noakhali",
  "photo": "images/avatars/doctor-m3.svg"
 },
 {
  "id": "dr-md-soriful-islam-sumon",
  "name": "Dr. Md. Soriful Islam (Sumon)",
  "dept": "Plastic Surgery",
  "unit": "kallyanpur-mch",
  "photo": "images/avatars/doctor-m4.svg"
 },
 {
  "id": "prof-dr-md-ruhul-quddus",
  "name": "Prof. Dr. Md. Ruhul Quddus",
  "dept": "Urology",
  "unit": "uttara",
  "photo": "images/avatars/doctor-m1.svg"
 },
 {
  "id": "dr-md-abu-hasan",
  "name": "Dr. Md. Abu Hasan",
  "dept": "Orthopaedics",
  "unit": "chattogram",
  "photo": "images/avatars/doctor-m2.svg"
 },
 {
  "id": "asst-prof-dr-molla-muhammad-abdullah-al-mamun",
  "name": "Asst. Prof. Dr. Molla Muhammad Abdullah Al Mamun",
  "dept": "Orthopaedics",
  "unit": "uttara",
  "photo": "images/avatars/doctor-m3.svg"
 },
 {
  "id": "dr-muhammad-sahab-ullah-ritu",
  "name": "Dr. Muhammad Sahab Ullah Ritu",
  "dept": "Urology",
  "unit": "noakhali",
  "photo": "images/avatars/doctor-m4.svg"
 },
 {
  "id": "dr-md-rafiqul-islam",
  "name": "Dr. Md. Rafiqul Islam",
  "dept": "Oncology",
  "unit": "cancer",
  "photo": "images/avatars/doctor-m1.svg"
 },
 {
  "id": "dr-md-enayet-hussain",
  "name": "Dr. Md. Enayet Hussain",
  "dept": "Neuromedicine",
  "unit": "doyagonj",
  "photo": "images/avatars/doctor-m2.svg"
 },
 {
  "id": "lt-col-dr-mohammed-enamul-hoque",
  "name": "Lt. Col. Dr. Mohammed Enamul Hoque",
  "dept": "Dermatology",
  "unit": "chattogram",
  "photo": "images/avatars/doctor-m3.svg"
 },
 {
  "id": "professor-dr-fatema-begum",
  "name": "Professor Dr. Fatema Begum",
  "dept": "Gynae & Obstetrics",
  "unit": "dhanmondi-hospital",
  "photo": "images/avatars/doctor-f4.svg"
 },
 {
  "id": "dr-tanvir-mostafa",
  "name": "Dr. Tanvir Mostafa",
  "dept": "Medicine",
  "unit": "lalbagh",
  "photo": "images/avatars/doctor-m4.svg"
 },
 {
  "id": "prof-dr-m-a-matin",
  "name": "Prof. Dr. M. A. Matin",
  "dept": "Paediatrics",
  "unit": "dhanmondi-hospital",
  "photo": "images/avatars/doctor-m1.svg"
 },
 {
  "id": "dr-quazi-rubyata-sania",
  "name": "Dr. Quazi Rubyata Sania",
  "dept": "Gynae & Obstetrics",
  "unit": "keraniganj",
  "photo": "images/avatars/doctor-f1.svg"
 },
 {
  "id": "dr-khadiza-akter",
  "name": "Dr. Khadiza Akter",
  "dept": "Dental",
  "unit": "keraniganj",
  "photo": "images/avatars/doctor-f2.svg"
 },
 {
  "id": "dr-romana-afaz-ireen",
  "name": "Dr. Romana Afaz Ireen",
  "dept": "Medicine",
  "unit": "chattogram",
  "photo": "images/avatars/doctor-f3.svg"
 },
 {
  "id": "dr-farhad-ahmed",
  "name": "Dr. Farhad Ahmed",
  "dept": "Neurosurgery",
  "unit": "kallyanpur-mch",
  "photo": "images/avatars/doctor-m2.svg"
 },
 {
  "id": "prof-brig-gen-dr-sm-shahidul-haque-retd",
  "name": "Prof. Brig. Gen. Dr. SM Shahidul Haque (Retd.)",
  "dept": "Physical Medicine",
  "unit": "uttara",
  "photo": "images/avatars/doctor-m3.svg"
 },
 {
  "id": "dr-abu-haider-mohammed-moniruzzaman",
  "name": "Dr. Abu Haider Mohammed Moniruzzaman",
  "dept": "Neuromedicine",
  "unit": "jashore",
  "photo": "images/avatars/doctor-m4.svg"
 },
 {
  "id": "professor-dr-hasina-bilkis-banu",
  "name": "Professor Dr. Hasina Bilkis Banu",
  "dept": "Physical Medicine",
  "unit": "doyagonj",
  "photo": "images/avatars/doctor-f4.svg"
 },
 {
  "id": "dr-nadia-islam",
  "name": "Dr. Nadia Islam",
  "dept": "Gynae & Obstetrics",
  "unit": "bogra",
  "photo": "images/avatars/doctor-f1.svg"
 }
];
const SLIDES = [
 {
  "img": "images/slider/slide-1-hospital.svg",
  "title": "Healthcare you can trust, since 1980",
  "text": "Hospitals, diagnostic centres and a medical college across 26 locations in Bangladesh.",
  "cta": [
   "find-doctor.html",
   "Find a doctor"
  ],
  "cta2": [
   "units.html",
   "Our units"
  ]
 },
 {
  "img": "images/slider/slide-2-imaging.svg",
  "title": "3 Tesla MRI and 128-slice CT",
  "text": "Imaging reports verified by consultants with European and North American degrees.",
  "cta": [
   "services.html#radiology",
   "Radiology & imaging"
  ],
  "cta2": [
   "contact.html",
   "Book a scan"
  ]
 },
 {
  "img": "images/slider/slide-3-lab.svg",
  "title": "25% off every diagnostic test",
  "text": "Fully automated laboratory with PCR-based molecular diagnostics.",
  "cta": [
   "services.html#laboratory",
   "Diagnostic services"
  ],
  "cta2": [
   "patient-care.html",
   "Before your visit"
  ]
 },
 {
  "img": "images/slider/slide-4-doctors.svg",
  "title": "Find the right specialist near you",
  "text": "Search by department, branch or doctor name and call for a serial.",
  "cta": [
   "find-doctor.html",
   "Find a doctor"
  ],
  "cta2": [
   "find-doctor.html?view=branch",
   "Doctors by branch"
  ]
 },
 {
  "img": "images/slider/slide-5-cardiac.svg",
  "title": "Round-the-clock cardiac care",
  "text": "Two cath labs, a CCU, and adult and paediatric cardiac surgery.",
  "cta": [
   "services.html#hospital",
   "Cardiac services"
  ],
  "cta2": [
   "contact.html",
   "Contact us"
  ]
 }
];
const GALLERY = [
 {
  "src": "images/gallery/reception.svg",
  "alt": "Reception desk"
 },
 {
  "src": "images/gallery/laboratory.svg",
  "alt": "Diagnostic laboratory"
 },
 {
  "src": "images/gallery/imaging.svg",
  "alt": "MRI and imaging"
 },
 {
  "src": "images/gallery/ward.svg",
  "alt": "Patient ward"
 },
 {
  "src": "images/gallery/pharmacy.svg",
  "alt": "Pharmacy"
 },
 {
  "src": "images/gallery/ambulance.svg",
  "alt": "Ambulance service"
 }
];
const SERVICES = [
 {
  "id": "hospital",
  "name": "Hospital Services",
  "icon": "images/icons/hospital.svg",
  "short": "Two modern cath labs, a round-the-clock CCU, adult and paediatric cardiac surgery, a stroke unit with DSA and vascular surgery.",
  "body": [
   "The hospital provides cardiology services through 2 modern cath labs and a round-the-clock CCU, including adult and paediatric cardiac surgery in 2 cardiac OTs led by renowned cardiologists and cardiac surgeons.",
   "It has its own stroke unit with DSA, stenting and coiling, and vascular surgery with PAG, stenting and laser services."
  ]
 },
 {
  "id": "radiology",
  "name": "Radiology & Imaging",
  "icon": "images/icons/radiology.svg",
  "short": "3 Tesla MRI, multi-slice CT, digital X-ray and 4D ultrasonography, reported by consultants with European and North American degrees.",
  "body": [
   "We offer radiology and imaging with 3 Tesla MRI, multi-slice CT scan, digital 100 mA X-ray, 4D ultrasonography and more.",
   "Nirmol was a pioneer of 1.5 Tesla MRI and 128-slice CT scan in Bangladesh. Experienced consultants with European and North American degrees verify every report."
  ]
 },
 {
  "id": "laboratory",
  "name": "Laboratory Services",
  "icon": "images/icons/laboratory.svg",
  "short": "Aptio automation, Ortho Clinical and DiaSorin systems, HPLC HbA1c, a 64-allergen analyser and PCR-based molecular diagnostics.",
  "body": [
   "Our diagnostic laboratory uses Aptio Automation, Ortho Clinical Diagnostics and DiaSorin systems for biochemistry and immunology, Sebia capillary electrophoresis, Bio-Rad HPLC HbA1c and a 64-allergen analyser.",
   "Molecular diagnostics use GeneXpert, Rotor-Gene Q (Qiagen), CFX96 (Bio-Rad), AMPLIlab (Adaltis) and Molbio systems for PCR-based diagnosis."
  ]
 },
 {
  "id": "diabetes",
  "name": "Diabetes Center",
  "icon": "images/icons/diabetes.svg",
  "short": "Specialist care for diabetes mellitus, a metabolic disorder affecting how the body uses food for energy and growth.",
  "body": [
   "Diabetes mellitus is a metabolic disorder. Metabolism is the way our bodies use digested food for energy and growth.",
   "Our diabetes centre offers consultation, monitoring and long-term management with endocrinologists and diabetes educators."
  ]
 },
 {
  "id": "physiotherapy",
  "name": "Pain & Physiotherapy",
  "icon": "images/icons/physiotherapy.svg",
  "short": "Renowned doctors, physiotherapists and modern equipment for pain management and rehabilitation.",
  "body": [
   "Pain is a protective symptom that leads a patient to seek treatment. Our pain centre is dedicated to relieving pain and keeping patients comfortable.",
   "Renowned doctors, physiotherapists and world-class instruments support pain management and rehabilitation for every kind of pain."
  ]
 },
 {
  "id": "dental",
  "name": "Dental Center",
  "icon": "images/icons/dental.svg",
  "short": "Oral & maxillofacial surgery, conservative, cosmetic and general dentistry by male and female dental surgeons.",
  "body": [
   "Nirmol Specialized Dental Centre (Dhanmondi) is a centre of excellence run by experienced professors and consultants.",
   "Treatment covers oral and maxillofacial surgery, conservative and cosmetic dentistry and general dentistry, using modern equipment at reasonable prices."
  ]
 }
];
const QUICK = [
 {
  "name": "Find a Doctor",
  "url": "find-doctor.html",
  "icon": "images/icons/find-doctor.svg"
 },
 {
  "name": "Hospital Services",
  "url": "services.html#hospital",
  "icon": "images/icons/hospital.svg"
 },
 {
  "name": "Surgery Packages",
  "url": "services.html#more",
  "icon": "images/icons/surgery.svg"
 },
 {
  "name": "Diagnostic Services",
  "url": "services.html#laboratory",
  "icon": "images/icons/diagnostic.svg"
 },
 {
  "name": "Cardiac Service",
  "url": "services.html#hospital",
  "icon": "images/icons/cardiac.svg"
 },
 {
  "name": "Health Check-up Packages",
  "url": "services.html#more",
  "icon": "images/icons/checkup.svg"
 }
];
const unitOf = key => UNITS.find(u => u.key === key) || { name: key, area: '', phone: '09610-777888' };
const DEPTS = [...new Set(DOCTORS.map(d => d.dept))].sort();
