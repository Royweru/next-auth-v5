"use client";

import React, { startTransition, useState } from "react";
import { CardWrapper } from "./card-wrapper";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormDescription,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";

import { Login } from "@/actions/login";

export const LoginForm = () => {
    const[error,setError] = useState<string|undefined>("")
    const [success,setSuccess] = useState<string|undefined>("")
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
   startTransition(()=>{
    Login(values)
    .then(data=>{
        setError(data?.error)
        setSuccess(data?.success)
    })
   })
  };
  const isLoading = form.formState.isSubmitting;
  return (
    <CardWrapper
      headerLabel="welcome back"
      backButtonLabel="Dont have an account"
      backButtonHref="/auth/register"
      showSocial
    >
      <div className=" w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
            <div className=" space-y-4">
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>EMAIL</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        placeholder="please enter your email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>PASSWORD</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        type="password"
                        placeholder="enter password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormError message={error}/>
            <FormSuccess message={success} />
            <Button type="submit" className=" w-full">
              LOGIN
            </Button>
          </form>
        </Form>
      </div>
    </CardWrapper>
  );
};
