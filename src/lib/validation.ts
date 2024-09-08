import { z } from "zod"


const requiredString = z.string().trim().min(1, "Required");
export const signupSchema = z.object({
    email: requiredString.email("Invalid email address"),
    username: requiredString.regex(
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain alphanumeric characters and underscores"
    ),
    password: requiredString.regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    )
})

export type SignupValues = z.infer<typeof signupSchema>;


export const LoginSchema = z.object({
    username: requiredString,
    password: requiredString
});

export type LoginValues = z.infer<typeof LoginSchema>;