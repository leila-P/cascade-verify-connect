
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload } from 'lucide-react';

type UserType = "A" | "B";

interface DocumentUploadStepProps {
  userType: UserType;
}

const DocumentUploadStep: React.FC<DocumentUploadStepProps> = ({ userType }) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold">بارگذاری اسناد</h3>
          <p className="text-sm text-muted-foreground">لطفاً اسناد مورد نیاز را بارگذاری کنید</p>
        </div>
        
        <div className="grid gap-6">
          {userType === "A" ? (
            <>
              <div className="space-y-2">
                <Label>قرارداد تکمیل شده</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
                  <Upload className="h-10 w-10 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500 mb-2">فایل قرارداد امضا شده را بارگذاری کنید</p>
                  <Input 
                    id="contractUpload" 
                    type="file" 
                    className="hidden"
                    accept="application/pdf"
                  />
                  <Button 
                    variant="outline" 
                    onClick={() => document.getElementById('contractUpload')?.click()}
                  >
                    انتخاب فایل
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>مدارک مالی</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
                  <Upload className="h-10 w-10 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500 mb-2">مدارک مالی مورد نیاز را بارگذاری کنید</p>
                  <Input 
                    id="financialDocsUpload" 
                    type="file" 
                    className="hidden"
                    accept="application/pdf"
                    multiple
                  />
                  <Button 
                    variant="outline" 
                    onClick={() => document.getElementById('financialDocsUpload')?.click()}
                  >
                    انتخاب فایل‌ها
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-2">
                <Label>فرم تکمیل شده</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
                  <Upload className="h-10 w-10 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500 mb-2">فرم تکمیل شده را بارگذاری کنید</p>
                  <Input 
                    id="formUpload" 
                    type="file" 
                    className="hidden"
                    accept="application/pdf,image/*"
                  />
                  <Button 
                    variant="outline" 
                    onClick={() => document.getElementById('formUpload')?.click()}
                  >
                    انتخاب فایل
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>سایر مدارک</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
                  <Upload className="h-10 w-10 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500 mb-2">سایر مدارک مورد نیاز را بارگذاری کنید</p>
                  <Input 
                    id="otherDocsUpload" 
                    type="file" 
                    className="hidden"
                    accept="application/pdf,image/*"
                    multiple
                  />
                  <Button 
                    variant="outline" 
                    onClick={() => document.getElementById('otherDocsUpload')?.click()}
                  >
                    انتخاب فایل‌ها
                  </Button>
                </div>
              </div>
            </>
          )}
          
          <div className="bg-green-50 p-4 rounded-md border border-green-200">
            <p className="text-sm text-green-800">
              راهنمایی: فایل‌ها باید خوانا و با کیفیت مناسب باشند. فرمت‌های مجاز: PDF، JPG، PNG
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DocumentUploadStep;
