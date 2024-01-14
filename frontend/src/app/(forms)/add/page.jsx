"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function ContactModal() {
  const pathname = usePathname();

  return (

            <form className="flex flex-col p-8 backdrop-filter backdrop-blur-lg">
              <label htmlFor="title" className="text-white">
                Title:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="bg-white bg-opacity-20 rounded p-2 mb-4 backdrop-filter backdrop-blur-lg"
              />

              <label htmlFor="category" className="text-white">
                Category:
              </label>
              <select
                id="category"
                name="category"
                className="bg-white bg-opacity-20 rounded p-2 mb-4 backdrop-filter backdrop-blur-lg"
              >
                <option value="URGENT">Urgent</option>
                <option value="MODERATE">Moderate</option>
                <option value="MINOR">Minor</option>
                <option value="DESIGN">Design</option>
                <option value="FINANCE">Finance</option>
                <option value="MARKETING">Marketing</option>
                <option value="MANAGEMENT">Management</option>
                <option value="LOGISTICS">Logistics</option>
                <option value="IT">IT</option>
              </select>

              <label htmlFor="deadline" className="text-white">
                Deadline:
              </label>
              <input
                type="datetime-local"
                id="deadline"
                name="deadline"
                className="bg-white bg-opacity-20 rounded p-2 mb-4 backdrop-filter backdrop-blur-lg"
              />
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-1/4 rounded-md px-4 py-2 bg-gray-50 bg-opacity-20 text-white hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100"
                >
                  Submit
                </button>
              </div>
            </form>
        
  );
}
