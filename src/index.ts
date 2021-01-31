interface ProviderZeplinOptions {
    clientId: string;
    clientSecret: string;
}

export interface ZeplinProfile {
    id: string;
    email: string;
    username: string;
    emotar?: string;
    avatar?: string;
}

export default (options: ProviderZeplinOptions): Record<string, unknown> => ({
    id: "zeplin",
    name: "Zeplin",
    type: "oauth",
    version: "2.0",
    params: { grant_type: "authorization_code" },
    accessTokenUrl: "https://api.zeplin.dev/v1/oauth/token",
    authorizationUrl: "https://api.zeplin.dev/v1/oauth/authorize?response_type=code",
    profileUrl: "https://api.zeplin.dev/v1/users/me",
    profile: (profile: ZeplinProfile) => ({
        id: profile.id,
        name: profile.username,
        email: profile.email,
        image: profile.avatar || null
    }),
    ...options
});
