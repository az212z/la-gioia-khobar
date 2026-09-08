import type { NextConfig } from 'next';
const nextConfig: NextConfig={output:'export',trailingSlash:true,basePath:process.env.GITHUB_PAGES==='true'?'/la-gioia-khobar':'',images:{unoptimized:true}};
export default nextConfig;
