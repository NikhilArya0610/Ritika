'use client';

import { useEffect, useState } from 'react';
import { getAdminDashboardData } from '@/services/admin';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type DashboardData = {
  productCount: number;
  categoryCount: number;
  customerCount: number;
  enquiryCount: number;
  recentEnquiries: Array<Record<string, any>>;
};

export default function AdminPage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAdminDashboardData().then((result) => {
      setData(result);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div className="text-brand-700">Loading admin dashboard...</div>;
  }

  return (
    <div className="space-y-10">
      <div className="rounded-[2.5rem] border border-brand-200/70 bg-white/90 p-10 shadow-soft">
        <SectionHeading title="Admin dashboard" description="Manage products, categories, customers, and enquiries from this panel." />
      </div>
      <div className="grid gap-6 md:grid-cols-4">
        <Card className="p-8">
          <p className="text-sm uppercase tracking-[0.35em] text-brand-600">Products</p>
          <p className="mt-6 text-4xl font-semibold text-brand-950">{data?.productCount}</p>
        </Card>
        <Card className="p-8">
          <p className="text-sm uppercase tracking-[0.35em] text-brand-600">Categories</p>
          <p className="mt-6 text-4xl font-semibold text-brand-950">{data?.categoryCount}</p>
        </Card>
        <Card className="p-8">
          <p className="text-sm uppercase tracking-[0.35em] text-brand-600">Customers</p>
          <p className="mt-6 text-4xl font-semibold text-brand-950">{data?.customerCount}</p>
        </Card>
        <Card className="p-8">
          <p className="text-sm uppercase tracking-[0.35em] text-brand-600">Enquiries</p>
          <p className="mt-6 text-4xl font-semibold text-brand-950">{data?.enquiryCount}</p>
        </Card>
      </div>
      <section className="space-y-6 rounded-[2.5rem] border border-brand-200/70 bg-white/90 p-8 shadow-soft">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-brand-950">Recent enquiries</h2>
            <p className="text-sm leading-6 text-brand-600">Latest messages from customers by creation time.</p>
          </div>
          <Button variant="outline" size="sm">
            Export CSV
          </Button>
        </div>
        <div className="space-y-4">
          {data?.recentEnquiries?.map((enquiry) => (
            <div key={enquiry.id} className="rounded-[2rem] border border-brand-200/70 bg-brand-100/80 p-5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm font-semibold text-brand-950">Enquiry ID: {enquiry.id}</p>
                <span className="rounded-full bg-white px-3 py-1 text-xs uppercase tracking-[0.25em] text-brand-600">
                  {enquiry.status}
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-brand-700">{enquiry.message}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
