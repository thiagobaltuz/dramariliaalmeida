/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuração para App Router no Vercel
  experimental: {
    appDir: true,
  },
  // Para garantir que funciona no Vercel
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
