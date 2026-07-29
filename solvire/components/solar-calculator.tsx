'use client';

import React, { useState } from 'react';
import { Calculator, Sun, IndianRupee, Battery, Zap } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

export function SolarCalculator() {
  const [monthlyBill, setMonthlyBill] = useState<number>(5000);

  // Simple estimations
  const annualSavings = monthlyBill * 12 * 0.8; // Assume 80% savings
  const twentyYearSavings = annualSavings * 20;
  const panelsNeeded = Math.ceil((monthlyBill / 1000) * 1.2); // Rough estimate
  
  // Simulated Energy Generation (kWh)
  const dailyGeneration = Math.round(panelsNeeded * 1.5);
  const monthlyGeneration = dailyGeneration * 30;
  const yearlyGeneration = dailyGeneration * 365;

  const data = [
    {
      name: 'Daily (kWh)',
      generation: dailyGeneration,
      fill: '#f97316' // Orange
    },
    {
      name: 'Monthly (kWh)',
      generation: monthlyGeneration,
      fill: '#16a34a' // Green
    },
    {
      name: 'Yearly (kWh)',
      generation: yearlyGeneration,
      fill: '#0f172a' // Slate 900
    },
  ];

  return (
    <div className="bg-white rounded-[24px] p-8 shadow-sm border border-slate-100 max-w-5xl mx-auto space-y-12">
      {/* Calculator Section */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">Savings Calculator</h3>
            <p className="text-sm text-slate-500">Estimate your potential solar savings</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Input Side */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-4">
                Average Monthly Electric Bill: ₹{monthlyBill.toLocaleString()}
              </label>
              <input
                type="range"
                min="1000"
                max="20000"
                step="500"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-green-600"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-2">
                <span>₹1,000</span>
                <span>₹20,000+</span>
              </div>
            </div>
          </div>

          {/* Results Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-2 text-slate-500 mb-2">
                <Sun className="w-4 h-4 text-orange-500" />
                <span className="text-xs font-medium uppercase tracking-wider">Est. Panels</span>
              </div>
              <div className="text-2xl font-bold text-slate-900">{panelsNeeded}</div>
            </div>

            <div className="bg-green-50 p-4 rounded-2xl border border-green-100">
              <div className="flex items-center gap-2 text-green-700 mb-2">
                <IndianRupee className="w-4 h-4" />
                <span className="text-xs font-medium uppercase tracking-wider">Yearly Savings</span>
              </div>
              <div className="text-2xl font-bold text-green-700">₹{annualSavings.toLocaleString()}</div>
            </div>
            
            <div className="bg-slate-900 p-4 rounded-2xl sm:col-span-2">
              <div className="flex items-center gap-2 text-slate-400 mb-2">
                <Battery className="w-4 h-4 text-green-400" />
                <span className="text-xs font-medium uppercase tracking-wider">20-Year Estimated Savings</span>
              </div>
              <div className="text-3xl font-bold text-white">₹{twentyYearSavings.toLocaleString()}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-px bg-slate-100 w-full" />

      {/* Energy Dashboard Section */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">Energy Generation Dashboard</h3>
            <p className="text-sm text-slate-500">Estimated power output based on {panelsNeeded} panels</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
              <div className="text-slate-500 text-sm font-medium mb-1">Daily Generation</div>
              <div className="text-3xl font-bold text-slate-900">{dailyGeneration} <span className="text-base font-normal text-slate-500">kWh</span></div>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
              <div className="text-slate-500 text-sm font-medium mb-1">Monthly Generation</div>
              <div className="text-3xl font-bold text-slate-900">{monthlyGeneration.toLocaleString()} <span className="text-base font-normal text-slate-500">kWh</span></div>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
              <div className="text-slate-500 text-sm font-medium mb-1">Yearly Generation</div>
              <div className="text-3xl font-bold text-slate-900">{yearlyGeneration.toLocaleString()} <span className="text-base font-normal text-slate-500">kWh</span></div>
            </div>
        </div>

        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} tickFormatter={(value) => `${value}`} />
              <Tooltip 
                cursor={{ fill: '#f8fafc' }}
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' }}
              />
              <Bar dataKey="generation" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
