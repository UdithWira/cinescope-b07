"use client"

import Link from "next/link"

import {useActionState,useEffect} from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldError
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { registerUser } from "@/actions/auth"

import { useRouter } from "next/navigation"

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  const initialState = {
    message: null,
    errors: {},
    success: false,
  };


  const [state,formAction,isPending] = useActionState(registerUser,initialState);

  useEffect(() => {
    if (state.success) {
        router.push("/login");
    }
    else{
      console.log("Registration state:", state);
    }
  }, [state,router]);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="px-8 py-12">
        <CardHeader>
          <CardTitle className="text-2xl">Create your account</CardTitle>
          <CardDescription>
            Enter your details below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="grid w-full gap-6">
            <FieldGroup className="grid gap-4">
              <Field className="gid gap-2">
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  className={cn(state.errors?.name && "border-red-500!")}
                  //required
                />
                <FieldError className="text-red-500 text-xs ml-l">{state.errors?.name?.[0]}</FieldError>
              </Field>
              <Field className="grid gap-2">
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  className={cn(state.errors?.email && "border-red-500!")}
                  required
                />
                <FieldError className="text-red-500 text-xs ml-l">{state.errors?.email?.[0]}</FieldError>
              </Field>
              <Field className="grid gap-2">
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                  <FieldError className="text-red-500 text-xs ml-l">{state.errors?.password?.[0]}</FieldError>
                </div>
                <Input id="password" name="password" type="password" placeholder="Enter a Password" 
                className={cn(state.errors?.password && "border-red-500!")}
                />
              </Field>
              <Field className="grid gap-2">
                <FieldError className="text-red-500 text-xs ml-l">{state.errors?.general?.[0]}</FieldError>
                <Button type="submit" disabled={isPending}>
                  {isPending ? "Registering..." : "Register"}
                </Button>
                <Button variant="outline" type="button" disabled={isPending}>
                  Register with Google
                </Button>
                <FieldDescription className="text-center">
                  Already have an account? <Link href="/login">Login</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
