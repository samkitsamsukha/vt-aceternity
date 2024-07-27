"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import Link from "next/link";
const rowOne = [
	{
	  id: 1,
	  name: "C",
	  designation: "Programming Language",
	  image: "/c.png",
	},
	{
	  id: 2,
	  name: "C++",
	  designation: "Programming Language",
	  image: "/cpp.png",
	},
	{
	  id: 3,
	  name: "Python",
	  designation: "Programming Language",
	  image: "/python.png",
	},
	{
	  id: 4,
	  name: "Git",
	  designation: "Version Control",
	  image: "/git.png",
	},
	{
	  id: 5,
	  name: "GitHub",
	  designation: "Version Control",
	  image: "/github.png",
	},
	{
	  id: 6,
	  name: "Tkinter",
	  designation: "GUI Library",
	  image: "/tkinter.png",
	},
	{
	  id: 7,
	  name: "Flask",
	  designation: "Web Framework",
	  image: "/flask.png",
	},
	{
	  id: 8,
	  name: "Tableau",
	  designation: "Data Visualization",
	  image: "/tableau.png",
	},
  ];
  
const rowTwo = [
	{
		id: 1,
		name: "John Doe",
		designation: "Software Engineer",
		image: "/mongodb.png",
	},
	{
		id: 2,
		name: "Robert Johnson",
		designation: "Product Manager",
		image: "/github.png",
	},
	{
		id: 3,
		name: "Jane Smith",
		designation: "Data Scientist",
		image: "/c.png",
	},
];

export function Skills() {
	return (
		<div className="h-screen relative mx-6 md:mx-24 py-16 flex flex-col items-center justify-center">
			<h1 className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 text-3xl font-bold border-b-2 border-neutral-400 w-fit my-16">
				Skills & Technologies
			</h1>
			<div className="flex flex-row items-center justify-center gap-8 w-full">
				<AnimatedTooltip items={rowOne} />
			</div>
			<h1 className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 text-3xl font-bold border-b-2 border-neutral-400 w-fit my-16">
				Coding Profiles
			</h1>
			<div className="flex flex-row items-center justify-center gap-8 mb-10 w-full">
				
			</div>
		</div>
	);
}