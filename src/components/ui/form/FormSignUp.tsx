'use client';

import * as z from 'zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/shadcn/form'
import { RegisterButton } from '@/components/ui/auth/RegisterButton';
import { RegisterHotelSchema } from '@/schemas/signup';
import { Input } from "@/components/shadcn/input";
import { FormError } from '@/components/ui/form/formError';
import { FormSuccess } from '@/components/ui/form/formSuccess';
import { register } from '@/actions/register';

export const FormSignUp = () => {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    const form = useForm<z.infer<typeof RegisterHotelSchema>>({
        resolver: zodResolver(RegisterHotelSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            repeatpassword: '',
        }
    })

    const registerSubmit = (values: z.infer<typeof RegisterHotelSchema>) => {
        setError("");
        setSuccess("");
        register(values)
            .then((response) => {
                if (response?.error) {
                    form.reset();
                    setError(response.error);
                } 
                if (response?.success){
                    form.reset();
                    setSuccess(response.success);
                }
            })
            .catch(() => setError("Something went wrong!"));
    }


    return (
        <Form {...form}>
            <form method="POST" onSubmit={form.handleSubmit(registerSubmit)} className="space-y-6">
                <div className="space-y-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <label>Name</label>
                            <FormControl>
                                <Input
                                    type="text"
                                    placeholder="Jhon Doe"
                                    className="max-w-xs mx-auto text-black dark:text-white"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <label>Email</label>
                            <FormControl>
                                <Input
                                    type="email"
                                    placeholder="email@example.com"
                                    className="max-w-xs mx-auto text-black dark:text-white"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <label>Password</label>
                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="max-w-xs mx-auto text-black dark:text-white"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="repeatpassword"
                    render={({ field }) => (
                        <FormItem>
                            <label>Password Confirmation</label>
                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder="Repeat your password"
                                    className="max-w-xs pt-2 mx-auto text-black dark:text-white"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                </div>
                <FormError message={error} />
                <FormSuccess message={success}  />
                <RegisterButton />
            </form>
        </Form>
    )
};