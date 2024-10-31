import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import { CSSRuleObject } from 'tailwindcss/types/config';

const config: Config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // 컴포넌트 경로
    './.storybook/**/*.{js,jsx,ts,tsx}', // Storybook 설정 경로
    './stories/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '360px',
        // => @media (min-width: 360px) { ... }

        md: '744px',
        // => @media (min-width: 744px) { ... }

        lg: '1200px',
        // => @media (min-width: 1200px) { ... }
      },
      maxWidth: {
        pc: '1200px',
      },
      minWidth: {
        ic: 'calc(11.11111% - 7.1111px)',
      },
      width: {
        7.5: '30px',
        12.5: '50px',
      },
      padding: {
        7.5: '30px',
        12.5: '50px',
      },
      margin: {
        7.5: '30px',
        12.5: '50px',
      },
      fontSize: {
        '4xl': ['2.5rem', { lineHeight: '3.25rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        xs: ['0.75rem', { lineHeight: '1rem' }],
      },
      fontWeight: {
        bold: '700',
        semibold: '600',
        medium: '500',
        normal: '400',
        light: '300',
      },
      colors: {
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#030712',
        },
        blue: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3388FF',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
          950: '#172554',
        },
      },
      boxShadow: {
        xl: '0 4px 4px 0 rgba(0,0,0,0.25)',
      },
    },
  },
  plugins: [
    plugin(
      ({
        addComponents,
      }: {
        addComponents: (components: CSSRuleObject | CSSRuleObject[]) => void;
      }) => {
        addComponents({
          // 커스텀 클래스
        });
      },
    ),
  ],
};
export default config;
