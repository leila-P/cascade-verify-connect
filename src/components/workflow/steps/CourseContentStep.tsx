
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Trash2, Upload, Video, File, Plus, Book } from 'lucide-react';

const CourseContentStep: React.FC = () => {
  const [sections, setSections] = useState([
    {
      id: 1,
      title: 'مقدمه',
      items: [
        { id: 1, title: 'معرفی دوره', type: 'video', fileName: 'intro.mp4', uploaded: true }
      ]
    }
  ]);

  const addSection = () => {
    const newId = sections.length > 0 ? Math.max(...sections.map(s => s.id)) + 1 : 1;
    setSections([...sections, { id: newId, title: `بخش ${newId}`, items: [] }]);
  };

  const addItem = (sectionId: number) => {
    const updatedSections = sections.map(section => {
      if (section.id === sectionId) {
        const newId = section.items.length > 0 ? Math.max(...section.items.map(i => i.id)) + 1 : 1;
        return {
          ...section,
          items: [...section.items, { id: newId, title: `عنوان جدید`, type: 'video', fileName: '', uploaded: false }]
        };
      }
      return section;
    });
    setSections(updatedSections);
  };

  const removeSection = (sectionId: number) => {
    setSections(sections.filter(section => section.id !== sectionId));
  };

  const removeItem = (sectionId: number, itemId: number) => {
    const updatedSections = sections.map(section => {
      if (section.id === sectionId) {
        return {
          ...section,
          items: section.items.filter(item => item.id !== itemId)
        };
      }
      return section;
    });
    setSections(updatedSections);
  };

  const updateSectionTitle = (sectionId: number, newTitle: string) => {
    const updatedSections = sections.map(section => {
      if (section.id === sectionId) {
        return { ...section, title: newTitle };
      }
      return section;
    });
    setSections(updatedSections);
  };

  const updateItemTitle = (sectionId: number, itemId: number, newTitle: string) => {
    const updatedSections = sections.map(section => {
      if (section.id === sectionId) {
        const updatedItems = section.items.map(item => {
          if (item.id === itemId) {
            return { ...item, title: newTitle };
          }
          return item;
        });
        return { ...section, items: updatedItems };
      }
      return section;
    });
    setSections(updatedSections);
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold">آپلود محتوای دوره</h3>
          <p className="text-sm text-muted-foreground">محتوای دوره را به صورت بخش‌بندی شده اضافه کنید</p>
        </div>
        
        <div className="grid gap-6">
          <Accordion type="multiple" className="w-full">
            {sections.map((section) => (
              <AccordionItem key={section.id} value={`section-${section.id}`}>
                <div className="flex items-center">
                  <AccordionTrigger className="flex-1">
                    <div className="flex items-center gap-2">
                      <Book size={18} />
                      <Input 
                        value={section.title}
                        onChange={(e) => updateSectionTitle(section.id, e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-xs"
                      />
                    </div>
                  </AccordionTrigger>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="text-red-500 hover:text-red-700"
                    onClick={() => removeSection(section.id)}
                  >
                    <Trash2 size={18} />
                  </Button>
                </div>
                <AccordionContent>
                  <div className="space-y-4 py-2">
                    {section.items.map((item) => (
                      <div key={item.id} className="flex items-center gap-2 border p-3 rounded-md">
                        <Video size={18} className="text-blue-500" />
                        <div className="flex-1 space-y-2">
                          <Input 
                            value={item.title}
                            onChange={(e) => updateItemTitle(section.id, item.id, e.target.value)}
                            placeholder="عنوان ویدئو" 
                          />
                          <Input 
                            type="file"
                            className={`cursor-pointer ${item.uploaded ? 'text-green-500 bg-green-50' : ''}`}
                            accept="video/*,.pdf"
                          />
                          {item.uploaded && (
                            <div className="text-xs text-green-600">
                              فایل {item.fileName} با موفقیت آپلود شد
                            </div>
                          )}
                        </div>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          className="text-red-500 hover:text-red-700"
                          onClick={() => removeItem(section.id, item.id)}
                        >
                          <Trash2 size={18} />
                        </Button>
                      </div>
                    ))}
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full mt-2"
                      onClick={() => addItem(section.id)}
                    >
                      <Plus size={16} className="mr-1" />
                      افزودن محتوای جدید
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <Button
            variant="outline" 
            onClick={addSection}
            className="w-full mt-2"
          >
            <Plus size={16} className="mr-1" />
            افزودن بخش جدید
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseContentStep;
