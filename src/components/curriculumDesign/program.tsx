"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Program } from "@/models/schema";
import { pid } from "process";

export default function ProgramComponent() {
    const [name, setName] = useState("");
    const [owner, setOwner] = useState("");
    const [description, setDescription] = useState("");
    const [deptId, setDeptId] = useState("");
    const [pId, setPId] = useState("");
    const [programs, setPrograms] = useState([]);
    const router = useRouter();

    useEffect(() => {
        fetchPrograms();
    }, []); 

    const handleSubmit = async (e) => {
        e.preventDefault();
 
        if (!name) {
            alert("Name required.");
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/api/program", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ name, owner, description, deptId: deptId, pId }),
            });

            if (res.ok) {
                console.log("Added");
                await fetchPrograms(); // Refresh programs after adding a new one
            } else {
                throw new Error("Failed to create Program");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const fetchPrograms = async () => {
        try {
            const res = await fetch("http://localhost:3000/api/program", {
                cache: "no-store",
            });

            if (!res.ok) {
                throw new Error("Failed to fetch");
            }

            const data = await res.json();
            setPrograms(data.programs);
        } catch (error) {
            console.log("Error loading programs: ", error);
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
                    onChange={(e) => setOwner(e.target.value)}
                    value={owner}
                    className="border border-slate-500 px-8 py-2"
                    type="text"
                    placeholder="Owner"
                />

                <input
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    className="border border-slate-500 px-8 py-2"
                    type="text"
                    placeholder="Description"
                />

                <input
                    onChange={(e) => setDeptId(e.target.value)}
                    value={deptId}
                    className="border border-slate-500 px-8 py-2"
                    type="text"
                    placeholder="Enter existing Dept. Id only, to create a program"
                />

                <input
                    onChange={(e) => setPId(e.target.value)}
                    value={pId}
                    className="border border-slate-500 px-8 py-2"
                    type="text"
                    placeholder="Enter Program Id"
                />

                <button
                    type="submit"
                    className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
                >
                    Add Program
                </button>
            </form>

            <div>
                <h2 className="text-xl font-semibold mt-8 mb-4">Programs:</h2>
                <ul>
                    {programs.map((program) => (
                        <li key={program._id} className="flex items-center gap-4">
                            <span>{program.name}</span>
                            <span>{program.owner}</span>
                            <span>{program.description}</span>
                            <span>{program.deptId}</span>
                            <span>{program.pId}</span>
                            {/* You can add more details here */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
