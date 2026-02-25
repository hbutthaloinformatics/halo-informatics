import React from "react";
import { Bell, MessageSquare, Search, ChevronDown, Mail, FileText, ClipboardList, BarChart3 } from "lucide-react";

export default function EopsDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-sm px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center text-white text-xl font-bold">
              H
            </div>
            <span className="text-2xl font-bold text-gray-800">eOPS</span>
          </div>
          <h1 className="text-lg md:text-xl font-semibold text-gray-700">
            Welcome Nasir
          </h1>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:flex-none md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div className="flex items-center gap-4">
            <MessageSquare className="w-5 h-5 text-gray-600" />
            <div className="relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                4
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://via.placeholder.com/40"
                alt="profile"
                className="w-9 h-9 rounded-full object-cover"
              />
              <span className="font-medium text-gray-700 hidden md:block">
                Nasir Ali
              </span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Calendar Section */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-xl font-bold text-gray-800">Calendar</h2>
              <p className="text-sm text-gray-500">
                Here is today's schedule!
              </p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-1 text-sm bg-cyan-500 text-white rounded-lg">
                Calendar
              </button>
              <button className="px-4 py-1 text-sm bg-gray-200 text-gray-700 rounded-lg">
                News Letter
              </button>
            </div>
          </div>

          {/* Fake Calendar Grid */}
          <div className="grid grid-cols-7 gap-2 text-xs text-gray-500 mb-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
              (day) => (
                <div key={day} className="text-center font-medium">
                  {day}
                </div>
              )
            )}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 28 }).map((_, i) => (
              <div
                key={i}
                className="h-24 bg-gray-50 rounded-lg border border-gray-100"
              ></div>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-2xl shadow-sm p-6 flex items-center justify-center">
            <div className="text-center">
              <div className="text-cyan-500 text-3xl font-bold mb-2">
                Eops Genie
              </div>
              <p className="text-sm text-gray-500">Smart Assistant</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6 flex items-center gap-4 cursor-pointer hover:shadow-md transition">
            <Mail className="w-10 h-10 text-red-500" />
            <span className="text-gray-700 font-medium">
              Company News letter
            </span>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6 flex items-center gap-4 cursor-pointer hover:shadow-md transition">
            <FileText className="w-10 h-10 text-blue-500" />
            <span className="text-gray-700 font-medium">
              Company Policy and Procedures
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center justify-center hover:shadow-md transition cursor-pointer">
              <ClipboardList className="w-10 h-10 text-green-500 mb-2" />
              <span className="text-gray-700 font-medium">Reports</span>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center justify-center hover:shadow-md transition cursor-pointer">
              <BarChart3 className="w-10 h-10 text-purple-500 mb-2" />
              <span className="text-gray-700 font-medium">Dashboards</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
