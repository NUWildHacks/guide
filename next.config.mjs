import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
});

const config = {
  ...withNextra(),
  trailingSlash: true,
};

export default config;
