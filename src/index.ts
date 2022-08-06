import type { OAuthConfig, OAuthUserConfig } from "next-auth/providers/oauth";

export interface ZeplinProfile extends Record<string, unknown> {
    id: string;
    email: string;
    username: string;
    emotar?: string;
    avatar?: string;
}

export default function Zeplin<P extends ZeplinProfile>(
    options: OAuthUserConfig<P>
): OAuthConfig<P> {
    return {
        id: "zeplin",
        name: "Zeplin",
        type: "oauth",
        version: "2.0",
        accessTokenUrl: "https://api.zeplin.dev/v1/oauth/token",
        authorization: { url: "https://api.zeplin.dev/v1/oauth/authorize?response_type=code" },
        profileUrl: "https://api.zeplin.dev/v1/users/me",
        profile: (profile: ZeplinProfile) => ({
            id: profile.id,
            name: profile.username,
            email: profile.email,
            image: profile.avatar || null
        }),
        ...options
    };
}
