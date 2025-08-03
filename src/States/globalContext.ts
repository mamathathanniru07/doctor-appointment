import { createContext } from "react"
import type { Doctor } from "../Pages/Landing/Container"

export const  doctors:Doctor[] = [
  {
    "id": "doc001",
    "name": "Dr. Anya Sharma",
    "specialization": "Pediatrics",
    "profileImage": "https://picsum.photos/id/1005/200/300",
    "availability": "Available Today",
    "bio": "Dr. Anya Sharma is a compassionate pediatrician with over 15 years of experience in child healthcare. She is dedicated to providing comprehensive medical care for infants, children, and adolescents, focusing on preventive health and treating acute and chronic conditions.",
    "education": ["MBBS - AIIMS Delhi", "MD - Pediatrics, PGI Chandigarh"],
    "experience": "15+ years at Apollo Hospitals, Delhi",
    "contact": {
      "phone": "+91 98765 43210",
      "email": "anya.sharma@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Tuesday", "time": "9:00 AM - 1:00 PM", "status": "Available" },
      { "day": "Wednesday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Thursday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Friday", "time": "9:00 AM - 5:00 PM", "status": "Available" }
    ]
  },
  {
    "id": "doc002",
    "name": "Dr. Rohan Patel",
    "specialization": "Cardiology",
    "profileImage": "https://picsum.photos/id/1011/200/300",
    "availability": "Fully Booked",
    "bio": "Dr. Rohan Patel is a leading cardiologist specializing in interventional cardiology and cardiac rhythm disorders. He is committed to delivering personalized care for heart conditions.",
    "education": ["MBBS - Grant Medical College, Mumbai", "MD - Cardiology, KEM Hospital, Mumbai"],
    "experience": "20 years at Fortis Hospital, Mumbai",
    "contact": {
      "phone": "+91 99887 76655",
      "email": "rohan.patel@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Tuesday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Wednesday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Thursday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Friday", "time": "9:00 AM - 5:00 PM", "status": "Available" }
    ]
  },
  {
    "id": "doc003",
    "name": "Dr. Priya Singh",
    "specialization": "Dermatology",
    "profileImage": "https://picsum.photos/id/1025/200/300",
    "availability": "On Leave",
    "bio": "Dr. Priya Singh is a renowned dermatologist focused on skin health, cosmetic dermatology, and hair restoration. She provides advanced treatments for various skin conditions.",
    "education": ["MBBS - Lady Hardinge Medical College, Delhi", "MD - Dermatology, Safdarjung Hospital, Delhi"],
    "experience": "12 years in private practice",
    "contact": {
      "phone": "+91 97654 32109",
      "email": "priya.singh@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "On Leave", "status": "On Leave" },
      { "day": "Tuesday", "time": "On Leave", "status": "On Leave" },
      { "day": "Wednesday", "time": "On Leave", "status": "On Leave" },
      { "day": "Thursday", "time": "On Leave", "status": "On Leave" },
      { "day": "Friday", "time": "On Leave", "status": "On Leave" }
    ]
  },
  {
    "id": "doc004",
    "name": "Dr. Vikrant Gupta",
    "specialization": "Orthopedics",
    "profileImage": "https://picsum.photos/id/1027/200/300",
    "availability": "Available Today",
    "bio": "Dr. Vikrant Gupta is an orthopedic surgeon specializing in joint replacement and sports injuries. He uses minimally invasive techniques for faster recovery.",
    "education": ["MBBS - KIMS, Hubli", "MS - Orthopedics, Manipal University"],
    "experience": "18 years at Narayana Hrudayalaya, Bangalore",
    "contact": {
      "phone": "+91 91234 56789",
      "email": "vikrant.gupta@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Tuesday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Wednesday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Thursday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Friday", "time": "9:00 AM - 1:00 PM", "status": "Available" }
    ]
  },
  {
    "id": "doc005",
    "name": "Dr. Meera Krishnan",
    "specialization": "Ophthalmology",
    "profileImage": "https://picsum.photos/id/1033/200/300",
    "availability": "Available Today",
    "bio": "Dr. Meera Krishnan is an experienced ophthalmologist with a focus on cataract surgery and glaucoma management. She is dedicated to preserving and improving vision for her patients.",
    "education": ["MBBS - Madras Medical College, Chennai", "MS - Ophthalmology, Aravind Eye Hospital, Madurai"],
    "experience": "16 years at Sankara Nethralaya, Chennai",
    "contact": {
      "phone": "+91 96543 21098",
      "email": "meera.krishnan@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Tuesday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Wednesday", "time": "On Leave", "status": "On Leave" },
      { "day": "Thursday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Friday", "time": "Fully Booked", "status": "Fully Booked" }
    ]
  },
  {
    "id": "doc006",
    "name": "Dr. Sameer Khan",
    "specialization": "General Medicine",
    "profileImage": "https://picsum.photos/id/1035/200/300",
    "availability": "Fully Booked",
    "bio": "Dr. Sameer Khan is a general physician providing comprehensive care for various adult medical conditions. He emphasizes preventive healthcare and patient education.",
    "education": ["MBBS - Seth G.S. Medical College, Mumbai", "MD - General Medicine, Sion Hospital, Mumbai"],
    "experience": "22 years in private clinic and hospital settings",
    "contact": {
      "phone": "+91 90123 45678",
      "email": "sameer.khan@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Tuesday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Wednesday", "time": "9:00 AM - 1:00 PM", "status": "Available" },
      { "day": "Thursday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Friday", "time": "Fully Booked", "status": "Fully Booked" }
    ]
  },
  {
    "id": "doc007",
    "name": "Dr. Neha Verma",
    "specialization": "Gynecology",
    "profileImage": "https://picsum.photos/id/1041/200/300",
    "availability": "Available Today",
    "bio": "Dr. Neha Verma is a compassionate gynecologist and obstetrician, providing care for women through all stages of life, including pregnancy, childbirth, and reproductive health.",
    "education": ["MBBS - King George's Medical University, Lucknow", "MS - OB/GYN, Maulana Azad Medical College, Delhi"],
    "experience": "14 years at Max Hospital, Delhi",
    "contact": {
      "phone": "+91 98765 12345",
      "email": "neha.verma@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Tuesday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Wednesday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Thursday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Friday", "time": "9:00 AM - 1:00 PM", "status": "Available" }
    ]
  },
  {
    "id": "doc008",
    "name": "Dr. Alok Desai",
    "specialization": "Neurology",
    "profileImage": "https://picsum.photos/id/1043/200/300",
    "availability": "On Leave",
    "bio": "Dr. Alok Desai is a neurologist specializing in movement disorders and epilepsy. He is committed to providing accurate diagnosis and effective management plans for neurological conditions.",
    "education": ["MBBS - BJ Medical College, Ahmedabad", "DM - Neurology, NIMHANS, Bangalore"],
    "experience": "17 years at Aster CMI Hospital, Bangalore",
    "contact": {
      "phone": "+91 90909 09090",
      "email": "alok.desai@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "On Leave", "status": "On Leave" },
      { "day": "Tuesday", "time": "On Leave", "status": "On Leave" },
      { "day": "Wednesday", "time": "On Leave", "status": "On Leave" },
      { "day": "Thursday", "time": "On Leave", "status": "On Leave" },
      { "day": "Friday", "time": "On Leave", "status": "On Leave" }
    ]
  },
  {
    "id": "doc009",
    "name": "Dr. Sunita Reddy",
    "specialization": "Endocrinology",
    "profileImage": "https://picsum.photos/id/1047/200/300",
    "availability": "Available Today",
    "bio": "Dr. Sunita Reddy is an endocrinologist specializing in diabetes, thyroid disorders, and hormonal imbalances. She provides comprehensive care to help patients manage complex endocrine conditions.",
    "education": ["MBBS - Osmania Medical College, Hyderabad", "DM - Endocrinology, PGIMER, Chandigarh"],
    "experience": "13 years at Yashoda Hospitals, Hyderabad",
    "contact": {
      "phone": "+91 87654 32109",
      "email": "sunita.reddy@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Tuesday", "time": "9:00 AM - 1:00 PM", "status": "Available" },
      { "day": "Wednesday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Thursday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Friday", "time": "9:00 AM - 5:00 PM", "status": "Available" }
    ]
  },
  {
    "id": "doc010",
    "name": "Dr. Rahul Joshi",
    "specialization": "Gastroenterology",
    "profileImage": "https://picsum.photos/id/1048/200/300",
    "availability": "Fully Booked",
    "bio": "Dr. Rahul Joshi is a gastroenterologist with expertise in digestive disorders, liver diseases, and endoscopic procedures. He aims to provide accurate diagnoses and effective treatment plans.",
    "education": ["MBBS - Seth G.S. Medical College, Mumbai", "DM - Gastroenterology, AIIMS Delhi"],
    "experience": "19 years at Jaslok Hospital, Mumbai",
    "contact": {
      "phone": "+91 99001 12233",
      "email": "rahul.joshi@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Tuesday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Wednesday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Thursday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Friday", "time": "9:00 AM - 5:00 PM", "status": "Available" }
    ]
  },
  {
    "id": "doc011",
    "name": "Dr. Anjali Rao",
    "specialization": "Psychiatry",
    "profileImage": "https://picsum.photos/id/1050/200/300",
    "availability": "Available Today",
    "bio": "Dr. Anjali Rao is a psychiatrist providing compassionate mental health care, focusing on anxiety disorders, depression, and stress management. She offers psychotherapy and medication management.",
    "education": ["MBBS - Bangalore Medical College", "MD - Psychiatry, NIMHANS, Bangalore"],
    "experience": "10 years in private practice and hospital consultation",
    "contact": {
      "phone": "+91 77889 90011",
      "email": "anjali.rao@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Tuesday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Wednesday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Thursday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Friday", "time": "9:00 AM - 1:00 PM", "status": "Available" }
    ]
  },
  {
    "id": "doc012",
    "name": "Dr. Karan Singh",
    "specialization": "Urology",
    "profileImage": "https://picsum.photos/id/1052/200/300",
    "availability": "On Leave",
    "bio": "Dr. Karan Singh is a urologist with expertise in kidney stones, prostate health, and urinary tract infections. He provides advanced surgical and non-surgical treatments.",
    "education": ["MBBS - Armed Forces Medical College, Pune", "MCh - Urology, AIIMS Delhi"],
    "experience": "16 years at Medanta - The Medicity, Gurgaon",
    "contact": {
      "phone": "+91 99988 77665",
      "email": "karan.singh@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "On Leave", "status": "On Leave" },
      { "day": "Tuesday", "time": "On Leave", "status": "On Leave" },
      { "day": "Wednesday", "time": "On Leave", "status": "On Leave" },
      { "day": "Thursday", "time": "On Leave", "status": "On Leave" },
      { "day": "Friday", "time": "On Leave", "status": "On Leave" }
    ]
  },
  {
    "id": "doc013",
    "name": "Dr. Swati Sharma",
    "specialization": "Pulmonology",
    "profileImage": "https://picsum.photos/id/1056/200/300",
    "availability": "Available Today",
    "bio": "Dr. Swati Sharma is a pulmonologist specializing in respiratory diseases, asthma, COPD, and sleep disorders. She is dedicated to improving lung health and quality of life for her patients.",
    "education": ["MBBS - Grant Medical College, Mumbai", "MD - Pulmonology, KEM Hospital, Mumbai"],
    "experience": "11 years at Lilavati Hospital, Mumbai",
    "contact": {
      "phone": "+91 87878 78787",
      "email": "swati.sharma@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Tuesday", "time": "9:00 AM - 1:00 PM", "status": "Available" },
      { "day": "Wednesday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Thursday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Friday", "time": "9:00 AM - 5:00 PM", "status": "Available" }
    ]
  },
  {
    "id": "doc014",
    "name": "Dr. Deepak Kumar",
    "specialization": "Nephrology",
    "profileImage": "https://picsum.photos/id/1058/200/300",
    "availability": "Fully Booked",
    "bio": "Dr. Deepak Kumar is a nephrologist with expertise in kidney diseases, dialysis, and kidney transplants. He offers comprehensive care for acute and chronic renal conditions.",
    "education": ["MBBS - Maulana Azad Medical College, Delhi", "DM - Nephrology, PGIMER, Chandigarh"],
    "experience": "15 years at BLK Max Hospital, Delhi",
    "contact": {
      "phone": "+91 91212 34343",
      "email": "deepak.kumar@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Tuesday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Wednesday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Thursday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Friday", "time": "9:00 AM - 5:00 PM", "status": "Available" }
    ]
  },
  {
    "id": "doc015",
    "name": "Dr. Pooja Mehta",
    "specialization": "Rheumatology",
    "profileImage": "https://picsum.photos/id/1060/200/300",
    "availability": "Available Today",
    "bio": "Dr. Pooja Mehta is a rheumatologist focused on autoimmune diseases, arthritis, and musculoskeletal conditions. She provides personalized treatment plans for complex rheumatic diseases.",
    "education": ["MBBS - Seth G.S. Medical College, Mumbai", "DM - Rheumatology, KEM Hospital, Mumbai"],
    "experience": "10 years at Kokilaben Dhirubhai Ambani Hospital, Mumbai",
    "contact": {
      "phone": "+91 98765 09876",
      "email": "pooja.mehta@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Tuesday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Wednesday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Thursday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Friday", "time": "9:00 AM - 1:00 PM", "status": "Available" }
    ]
  },
  {
    "id": "doc016",
    "name": "Dr. Arjun Kapoor",
    "specialization": "Oncology",
    "profileImage": "https://picsum.photos/id/1062/200/300",
    "availability": "On Leave",
    "bio": "Dr. Arjun Kapoor is a medical oncologist specializing in various cancer types and innovative treatment approaches. He offers compassionate and comprehensive cancer care.",
    "education": ["MBBS - Christian Medical College, Vellore", "DM - Medical Oncology, AIIMS Delhi"],
    "experience": "18 years at Apollo Cancer Centre, Chennai",
    "contact": {
      "phone": "+91 90000 11111",
      "email": "arjun.kapoor@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "On Leave", "status": "On Leave" },
      { "day": "Tuesday", "time": "On Leave", "status": "On Leave" },
      { "day": "Wednesday", "time": "On Leave", "status": "On Leave" },
      { "day": "Thursday", "time": "On Leave", "status": "On Leave" },
      { "day": "Friday", "time": "On Leave", "status": "On Leave" }
    ]
  },
  {
    "id": "doc017",
    "name": "Dr. Rina Das",
    "specialization": "Infectious Diseases",
    "profileImage": "https://picsum.photos/id/1066/200/300",
    "availability": "Available Today",
    "bio": "Dr. Rina Das is an infectious disease specialist focusing on diagnosis and management of complex infections. She provides expert care for challenging bacterial, viral, and fungal infections.",
    "education": ["MBBS - Calcutta Medical College", "MD - Internal Medicine, PGIMER, Chandigarh", "DNB - Infectious Diseases"],
    "experience": "14 years at AMRI Hospitals, Kolkata",
    "contact": {
      "phone": "+91 76543 21098",
      "email": "rina.das@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Tuesday", "time": "9:00 AM - 1:00 PM", "status": "Available" },
      { "day": "Wednesday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Thursday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Friday", "time": "9:00 AM - 5:00 PM", "status": "Available" }
    ]
  },
  {
    "id": "doc018",
    "name": "Dr. Suresh Narayan",
    "specialization": "Hematology",
    "profileImage": "https://picsum.photos/id/1067/200/300",
    "availability": "Fully Booked",
    "bio": "Dr. Suresh Narayan is a hematologist and hemato-oncologist, providing expert care for blood disorders and blood cancers. He is proficient in bone marrow transplants.",
    "education": ["MBBS - KIMS, Bangalore", "DM - Clinical Hematology, AIIMS Delhi"],
    "experience": "17 years at Narayana Health City, Bangalore",
    "contact": {
      "phone": "+91 90123 54321",
      "email": "suresh.narayan@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Tuesday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Wednesday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Thursday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Friday", "time": "9:00 AM - 5:00 PM", "status": "Available" }
    ]
  },
  {
    "id": "doc019",
    "name": "Dr. Kavita Rao",
    "specialization": "Allergy & Immunology",
    "profileImage": "https://picsum.photos/id/1069/200/300",
    "availability": "Available Today",
    "bio": "Dr. Kavita Rao is an allergist and immunologist specializing in the diagnosis and treatment of allergies, asthma, and immune system disorders. She focuses on improving quality of life for patients.",
    "education": ["MBBS - St. John's Medical College, Bangalore", "MD - General Medicine, PGIMER, Chandigarh", "DNB - Allergy & Immunology"],
    "experience": "12 years at Manipal Hospital, Bangalore",
    "contact": {
      "phone": "+91 98765 40000",
      "email": "kavita.rao@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Tuesday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Wednesday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Thursday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Friday", "time": "9:00 AM - 1:00 PM", "status": "Available" }
    ]
  },
  {
    "id": "doc020",
    "name": "Dr. Vivek Sharma",
    "specialization": "Anesthesiology",
    "profileImage": "https://picsum.photos/id/1070/200/300",
    "availability": "On Leave",
    "bio": "Dr. Vivek Sharma is a highly skilled anesthesiologist providing safe and effective anesthesia for various surgical procedures. He ensures patient comfort and safety throughout the perioperative period.",
    "education": ["MBBS - Gandhi Medical College, Bhopal", "MD - Anesthesiology, AIIMS Delhi"],
    "experience": "19 years at Fortis Escorts Heart Institute, Delhi",
    "contact": {
      "phone": "+91 99999 88888",
      "email": "vivek.sharma@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "On Leave", "status": "On Leave" },
      { "day": "Tuesday", "time": "On Leave", "status": "On Leave" },
      { "day": "Wednesday", "time": "On Leave", "status": "On Leave" },
      { "day": "Thursday", "time": "On Leave", "status": "On Leave" },
      { "day": "Friday", "time": "On Leave", "status": "On Leave" }
    ]
  },
  {
    "id": "doc021",
    "name": "Dr. Nishant Jain",
    "specialization": "Radiology",
    "profileImage": "https://picsum.photos/id/1072/200/300",
    "availability": "Available Today",
    "bio": "Dr. Nishant Jain is a diagnostic radiologist interpreting medical images to aid in the diagnosis of diseases. He specializes in MRI, CT, and ultrasound interpretations.",
    "education": ["MBBS - SMS Medical College, Jaipur", "MD - Radiology, PGIMER, Chandigarh"],
    "experience": "13 years at Artemis Hospital, Gurgaon",
    "contact": {
      "phone": "+91 98700 12345",
      "email": "nishant.jain@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Tuesday", "time": "9:00 AM - 1:00 PM", "status": "Available" },
      { "day": "Wednesday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Thursday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Friday", "time": "9:00 AM - 5:00 PM", "status": "Available" }
    ]
  },
  {
    "id": "doc022",
    "name": "Dr. Shreya Singh",
    "specialization": "Plastic Surgery",
    "profileImage": "https://picsum.photos/id/1074/200/300",
    "availability": "Fully Booked",
    "bio": "Dr. Shreya Singh is a plastic and reconstructive surgeon offering cosmetic enhancements and reconstructive procedures. She is known for her artistic approach and patient-centered care.",
    "education": ["MBBS - Grant Medical College, Mumbai", "MCh - Plastic Surgery, KEM Hospital, Mumbai"],
    "experience": "10 years at Breach Candy Hospital, Mumbai",
    "contact": {
      "phone": "+91 99887 65432",
      "email": "shreya.singh@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Tuesday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Wednesday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Thursday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Friday", "time": "9:00 AM - 5:00 PM", "status": "Available" }
    ]
  },
  {
    "id": "doc023",
    "name": "Dr. Aditya Kumar",
    "specialization": "ENT",
    "profileImage": "https://picsum.photos/id/1076/200/300",
    "availability": "Available Today",
    "bio": "Dr. Aditya Kumar is an ENT specialist treating conditions of the ear, nose, and throat. He performs surgeries for sinus issues, hearing loss, and tonsillitis.",
    "education": ["MBBS - Vardhman Mahavir Medical College, Delhi", "MS - ENT, Safdarjung Hospital, Delhi"],
    "experience": "15 years at Apollo Spectra Hospitals, Delhi",
    "contact": {
      "phone": "+91 98765 01010",
      "email": "aditya.kumar@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Tuesday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Wednesday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Thursday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Friday", "time": "9:00 AM - 1:00 PM", "status": "Available" }
    ]
  },
  {
    "id": "doc024",
    "name": "Dr. Sara Ali Khan",
    "specialization": "Obstetrics",
    "profileImage": "https://picsum.photos/id/1078/200/300",
    "availability": "On Leave",
    "bio": "Dr. Sara Ali Khan is a dedicated obstetrician providing comprehensive prenatal, delivery, and postnatal care. She supports women through their pregnancy journey with empathy.",
    "education": ["MBBS - KEM Hospital, Mumbai", "MD - Obstetrics & Gynecology, Sion Hospital, Mumbai"],
    "experience": "11 years at Cloudnine Hospital, Mumbai",
    "contact": {
      "phone": "+91 91122 33445",
      "email": "sara.ali.khan@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "On Leave", "status": "On Leave" },
      { "day": "Tuesday", "time": "On Leave", "status": "On Leave" },
      { "day": "Wednesday", "time": "On Leave", "status": "On Leave" },
      { "day": "Thursday", "time": "On Leave", "status": "On Leave" },
      { "day": "Friday", "time": "On Leave", "status": "On Leave" }
    ]
  },
  {
    "id": "doc025",
    "name": "Dr. Rohit Sharma",
    "specialization": "Sports Medicine",
    "profileImage": "https://picsum.photos/id/1080/200/300",
    "availability": "Available Today",
    "bio": "Dr. Rohit Sharma is a sports medicine specialist helping athletes recover from injuries and optimize performance. He offers rehabilitation programs and injury prevention strategies.",
    "education": ["MBBS - AIIMS Delhi", "MD - Physical Medicine & Rehabilitation, Safdarjung Hospital, Delhi"],
    "experience": "9 years with national sports academies",
    "contact": {
      "phone": "+91 80000 90000",
      "email": "rohit.sharma@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Tuesday", "time": "9:00 AM - 1:00 PM", "status": "Available" },
      { "day": "Wednesday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Thursday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Friday", "time": "9:00 AM - 5:00 PM", "status": "Available" }
    ]
  },
  {
    "id": "doc026",
    "name": "Dr. Lena Kapoor",
    "specialization": "Pain Management",
    "profileImage": "https://picsum.photos/id/1082/200/300",
    "availability": "Fully Booked",
    "bio": "Dr. Lena Kapoor specializes in pain management, offering solutions for chronic pain conditions. She uses a multidisciplinary approach including interventional procedures and medication.",
    "education": ["MBBS - CMC Vellore", "MD - Anesthesiology, PGIMER, Chandigarh", "Fellowship in Pain Medicine"],
    "experience": "14 years at Apollo Hospitals, Chennai",
    "contact": {
      "phone": "+91 77777 66666",
      "email": "lena.kapoor@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Tuesday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Wednesday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Thursday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Friday", "time": "9:00 AM - 5:00 PM", "status": "Available" }
    ]
  },
  {
    "id": "doc027",
    "name": "Dr. Manoj Yadav",
    "specialization": "Emergency Medicine",
    "profileImage": "https://picsum.photos/id/1084/200/300",
    "availability": "Available Today",
    "bio": "Dr. Manoj Yadav is an emergency medicine specialist, providing critical and immediate care for various medical emergencies. He is skilled in rapid assessment and life-saving interventions.",
    "education": ["MBBS - Armed Forces Medical College, Pune", "MD - Emergency Medicine"],
    "experience": "16 years in major trauma centers",
    "contact": {
      "phone": "+91 98765 22334",
      "email": "manoj.yadav@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Tuesday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Wednesday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Thursday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Friday", "time": "9:00 AM - 1:00 PM", "status": "Available" }
    ]
  },
  {
    "id": "doc028",
    "name": "Dr. Sanjana Verma",
    "specialization": "Geriatrics",
    "profileImage": "https://picsum.photos/id/1086/200/300",
    "availability": "On Leave",
    "bio": "Dr. Sanjana Verma is a geriatrician dedicated to the comprehensive healthcare of older adults. She focuses on managing chronic conditions, improving functional ability, and enhancing quality of life.",
    "education": ["MBBS - Topiwala National Medical College, Mumbai", "MD - Geriatric Medicine"],
    "experience": "10 years at a specialized elderly care hospital",
    "contact": {
      "phone": "+91 99010 10101",
      "email": "sanjana.verma@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "On Leave", "status": "On Leave" },
      { "day": "Tuesday", "time": "On Leave", "status": "On Leave" },
      { "day": "Wednesday", "time": "On Leave", "status": "On Leave" },
      { "day": "Thursday", "time": "On Leave", "status": "On Leave" },
      { "day": "Friday", "time": "On Leave", "status": "On Leave" }
    ]
  },
  {
    "id": "doc029",
    "name": "Dr. Pranav Sharma",
    "specialization": "Nutrition",
    "profileImage": "https://picsum.photos/id/1088/200/300",
    "availability": "Available Today",
    "bio": "Dr. Pranav Sharma is a medical nutritionist offering personalized dietary plans for various health conditions, weight management, and disease prevention. He emphasizes holistic wellness.",
    "education": ["MBBS - KIMS, Bangalore", "MD - Clinical Nutrition"],
    "experience": "8 years as a clinical nutritionist",
    "contact": {
      "phone": "+91 88888 77777",
      "email": "pranav.sharma@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Tuesday", "time": "9:00 AM - 1:00 PM", "status": "Available" },
      { "day": "Wednesday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Thursday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Friday", "time": "9:00 AM - 5:00 PM", "status": "Available" }
    ]
  },
  {
    "id": "doc030",
    "name": "Dr. Divya Patel",
    "specialization": "Sleep Medicine",
    "profileImage": "https://picsum.photos/id/1090/200/300",
    "availability": "Fully Booked",
    "bio": "Dr. Divya Patel specializes in sleep medicine, diagnosing and treating sleep disorders like apnea, insomnia, and restless legs syndrome. She helps patients achieve restful sleep.",
    "education": ["MBBS - BJ Medical College, Ahmedabad", "MD - Internal Medicine", "Fellowship in Sleep Medicine"],
    "experience": "11 years at a specialized sleep clinic",
    "contact": {
      "phone": "+91 91919 19191",
      "email": "divya.patel@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Tuesday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Wednesday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Thursday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Friday", "time": "9:00 AM - 5:00 PM", "status": "Available" }
    ]
  },
  {
    "id": "doc031",
    "name": "Dr. Vikram Singh",
    "specialization": "Intensive Care Medicine",
    "profileImage": "https://picsum.photos/id/1092/200/300",
    "availability": "Available Today",
    "bio": "Dr. Vikram Singh is a critical care specialist providing advanced medical support for critically ill patients in the ICU. He manages complex life-threatening conditions.",
    "education": ["MBBS - Seth G.S. Medical College, Mumbai", "MD - Anesthesiology", "IDCCM (Critical Care Medicine)"],
    "experience": "15 years in critical care units of major hospitals",
    "contact": {
      "phone": "+91 98765 33445",
      "email": "vikram.singh@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Tuesday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Wednesday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Thursday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Friday", "time": "9:00 AM - 1:00 PM", "status": "Available" }
    ]
  },
  {
    "id": "doc032",
    "name": "Dr. Ritu Agarwal",
    "specialization": "Adolescent Medicine",
    "profileImage": "https://picsum.photos/id/1094/200/300",
    "availability": "On Leave",
    "bio": "Dr. Ritu Agarwal specializes in adolescent medicine, addressing the unique health needs of teenagers, including physical, emotional, and social well-being. She provides confidential and supportive care.",
    "education": ["MBBS - Lady Hardinge Medical College, Delhi", "MD - Pediatrics", "Fellowship in Adolescent Medicine"],
    "experience": "10 years focusing on adolescent health",
    "contact": {
      "phone": "+91 99999 00000",
      "email": "ritu.agarwal@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "On Leave", "status": "On Leave" },
      { "day": "Tuesday", "time": "On Leave", "status": "On Leave" },
      { "day": "Wednesday", "time": "On Leave", "status": "On Leave" },
      { "day": "Thursday", "time": "On Leave", "status": "On Leave" },
      { "day": "Friday", "time": "On Leave", "status": "On Leave" }
    ]
  },
  {
    "id": "doc033",
    "name": "Dr. Amit Malhotra",
    "specialization": "Forensic Medicine",
    "profileImage": "https://picsum.photos/id/1096/200/300",
    "availability": "Available Today",
    "bio": "Dr. Amit Malhotra is a forensic medicine expert involved in legal and medical investigations, including post-mortems and medical legal opinions. He assists in criminal and civil cases.",
    "education": ["MBBS - Gandhi Medical College, Hyderabad", "MD - Forensic Medicine & Toxicology"],
    "experience": "12 years in government forensic departments",
    "contact": {
      "phone": "+91 87654 09876",
      "email": "amit.malhotra@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Tuesday", "time": "9:00 AM - 1:00 PM", "status": "Available" },
      { "day": "Wednesday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Thursday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Friday", "time": "9:00 AM - 5:00 PM", "status": "Available" }
    ]
  },
  {
    "id": "doc034",
    "name": "Dr. Gauri Sharma",
    "specialization": "Occupational Medicine",
    "profileImage": "https://picsum.photos/id/1098/200/300",
    "availability": "Fully Booked",
    "bio": "Dr. Gauri Sharma specializes in occupational medicine, focusing on workplace health and safety. She conducts medical examinations, manages work-related injuries, and advises on industrial hygiene.",
    "education": ["MBBS - Grant Medical College, Mumbai", "MD - Community Medicine", "Diploma in Industrial Health"],
    "experience": "14 years in corporate health services",
    "contact": {
      "phone": "+91 90099 88776",
      "email": "gauri.sharma@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Tuesday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Wednesday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Thursday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Friday", "time": "9:00 AM - 5:00 PM", "status": "Available" }
    ]
  },
  {
    "id": "doc035",
    "name": "Dr. Krish Pathak",
    "specialization": "Public Health",
    "profileImage": "https://picsum.photos/id/1100/200/300",
    "availability": "Available Today",
    "bio": "Dr. Krish Pathak is a public health specialist dedicated to improving community health through disease prevention, health promotion, and policy development. He works on large-scale health initiatives.",
    "education": ["MBBS - AIIMS Delhi", "MD - Community Medicine", "MPH - Harvard T.H. Chan School of Public Health"],
    "experience": "10 years in public health organizations",
    "contact": {
      "phone": "+91 98765 00011",
      "email": "krish.pathak@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Tuesday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Wednesday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Thursday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Friday", "time": "9:00 AM - 1:00 PM", "status": "Available" }
    ]
  },
  {
    "id": "doc036",
    "name": "Dr. Zara Khan",
    "specialization": "Addiction Medicine",
    "profileImage": "https://picsum.photos/id/1102/200/300",
    "availability": "On Leave",
    "bio": "Dr. Zara Khan is an addiction medicine specialist providing comprehensive care for individuals struggling with substance use disorders. She employs evidence-based treatments and recovery support.",
    "education": ["MBBS - Christian Medical College, Ludhiana", "MD - Psychiatry", "Fellowship in Addiction Medicine"],
    "experience": "9 years in de-addiction centers",
    "contact": {
      "phone": "+91 99887 75544",
      "email": "zara.khan@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "On Leave", "status": "On Leave" },
      { "day": "Tuesday", "time": "On Leave", "status": "On Leave" },
      { "day": "Wednesday", "time": "On Leave", "status": "On Leave" },
      { "day": "Thursday", "time": "On Leave", "status": "On Leave" },
      { "day": "Friday", "time": "On Leave", "status": "On Leave" }
    ]
  },
  {
    "id": "doc037",
    "name": "Dr. Aryan Verma",
    "specialization": "Genetic Medicine",
    "profileImage": "https://picsum.photos/id/1104/200/300",
    "availability": "Available Today",
    "bio": "Dr. Aryan Verma is a medical geneticist diagnosing and managing genetic disorders. He provides genetic counseling and helps families understand inherited conditions and risks.",
    "education": ["MBBS - KIMS, Hubli", "MD - Pediatrics", "DM - Medical Genetics"],
    "experience": "8 years in genetic counseling and clinical genetics",
    "contact": {
      "phone": "+91 90090 90090",
      "email": "aryan.verma@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Tuesday", "time": "9:00 AM - 1:00 PM", "status": "Available" },
      { "day": "Wednesday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Thursday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Friday", "time": "9:00 AM - 5:00 PM", "status": "Available" }
    ]
  },
  {
    "id": "doc038",
    "name": "Dr. Simran Kaur",
    "specialization": "Travel Medicine",
    "profileImage": "https://picsum.photos/id/1106/200/300",
    "availability": "Fully Booked",
    "bio": "Dr. Simran Kaur specializes in travel medicine, advising international travelers on vaccinations, preventive measures, and managing travel-related illnesses. She ensures safe and healthy travel.",
    "education": ["MBBS - SMS Medical College, Jaipur", "MD - Community Medicine", "Diploma in Travel Medicine"],
    "experience": "7 years in travel clinics",
    "contact": {
      "phone": "+91 98765 11223",
      "email": "simran.kaur@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Tuesday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Wednesday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Thursday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Friday", "time": "9:00 AM - 5:00 PM", "status": "Available" }
    ]
  },
  {
    "id": "doc039",
    "name": "Dr. Kabir Singh",
    "specialization": "Palliative Care",
    "profileImage": "https://picsum.photos/id/1108/200/300",
    "availability": "Available Today",
    "bio": "Dr. Kabir Singh provides palliative care, focusing on improving the quality of life for patients and their families facing life-limiting illnesses. He manages pain and other symptoms.",
    "education": ["MBBS - Kasturba Medical College, Manipal", "MD - Internal Medicine", "Fellowship in Palliative Medicine"],
    "experience": "10 years in palliative care units",
    "contact": {
      "phone": "+91 99999 00011",
      "email": "kabir.singh@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Tuesday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Wednesday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Thursday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Friday", "time": "9:00 AM - 1:00 PM", "status": "Available" }
    ]
  },
  {
    "id": "doc040",
    "name": "Dr. Nisha Gupta",
    "specialization": "Sports Psychology",
    "profileImage": "https://picsum.photos/id/1110/200/300",
    "availability": "On Leave",
    "bio": "Dr. Nisha Gupta is a sports psychologist helping athletes enhance mental performance, manage stress, and recover from setbacks. She applies psychological principles to sports and exercise.",
    "education": ["M.A. Psychology - University of Delhi", "PhD - Sports Psychology"],
    "experience": "8 years consulting with elite athletes and teams",
    "contact": {
      "phone": "+91 87654 32100",
      "email": "nisha.gupta@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "On Leave", "status": "On Leave" },
      { "day": "Tuesday", "time": "On Leave", "status": "On Leave" },
      { "day": "Wednesday", "time": "On Leave", "status": "On Leave" },
      { "day": "Thursday", "time": "On Leave", "status": "On Leave" },
      { "day": "Friday", "time": "On Leave", "status": "On Leave" }
    ]
  },
  {
    "id": "doc041",
    "name": "Dr. Harsh Vardhan",
    "specialization": "Cosmetic Surgery",
    "profileImage": "https://picsum.photos/id/1112/200/300",
    "availability": "Available Today",
    "bio": "Dr. Harsh Vardhan is a leading cosmetic surgeon specializing in aesthetic enhancements. He offers a range of procedures to help patients achieve their desired appearance with natural-looking results.",
    "education": ["MBBS - AIIMS Delhi", "MCh - Plastic Surgery, PGI Chandigarh"],
    "experience": "15 years in advanced cosmetic procedures",
    "contact": {
      "phone": "+91 98765 09988",
      "email": "harsh.vardhan@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Tuesday", "time": "9:00 AM - 1:00 PM", "status": "Available" },
      { "day": "Wednesday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Thursday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Friday", "time": "9:00 AM - 5:00 PM", "status": "Available" }
    ]
  },
  {
    "id": "doc042",
    "name": "Dr. Sneha Rajan",
    "specialization": "Acupuncture",
    "profileImage": "https://picsum.photos/id/1114/200/300",
    "availability": "Fully Booked",
    "bio": "Dr. Sneha Rajan is a certified acupuncturist using traditional Chinese medicine principles to alleviate pain and promote healing. She treats various conditions from chronic pain to stress.",
    "education": ["BAMS - Ayurvedic Medical College", "Diploma in Acupuncture"],
    "experience": "10 years in holistic pain management",
    "contact": {
      "phone": "+91 99887 60000",
      "email": "sneha.rajan@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Tuesday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Wednesday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Thursday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Friday", "time": "9:00 AM - 5:00 PM", "status": "Available" }
    ]
  },
  {
    "id": "doc043",
    "name": "Dr. Pradeep Rao",
    "specialization": "Chiropractic",
    "profileImage": "https://picsum.photos/id/1116/200/300",
    "availability": "Available Today",
    "bio": "Dr. Pradeep Rao is a chiropractor focusing on spinal health and musculoskeletal alignment to improve overall body function and reduce pain. He uses non-invasive techniques.",
    "education": ["Doctor of Chiropractic (DC) - Palmer College of Chiropractic"],
    "experience": "12 years in chiropractic care",
    "contact": {
      "phone": "+91 98765 00112",
      "email": "pradeep.rao@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Tuesday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Wednesday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Thursday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Friday", "time": "9:00 AM - 1:00 PM", "status": "Available" }
    ]
  },
  {
    "id": "doc044",
    "name": "Dr. Rhea Kapoor",
    "specialization": "Naturopathy",
    "profileImage": "https://picsum.photos/id/1118/200/300",
    "availability": "On Leave",
    "bio": "Dr. Rhea Kapoor is a naturopathic doctor promoting natural healing methods and preventive healthcare. She focuses on diet, lifestyle, and natural therapies for wellness.",
    "education": ["BNYS - Institute of Naturopathy & Yogic Sciences"],
    "experience": "9 years in holistic health centers",
    "contact": {
      "phone": "+91 90909 88888",
      "email": "rhea.kapoor@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "On Leave", "status": "On Leave" },
      { "day": "Tuesday", "time": "On Leave", "status": "On Leave" },
      { "day": "Wednesday", "time": "On Leave", "status": "On Leave" },
      { "day": "Thursday", "time": "On Leave", "status": "On Leave" },
      { "day": "Friday", "time": "On Leave", "status": "On Leave" }
    ]
  },
  {
    "id": "doc045",
    "name": "Dr. Arjun Reddy",
    "specialization": "Ayurveda",
    "profileImage": "https://picsum.photos/id/1120/200/300",
    "availability": "Available Today",
    "bio": "Dr. Arjun Reddy is an Ayurvedic practitioner providing traditional Indian medical treatments for a range of health issues. He offers personalized remedies based on ancient Ayurvedic principles.",
    "education": ["BAMS - Government Ayurvedic College"],
    "experience": "14 years in Ayurvedic clinics",
    "contact": {
      "phone": "+91 98765 11111",
      "email": "arjun.reddy@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Tuesday", "time": "9:00 AM - 1:00 PM", "status": "Available" },
      { "day": "Wednesday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Thursday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Friday", "time": "9:00 AM - 5:00 PM", "status": "Available" }
    ]
  },
  {
    "id": "doc046",
    "name": "Dr. Shalini Singh",
    "specialization": "Homeopathy",
    "profileImage": "https://picsum.photos/id/1122/200/300",
    "availability": "Fully Booked",
    "bio": "Dr. Shalini Singh is a homeopathic doctor providing holistic treatments for acute and chronic conditions. She believes in stimulating the body's self-healing abilities with individualized remedies.",
    "education": ["BHMS - National Institute of Homeopathy"],
    "experience": "11 years in homeopathic practice",
    "contact": {
      "phone": "+91 99000 12345",
      "email": "shalini.singh@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Tuesday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Wednesday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Thursday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Friday", "time": "9:00 AM - 5:00 PM", "status": "Available" }
    ]
  },
  {
    "id": "doc047",
    "name": "Dr. Vivaan Shah",
    "specialization": "Yoga Therapy",
    "profileImage": "https://picsum.photos/id/1124/200/300",
    "availability": "Available Today",
    "bio": "Dr. Vivaan Shah is a yoga therapist using therapeutic yoga practices to aid in physical and mental well-being. He offers personalized sessions for various health concerns.",
    "education": ["MD (Yoga) - SVYASA University"],
    "experience": "8 years as a certified yoga therapist",
    "contact": {
      "phone": "+91 88990 01122",
      "email": "vivaan.shah@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Tuesday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Wednesday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Thursday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Friday", "time": "9:00 AM - 1:00 PM", "status": "Available" }
    ]
  },
  {
    "id": "doc048",
    "name": "Dr. Mira Devi",
    "specialization": "Rehabilitation Medicine",
    "profileImage": "https://picsum.photos/id/1126/200/300",
    "availability": "On Leave",
    "bio": "Dr. Mira Devi is a specialist in rehabilitation medicine, helping patients recover from injuries, illnesses, or disabilities. She develops comprehensive rehabilitation plans to restore function.",
    "education": ["MBBS - KIMS, Bangalore", "MD - Physical Medicine & Rehabilitation"],
    "experience": "13 years at rehabilitation centers",
    "contact": {
      "phone": "+91 97777 66666",
      "email": "mira.devi@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "On Leave", "status": "On Leave" },
      { "day": "Tuesday", "time": "On Leave", "status": "On Leave" },
      { "day": "Wednesday", "time": "On Leave", "status": "On Leave" },
      { "day": "Thursday", "time": "On Leave", "status": "On Leave" },
      { "day": "Friday", "time": "On Leave", "status": "On Leave" }
    ]
  },
  {
    "id": "doc049",
    "name": "Dr. Sanjeev Gupta",
    "specialization": "Preventive Medicine",
    "profileImage": "https://picsum.photos/id/1128/200/300",
    "availability": "Available Today",
    "bio": "Dr. Sanjeev Gupta is dedicated to preventive medicine, focusing on promoting health and preventing disease through lifestyle modifications, screenings, and immunizations. He empowers patients to take charge of their health.",
    "education": ["MBBS - Kasturba Medical College, Manipal", "MD - Community Medicine", "MPH"],
    "experience": "16 years in health promotion and disease prevention programs",
    "contact": {
      "phone": "+91 91234 50000",
      "email": "sanjeev.gupta@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Tuesday", "time": "9:00 AM - 1:00 PM", "status": "Available" },
      { "day": "Wednesday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Thursday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Friday", "time": "9:00 AM - 5:00 PM", "status": "Available" }
    ]
  },
  {
    "id": "doc050",
    "name": "Dr. Isha Sharma",
    "specialization": "Critical Care",
    "profileImage": "https://picsum.photos/id/1130/200/300",
    "availability": "Fully Booked",
    "bio": "Dr. Isha Sharma is an intensive care specialist managing critically ill patients in the ICU. She provides advanced life support and coordinates care for complex medical conditions, ensuring optimal patient outcomes.",
    "education": ["MBBS - Grant Medical College, Mumbai", "MD - General Medicine", "DM - Critical Care Medicine"],
    "experience": "14 years in intensive care units across major hospitals",
    "contact": {
      "phone": "+91 99887 70000",
      "email": "isha.sharma@example.com"
    },
    "schedule": [
      { "day": "Monday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Tuesday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Wednesday", "time": "Fully Booked", "status": "Fully Booked" },
      { "day": "Thursday", "time": "9:00 AM - 5:00 PM", "status": "Available" },
      { "day": "Friday", "time": "9:00 AM - 5:00 PM", "status": "Available" }
    ]
  }
]

const initialContext:any = {
   
}

export const DoctorsContext = createContext(initialContext)