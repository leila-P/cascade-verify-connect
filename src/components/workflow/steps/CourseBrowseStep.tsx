
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Clock, Star, BookOpen } from 'lucide-react';

const CourseBrowseStep: React.FC = () => {
  // Sample courses data
  const courses = [
    {
      id: 1,
      title: 'آموزش جامع برنامه نویسی وب',
      instructor: 'استاد محمدی',
      thumbnail: '/placeholder.svg',
      price: 350000,
      duration: 25,
      rating: 4.8,
      category: 'برنامه‌نویسی',
      students: 48
    },
    {
      id: 2,
      title: 'دوره طراحی UI/UX',
      instructor: 'استاد رضایی',
      thumbnail: '/placeholder.svg',
      price: 280000,
      duration: 18,
      rating: 4.5,
      category: 'طراحی',
      students: 32
    },
    {
      id: 3,
      title: 'آموزش هوش مصنوعی و یادگیری ماشین',
      instructor: 'استاد کریمی',
      thumbnail: '/placeholder.svg',
      price: 450000,
      duration: 30,
      rating: 4.9,
      category: 'هوش مصنوعی',
      students: 65
    }
  ];

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold">جستجو و مرور دوره‌ها</h3>
          <p className="text-sm text-muted-foreground">دوره مورد نظر خود را پیدا کنید و با آن آشنا شوید</p>
        </div>
        
        <div className="space-y-6">
          <div className="relative">
            <Search className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="جستجوی دوره‌ها..."
              className="pl-3 pr-10"
            />
          </div>
          
          <Tabs defaultValue="all">
            <TabsList className="grid grid-cols-4">
              <TabsTrigger value="all">همه</TabsTrigger>
              <TabsTrigger value="programming">برنامه‌نویسی</TabsTrigger>
              <TabsTrigger value="design">طراحی</TabsTrigger>
              <TabsTrigger value="business">کسب و کار</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="grid gap-4">
            {courses.map(course => (
              <div key={course.id} className="flex flex-col md:flex-row border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="w-full md:w-1/3 aspect-video md:aspect-square bg-gray-100">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 p-4 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{course.title}</h3>
                    <Badge>{course.category}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">مدرس: {course.instructor}</p>
                  <div className="flex items-center gap-4 mb-2 text-sm">
                    <span className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {course.duration} ساعت
                    </span>
                    <span className="flex items-center">
                      <Star size={14} className="mr-1 text-yellow-500" />
                      {course.rating}
                    </span>
                    <span className="flex items-center">
                      <BookOpen size={14} className="mr-1" />
                      {course.students} شاگرد
                    </span>
                  </div>
                  <div className="mt-auto pt-3 flex justify-between items-center">
                    <span className="font-bold">{course.price.toLocaleString()} تومان</span>
                    <Button size="sm">مشاهده دوره</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseBrowseStep;
