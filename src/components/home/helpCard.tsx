'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useRouter } from 'next/navigation';
import { useState } from "react";

type HelpCardProps = {
	title: string,
	content: string
}

export function HelpCard(cardData: HelpCardProps) {

    return (
		<div className=" border-[1px] border-white rounded-md w-full h-[5.70rem] mt-4">
			<span className="text-lg text-white ml-7">{cardData.title}</span>
			<div className="text-sm ml-14">
				<p className="mt-4">{cardData.content}</p>
			</div>
		</div>
	)
}
