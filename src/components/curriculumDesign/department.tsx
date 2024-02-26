"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Department } from "@/models/schema";
import { HiPencilAlt } from "react-icons/hi";

export default function AddDepartment() {
  const [name, setName] = useState("");
  const [deptId, setDeptId] = useState("");
  const [vision, setVision] = useState("");
  const [mission, setMission] = useState("");
  const [organization, setOrganization] = useState("");
  const [head, setHead] = useState("");
  const [departments, setDepartments] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getDepartments();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!deptId) {
      alert("Name required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/department", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, deptId, vision, mission, organizationName: organization, head }), // Change organizationName to organization
      });

      if (res.ok) {
        console.log("Added");
        await getDepartments(); // Refresh departments after adding a new one
      } else {
        throw new Error("Failed to create Department");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getDepartments = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/department", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch");
      }

      const data = await res.json();
      setDepartments(data.departments);
    } catch (error) {
      console.log("Error loading departments: ", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Dept. Name"
        />

        <input
          onChange={(e) => setDeptId(e.target.value)}
          value={deptId}
          className="border border-slate-500 px-8 py-2"
          type="number"
          placeholder="Dept. Id (Only one id must be asociated to a single dept.)"
        />

        <input
          onChange={(e) => setVision(e.target.value)}
          value={vision}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Vision of Dept."
        />

        <input
          onChange={(e) => setMission(e.target.value)}
          value={mission}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Mission of Dept."
        />

        <input
          onChange={(e) => setOrganization(e.target.value)}
          value={organization}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Organization (Should be a same name from added organizations)"
        />

        <input
          onChange={(e) => setHead(e.target.value)}
          value={head}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Head"
        />

        <button
          type="submit"
          className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
        >
          Add Department
        </button>
      </form>

      <div>
        <h2 className="text-xl font-semibold mt-8 mb-4">Departments:</h2>
        <ul>
          {departments.map((dept) => (
            <li key={dept._id} className="flex items-center gap-4">
              <span>{dept.name}</span>
              <span>{dept.deptId}</span>
              <span>{dept.vision}</span>
              <span>{dept.mission}</span>
              <span>{dept.organization.name}</span>
              <span>{dept.head}</span>
              {/* You can add more details here */} 
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
