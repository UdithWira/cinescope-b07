"use server"


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
        // Here you would typically hash the password and store the user data securely

        // For demonstration, we just return a success message
        return {
            message: "Registration successful",
            success: true,
        };
    }

    return {
        message:"Registration successful",
        success:true
    };
}