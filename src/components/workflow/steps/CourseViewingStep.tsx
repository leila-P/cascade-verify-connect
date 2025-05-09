
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Play, Book, MessageSquare, Send, Download, CheckCircle2, BookOpen, User } from 'lucide-react';

const CourseViewingStep: React.FC = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [comment, setComment] = useState('');
  
  // Sample course content data
  const course = {
    title: 'آموزش جامع برنامه نویسی وب',
    instructor: 'استاد محمدی',
    progress: 25, // Percentage of course completed
    sections: [
      { 
        title: "مقدمه", 
        items: [
          { id: 1, title: "معرفی دوره", type: "video", duration: "10:22", completed: true },
          { id: 2, title: "نصب ابزارهای مورد نیاز", type: "video", duration: "15:41", completed: true }
        ] 
      },
      { 
        title: "HTML و CSS", 
        items: [
          { id: 3, title: "آشنایی با HTML5", type: "video", duration: "22:30", completed: false },
          { id: 4, title: "ساختار صفحات وب", type: "video", duration: "18:15", completed: false },
          { id: 5, title: "آشنایی با CSS3", type: "video", duration: "25:47", completed: false },
          { id: 6, title: "طراحی واکنش‌گرا", type: "video", duration: "30:20", completed: false }
        ] 
      }
    ],
    comments: [
      { id: 1, user: "محمد", text: "ممنون از توضیحات عالی در مورد HTML", date: "۱۴۰۴/۰۲/۱۵" },
      { id: 2, user: "سارا", text: "میشه لطفا بیشتر در مورد فلکس‌باکس توضیح بدید؟", date: "۱۴۰۴/۰۲/۱۴" },
      { id: 3, user: "رضا", text: "خیلی مفید بود، منتظر ویدیوهای بعدی هستم.", date: "۱۴۰۴/۰۲/۱۳" }
    ]
  };
  
  // For demo, just use the index as the activeVideo
  const allVideos = course.sections.flatMap(section => section.items);
  const activeVideo = allVideos[activeVideoIndex];

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      // In a real app, would add the comment
      setComment('');
      console.log("Comment submitted:", comment);
    }
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold">{course.title}</h3>
          <p className="text-sm text-muted-foreground">مدرس: {course.instructor}</p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <Progress value={course.progress} className="w-1/3" />
            <span className="text-xs text-muted-foreground">{course.progress}% تکمیل شده</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <div className="aspect-video bg-gray-900 rounded-md flex items-center justify-center mb-4">
              <div className="text-white text-center">
                <Play size={40} className="mx-auto mb-2" />
                <p>{activeVideo.title}</p>
                <p className="text-sm text-gray-400">برای پخش کلیک کنید</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">{activeVideo.title}</h3>
              <Button variant="outline" size="sm">
                <Download size={16} className="mr-1" />
                دانلود ویدیو
              </Button>
            </div>
            
            <Tabs defaultValue="comments">
              <TabsList className="grid grid-cols-2">
                <TabsTrigger value="description" className="flex items-center">
                  <BookOpen size={16} className="mr-1" />
                  توضیحات
                </TabsTrigger>
                <TabsTrigger value="comments" className="flex items-center">
                  <MessageSquare size={16} className="mr-1" />
                  نظرات ({course.comments.length})
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="mt-4">
                <div className="prose">
                  <p>
                    در این ویدیو به معرفی مفاهیم اصلی HTML5 می‌پردازیم و ساختار اصلی یک صفحه وب را بررسی می‌کنیم. 
                    تگ‌های معنایی و کاربرد آن‌ها در طراحی وب مدرن را خواهید آموخت.
                  </p>
                  <ul className="list-disc list-inside mt-2">
                    <li>آشنایی با ساختار HTML</li>
                    <li>تگ‌های معنایی در HTML5</li>
                    <li>بهینه‌سازی برای موتورهای جستجو</li>
                    <li>ساخت فرم‌های کاربری</li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="comments" className="mt-4">
                <div className="space-y-4">
                  <div className="space-y-4 max-h-64 overflow-y-auto mb-4">
                    {course.comments.map(comment => (
                      <div key={comment.id} className="flex gap-3 pb-3 border-b last:border-b-0">
                        <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                          <User size={16} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{comment.user}</span>
                            <span className="text-xs text-muted-foreground">{comment.date}</span>
                          </div>
                          <p className="text-sm mt-1">{comment.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Textarea 
                      placeholder="نظر خود را بنویسید..." 
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    />
                    <Button 
                      className="flex-shrink-0" 
                      size="sm" 
                      onClick={handleCommentSubmit}
                      disabled={!comment.trim()}
                    >
                      <Send size={16} />
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="border rounded-md overflow-hidden">
            <div className="bg-gray-100 p-3 font-medium">محتوای دوره</div>
            <div className="max-h-[400px] overflow-y-auto">
              {course.sections.map((section, sectionIdx) => (
                <div key={sectionIdx} className="border-b last:border-b-0">
                  <div className="flex items-center gap-2 p-3 bg-gray-50">
                    <Book size={16} />
                    <span className="font-medium">{section.title}</span>
                  </div>
                  <div>
                    {section.items.map((item, itemIdx) => {
                      const videoIndex = allVideos.findIndex(v => v.id === item.id);
                      const isActive = videoIndex === activeVideoIndex;
                      
                      return (
                        <div 
                          key={item.id}
                          onClick={() => setActiveVideoIndex(videoIndex)}
                          className={`flex items-center justify-between p-3 border-t cursor-pointer ${
                            isActive ? "bg-blue-50" : "hover:bg-gray-50"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            {item.completed ? (
                              <CheckCircle2 size={16} className="text-green-500" />
                            ) : (
                              <Play size={16} />
                            )}
                            <span className={isActive ? "font-medium" : ""}>{item.title}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">{item.duration}</span>
                        </div>
                      );
                    })}
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

export default CourseViewingStep;
