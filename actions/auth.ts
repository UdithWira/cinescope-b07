"use server"
import {auth} from "@/lib/auth";

export interface AuthFormState  {
    message:string|null;
    success?:boolean;
    errors?:Record<string,string[]>;
}

export async function registerUser(_:AuthFormState,formData:FormData):Promise<AuthFormState>{ 
    if(formData)
    {
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        console.log("Received registration data:", { name, email, password });

        // Simulate registration logic (e.g., save to database)
        if(!name || name.trim() === "") {
            return {
                message: null,
                success: false,
                errors: { name: ["Name is required"] }
            };
        }

        if(!email || email.trim() === "") {
            return {
                message: null,
                success: false,
                errors: { email: ["Email is required"] }
            };
        
        }

        if(!password || password.trim() === "") {
            return {
                message: null,
                success: false,
                errors: { password: ["Password is required"] }
            };
        }

        try {
            const response = await auth.api.signUpEmail({
                body:{name,email,password}
            });
            console.log("Registration response:", response);

                return {
                    message:"User Registration successful",
                    success:true,
                    errors: {}
                };
            
        } catch (error) {
            console.error("Error saving user:", error);
            return {
                message: null,
                success: false,
                errors: { general: ["An error occurred while registering. Please try again."] }
            };
        }
    }
    else {
    return {
        message:null,
        success:false,
        errors: { general: ["No form data received."] }
    };
    }
}

export async function loginUser(_:AuthFormState,formData:FormData):Promise<AuthFormState>{ 
    if(formData)
    {
        
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        console.log("Received login data:", { email, password });



        if(!email || email.trim() === "") {
            return {
                message: null,
                success: false,
                errors: { email: ["Email is required"] }
            };
        
        }

        if(!password || password.trim() === "") {
            return {
                message: null,
                success: false,
                errors: { password: ["Password is required"] }
            };
        }

        try {
            const response = await auth.api.signInEmail({
                body:{email,password,rememberMe:true}
            });
            console.log("Login response:", response);

                return {
                    message:"User Login successful",
                    success:true,
                    errors: {}
                };
            
        } catch (error) {
            console.error("User Login failed:", error);
            return {
                message: null,
                success: false,
                errors: { general: ["An error occurred while logging in. Please try again."] }
            };
        }
    }
    else {
    return {
        message:null,
        success:false,
        errors: { general: ["No form data received."] }
    };
    }
}