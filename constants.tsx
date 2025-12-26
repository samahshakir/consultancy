
import React from 'react';
import { Project, Review, Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "التصميم المعماري",
    description: "نقدم تصاميم معمارية مبتكرة تجمع بين الجمالية والوظيفية، مع مراعاة أدق التفاصيل الإنشائية والبيئية.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
  },
  {
    id: 2,
    title: "الإشراف الهندسي",
    description: "إشراف ميداني متكامل لضمان تنفيذ المشاريع وفق المواصفات الفنية المعتمدة وأعلى معايير الجودة.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  },
  {
    id: 3,
    title: "التخطيط العمراني",
    description: "دراسات تخطيطية شاملة للمجمعات السكنية والتجارية، تهدف إلى خلق بيئات عمرانية مستدامة.",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
  },
  {
    id: 4,
    title: "التصميم الداخلي",
    description: "إبداع في استغلال المساحات الداخلية بتصاميم عصرية تناسب ذوق العميل وتلبي احتياجاته.",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "فيلا سكنية فاخرة",
    category: "سكني",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200",
    description: "تصميم فيلا سكنية فاخرة بنمط معاصر يدمج بين الخصوصية والإضاءة الطبيعية."
  },
  {
    id: 2,
    title: "مبنى تجاري ذكي",
    category: "تجاري",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    description: "مبنى إداري ذكي بتصميم زجاجي مبتكر يوفر بيئة عمل ملهمة وموفرة للطاقة."
  },
  {
    id: 3,
    title: "مشروع سياحي متكامل",
    category: "سياحي",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200",
    description: "تخطيط وتصميم منتجع سياحي يراعي الطبيعة المحيطة ويوفر تجربة استجمام فريدة."
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: "محمد ال غايب",
    rating: 5,
    text: "شغل احترافي اشكركم علي عملكم",
    date: "منذ 3 أشهر",
    avatar: ""
  },
  {
    id: 2,
    author: "Hisham Brair",
    rating: 5,
    text: "Excellent consulting firm and professional service.",
    date: "منذ شهر",
    avatar: ""
  },
  {
    id: 3,
    author: "عبدالله الشهراني",
    rating: 5,
    text: "عمل متقن وتعامل راقي جداً (Neat work and high-class treatment)",
    date: "منذ 5 أشهر",
    avatar: ""
  },
  {
    id: 4,
    author: "فهد علي",
    rating: 5,
    text: "انصح بالعمل معهم",
    date: "منذ 3 أشهر",
    avatar: ""
  },
  {
    id: 5,
    author: "نواف العقرب",
    rating: 5,
    text: "ماشاء الله تعامل راقي وجميل وخدمات ممتازه جدا",
    date: "منذ 3 سنوات",
    avatar: ""
  },
  {
    id: 6,
    author: "محمد",
    rating: 5,
    text: "بارك الله فيكم على حسن الأخلاق والتعامل الراقي (May God bless you for your good manners and high-class treatment)",
    date: "منذ سنة",
    avatar: ""
  },
  {
    id: 7,
    author: "حسن سعيد",
    rating: 5,
    text: "من افضل مكاتب الخميس",
    date: "منذ 5 أشهر",
    avatar: ""
  },
  {
    id: 8,
    author: "عوض القحطاني",
    rating: 5,
    text: "من افضل المكاتب صراحه عمل محترف",
    date: "منذ سنة",
    avatar: ""
  },
  {
    id: 9,
    author: "حسن الفيفي",
    rating: 5,
    text: "تعامل راقي ومهندس محترف صراحه",
    date: "منذ سنة",
    avatar: ""
  },
  {
    id: 10,
    author: "malek alqahtani",
    rating: 5,
    text: "المهندس حاتم المصري محترم وصادق الله يوفقه ويرزقه",
    date: "منذ سنة",
    avatar: ""
  },
  {
    id: 11,
    author: "عايض القحطاني",
    rating: 5,
    text: "شغل ممتاز وانجاز في العمل",
    date: "منذ سنة",
    avatar: ""
  },
  {
    id: 12,
    author: "نايف الشهراني",
    rating: 5,
    text: "من أفضل المهندسين اللي تعاملت معهم في المكاتب",
    date: "منذ سنة",
    avatar: ""
  },
  {
    id: 13,
    author: "محمد الأحمري",
    rating: 5,
    text: "مخططات مميزه وعمل اكثر من رائع",
    date: "منذ سنة",
    avatar: ""
  }
];
