
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CheckCircle, AlertCircle } from 'lucide-react';

const CoursePublishStep: React.FC = () => {
  const [isPublic, setIsPublic] = useState(true);
  const [allowComments, setAllowComments] = useState(true);
  const [showCertificates, setShowCertificates] = useState(true);
  const [publishDialogOpen, setPublishDialogOpen] = useState(false);
  const [isPublished, setIsPublished] = useState(false);

  const handlePublish = () => {
    setIsPublished(true);
    setPublishDialogOpen(false);
  };

  return (
    <>
      <Card>
        <CardContent className="pt-6">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold">انتشار دوره</h3>
            <p className="text-sm text-muted-foreground">تنظیمات نهایی را انجام دهید و دوره خود را منتشر کنید</p>
          </div>
          
          {isPublished ? (
            <div className="flex flex-col items-center justify-center py-10">
              <div className="rounded-full bg-green-100 p-3 mb-4">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">دوره با موفقیت منتشر شد!</h3>
              <p className="text-sm text-muted-foreground text-center max-w-md mb-6">
                دوره شما اکنون برای شاگردان قابل مشاهده است و می‌توانند آن را خریداری کنند.
              </p>
              <div className="flex gap-4">
                <Button variant="outline">مشاهده صفحه دوره</Button>
                <Button>ایجاد دوره جدید</Button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="public-toggle" className="font-medium">نمایش عمومی</Label>
                    <p className="text-sm text-muted-foreground">دوره برای همه قابل مشاهده خواهد بود</p>
                  </div>
                  <Switch id="public-toggle" checked={isPublic} onCheckedChange={setIsPublic} />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="comments-toggle" className="font-medium">امکان نظردهی</Label>
                    <p className="text-sm text-muted-foreground">شاگردان می‌توانند برای هر قسمت نظر بگذارند</p>
                  </div>
                  <Switch id="comments-toggle" checked={allowComments} onCheckedChange={setAllowComments} />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="certificates-toggle" className="font-medium">گواهینامه پایان دوره</Label>
                    <p className="text-sm text-muted-foreground">شاگردان پس از تکمیل دوره گواهینامه دریافت کنند</p>
                  </div>
                  <Switch id="certificates-toggle" checked={showCertificates} onCheckedChange={setShowCertificates} />
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                <div className="flex gap-3">
                  <AlertCircle className="h-5 w-5 text-blue-600" />
                  <div>
                    <h4 className="font-medium text-blue-800 mb-1">قبل از انتشار توجه کنید</h4>
                    <ul className="text-sm text-blue-700 list-disc list-inside space-y-1">
                      <li>از صحت محتوای آموزشی خود اطمینان حاصل کنید</li>
                      <li>حقوق مالکیت معنوی محتوا رعایت شده باشد</li>
                      <li>کیفیت صدا و تصویر ویدئوها مناسب باشد</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <Button 
                className="w-full" 
                size="lg"
                onClick={() => setPublishDialogOpen(true)}
              >
                انتشار دوره
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <Dialog open={publishDialogOpen} onOpenChange={setPublishDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>آیا از انتشار دوره اطمینان دارید؟</DialogTitle>
            <DialogDescription>
              پس از انتشار، دوره برای خرید توسط شاگردان قابل دسترس خواهد بود.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <h4 className="font-medium mb-2">عنوان دوره: آموزش جامع برنامه نویسی وب</h4>
            <p className="text-sm text-muted-foreground">قیمت: 350,000 تومان</p>
            <p className="text-sm text-muted-foreground">مدت زمان: 25 ساعت</p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setPublishDialogOpen(false)}>انصراف</Button>
            <Button onClick={handlePublish}>تأیید و انتشار</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CoursePublishStep;
