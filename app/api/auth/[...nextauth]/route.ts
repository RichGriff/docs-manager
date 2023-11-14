import NextAuth from "next-auth"
import GitHubProvider from 'next-auth/providers/github'
import AzureADProvider from "next-auth/providers/azure-ad";

export const authOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? ""
        }),
        AzureADProvider({
            clientId: process.env.AZURE_AD_CLIENT_ID ?? "",
            clientSecret: process.env.AZURE_AD_CLIENT_SECRET ?? "",
            tenantId: process.env.AZURE_AD_TENANT_ID,
        }),
    ],
    // callbacks: {
    //     async signIn({ user, account, profile, email, credentials } : any) {
    //         return true
    //     },
    //     async session({ session, user, token }: any) {
    //         return session
    //     },
    // }
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };