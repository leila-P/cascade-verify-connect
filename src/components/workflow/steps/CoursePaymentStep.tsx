
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { CreditCard, Wallet, Gift, CheckCircle2 } from 'lucide-react';

const CoursePaymentStep: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState('online');
  const [couponCode, setCouponCode] = useState('');
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false);
  const [discount, setDiscount] = useState(0);
  
  // Course details (in a real app, these would come from the selected course)
  const course = {
    title: 'آموزش جامع برنامه نویسی وب',
    instructor: 'استاد محمدی',
    price: 350000,
    thumbnail: '/placeholder.svg'
  };

  const handleApplyCoupon = () => {
    if (couponCode === 'DISCOUNT20') {
      setIsApplyingCoupon(true);
      // Simulate API call
      setTimeout(() => {
        setDiscount(70000); // 20% of 350,000
        setIsApplyingCoupon(false);
      }, 1000);
    }
  };

  const handlePayment = () => {
    // In a real app, this would integrate with a payment gateway
    setIsPaymentComplete(true);
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold">پرداخت هزینه دوره</h3>
          <p className="text-sm text-muted-foreground">اطلاعات پرداخت را تکمیل کنید</p>
        </div>
        
        {isPaymentComplete ? (
          <div className="flex flex-col items-center justify-center py-10">
            <div className="rounded-full bg-green-100 p-3 mb-4">
              <CheckCircle2 className="h-12 w-12 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">پرداخت با موفقیت انجام شد!</h3>
            <p className="text-sm text-muted-foreground text-center max-w-md mb-6">
              شما اکنون به محتوای دوره "{course.title}" دسترسی دارید.
            </p>
            <Button>مشاهده دوره</Button>
          </div>
        ) : (
          <div className="grid gap-6">
            <div className="flex flex-col md:flex-row gap-4 border rounded-md p-4">
              <div className="w-full md:w-1/5">
                <img 
                  src={course.thumbnail} 
                  alt={course.title}
                  className="w-full aspect-video object-cover rounded-md"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">{course.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">مدرس: {course.instructor}</p>
              </div>
            </div>
            
            <div className="grid gap-2">
              <div className="p-4 rounded-md bg-gray-50">
                <div className="flex justify-between items-center mb-2">
                  <span>قیمت دوره:</span>
                  <span>{course.price.toLocaleString()} تومان</span>
                </div>
                
                {discount > 0 && (
                  <div className="flex justify-between items-center mb-2 text-green-600">
                    <span>تخفیف:</span>
                    <span>{discount.toLocaleString()} تومان</span>
                  </div>
                )}
                
                <div className="flex justify-between items-center pt-2 border-t font-bold">
                  <span>مبلغ قابل پرداخت:</span>
                  <span>{(course.price - discount).toLocaleString()} تومان</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Input
                  placeholder="کد تخفیف"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1"
                />
                <Button 
                  variant="outline" 
                  onClick={handleApplyCoupon}
                  disabled={!couponCode || isApplyingCoupon}
                >
                  {isApplyingCoupon ? 'در حال بررسی...' : 'اعمال کد'}
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium">انتخاب روش پرداخت</h4>
              <RadioGroup defaultValue="online" value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="flex items-center space-x-2 rtl:space-x-reverse border rounded-md p-3">
                  <RadioGroupItem value="online" id="online" />
                  <Label htmlFor="online" className="flex-1 flex items-center gap-2">
                    <CreditCard size={18} />
                    پرداخت آنلاین
                  </Label>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse border rounded-md p-3">
                  <RadioGroupItem value="wallet" id="wallet" />
                  <Label htmlFor="wallet" className="flex-1 flex items-center gap-2">
                    <Wallet size={18} />
                    کیف پول (موجودی: ۰ تومان)
                  </Label>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse border rounded-md p-3">
                  <RadioGroupItem value="gift" id="gift" />
                  <Label htmlFor="gift" className="flex-1 flex items-center gap-2">
                    <Gift size={18} />
                    کارت هدیه
                  </Label>
                </div>
              </RadioGroup>
            </div>
            
            <Button className="w-full" onClick={handlePayment}>
              پرداخت و ثبت‌نام در دوره
            </Button>
            
            <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
              <p className="text-sm text-blue-800">
                پس از پرداخت موفق، دسترسی به تمامی محتوای دوره به صورت نامحدود برای شما فعال خواهد شد.
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CoursePaymentStep;
