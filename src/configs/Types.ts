
export type props = {
    provider: {
        avatarUrl: string;
        bio?: string;
        followers?: {
            totalCount: number
        }
        following?: {
            totalCount: number
        };
        id: string;
        location: string;
        login: string;
        name: string;
        websiteUrl: string;
        repositories: {
            edges: Array<node>;
            totalCount: number

        }
    }
}

type node = {
    node: {
        name: string;
        languages: {
            totalSize: number;
            totalCount: number;
        };
        primaryLanguage: {
            name: string;
            color: string;
            id: string;
        };
        pushedAt: Date;
        refs: {
            edges: Array<{
                node: {
                    name: string;
                    target: {
                        history: {
                            totalCount: number
                        }
                    }
                }
            }>
        }
    }
}

export type lang = {
    title: string;
    commits: number;
    lines: number;
    color: string;
}

export type langArray = Array<{
    data: lang;
    exist: number
}>

