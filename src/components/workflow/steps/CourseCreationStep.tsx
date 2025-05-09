
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const CourseCreationStep: React.FC = () => {
  const [courseTitle, setCourseTitle] = useState('');
  const [courseCategory, setCourseCategory] = useState('');
  const [courseDescription, setCourseDescription] = useState('');

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold">ایجاد دوره جدید</h3>
          <p className="text-sm text-muted-foreground">اطلاعات اصلی دوره را وارد کنید</p>
        </div>
        
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label htmlFor="courseTitle">عنوان دوره</Label>
            <Input 
              id="courseTitle" 
              placeholder="عنوان دوره را وارد کنید" 
              value={courseTitle}
              onChange={(e) => setCourseTitle(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="courseCategory">دسته‌بندی</Label>
            <Select value={courseCategory} onValueChange={setCourseCategory}>
              <SelectTrigger id="courseCategory">
                <SelectValue placeholder="دسته‌بندی را انتخاب کنید" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="programming">برنامه‌نویسی</SelectItem>
                <SelectItem value="design">طراحی</SelectItem>
                <SelectItem value="marketing">بازاریابی</SelectItem>
                <SelectItem value="business">کسب و کار</SelectItem>
                <SelectItem value="photography">عکاسی</SelectItem>
                <SelectItem value="music">موسیقی</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="courseDescription">توضیحات دوره</Label>
            <Textarea 
              id="courseDescription" 
              placeholder="توضیحات دوره را وارد کنید" 
              className="min-h-32"
              value={courseDescription}
              onChange={(e) => setCourseDescription(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="coursePrice">قیمت دوره (تومان)</Label>
              <Input id="coursePrice" type="number" placeholder="مثلا: 300000" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="courseDuration">مدت زمان دوره (ساعت)</Label>
              <Input id="courseDuration" type="number" placeholder="مثلا: 10" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="courseImage">تصویر شاخص دوره</Label>
            <Input id="courseImage" type="file" className="cursor-pointer" accept="image/*" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCreationStep;
