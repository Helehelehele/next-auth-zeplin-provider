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
        client: { token_endpoint_auth_method: "client_secret_post", },
        authorization: {
            url: "https://api.zeplin.dev/v1/oauth/authorize",
            params: {
                scope: "",
                response_type: "code",
            }
        },
        token: { url: "https://api.zeplin.dev/v1/oauth/token", },
        userinfo: { url: "https://api.zeplin.dev/v1/users/me", },
        profile: (profile: ZeplinProfile) => ({
            id: profile.id,
            name: profile.username,
            email: profile.email,
            image: profile.avatar || null
        }),
        ...options
    };
}
