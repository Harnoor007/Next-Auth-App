"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Organization } from "@/models/schema";
import { HiPencilAlt } from "react-icons/hi";

export default function AddOrg() {
  const [name, setName] = useState("");
  const [vision, setVision] = useState("");
  const [mission, setMission] = useState("");
  const [organizations, setOrganizations] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getOrg();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name) {
      alert("Name required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/organization", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, vision, mission }),
      });

      if (res.ok) {
        console.log("Added");
        await getOrg(); // Refresh organizations after adding a new one
      } else {
        throw new Error("Failed to create Organization");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getOrg = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/organization", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch");
      }

      const data = await res.json();
      setOrganizations(data.organizations);
    } catch (error) {
      console.log("Error loading organizations: ", error);
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
          placeholder="Name"
        />

        <input
          onChange={(e) => setVision(e.target.value)}
          value={vision}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Vision"
        />

        <input
          onChange={(e) => setMission(e.target.value)}
          value={mission}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Mission"
        />

        <button
          type="submit"
          className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
        >
          Add Organization
        </button>
      </form>

      <div>
        <h2 className="text-xl font-semibold mt-8 mb-4">Organizations:</h2>
        <ul>
          {organizations.map((org) => (
            <li key={org._id} className="flex items-center gap-4">
              <span>{org.name}</span>
              <span>{org.vision}</span>
              <span>{org.mission}</span>
              {/* You can add more details here */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
