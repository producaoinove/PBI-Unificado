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
import React, { useState, FormEvent } from 'react';
import { useToast } from "@/components/ui/use-toast"
import * as dotenv from "dotenv";
dotenv.config();

export function FrameForm() {
	const [isLoading, setIsLoading] = useState<boolean>(false)
  	const [error, setError] = useState<string | null>(null)
	const router = useRouter();
	const { toast } = useToast()

	const frameFormSchema = z.object({
		frame_url: z.string().min(2, {
		  message: "Token precisa ser maior que 2 digitos.",
		}),
		frame_name: z
		.string({ required_error: "Selecione uma entrada" })
		.min(1, { message: "Power BI não pode ser vazio" })
	})
	
	const form = useForm<z.infer<typeof frameFormSchema>>({
		resolver: zodResolver(frameFormSchema),
		defaultValues: {
			frame_url: "",
			frame_name: ""
		},
	})
	async function onSubmit(values: z.infer<typeof frameFormSchema>) {
		setIsLoading(true)
		setError(null)
		if (values.frame_name != ''||  values.frame_url != '') {
			try {
				const api_url = process.env.NEXT_PUBLIC_API_URL;
				const response = await fetch(`${api_url}/api/token`, {
					method: 'PATCH',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(values)
				  })
				const data = await response.json()
				const isTokenUpdated = data['token_update']
				  
				if (isTokenUpdated) {		
					toast({
						title: "Token atualizado com sucesso! ✅"
					})
				}
				else {
					toast({
						title: "Erro ao atualizar o token, tente novamente! ❌"
					})
				}
			} catch (error) {
				toast({
					title: "Erro interno no servidor, tente novamente mais tarde! 🚧",
					description: "Erro na conexão do servidor.",
				})
			}
			finally {
				setIsLoading(false)
			}
		}		
	}

	return (
		<Form {...form}>
		<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-8 max-tablet:p-32 max-tablet:space-y-7 w-full" method="post">
		<FormField
				control={form.control}
				name="frame_name"
				render={({ field }) => (
				<FormItem>
					<FormLabel className="text-full-white">Power Bi</FormLabel>
					<Select onValueChange={field.onChange} defaultValue={field.value}>
						<FormControl>
							<SelectTrigger className="w-full h-11 text-mat-black">
							<SelectValue placeholder="Selecione um Power Bi" />
							</SelectTrigger>
						</FormControl>
						<SelectContent>
							<SelectItem value="dfv_rcs_sul">1 - DFV - RCS SUL</SelectItem>
							<SelectItem value="dfv_rcs_centro">2 - DFV - RCS CENTRO OESTE</SelectItem>
							<SelectItem value="dfv_rnn">3 - DFV - RNN</SelectItem>
							<SelectItem value="dfv_rse">4 - DFV - RSE</SelectItem>
							<SelectItem value="ofertas">5 - Ofertas</SelectItem>
							<SelectItem value="lista_tel">6 - Lista Telefônica</SelectItem>
						</SelectContent>
					</Select>
					<FormMessage />
				</FormItem>
				)}
			/>
			<FormField
				control={form.control}
				name="frame_url"
				render={({ field }) => (
				<FormItem>
					<FormLabel className="text-full-white">Token</FormLabel>
					<FormControl>
					<Input placeholder="Insira o token do Power Bi" {...field} className="text-gray h-11" type="text"/>
					</FormControl>
					<FormMessage />
				</FormItem>
				)}
			/>
			<div className="flex items-center justify-center">
				<Button type="submit" disabled = {isLoading} className="bg-dark-green text-full-white w-72 hover:bg-mat-black font-medium text-xl">
					{ isLoading ? <div className="border-white h-5 w-5 animate-spin rounded-full border-4 border-t-light-green" /> : 'Atualizar'}
				</Button>
			</div>
		</form>
	  </Form>
	)
}
