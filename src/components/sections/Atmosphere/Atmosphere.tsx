import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { Container } from '../../ui/Container/Container';
import { Badge } from '../../ui/Badge/Badge';

export const Atmosphere: React.FC = () => {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';

  const gallery = [
    {
      title: isAr ? 'جلسات التراس الخارجية' : 'Outdoor Sun Terrace',
      desc: isAr ? 'كراسي تركواز مريحة في الهواء الطلق' : 'Signature turquoise outdoor chairs',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
      tag: isAr ? 'الهواء الطلق' : 'Outdoor',
    },
    {
      title: isAr ? 'ركن تحضير الإسبريسو' : 'Espresso Bar Craft',
      desc: isAr ? 'باريستا محترف واستخلاص دقيق' : 'Precision dial-in & latte art',
      image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800&auto=format&fit=crop',
      tag: isAr ? 'باريستا' : 'Barista',
    },
    {
      title: isAr ? 'طاولات العمل والاجتماعات' : 'Work & Social Hub',
      desc: isAr ? 'إنترنت فائق السرعة ومنافذ شحن' : 'High-speed Wi-Fi & cozy booths',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
      tag: isAr ? 'مساحة عمل' : 'Workspace',
    },
  ];

  return (
    <section id="atmosphere" className="py-14 sm:py-20 bg-white">
      <Container size="default">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <Badge variant="turquoise" size="sm" className="mb-2">
              {isAr ? 'الأجواء والتراس' : 'TERRACE & ATMOSPHERE'}
            </Badge>
            <h2 className="font-sans font-black text-2xl sm:text-4xl uppercase tracking-tight text-onzgo-espresso">
              {isAr ? 'قعدة تليق بيومك في الهواء الطلق' : 'The Sunlit Outdoor Space'}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gallery.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-onzgo-espresso shadow-md"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onzgo-espresso-950/85 via-onzgo-espresso-950/20 to-transparent pointer-events-none" />

              <div className="absolute top-4 start-4">
                <Badge variant="turquoise" size="sm">
                  {item.tag}
                </Badge>
              </div>

              <div className="absolute bottom-4 start-4 end-4 text-white">
                <h3 className="font-sans font-bold text-lg uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-white/80 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
