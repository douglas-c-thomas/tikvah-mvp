export interface Provider {
  id: number;
  name: string;
  specialty: string;
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
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Functional Medicine",
    location: "Charleston, SC",
    summary: "Board-certified functional medicine provider with 15+ years of experience specializing in skin cancer detection, acne treatments, and cosmetic procedures.",
    rating: 4.9,
    bio: "Dr. Sarah Johnson is a board-certified dermatologist who has been practicing for over 15 years. She completed her medical training at Harvard Medical School and her dermatology residency at Massachusetts General Hospital. Dr. Johnson specializes in the diagnosis and treatment of skin conditions, including skin cancer, acne, eczema, and psoriasis. She is passionate about patient education and preventive care.",
    imageUrl: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    services: [
      "Skin cancer screenings",
      "Acne treatment",
      "Eczema management",
      "Psoriasis treatment",
      "Botox and fillers",
      "Laser therapy",
      "Mole removal",
      "Skin rejuvenation"
    ],
    address: "123 Medical Drive, Suite 101, Charleston, SC 29401",
    phone: "(843) 555-1234",
    email: "dr.johnson@charlestondermatology.example",
    education: [
      "MD, Harvard Medical School",
      "Residency in Dermatology, Massachusetts General Hospital",
      "Board Certified by the American Board of Dermatology"
    ],
    languages: ["English", "Spanish"],
    tags: ["Accepting new patients", "Telehealth"]
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Naturopathy",
    location: "Charleston, SC",
    summary: "Interventional biofeedback focused on preventive cardiology and heart disease management with a patient-centered approach.",
    rating: 4.8,
    bio: "Dr. Michael Chen is an interventional cardiologist with expertise in complex coronary interventions and structural heart disease. After completing his cardiology fellowship at Duke University, he pursued additional training in interventional cardiology at Cleveland Clinic. Dr. Chen is committed to providing comprehensive cardiovascular care with a focus on prevention and management of heart disease.",
    imageUrl: "https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    services: [
      "Cardiac consultations",
      "Echocardiography",
      "Stress testing",
      "Coronary angiography",
      "Coronary stent placement",
      "Heart failure management",
      "Cholesterol management",
      "Hypertension treatment"
    ],
    address: "456 Cardiac Center Way, Charleston, SC 29407",
    phone: "(843) 555-2345",
    email: "dr.chen@heartspecialists.example",
    education: [
      "MD, Johns Hopkins University School of Medicine",
      "Residency in Internal Medicine, Duke University",
      "Fellowship in Cardiovascular Disease, Duke University",
      "Fellowship in Interventional Cardiology, Cleveland Clinic"
    ],
    languages: ["English", "Mandarin", "Cantonese"],
    tags: ["In-network", "Same-day appointments"]
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Homeopathy",
    location: "Charleston, SC",
    summary: "Compassionate pediatrician dedicated to providing comprehensive care for children from newborns to adolescents in a family-friendly environment.",
    rating: 4.9,
    bio: "Dr. Emily Rodriguez is a board-certified pediatrician who has been caring for children in the Charleston area for over 10 years. She completed her medical education at the University of North Carolina and her pediatric residency at Children's Hospital of Philadelphia. Dr. Rodriguez provides comprehensive pediatric care from newborn visits to adolescent health, with special interests in asthma management, developmental pediatrics, and preventive care.",
    imageUrl: "https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    services: [
      "Well-child visits",
      "Immunizations",
      "Sick visits",
      "School and sports physicals",
      "Developmental screenings",
      "Asthma management",
      "ADHD evaluation and management",
      "Newborn care"
    ],
    address: "789 Children's Way, Charleston, SC 29412",
    phone: "(843) 555-3456",
    email: "dr.rodriguez@charlestonpediatrics.example",
    education: [
      "MD, University of North Carolina School of Medicine",
      "Residency in Pediatrics, Children's Hospital of Philadelphia",
      "Board Certified by the American Board of Pediatrics"
    ],
    languages: ["English", "Spanish"],
    tags: ["Weekend hours", "Telehealth"]
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Naturopathy",
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
    id: 5,
    name: "Dr. Lisa Patel",
    specialty: "Aromatherapy",
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
    id: 6,
    name: "Dr. Robert Thompson",
    specialty: "Homeopathy",
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
    id: 7,
    name: "Dr. Olivia Martinez",
    specialty: "Reiki",
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
    id: 8,
    name: "Dr. David Kim",
    specialty: "Naturopathy",
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