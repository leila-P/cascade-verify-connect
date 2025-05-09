
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const AdminPanel = () => {
  const pendingUsers = [
    { id: 1, name: "علی محمدی", type: "A", status: "در انتظار تأیید", date: "1402/02/15" },
    { id: 2, name: "زهرا کریمی", type: "B", status: "در انتظار تأیید", date: "1402/02/16" },
    { id: 3, name: "احمد حسینی", type: "A", status: "در انتظار پرداخت", date: "1402/02/14" },
  ];
  
  const recentPayments = [
    { id: 101, user: "محمد رضایی", amount: "1,500,000", status: "موفق", date: "1402/02/15" },
    { id: 102, user: "سارا احمدی", amount: "900,000", status: "موفق", date: "1402/02/14" },
    { id: 103, user: "علی اکبری", amount: "1,500,000", status: "ناموفق", date: "1402/02/13" },
  ];

  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>پنل مدیریت</CardTitle>
          <CardDescription>مدیریت کاربران و فرآیندهای سیستم</CardDescription>
        </CardHeader>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">کاربران</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">24</div>
            <div className="text-xs text-muted-foreground mt-1">12 کاربر نوع A، 12 کاربر نوع B</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">درخواست‌های در انتظار</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">7</div>
            <div className="text-xs text-muted-foreground mt-1">5 درخواست احراز هویت، 2 درخواست تأیید</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">پرداخت‌های امروز</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3,700,000</div>
            <div className="text-xs text-muted-foreground mt-1">4 تراکنش موفق</div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>کاربران در انتظار تأیید</CardTitle>
          <CardDescription>درخواست‌های جدید نیازمند بررسی</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">شماره</TableHead>
                <TableHead>نام کاربر</TableHead>
                <TableHead>نوع</TableHead>
                <TableHead>وضعیت</TableHead>
                <TableHead>تاریخ</TableHead>
                <TableHead className="text-right">عملیات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pendingUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>
                    <Badge variant={user.type === "A" ? "default" : "outline"}>
                      نوع {user.type}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{user.status}</Badge>
                  </TableCell>
                  <TableCell>{user.date}</TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" variant="outline" className="ml-2">مشاهده</Button>
                    <Button size="sm">تأیید</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>پرداخت‌های اخیر</CardTitle>
          <CardDescription>تراکنش‌های 24 ساعت گذشته</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">شماره</TableHead>
                <TableHead>کاربر</TableHead>
                <TableHead>مبلغ (تومان)</TableHead>
                <TableHead>وضعیت</TableHead>
                <TableHead>تاریخ</TableHead>
                <TableHead className="text-right">عملیات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentPayments.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell>{payment.id}</TableCell>
                  <TableCell>{payment.user}</TableCell>
                  <TableCell>{payment.amount}</TableCell>
                  <TableCell>
                    <Badge variant={payment.status === "موفق" ? "success" : "destructive"}>
                      {payment.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{payment.date}</TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" variant="outline">جزئیات</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminPanel;
