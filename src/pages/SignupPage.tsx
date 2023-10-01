import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../components/ui/form"
import { Input } from "../components/ui/input"
import { Separator } from "../components/ui/separator"
import { Mail } from "lucide-react"
import DiscordLogo from "../components/svg/discord"
import XLogo from "../components/svg/x"

const formSchema = z.object({
  email: z.string().email({ message: "L'email n'est pas valide" }),
  password: z.string().min(8, { message: "Le mot de passe doit faire au moins 8 caractères" }),
  confirmPassword: z.string().min(8, { message: "Le mot de passe doit faire au moins 8 caractères" }),
})

const SignupPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <Card className="w-fit min-w-[300px]">
        <CardHeader>
          <CardTitle>Inscription</CardTitle>
        </CardHeader>
        <CardContent>
          <Button variant="secondary" className="flex flex-row w-[100%] justify-start mb-2">
            <DiscordLogo className="h-[100%] mr-3" fill="#9999A0"/>
            S'inscrire avec Discord
          </Button>
          <Button variant="secondary" className="flex flex-row justify-start w-[100%]">
            <XLogo className="h-[100%] mr-3" fill="#9999A0"/>
            S'inscrire avec X
          </Button>
          <Separator className="my-3" />
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="example@mail.com" {...field} />
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
                    <FormLabel>Mot de passe</FormLabel>
                    <FormControl>
                      <Input placeholder="*****" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirmer le mot de passe</FormLabel>
                    <FormControl>
                      <Input placeholder="*****" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">
                <Mail className="mr-3" />
                S'inscrire via email
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
};

export default SignupPage;