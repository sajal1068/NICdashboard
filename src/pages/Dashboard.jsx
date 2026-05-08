// src/pages/Dashboard.jsx

import React, { useState } from "react";

const Dashboard = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  // डिलीट कन्फर्मेशन हैंडलर
  const handleDeleteClick = (patient) => {
    setSelectedPatient(patient);
    setShowDeleteModal(true);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Dashboard Overview
      </h2>

      <div className="w-full bg-white border border-slate-200 rounded-lg shadow-sm p-2 md:p-3 my-4">
        {/* Flex container that wraps on mobile and stays in line on desktop */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-3 md:gap-x-4">
          {[
            { label: "Username", value: "SuperAdmin" },
            { label: "Role", value: "Super Admin" },
            { label: "State", value: "Andhra Pradesh" },
            { label: "District", value: "Anantapur" },
            { label: "Block", value: "Kalyandurg" },
            { label: "Village", value: "Gollapalle" },
          ].map((item, index, array) => (
            <div key={index} className="flex items-center group">
              {/* Label & Value Container */}
              <div className="flex items-center bg-gray-50 border border-slate-200 rounded-lg px-2 py-1 shadow-sm transition-all hover:border-red-200 hover:bg-red-50/30">
                <span className="text-[9px] md:text-[10px] font-black text-red-600 uppercase tracking-tighter mr-2 border-r border-slate-200 pr-2">
                  {item.label}
                </span>
                <span className="text-[10px] md:text-[11px] font-bold text-slate-700 whitespace-nowrap">
                  {item.value}
                </span>
              </div>

              {/* Responsive Separator: Hidden on last item and adapts to flow */}
              {index !== array.length - 1 && (
                <div className="ml-2 text-slate-300 hidden sm:block">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M13 5l7 7-7 7"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
        {/* 1. Single Count Box (Registration) */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 p-6 relative overflow-hidden group hover:-translate-y-1 transition-all duration-500 flex items-center h-full">
          <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-red-50 rounded-full group-hover:scale-110 transition-transform duration-500 opacity-60"></div>
          <div className="relative z-10 flex items-center gap-5 w-full">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center text-white shadow-lg shadow-red-200 shrink-0">
              <svg
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-slate-600 uppercase tracking-[0.25em] mb-1">
                Total Registration
              </span>
              <h3 className="text-3xl font-black text-slate-900 tracking-tighter">
                5,46,16,413
              </h3>
              <div className="w-12 h-1 bg-red-600 rounded-full mt-3"></div>
            </div>
          </div>
        </div>

        {/* 2. Split Stats Box (Screened) */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 relative overflow-hidden group hover:-translate-y-1 transition-all duration-500 flex flex-col h-full">
          {/* Top Section */}
          <div className="p-5 text-center bg-gradient-to-r from-red-600 to-red-700 text-white relative">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] opacity-80">
              Total Screened
            </span>
            <h3 className="text-3xl font-black tracking-tight mt-1">
              5,46,16,413
            </h3>
          </div>
          {/* Bottom Split Section */}
          <div className="flex flex-grow divide-x divide-slate-100">
            <div className="flex-1 p-4 flex flex-col justify-center hover:bg-orange-50/50 transition-colors">
              <h4 className="text-sm font-semibold text-slate-800 leading-none">
                4,48,50,786
              </h4>
              <span className="text-sm font-bold text-orange-600 mt-1">
                85.18%
              </span>
              <p className="text-sm font-semibold text-slate-600 uppercase tracking-wider mt-2">
                Mobile App
              </p>
            </div>
            <div className="flex-1 p-4 flex flex-col  justify-center hover:bg-orange-50/50 transition-colors">
              <h4 className="text-sm font-semibold text-slate-800 leading-none">
                4,48,50,786
              </h4>
              <span className="text-sm font-bold text-red-600 mt-1">
                85.18%
              </span>
              <p className="text-sm font-semibold text-slate-600 uppercase tracking-wider mt-2">
                Legacy Data
              </p>
            </div>
          </div>
        </div>

        {/* 1. Single Count Box (Registration) */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 p-6 relative overflow-hidden group hover:-translate-y-1 transition-all duration-500 flex items-center h-full">
          <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-red-50 rounded-full group-hover:scale-110 transition-transform duration-500 opacity-60"></div>
          <div className="relative z-10 flex items-center gap-5 w-full">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center text-white shadow-lg shadow-red-200 shrink-0">
              <svg
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-slate-600 uppercase tracking-[0.25em] mb-1">
                Total Registration
              </span>
              <h3 className="text-3xl font-black text-slate-900 tracking-tighter">
                5,46,16,413
              </h3>
              <div className="w-12 h-1 bg-red-600 rounded-full mt-3"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-5">
        {/* 1. Single Count Box (Registration) */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 p-6 relative overflow-hidden group hover:-translate-y-1 transition-all duration-500 flex items-center h-full">
          <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-red-50 rounded-full group-hover:scale-110 transition-transform duration-500 opacity-60"></div>
          <div className="relative z-10 flex items-center gap-5 w-full">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center text-white shadow-lg shadow-red-200 shrink-0">
              <svg
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] mb-1">
                Total Registration
              </span>
              <h3 className="text-3xl font-black text-slate-900 tracking-tighter">
                5,46,16,413
              </h3>
              <div className="w-12 h-1 bg-red-600 rounded-full mt-3"></div>
            </div>
          </div>
        </div>

        {/* 2. Split Stats Box (Screened) */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 relative overflow-hidden group hover:-translate-y-1 transition-all duration-500 flex flex-col h-full">
          {/* Top Section */}
          <div className="p-5 text-center bg-gradient-to-r from-red-600 to-red-700 text-white relative">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-80">
              Total Screened
            </span>
            <h3 className="text-3xl font-black tracking-tight mt-1">
              5,46,16,413
            </h3>
          </div>
          {/* Bottom Split Section */}
          <div className="flex flex-grow divide-x divide-slate-100">
            <div className="flex-1 p-4 flex flex-col justify-center hover:bg-orange-50/50 transition-colors">
              <h4 className="text-sm font-black text-slate-800 leading-none">
                4,48,50,786
              </h4>
              <span className="text-[10px] font-bold text-orange-600 mt-1">
                85.18%
              </span>
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-wider mt-2">
                Mobile App
              </p>
            </div>
            <div className="flex-1 p-4 flex flex-col justify-center hover:bg-orange-50/50 transition-colors">
              <h4 className="text-sm font-black text-slate-800 leading-none">
                4,48,50,786
              </h4>
              <span className="text-[10px] font-bold text-red-600 mt-1">
                85.18%
              </span>
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-wider mt-2">
                Legacy Data
              </p>
            </div>
          </div>
        </div>

        {/* 1. Single Count Box (Registration) */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 p-6 relative overflow-hidden group hover:-translate-y-1 transition-all duration-500 flex items-center h-full">
          <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-red-50 rounded-full group-hover:scale-110 transition-transform duration-500 opacity-60"></div>
          <div className="relative z-10 flex items-center gap-5 w-full">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center text-white shadow-lg shadow-red-200 shrink-0">
              <svg
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] mb-1">
                Total Registration
              </span>
              <h3 className="text-3xl font-black text-slate-900 tracking-tighter">
                5,46,16,413
              </h3>
              <div className="w-12 h-1 bg-red-600 rounded-full mt-3"></div>
            </div>
          </div>
        </div>
      </div>


       <div className="w-full bg-white rounded-3xl shadow-2xl shadow-slate-200/60 p-6 md:p-8 border border-slate-100 mt-6">
        {/* --- Header --- */}
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-red-600 text-sm font-black uppercase tracking-[0.3em] relative">
            Filter Search
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-red-600 to-orange-500 rounded-full"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1. Select Period */}
          <div className="space-y-2">
            <label className="text-[11px] font-black text-[#1e266d] uppercase tracking-wide ml-1">
              Select Period
            </label>
            <div className="relative">
              <select className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-bold text-slate-600 focus:outline-none focus:border-red-600 transition-all cursor-pointer">
                <option>Open this select menu</option>
                <option>Last 30 Days</option>
                <option>Financial Year 2025-26</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* 2. State */}
          <div className="space-y-2">
            <label className="text-[11px] font-black text-[#1e266d] uppercase tracking-wide ml-1">
              State
            </label>
            <div className="relative">
              <select className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-bold text-slate-600 focus:outline-none focus:border-red-600 transition-all cursor-pointer">
                <option>Open this select menu</option>
                <option>Uttarakhand</option>
                <option>Andhra Pradesh</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* 3. District */}
          <div className="space-y-2">
            <label className="text-[11px] font-black text-[#1e266d] uppercase tracking-wide ml-1">
              District
            </label>
            <div className="relative">
              <select className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-bold text-slate-600 focus:outline-none focus:border-red-600 transition-all cursor-pointer">
                <option>Open this select menu</option>
                <option>Tehri Garhwal</option>
                <option>Dehradun</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* 4. Health Facility Type */}
          <div className="space-y-2">
            <label className="text-[11px] font-black text-[#1e266d] uppercase tracking-wide ml-1">
              Health Facility Type
            </label>
            <div className="relative">
              <select className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-bold text-slate-600 focus:outline-none focus:border-red-600 transition-all cursor-pointer">
                <option>Open this select menu</option>
                <option>PHC</option>
                <option>District Hospital</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* 5. Health Facility */}
          <div className="lg:col-span-1 space-y-2">
            <label className="text-[11px] font-black text-[#1e266d] uppercase tracking-wide ml-1">
              Health Facility
            </label>
            <div className="relative">
              <select className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-bold text-slate-600 focus:outline-none focus:border-red-600 transition-all cursor-pointer">
                <option>Open this select menu</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* 6. APP/API */}
          <div className="lg:col-span-1 space-y-2">
            <label className="text-[11px] font-black text-[#1e266d] uppercase tracking-wide ml-1">
              APP/API
            </label>
            <div className="relative">
              <select className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-bold text-slate-600 focus:outline-none focus:border-red-600 transition-all cursor-pointer">
                <option>Open this select menu</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* 7. Disease Type */}
          <div className="lg:col-span-2 space-y-2">
            <label className="text-[11px] font-black text-[#1e266d] uppercase tracking-wide ml-1">
              Disease Type
            </label>
            <div className="relative">
              <select className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-bold text-slate-600 focus:outline-none focus:border-red-600 transition-all cursor-pointer">
                <option>Open this select menu</option>
                <option>Sickle Cell Anemia</option>
                <option>Thalassemia</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* --- Submit Button --- */}
        <div className="mt-10 flex justify-center">
          <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-12 py-3.5 rounded-2xl text-sm font-black uppercase tracking-[0.2em] shadow-xl shadow-red-200 hover:scale-105 active:scale-95 transition-all">
            Search Records
          </button>
        </div>
      </div>


      

      <div className="bg-[#f8fafc] p-4 md:p-8  font-sans">
        {/* --- Header & Creative Tools --- */}
        <div className="bg-white rounded-t-3xl p-6 border-x border-t border-slate-100 flex flex-col xl:flex-row xl:items-center justify-between gap-6 shadow-sm">
          <div>
            <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-2">
              <span className="w-2 h-6 bg-red-600 rounded-full"></span>
              Patient Screening Records
            </h2>
            <p className="text-[10px] font-bold text-red-600 uppercase tracking-[0.2em] mt-1 ml-4">
              National SCD Elimination Mission Portal
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Enhanced Search */}
            <div className="relative group">
              <input
                type="text"
                placeholder="Search ID, Name or District..."
                className="pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-bold focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 w-72 transition-all"
              />
              <svg
                className="w-4 h-4 absolute left-3 top-3 text-slate-400 group-focus-within:text-orange-500 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Multi-Format Export Group */}
            <div className="flex items-center bg-slate-100 p-1 rounded-2xl border border-slate-200">
              <button
                title="Export PDF"
                className="p-2 hover:bg-white hover:text-red-600 rounded-xl transition-all text-slate-500"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 16l4-4h-3V4h-2v8H8l4 4zm9 4H3v-2h18v2z" />
                </svg>
              </button>
              <button
                title="Export Excel"
                className="p-2 hover:bg-white hover:text-green-600 rounded-xl transition-all text-slate-500"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM13 9V3.5L18.5 9H13z" />
                </svg>
              </button>
              <button
                title="Print Document"
                className="p-2 hover:bg-white hover:text-blue-600 rounded-xl transition-all text-slate-500"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* --- Table Section --- */}
        <div className="bg-white rounded-b-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-red-700 to-red-800">
                  {[
                    "Patient ID",
                    "Patient Profile",
                    "Location",
                    "Mission Status",
                    "Quick Actions",
                  ].map((head) => (
                    <th
                      key={head}
                      className="px-6 py-5 text-left text-[10px] font-black text-white uppercase tracking-[0.2em]"
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {/* Row Example */}
                <tr className="hover:bg-orange-50/40 transition-all group">
                  <td className="px-6 py-4">
                    <span className="text-xs font-black text-slate-400 group-hover:text-red-600 transition-colors">
                      #SCD-2026-01
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center text-red-700 font-black text-xs shadow-sm">
                        AR
                      </div>
                      <div>
                        <p className="text-xs font-black text-slate-900 uppercase">
                          Anjana Rana
                        </p>
                        <p className="text-[10px] font-bold text-slate-400">
                          Female • 24 Yrs
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-slate-700 uppercase">
                        Tehri Garhwal
                      </span>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                        Uttarakhand
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5 bg-green-50 text-green-700 px-3 py-1.5 rounded-xl w-fit">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
                      <span className="text-[9px] font-black uppercase tracking-widest">
                        Screened
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <button
                        title="View"
                        className="p-2 bg-slate-50 text-slate-400 hover:bg-slate-900 hover:text-white rounded-xl transition-all"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                      <button
                        title="Edit"
                        className="p-2 bg-slate-50 text-slate-400 hover:bg-blue-600 hover:text-white rounded-xl transition-all"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button
                        onClick={() =>
                          handleDeleteClick({
                            name: "Anjana Rana",
                            id: "#SCD-2026-01",
                          })
                        }
                        title="Delete"
                        className="p-2 bg-slate-50 text-slate-400 hover:bg-red-600 hover:text-white rounded-xl transition-all"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-orange-50/40 transition-all group">
                  <td className="px-6 py-4">
                    <span className="text-xs font-black text-slate-400 group-hover:text-red-600 transition-colors">
                      #SCD-2026-01
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center text-red-700 font-black text-xs shadow-sm">
                        AR
                      </div>
                      <div>
                        <p className="text-xs font-black text-slate-900 uppercase">
                          Anjana Rana
                        </p>
                        <p className="text-[10px] font-bold text-slate-400">
                          Female • 24 Yrs
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-slate-700 uppercase">
                        Tehri Garhwal
                      </span>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                        Uttarakhand
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5 bg-green-50 text-green-700 px-3 py-1.5 rounded-xl w-fit">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
                      <span className="text-[9px] font-black uppercase tracking-widest">
                        Screened
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <button
                        title="View"
                        className="p-2 bg-slate-50 text-slate-400 hover:bg-slate-900 hover:text-white rounded-xl transition-all"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                      <button
                        title="Edit"
                        className="p-2 bg-slate-50 text-slate-400 hover:bg-blue-600 hover:text-white rounded-xl transition-all"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button
                        onClick={() =>
                          handleDeleteClick({
                            name: "Anjana Rana",
                            id: "#SCD-2026-01",
                          })
                        }
                        title="Delete"
                        className="p-2 bg-slate-50 text-slate-400 hover:bg-red-600 hover:text-white rounded-xl transition-all"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-orange-50/40 transition-all group">
                  <td className="px-6 py-4">
                    <span className="text-xs font-black text-slate-400 group-hover:text-red-600 transition-colors">
                      #SCD-2026-01
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center text-red-700 font-black text-xs shadow-sm">
                        AR
                      </div>
                      <div>
                        <p className="text-xs font-black text-slate-900 uppercase">
                          Anjana Rana
                        </p>
                        <p className="text-[10px] font-bold text-slate-400">
                          Female • 24 Yrs
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-slate-700 uppercase">
                        Tehri Garhwal
                      </span>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                        Uttarakhand
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5 bg-green-50 text-green-700 px-3 py-1.5 rounded-xl w-fit">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
                      <span className="text-[9px] font-black uppercase tracking-widest">
                        Screened
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <button
                        title="View"
                        className="p-2 bg-slate-50 text-slate-400 hover:bg-slate-900 hover:text-white rounded-xl transition-all"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                      <button
                        title="Edit"
                        className="p-2 bg-slate-50 text-slate-400 hover:bg-blue-600 hover:text-white rounded-xl transition-all"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button
                        onClick={() =>
                          handleDeleteClick({
                            name: "Anjana Rana",
                            id: "#SCD-2026-01",
                          })
                        }
                        title="Delete"
                        className="p-2 bg-slate-50 text-slate-400 hover:bg-red-600 hover:text-white rounded-xl transition-all"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* --- Creative Pagination --- */}
          <div className="px-8 py-5 bg-slate-50 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                Rows per page:
              </span>
              <select className="bg-white border border-slate-200 rounded-lg px-2 py-1 text-[10px] font-black focus:outline-none focus:border-red-600">
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
              <div className="h-4 w-px bg-slate-200"></div>
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                1-10 of 2,450 records
              </span>
            </div>

            <div className="flex items-center gap-1">
              <button
                className="p-2 text-slate-400 hover:text-red-600 disabled:opacity-30 transition-colors"
                disabled
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <div className="flex gap-1 px-2">
                <button className="w-8 h-8 rounded-xl bg-red-600 text-white text-[10px] font-black shadow-lg shadow-red-200">
                  1
                </button>
                <button className="w-8 h-8 rounded-xl bg-white text-slate-600 text-[10px] font-black hover:bg-orange-50 transition-colors border border-slate-100">
                  2
                </button>
                <button className="w-8 h-8 rounded-xl bg-white text-slate-600 text-[10px] font-black hover:bg-orange-50 transition-colors border border-slate-100">
                  3
                </button>
                <span className="w-8 h-8 flex items-center justify-center text-slate-400">
                  ...
                </span>
              </div>
              <button className="p-2 text-slate-400 hover:text-red-600 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* --- Custom Delete Confirmation Modal --- */}
        {showDeleteModal && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300"
              onClick={() => setShowDeleteModal(false)}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white rounded-[2rem] w-full max-w-sm p-8 shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-red-50 rounded-3xl flex items-center justify-center text-red-600 mb-6 shadow-inner">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">
                  Confirm Delete?
                </h3>
                <p className="text-sm text-slate-500 mt-3 font-medium">
                  Are you sure you want to remove{" "}
                  <span className="font-black text-red-600 uppercase tracking-widest">
                    {selectedPatient?.name}
                  </span>{" "}
                  ({selectedPatient?.id})? This action cannot be undone.
                </p>

                <div className="flex flex-col w-full gap-3 mt-8">
                  <button
                    onClick={() => setShowDeleteModal(false)}
                    className="w-full bg-red-600 text-white py-4 rounded-2xl text-xs font-black uppercase tracking-[0.2em] shadow-xl shadow-red-200 hover:bg-red-700 transition-all active:scale-95"
                  >
                    Yes, Delete Record
                  </button>
                  <button
                    onClick={() => setShowDeleteModal(false)}
                    className="w-full bg-white text-slate-400 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:text-slate-900 transition-all border border-transparent hover:border-slate-100"
                  >
                    No, Keep it
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 p-4 md:p-8 bg-[#f8fafc]">
        {/* 1. Total Screening Card */}
        <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-xl shadow-slate-200/50 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
          <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-full -mr-10 -mt-10 group-hover:scale-110 transition-transform duration-500"></div>
          <div className="relative z-10 flex flex-col">
            <div className="h-10 w-10 rounded-xl bg-red-600 flex items-center justify-center text-white mb-4 shadow-lg shadow-red-200">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 005.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
              Total Screened
            </span>
            <h3 className="text-2xl font-black text-slate-900 mt-1">24,580</h3>
            <div className="flex items-center gap-1 mt-2 text-[10px] font-bold text-green-600">
              <svg
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 10l7-7 7 7" strokeWidth={3} />
              </svg>
              <span>+12.5% vs last month</span>
            </div>
          </div>
        </div>

        {/* 2. Positive Cases Card */}
        <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-xl shadow-slate-200/50 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
          <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-full -mr-10 -mt-10 group-hover:scale-110 transition-transform duration-500"></div>
          <div className="relative z-10 flex flex-col">
            <div className="h-10 w-10 rounded-xl bg-orange-500 flex items-center justify-center text-white mb-4 shadow-lg shadow-orange-200">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
              SCD Positive
            </span>
            <h3 className="text-2xl font-black text-orange-600 mt-1">1,245</h3>
            <div className="flex items-center gap-1 mt-2 text-[10px] font-bold text-slate-400">
              <span>Requires follow-up care</span>
            </div>
          </div>
        </div>

        {/* 3. Pending Screening Card */}
        <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-xl shadow-slate-200/50 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
          <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-full -mr-10 -mt-10 group-hover:scale-110 transition-transform duration-500"></div>
          <div className="relative z-10 flex flex-col">
            <div className="h-10 w-10 rounded-xl bg-slate-900 flex items-center justify-center text-white mb-4 shadow-lg shadow-slate-200">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
              Pending Tests
            </span>
            <h3 className="text-2xl font-black text-slate-900 mt-1">840</h3>
            <div className="flex items-center gap-1 mt-2 text-[10px] font-bold text-red-600">
              <span>High priority in Block-A</span>
            </div>
          </div>
        </div>

        {/* 4. Target 2047 Year Progress */}
        <div className="bg-gradient-to-br from-red-600 to-orange-500 rounded-3xl p-5 shadow-xl shadow-red-200 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full -mb-16 -mr-16"></div>
          <div className="relative z-10 flex flex-col text-white">
            <div className="h-10 w-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">
              Mission Elimination
            </span>
            <h3 className="text-3xl font-black mt-1 tracking-tighter italic">
              2047
            </h3>
            <div className="w-full bg-white/20 h-1 rounded-full mt-3 overflow-hidden">
              <div className="bg-white h-full w-[15%]" />
            </div>
            <span className="text-[9px] font-bold uppercase mt-2">
              15% Target achieved
            </span>
          </div>
        </div>
      </div>

      <div className="w-full bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/60 p-2 border border-slate-100 mt-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-2">
          {/* 1. Universal Search Input */}
          <div className="flex-1 relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-red-600 transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search by ID, Name, or Aadhar..."
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-[2rem] text-xs font-bold text-slate-700 placeholder:text-slate-400 focus:ring-4 focus:ring-red-600/5 focus:bg-white transition-all outline-none"
            />
          </div>

          {/* 2. Vertical Divider (Desktop Only) */}
          <div className="hidden lg:block h-10 w-px bg-slate-100 mx-2"></div>

          {/* 3. Filter Controls Group */}
          <div className="flex flex-wrap items-center gap-2 px-2 pb-2 lg:pb-0">
            {/* District Filter */}
            <div className="relative">
              <select className="appearance-none pl-4 pr-10 py-3 bg-white border border-slate-100 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-600 hover:border-red-200 focus:outline-none focus:ring-4 focus:ring-orange-500/10 cursor-pointer transition-all">
                <option>Select District</option>
                <option>Dehradun</option>
                <option>Tehri Garhwal</option>
                <option>Haridwar</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Status Filter */}
            <div className="relative">
              <select className="appearance-none pl-4 pr-10 py-3 bg-white border border-slate-100 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-600 hover:border-red-200 focus:outline-none focus:ring-4 focus:ring-orange-500/10 cursor-pointer transition-all">
                <option>Status: All</option>
                <option>Screened</option>
                <option>Pending</option>
                <option>Positive</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Date Filter */}
            <button className="flex items-center gap-2 px-5 py-3 bg-white border border-slate-100 rounded-2xl hover:border-orange-200 transition-all group">
              <svg
                className="w-4 h-4 text-slate-400 group-hover:text-orange-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">
                Date Range
              </span>
            </button>

            {/* Reset Filter Button */}
            <button
              title="Clear Filters"
              className="p-3 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-2xl transition-all"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Search/Apply Button */}
            <button className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-8 py-3 rounded-[1.5rem] text-[11px] font-black uppercase tracking-[0.2em] shadow-xl shadow-red-200 hover:scale-105 active:scale-95 transition-all ml-auto lg:ml-0">
              Apply
            </button>
          </div>
        </div>
      </div>

      <div className="w-full max-w-2xl">
        <div className="relative group">
          {/* Search Icon */}
          <div className="absolute left-5 top-1/2 -translate-y-1/2 transition-colors duration-300">
            <svg
              className="w-5 h-5 text-slate-400 group-focus-within:text-red-600 group-focus-within:scale-110 transition-all"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Input Field */}
          <input
            type="text"
            placeholder="Search patient, district or mission ID..."
            className={`
        w-full pl-14 pr-32 py-4 bg-white 
        border border-slate-200 rounded-[1.5rem] 
        text-sm font-bold text-slate-700 placeholder:text-slate-400
        shadow-lg shadow-slate-200/50
        focus:outline-none focus:border-red-600/30 focus:ring-4 focus:ring-red-600/5 
        transition-all duration-300
      `}
          />

          {/* Quick Action Button (Inside Input) */}
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            <button className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 py-2.5 rounded-[1.2rem] text-[10px] font-black uppercase tracking-widest shadow-md shadow-red-200 hover:brightness-110 active:scale-95 transition-all">
              Search
            </button>
          </div>
        </div>

        {/* Optional: Subtle Help Text below */}
        <p className="mt-2 ml-5 text-[9px] font-bold text-slate-400 uppercase tracking-widest opacity-0 group-focus-within:opacity-100 transition-opacity">
          Press <span className="text-red-600">Enter</span> to filter results
        </p>
      </div>

     

      <div className="w-full max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl shadow-slate-200/60 overflow-hidden border border-slate-100">
        {/* --- Form Header --- */}
        <div className="bg-gradient-to-r from-red-700 to-red-600 px-8 py-6 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-xl font-black uppercase tracking-tight">
              Data Entry Form
            </h2>
            <p className="text-[10px] font-bold text-orange-200 uppercase tracking-[0.2em] mt-1">
              National SCD Elimination Mission Portal
            </p>
          </div>
          {/* Decorative Background Icon */}
          <svg
            className="absolute -right-4 -bottom-4 w-32 h-32 text-white/10"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
          </svg>
        </div>

        <form className="p-8 space-y-6">
          {/* --- Section 1: Personal Information --- */}
          <div>
            <h4 className="text-[10px] font-black text-red-600 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-red-200"></span>
              Basic Details
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Input Field */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-black text-slate-700 uppercase tracking-wide ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"
                />
              </div>

              {/* Select Field */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-black text-slate-700 uppercase tracking-wide ml-1">
                  Gender
                </label>
                <select className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold focus:outline-none focus:border-orange-500 transition-all appearance-none cursor-pointer">
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* --- Section 2: Location Details --- */}
          <div>
            <h4 className="text-[10px] font-black text-red-600 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-red-200"></span>
              Location Information
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-1.5">
                <label className="text-[11px] font-black text-slate-700 uppercase tracking-wide ml-1">
                  State
                </label>
                <input
                  type="text"
                  placeholder="Uttarakhand"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold focus:outline-none focus:border-orange-500 transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] font-black text-slate-700 uppercase tracking-wide ml-1">
                  District
                </label>
                <input
                  type="text"
                  placeholder="Tehri Garhwal"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold focus:outline-none focus:border-orange-500 transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] font-black text-slate-700 uppercase tracking-wide ml-1">
                  Block
                </label>
                <input
                  type="text"
                  placeholder="Enter Block"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold focus:outline-none focus:border-orange-500 transition-all"
                />
              </div>
            </div>
          </div>

          {/* --- Form Footer: Actions --- */}
          <div className="pt-6 border-t border-slate-100 flex flex-col md:flex-row items-center justify-end gap-3">
            <button
              type="button"
              className="w-full md:w-auto px-8 py-2.5 text-[11px] font-black text-slate-400 uppercase tracking-widest hover:text-red-600 transition-colors"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="w-full md:w-auto bg-gradient-to-r from-red-600 to-orange-500 text-white px-10 py-3 rounded-xl text-[11px] font-black uppercase tracking-[0.2em] shadow-xl shadow-red-200 hover:scale-105 transition-all"
            >
              Submit Record
            </button>
          </div>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-700">
                Patient Statistics
              </h3>
              <p className="text-2xl font-bold text-gray-900">1,243</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-700">
                Treatment Progress
              </h3>
              <p className="text-2xl font-bold text-gray-900">78%</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-700">
                Regional Coverage
              </h3>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/60 mt-6 border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-separate border-spacing-0 text-sm">
            <thead>
              <tr>
                {[
                  "SN",
                  "State",
                  "District",
                  "Block",
                  "Address",
                  "Head Name",
                  "Actions",
                ].map((header, index) => (
                  <th
                    key={index}
                    className="bg-gradient-to-b from-red-600 to-red-700 p-3 text-left font-black text-white uppercase tracking-widest border-b border-red-800 first:rounded-tl-xl last:rounded-tr-xl"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-slate-600 font-medium">
              {/* Row 1 */}
              <tr className="border-b border-slate-100 even:bg-red-50/30 hover:bg-orange-50/50 transition-colors duration-200">
                <td className="p-3 border-b border-slate-100 border-l first:border-l-0">
                  1
                </td>
                <td className="p-3 border-b border-slate-100 font-bold text-slate-900 uppercase">
                  Uttarakhand
                </td>
                <td className="p-3 border-b border-slate-100 uppercase">
                  Tehri Garhwal
                </td>
                <td className="p-3 border-b border-slate-100 uppercase">
                  SCHOOL
                </td>
                <td className="p-3 border-b border-slate-100 text-xs italic text-slate-400">
                  ---
                </td>
                <td className="p-3 border-b border-slate-100 font-black text-red-700 uppercase">
                  ANJANA RANA
                </td>
                <td className="p-3 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <button
                      title="Edit"
                      className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                    </button>
                    <button
                      title="View Details"
                      className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-600 hover:text-white transition-all shadow-sm group"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    </button>
                    <button
                      title="Delete"
                      className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-all shadow-sm"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              {/* Row 2 - Alternate */}
              <tr className="border-b border-slate-100 even:bg-red-50/30 hover:bg-orange-50/50 transition-colors duration-200">
                <td className="p-3 border-b border-slate-100 border-l first:border-l-0">
                  2
                </td>
                <td className="p-3 border-b border-slate-100 font-bold text-slate-900 uppercase text-xs">
                  Uttarakhand
                </td>
                <td className="p-3 border-b border-slate-100 uppercase text-xs">
                  Tehri Garhwal
                </td>
                <td className="p-3 border-b border-slate-100 uppercase text-xs">
                  CENTER
                </td>
                <td className="p-3 border-b border-slate-100 text-xs text-slate-400">
                  ---
                </td>
                <td className="p-3 border-b border-slate-100 font-black text-red-700 uppercase text-xs">
                  ANJANA RANA
                </td>
                <td className="p-3 border-b border-slate-100">
                  {/* Same Action Buttons as above */}
                  <div className="flex items-center gap-3">
                    <button className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                    </button>
                    <button
                      title="View Details"
                      className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-600 hover:text-white transition-all shadow-sm group"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    </button>
                    <button className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-all shadow-sm">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-[#f8fafc] p-4 md:p-8">
        {/* --- Table Header & Tools --- */}
        <div className="bg-white rounded-t-3xl p-6 border-x border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
          <div>
            <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">
              Patient Screening Records
            </h2>
            <p className="text-[10px] font-bold text-red-600 uppercase tracking-[0.2em] mt-1">
              National SCD Elimination Mission
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search by ID or Name..."
                className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:border-orange-500 w-64 transition-all"
              />
              <svg
                className="w-4 h-4 absolute left-3 top-2.5 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Export Button */}
            <button className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-red-700 transition-all shadow-lg shadow-slate-200">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Export CSV
            </button>
          </div>
        </div>

        {/* --- The Data Table --- */}
        <div className="bg-white rounded-b-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-red-700 to-red-800">
                  {[
                    "ID",
                    "Patient Name",
                    "District",
                    "Screening Status",
                    "Action",
                  ].map((head) => (
                    <th
                      key={head}
                      className="px-6 py-4 text-left text-[10px] font-black text-white uppercase tracking-[0.2em] border-b border-red-900/20"
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {/* Row 1 */}
                <tr className="hover:bg-orange-50/40 transition-colors group">
                  <td className="px-6 py-4 text-xs font-black text-slate-400 group-hover:text-red-600 transition-colors">
                    #SCD-2026-01
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-red-100 to-orange-100 flex items-center justify-center text-red-700 font-black text-[10px]">
                        AR
                      </div>
                      <div>
                        <p className="text-xs font-black text-slate-900 uppercase">
                          Anjana Rana
                        </p>
                        <p className="text-[10px] font-bold text-slate-400">
                          Female • 24 Yrs
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs font-bold text-slate-600 uppercase">
                    Tehri Garhwal
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-[9px] font-black uppercase tracking-wider inline-flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
                      Screened
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        title="View"
                        className="p-2 bg-slate-50 text-slate-400 hover:bg-slate-900 hover:text-white rounded-lg transition-all"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                      <button
                        title="Edit"
                        className="p-2 bg-slate-50 text-slate-400 hover:bg-blue-600 hover:text-white rounded-lg transition-all"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button
                        title="Delete"
                        className="p-2 bg-slate-50 text-slate-400 hover:bg-red-600 hover:text-white rounded-lg transition-all"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="hover:bg-orange-50/40 transition-colors group">
                  <td className="px-6 py-4 text-xs font-black text-slate-400">
                    #SCD-2026-02
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-slate-200 to-slate-300 flex items-center justify-center text-slate-600 font-black text-[10px]">
                        RK
                      </div>
                      <div>
                        <p className="text-xs font-black text-slate-900 uppercase">
                          Rahul Kumar
                        </p>
                        <p className="text-[10px] font-bold text-slate-400">
                          Male • 18 Yrs
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs font-bold text-slate-600 uppercase">
                    Dehradun
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-[9px] font-black uppercase tracking-wider inline-flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                      Pending
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 bg-slate-50 text-slate-400 hover:bg-slate-900 hover:text-white rounded-lg transition-all">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                      <button className="p-2 bg-slate-50 text-slate-400 hover:bg-blue-600 hover:text-white rounded-lg transition-all">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button className="p-2 bg-slate-50 text-slate-400 hover:bg-red-600 hover:text-white rounded-lg transition-all">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* --- Pagination Footer --- */}
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Showing 1 to 10 of 2,450 results
            </span>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[10px] font-black text-slate-600 hover:border-red-600 transition-all uppercase tracking-tighter">
                Prev
              </button>
              <button className="px-3 py-1.5 bg-red-600 text-white rounded-lg text-[10px] font-black uppercase tracking-tighter shadow-md shadow-red-200">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
