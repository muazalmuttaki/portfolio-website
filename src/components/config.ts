/* Declare minimal process.env types so TypeScript doesn't require @types/node */
declare const process: {
  env: {
    NODE_ENV?: 'development' | 'production' | 'test' | string;
    VERCEL_PROJECT_PRODUCTION_URL?: string;
    NEXT_PUBLIC_APP_URL?: string;
    [key: string]: string | undefined;
  };
};

export const config = {
  appUrl:
    process.env.NODE_ENV === "production"
      ? process.env.VERCEL_PROJECT_PRODUCTION_URL ??
        process.env.NEXT_PUBLIC_APP_URL!
      : "localhost:4000",
  social: {
    github: "https://github.com/akash3444/shadcn-ui-blocks",
    twitter: "https://twitter.com/shadcnui_blocks",
  },
};
