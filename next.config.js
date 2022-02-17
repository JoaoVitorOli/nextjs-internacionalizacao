/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["dl.airtable.com"],
  },
  i18n,
  
  async redirects() {
    return [
      {
        source: '/en/cursos/curso-1',
        destination: '/cursos/curso-1',
        permanent: false,
        locale: false
      },
      {
        source: '/en/cursos/curso-2',
        destination: '/cursos/curso-2',
        permanent: false,
        locale: false
      },
      {
        source: '/en/cursos/curso-3',
        destination: '/cursos/curso-3',
        permanent: false,
        locale: false
      },
      {
        source: '/en/cursos/curso-4',
        destination: '/cursos/curso-4',
        permanent: false,
        locale: false
      },
      {
        source: '/en/cursos/curso-5',
        destination: '/cursos/curso-5',
        permanent: false,
        locale: false
      },
      {
        source: '/en/cursos/curso-6',
        destination: '/cursos/curso-6',
        permanent: false,
        locale: false
      },

      //////

      {
        source: '/cursos/course-1',
        destination: '/en/cursos/course-1',
        permanent: false,
        locale: false
      },
      {
        source: '/cursos/course-2',
        destination: '/en/cursos/course-2',
        permanent: false,
        locale: false
      },
      {
        source: '/cursos/course-3',
        destination: '/en/cursos/course-3',
        permanent: false,
        locale: false
      },
      {
        source: '/cursos/course-4',
        destination: '/en/cursos/course-4',
        permanent: false,
        locale: false
      },
    ]
  },
}

module.exports = nextConfig
