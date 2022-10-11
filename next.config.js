/** @type {import('next').NextConfig} */

const webpack = require('webpack');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    MONGODB_DB: process.env.MONGODB_DB
  }
}

module.exports = nextConfig