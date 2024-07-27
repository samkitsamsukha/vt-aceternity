"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import Link from "next/link";
function Portfolio() {
	return (
		<div className="h-screen relative mx-6 md:mx-24 py-16 flex flex-col items-center justify-center">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 text-3xl font-bold border-b-2 border-neutral-400 w-fit">
				Portfolio
			</h1>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full mt-8">
				<WobbleCard
					containerClassName="col-span-1 lg:col-span-2 h-full bg-red-600 min-h-[500px] lg:min-h-[300px]"
					className=""
				>
					<div className="max-w-sm">
						<h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
							Automative Smart Adaptive Parking
						</h2>
						<p className="my-4 text-left  text-base/6 text-neutral-200">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, officia optio voluptas.
						</p>
						<Link href={'/project-asap'} className=" bg-black text-white rounded-md px-2 py-1 shadow-md text-sm my-2">View details</Link>
					</div>
					<Image
						src="/asap.jpg"
						width={700}
						height={500}
						alt="linear demo image"
						className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
					/>
				</WobbleCard>
				<WobbleCard containerClassName="col-span-1 min-h-[300px]">
					<h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
						Project 2
					</h2>
					<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
						If someone yells “stop!”, goes limp, or taps out, the fight is over.
					</p>
				</WobbleCard>
				<WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-orange-600 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
					<div className="">
						<h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
							Project 3
						</h2>
						<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
							With over 100,000 mothly active bot users, Gippity AI is the most
							popular AI platform for developers.
						</p>
					</div>
					<Image
						src=""
						width={800}
						height={500}
						alt="linear demo image"
						className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
					/>
				</WobbleCard>
			</div>
		</div>
	);
}

export default Portfolio;
