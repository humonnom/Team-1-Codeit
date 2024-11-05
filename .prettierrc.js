module.exports = {
  arrowParens: 'always',
  endOfLine: 'lf',
  printWidth: 100,
  quoteProps: 'as-needed',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,

  importOrder: [
    '^react',
    '^next',
    '<THIRD_PARTY_MODULES>',
    '^@/src/_apis/(.*)$',
    '^@/src/_queries/(.*)$',
    '^@/src/store/(.*)$',
    '^@/src/data/(.*)$',
    '^@/src/hooks/(.*)$',
    '^@/src/utils/(.*)$',
    '^@/src/app/(.*)$',
    '^@/src/components/(.*)$',
    '^@/src/fonts/(.*)$',
    '^@/src/types/(.*)$',
    '^@/src/styles/(.*)$',
    '^@/src/mock/(.*)$',
    '^@core/(.*)$',
    '^@server/(.*)$',
    '^@ui/(.*)$',
    '^@/public/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,

  plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
  tailwindConfig: './tailwind.config.ts',
};
