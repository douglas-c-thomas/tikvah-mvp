export interface Provider {
  id: string;
  name: string;
  specialty: string;
  category: string;
  location: string;
  summary: string;
  rating?: number;
  bio?: string;
  imageUrl?: string;
  services?: string[];
  address?: string;
  phone?: string;
  email?: string;
  education?: string[];
  languages?: string[];
  tags?: string[];
}

export const providers: Provider[] = [
  {
    id: "52e6b3c0-5179-4ad7-8462-c4aa68cbd8de",
    name: "Dr. Sarah Johnson",
    specialty: "Functional Medicine",
    category: "Integrative / Whole-Person",
    location: "Charleston, SC",
    summary: "Board-certified functional medicine provider with 15+ years of experience specializing in personalized, root-cause care for chronic conditions.",
    rating: 4.9,
    bio: "Dr. Sarah Johnson is a board-certified functional medicine practitioner with over 15 years of experience in holistic healthcare. She believes in identifying the root causes of illness rather than just treating symptoms. Dr. Johnson takes a patient-centered approach, using nutrition, lifestyle, advanced lab testing, and integrative therapies to help clients manage autoimmune conditions, hormone imbalances, and digestive disorders. Her training includes an MD from Harvard Medical School, with continued education through the Institute for Functional Medicine. She is passionate about empowering patients with the knowledge and tools to heal and thrive.",
    imageUrl: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    services: [
      "Functional lab testing",
      "Nutritional counseling",
      "Hormone balancing",
      "Chronic illness management",
      "Gut health optimization",
      "Detoxification protocols",
      "Stress and sleep support",
      "Personalized supplement plans",
      "Autoimmune condition care"
    ],
    address: "123 Medical Drive, Suite 101, Charleston, SC 29401",
    phone: "(843) 555-1234",
    email: "dr.johnson@charlestondermatology.example",
    education: [
      "MD, Harvard Medical School",
      "Institute for Functional Medicine Certified Practitioner",
      "Board Certified in Family Medicine"
    ],
    languages: ["English", "Spanish"],
    tags: ["Accepting new patients", "Telehealth"]
  },
  {
    id: "b8f431a3-4b3f-4ef1-a9aa-e6be31a92817",
    name: "Dr. Michael Chen",
    specialty: "Naturopathy",
    category: "Natural",
    location: "Charleston, SC",
    summary: "Holistic naturopathic doctor helping patients naturally restore balance, energy, and resilience with plant-based therapies and preventive care.",
    rating: 4.8,
    bio: "Dr. Michael Chen is a licensed naturopathic doctor dedicated to helping individuals achieve optimal health through natural means. With over 10 years of experience, he specializes in supporting chronic fatigue, hormone imbalance, allergies, and digestive health using nutrition, botanical medicine, homeopathy, and mind-body techniques. Dr. Chen received his degree from Bastyr University and emphasizes patient education, empowering individuals to take ownership of their health through sustainable lifestyle practices.",
    imageUrl: "https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    services: [
      "Botanical medicine",
      "Nutritional therapy",
      "Detox programs",
      "Allergy desensitization",
      "Stress management",
      "Hormone support",
      "Chronic condition care",
      "Preventive screening"
    ],
    address: "456 Cardiac Center Way, Charleston, SC 29407",
    phone: "(843) 555-2345",
    email: "dr.chen@naturopathiccenter.example",
    education: [
      "ND, Bastyr University",
      "Licensed Naturopathic Physician",
      "Member, American Association of Naturopathic Physicians"
    ],
    languages: ["English", "Mandarin"],
    tags: ["Accepting new patients", "Holistic care"]
  },
  {
    id: "c78cb9a9-2f8b-4cc6-8a83-f058c042876a",
    name: "Dr. Emily Rodriguez",
    specialty: "Homeopathy",
    category: "Energetic",
    location: "Mt. Pleasant, SC",
    summary: "Classical homeopath with a gentle, individualized approach to treating chronic illnesses and restoring vitality.",
    rating: 4.9,
    bio: "Dr. Emily Rodriguez is a certified classical homeopath specializing in constitutional homeopathy and holistic case management. With a background in integrative health sciences and training from the Northwestern Academy of Homeopathy, she helps patients address long-standing issues such as eczema, anxiety, hormonal imbalances, and behavioral challenges in children. Her work emphasizes gentle, individualized remedies that stimulate the body’s own healing response without harsh side effects.",
    imageUrl: "https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    services: [
      "Constitutional homeopathy",
      "Chronic condition support",
      "Behavioral health in children",
      "Women's hormonal balance",
      "Allergy desensitization",
      "Mind-body integration"
    ],
    address: "789 Healing Lane, Mt. Pleasant, SC 29464",
    phone: "(843) 555-7890",
    email: "dr.rodriguez@homeopathymtpleasant.example",
    education: [
      "Homeopathy Certification, Northwestern Academy of Homeopathy",
      "BA in Integrative Health Sciences"
    ],
    languages: ["English", "Spanish"],
    tags: ["Natural remedies", "Gentle care"]
  },
  {
    id: "2bd373e9-d73b-4217-b4b8-29c03938581f",
    name: "Dr. James Wilson",
    specialty: "Naturopathy",
    category: "Natural",
    location: "Charleston, SC",
    summary: "Specialized orthopedic surgeon focusing on sports medicine, joint replacements, and minimally invasive procedures for faster recovery times.",
    rating: 4.7,
    bio: "Dr. James Wilson is a fellowship-trained orthopedic surgeon specializing in sports medicine and joint replacement surgery. After completing his orthopedic surgery residency at the Mayo Clinic, he pursued a fellowship in sports medicine at the Andrews Institute. Dr. Wilson treats a wide range of orthopedic conditions with expertise in knee and shoulder injuries, utilizing minimally invasive techniques whenever possible to promote faster recovery and better outcomes.",
    imageUrl: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    services: [
      "Joint replacement surgery",
      "Arthroscopic surgery",
      "Sports injury treatment",
      "ACL reconstruction",
      "Rotator cuff repair",
      "Fracture care",
      "Carpal tunnel treatment",
      "Orthopedic consultations"
    ],
    address: "321 Orthopedic Boulevard, Charleston, SC 29414",
    phone: "(843) 555-4567",
    email: "dr.wilson@charlestonortho.example",
    education: [
      "MD, University of Michigan Medical School",
      "Residency in Orthopedic Surgery, Mayo Clinic",
      "Fellowship in Sports Medicine, Andrews Institute",
      "Board Certified by the American Board of Orthopedic Surgery"
    ],
    languages: ["English"],
    tags: ["Minimally invasive", "Same-day surgery"]
  },
  {
    id: "87d3628e-6f55-4493-9ed1-96ff7da30068",
    name: "Dr. Lisa Patel",
    specialty: "Aromatherapy",
    category: "Energetic",
    location: "Charleston, SC",
    summary: "Holistic family physician providing comprehensive primary care for patients of all ages with an emphasis on preventive medicine and wellness.",
    rating: 4.8,
    bio: "Dr. Lisa Patel is a board-certified family physician who provides comprehensive primary care for patients of all ages. After completing her medical education at Emory University School of Medicine, she completed her family medicine residency at the Medical University of South Carolina. Dr. Patel takes a holistic approach to healthcare, addressing both acute and chronic conditions while emphasizing preventive care and wellness. She is committed to building long-term relationships with her patients and their families.",
    imageUrl: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    services: [
      "Annual physicals",
      "Preventive care",
      "Chronic disease management",
      "Women's health",
      "Men's health",
      "Geriatric care",
      "Minor procedures",
      "Immunizations"
    ],
    address: "567 Wellness Way, Charleston, SC 29403",
    phone: "(843) 555-5678",
    email: "dr.patel@charlestonprimarycare.example",
    education: [
      "MD, Emory University School of Medicine",
      "Residency in Family Medicine, Medical University of South Carolina",
      "Board Certified by the American Board of Family Medicine"
    ],
    languages: ["English", "Hindi", "Gujarati"],
    tags: ["Evening hours", "Telehealth"]
  },
  {
    id: "e5a9588f-76cb-4584-9ebb-7bcf4315fd3c",
    name: "Dr. Robert Thompson",
    specialty: "Homeopathy",
    category: "Alternative",
    location: "Charleston, SC",
    summary: "Experienced neurologist specializing in the diagnosis and treatment of neurological disorders including headaches, seizures, and movement disorders.",
    rating: 4.6,
    bio: "Dr. Robert Thompson is a board-certified neurologist with extensive experience in diagnosing and treating a wide range of neurological conditions. He completed his neurology residency at Washington University in St. Louis, followed by a fellowship in movement disorders at Columbia University. Dr. Thompson specializes in the treatment of Parkinson's disease, essential tremor, headaches, seizures, and other neurological disorders. He is committed to providing comprehensive, patient-centered neurological care.",
    imageUrl: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    services: [
      "Neurological evaluations",
      "Headache management",
      "Seizure treatment",
      "Movement disorder therapy",
      "Multiple sclerosis care",
      "Stroke prevention",
      "Memory disorder assessment",
      "Nerve and muscle testing"
    ],
    address: "890 Neuro Center Drive, Charleston, SC 29406",
    phone: "(843) 555-6789",
    email: "dr.thompson@charlestonneurology.example",
    education: [
      "MD, University of Pennsylvania School of Medicine",
      "Residency in Neurology, Washington University in St. Louis",
      "Fellowship in Movement Disorders, Columbia University",
      "Board Certified by the American Board of Psychiatry and Neurology"
    ],
    languages: ["English", "French"],
    tags: ["Research active", "In-network"]
  },
  {
    id: "fb4584ec-4660-4b2f-8a67-fbd1013c3376",
    name: "Dr. Olivia Martinez",
    specialty: "Homeopathy",
    category: "Alternative",
    location: "Charleston, SC",
    summary: "Compassionate OB/GYN providing comprehensive women's healthcare from adolescence through menopause, with special interest in minimally invasive gynecologic surgery.",
    rating: 4.9,
    bio: "Dr. Olivia Martinez is a board-certified obstetrician and gynecologist dedicated to providing comprehensive women's healthcare. After completing her medical education at Tulane University School of Medicine, she completed her OB/GYN residency at Duke University Medical Center. Dr. Martinez provides care for women at all stages of life, from adolescence through menopause, with services including well-woman exams, pregnancy care, and treatment of gynecologic conditions. She has special expertise in minimally invasive gynecologic surgery.",
    imageUrl: "https://images.pexels.com/photos/5207065/pexels-photo-5207065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    services: [
      "Prenatal care",
      "Labor and delivery",
      "Well-woman exams",
      "Contraception counseling",
      "Menopause management",
      "Minimally invasive surgery",
      "Gynecologic care",
      "Family planning"
    ],
    address: "432 Women's Health Boulevard, Charleston, SC 29405",
    phone: "(843) 555-7890",
    email: "dr.martinez@charlestonwomenshealth.example",
    education: [
      "MD, Tulane University School of Medicine",
      "Residency in Obstetrics and Gynecology, Duke University Medical Center",
      "Board Certified by the American Board of Obstetrics and Gynecology"
    ],
    languages: ["English", "Spanish"],
    tags: ["Accepting new patients", "Evening hours"]
  },
  {
    id: "2ec47d7d-795a-4eea-b776-1dcda3223e79",
    name: "Dr. David Kim",
    specialty: "Naturopathy",
    category: "Natural",
    location: "Charleston, SC",
    summary: "Board-certified gastroenterologist with expertise in digestive disorders, endoscopic procedures, and liver disease management.",
    rating: 4.7,
    bio: "Dr. David Kim is a board-certified gastroenterologist with expertise in the diagnosis and treatment of digestive and liver disorders. He completed his gastroenterology fellowship at the University of California, San Francisco after his internal medicine residency at Northwestern University. Dr. Kim specializes in colonoscopy, upper endoscopy, and the management of conditions such as inflammatory bowel disease, GERD, irritable bowel syndrome, and liver disease. He is committed to providing compassionate care and employing the latest evidence-based approaches.",
    imageUrl: "https://images.pexels.com/photos/5207266/pexels-photo-5207266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    services: [
      "Colonoscopy",
      "Upper endoscopy",
      "GERD treatment",
      "Inflammatory bowel disease management",
      "Irritable bowel syndrome care",
      "Hepatitis treatment",
      "Colorectal cancer screening",
      "Liver disease management"
    ],
    address: "678 Digestive Health Way, Charleston, SC 29410",
    phone: "(843) 555-8901",
    email: "dr.kim@charlestongi.example",
    education: [
      "MD, University of Chicago Pritzker School of Medicine",
      "Residency in Internal Medicine, Northwestern University",
      "Fellowship in Gastroenterology, University of California, San Francisco",
      "Board Certified in Gastroenterology"
    ],
    languages: ["English", "Korean"],
    tags: ["Advanced procedures", "Research active"]
  }
];