"use client";
import React, { useState } from "react";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);
  return (
    <>
      {/* Tabs Header */}
      <div className="flex space-x-2">
        {tabs.map((tab) => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-4 py-2 font-medium transition-colors ${activeTab === tab.id ? "bg-yellow-500 rounded-full" : "border-2 border-yellow-500 text-zinc-950 rounded-full"}`} data-aos="zoom-in-up">
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      <div className="">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id}>
                {tab.content}
              </div>
            )
        )}
      </div>
    </>
  );
};

export default Tabs;
