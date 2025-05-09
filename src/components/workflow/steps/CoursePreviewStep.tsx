
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Book, Clock, DollarSign, Users, User, Calendar } from 'lucide-react';

const CoursePreviewStep: React.FC = () => {
  // Sample course data (in a real app this would come from the previous steps)
  const course = {
    title: "آموزش جامع برنامه نویسی وب",
    description: "در این دوره جامع، شما با مفاهیم اصلی برنامه نویسی وب آشنا می‌شوید و قادر خواهید بود پروژه‌های واقعی را پیاده‌سازی کنید.",
    price: 350000,
    duration: 25,
    image: "/placeholder.svg",
    category: "برنامه‌نویسی",
    sections: [
      { 
        title: "مقدمه", 
        items: [
          { title: "معرفی دوره", type: "video", duration: "10:22" },
          { title: "نصب ابزارهای مورد نیاز", type: "video", duration: "15:41" }
        ] 
      },
      { 
        title: "HTML و CSS", 
        items: [
          { title: "آشنایی با HTML5", type: "video", duration: "22:30" },
          { title: "ساختار صفحات وب", type: "video", duration: "18:15" },
          { title: "آشنایی با CSS3", type: "video", duration: "25:47" },
          { title: "طراحی واکنش‌گرا", type: "video", duration: "30:20" }
        ] 
      }
    ]
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold">پیش‌نمایش دوره</h3>
          <p className="text-sm text-muted-foreground">این پیش‌نمایش نشان می‌دهد دوره شما چگونه به شاگردان نمایش داده می‌شود</p>
        </div>
        
        <div className="grid gap-6">
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <img 
              src={course.image} 
              alt={course.title}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">{course.title}</h2>
              <Badge>{course.category}</Badge>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-3">
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock size={16} className="mr-1" />
                <span>{course.duration} ساعت آموزش</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <DollarSign size={16} className="mr-1" />
                <span>{course.price.toLocaleString()} تومان</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Users size={16} className="mr-1" />
                <span>۲۵ شاگرد</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <User size={16} className="mr-1" />
                <span>استاد محمدی</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar size={16} className="mr-1" />
                <span>آخرین بروزرسانی: ۱۴۰۴/۰۲/۲۰</span>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <p className="text-sm mb-4">
              {course.description}
            </p>
            
            <h3 className="font-semibold mb-2 text-lg">سرفصل‌ها</h3>
            <div className="space-y-4">
              {course.sections.map((section, idx) => (
                <div key={idx} className="border rounded-md p-3">
                  <div className="flex items-center gap-2 font-semibold mb-2">
                    <Book size={16} />
                    <span>{section.title}</span>
                  </div>
                  <div className="space-y-2 pl-6">
                    {section.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <span>• {item.title}</span>
                        </div>
                        <Badge variant="outline">{item.duration}</Badge>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CoursePreviewStep;
