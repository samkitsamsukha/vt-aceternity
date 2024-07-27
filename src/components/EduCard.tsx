"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

function EduCard() {
	const school =
		"https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
	const college = "";
	return (
		<div className="h-screen relative mx-6 md:mx-24 py-16 flex flex-col items-center justify-center">
			<h1 className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 text-3xl font-bold border-b-2 border-neutral-400 w-fit">
				About
			</h1>
			<p className="text-xl text-white my-4">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum at iure
				aliquid, debitis quis reprehenderit, maiores nobis alias culpa amet nam
				quam, error repellat voluptate officiis eaque eligendi unde autem
				explicabo odit ducimus? Obcaecati. Lorem, ipsum dolor sit amet
				consectetur adipisicing elit. Assumenda asperiores cum, eum nam
				laudantium eveniet odit quam neque, corporis a commodi placeat veniam
				qui quis vero molestias cupiditate eius inventore earum repellat
				laboriosam obcaecati?
			</p>
			<div className="flex flex-col gap-4 md:flex-row items-center justify-center mt-8">
				<DirectionAwareHover imageUrl={"/ten.jpeg"} className="border border-white">
					<p className="font-bold text-xl">Nand Vidya Niketan, Jamnagar</p>
					<p className="font-normal text-sm">Central Board for Secondary Education<br/>X - 94%</p>
				</DirectionAwareHover>
                <DirectionAwareHover imageUrl={"/twelve.jpg"} className="border border-white">
					<p className="font-bold text-xl">St. Xaviers High School, Jamnagar</p>
					<p className="font-normal text-sm">Central Board for Secondary Education<br/>XII - 96.45 %ile</p>
				</DirectionAwareHover>
                <DirectionAwareHover imageUrl={"/rvce.jpeg"} className="border border-white">
					<p className="font-bold text-xl">R.V. College Of Engineering, Bengaluru</p>
					<p className="font-normal text-sm">Bachelors of Engineering in Information Science <br/>Grade - 9.75 (upto 1st sem)</p>
				</DirectionAwareHover>
			</div>
		</div>
	);
}

export default EduCard;
