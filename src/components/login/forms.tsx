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

const UserDataMock = {
    'username' : 'teste',
    'password' : 'teste123',
    'entry' : '1 - PBI unificado',
}

export function LoginForm() {
    const router = useRouter();
    const alertState = useState(false)

    const userFormSchema = z.object({
        username: z.string().min(2, {
          message: "Nome de usuário precisa ser maior que 2 digitos.",
        }),
        password: z.string().min(2, {
          message: "Senha  precisa ser maior que 2 digitos.",
        }),
        entry: z
        .string({ required_error: "Selecione uma entrada" })
        .min(1, { message: "Tipo de entrada não pode ser vazio" })
    })
    
    const form = useForm<z.infer<typeof userFormSchema>>({
        resolver: zodResolver(userFormSchema),
        defaultValues: {
            username: "",
            password: "",
            entry: ""
        },
    })
    function onSubmit(values: z.infer<typeof userFormSchema>) {
        const userName = UserDataMock.username
        const userPass = UserDataMock.password
        const userEntry = UserDataMock.entry
        if (values.username == userName ||  values.password == userPass || values.entry == userEntry) {
            console.log(values)
            router.push('/')
        }
        alertState[0] = true
        // criar toasts pra informar o usuario do login: se deu certo ou não
        return
    }

    return (
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-8 max-tablet:p-32 max-tablet:space-y-7" action={'POST'}>
            <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                <FormItem>
                    <FormLabel className="text-full-white">Usuário</FormLabel>
                    <FormControl>
                    <Input placeholder="Nome de usuário" {...field} className="text-gray h-11 max-tablet:max-w-screen-mobile"/>
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                <FormItem>
                    <FormLabel className="text-full-white">Senha</FormLabel>
                    <FormControl>
                    <Input placeholder="Senha" {...field} className="text-gray h-11" type="password"/>
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="entry"
                render={({ field }) => (
                <FormItem>
                    <FormLabel className="text-full-white">Tipo de Entrada</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger className="w-full h-11 text-mat-black">
                            <SelectValue placeholder="Selecione uma entrada" />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            <SelectItem value="1">1 - PBI unificado</SelectItem>
                            <SelectItem value="2">2 - Administrativo</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormMessage />
                </FormItem>
                )}
            />
            <div className="flex items-center justify-center">
            <Button type="submit" className="bg-dark-green text-full-white w-72 hover:bg-mat-black font-medium text-xl">Entrar</Button>
            </div>
        </form>
      </Form>
    )
}
