"use client";

import { useRouter } from "next/navigation";
import { Button } from "../components/ui/moving-border";
import { Tabs } from "../components/ui/tabs";

export default function TabsDemo() {
    const router = useRouter();
  const tabs = [
    {
      title: "Fundamentals",
      value: "fundamental",
      content: <DummyContent module="fundamental" />,
    },
    {
      title: "MasterJavaScript",
      value: "javascript",
      content: <DummyContent module="javascript" />,
    },
    {
      title: "Backend",
      value: "backend",
      content: <DummyContent module="backend" />,
    },
    {
      title: "MasterReact",
      value: "react",
      content: <DummyContent module="react" />,
    },
    {
      title: "TypeScript",
      value: "typescript",
      content: <DummyContent module="typescript" />,
    },
    {
      title: "Integration",
      value: "fullstack",
      content: <DummyContent module="fullstack" />,
    },
    {
      title: "ReactNative",
      value: "native",
      content: <DummyContent module="native" />,
    },
    {
      title: "Project",
      value: "project",
      content: <DummyContent module="project" />,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-between min-h-screen max-w-5xl mx-auto w-full px-4">
      {/* Tabs grow to take space properly */}
      <div className="flex-1 w-full">
        <Tabs tabs={tabs} />
      </div>

      {/* Button stays at bottom and never overlaps content */}
      <div className="w-full flex justify-center mt-auto pb-4">
      <Button onClick={() => router.push("/join")}>Join Now</Button>
      </div>
    </div>
  );
}

const DummyContent = ({ module }: { module: keyof typeof moduleContent }) => {
  const moduleContent = {
    fundamental: (
      <div className="p-6 space-y-4 text-white bg-gradient-to-br from-purple-700 to-violet-900 rounded-xl">
        <h2 className="text-2xl font-bold">📌 Web Fundamentals (Weeks 1-2)</h2>
        <ul className="list-disc pl-6">
          <li>
            Understanding HTML Structure (Tags, Elements, Forms, Semantic HTML)
          </li>
          <li>CSS Fundamentals (Selectors, Box Model, Positioning)</li>
          <li>Flexbox & Grid Layouts (Responsive Design)</li>
          <li>Introduction to Media Queries</li>
          <li>CSS Animations & Transitions</li>
          <li>Utility-first CSS with Tailwind CSS</li>
          <li>Configuring Tailwind (Themes, Custom Styles, Dark Mode)</li>
          <li>Responsive Design & Mobile-first Approach</li>
          <li>Component-based Styling in Tailwind</li>
          <li>Mini Project: Build a styled portfolio page</li>
        </ul>
      </div>
    ),
    javascript: (
      <div className="p-6 space-y-4 text-white bg-gradient-to-br from-purple-700 to-violet-900 rounded-xl">
        <h2 className="text-2xl font-bold">📌 Master JavaScript (Weeks 3-4)</h2>
        <ul className="list-disc pl-6">
          <li>JavaScript Basics (Variables, Functions, Loops, Arrays)</li>
          <li>
            ES6+ Features (Arrow Functions, Destructuring, Template Literals)
          </li>
          <li>DOM Manipulation (Events, Selectors, Modifying Elements)</li>
          <li>Asynchronous JavaScript (Promises, Async/Await, Fetch API)</li>
          <li>Closures & Higher-Order Functions</li>
          <li>Prototypes & Object-Oriented Programming (OOP)</li>
          <li>Local Storage & Session Storage</li>
          <li>Error Handling & Debugging</li>
          <li>Project : Interactive To-Do List & Notes App</li>
        </ul>
      </div>
    ),
    backend: (
      <div className="p-6 space-y-4 text-white bg-gradient-to-br from-purple-700 to-violet-900 rounded-xl">
        <h2 className="text-2xl font-bold">
          📌 Backend Development (Weeks 5-7)
        </h2>
        <ul className="list-disc pl-6">
          <li>Introduction to Node.js & Backend Development</li>
          <li>
            Understanding the Event Loop and Asynchronous Nature of Node.js
          </li>
          <li>Creating a REST API with Express.js</li>
          <li>Middleware Functions & Best Practices</li>
          <li>
            Authentication Methods (JWT, OAuth, Session-Based Authentication)
          </li>
          <li>Introduction to MongoDB & Mongoose</li>
          <li>Designing Database Schemas and Relationships</li>
          <li>CRUD Operations (Create, Read, Update, Delete)</li>
          <li>Handling File Uploads with Multer</li>
          <li>Connecting Frontend & Backend (API Integration)</li>
          <li>Mini Project : Build an Authentication System</li>
        </ul>
      </div>
    ),
    react: (
      <div className="p-6 space-y-4 text-white bg-gradient-to-br from-purple-700 to-violet-900 rounded-xl">
        <h2 className="text-2xl font-bold">📌 Master React (Weeks 8-9)</h2>
        <ul className="list-disc pl-6">
          <li>Introduction to React.js</li>
          <li>JSX & Components (Functional & Class Components)</li>
          <li>Props & State Management</li>
          <li>React Hooks (useState, useEffect)</li>
          <li>Redux Toolkit for Global State Management</li>
          <li>Performance Optimization (React.memo, Lazy Loading)</li>
          <li>Routing with React Router</li>
          <li>Forms Handling (Controlled & Uncontrolled Components)</li>
          <li> Mini Project : Build a Social-Media Application</li>
        </ul>
      </div>
    ),
    typescript: (
      <div className="p-6 space-y-4 text-white bg-gradient-to-br from-purple-700 to-violet-900 rounded-xl">
        <h2 className="text-2xl font-bold">📌 Learn TypeScript (Week 10)</h2>
        <ul className="list-disc pl-6">
          <li>TypeScript Basics (Types, Interfaces, Enums)</li>
          <li>Working with TypeScript in React</li>
          <li>Mini Project: TypeScript Weather App</li>
        </ul>
      </div>
    ),
    fullstack: (
      <div className="p-6 space-y-4 text-white bg-gradient-to-br from-purple-700 to-violet-900 rounded-xl">
        <h2 className="text-2xl font-bold">
          📌 Full Stack Integration (Weeks 11-12)
        </h2>
        <ul className="list-disc pl-6">
          <li>API Calls from React to Node.js</li>
          <li>State Management (Redux Toolkit)</li>
          <li>Authentication Flow (Login, Register, Token Handling)</li>
          <li>Hosting Frontend (Vercel, Netlify)</li>
          <li>Deploying Backend (Railway, Render, Docker)</li>
          <li>CI/CD Basics (GitHub Actions, Docker Basics)</li>
          <li>Deploy a Full-Stack Application</li>
        </ul>
      </div>
    ),
    native: (
      <div className="p-6 space-y-4 text-white bg-gradient-to-br from-purple-700 to-violet-900 rounded-xl">
        <h2 className="text-2xl font-bold">📌 React Native (Weeks 13-14)</h2>
        <ul className="list-disc pl-6">
          <li>Introduction to React Native</li>
          <li>Components & Styling in React Native</li>
          <li>React Navigation (Stack, Tab, Drawer Navigation)</li>
          <li>State Management in React Native</li>
          <li>API Integration & Handling Async Calls</li>
          <li>Using Native Device Features (Camera, Location)</li>
          <li>Mini Project : Build a Medication Reminder App</li>
        </ul>
      </div>
    ),
    project: (
      <div className="p-6 space-y-4 text-white bg-gradient-to-br from-purple-700 to-violet-900 rounded-xl">
        <h2 className="text-2xl font-bold">📌 Final Project (Weeks 15-16)</h2>
        <ul className="list-disc pl-6">
          <li>Build a real-world full-stack web & mobile app</li>
          <li>Debugging, Testing, Optimization</li>
          <li>Final Deployment & Best Practices</li>
        </ul>
      </div>
    ),
  };

  return moduleContent[module] || <div>No content available</div>;
};
