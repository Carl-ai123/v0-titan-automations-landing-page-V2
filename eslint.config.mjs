import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'

export default defineConfig([
  ...nextVitals,
  ...nextTypescript,
  // Surface existing starter-component debt without blocking unrelated website fixes.
  // New components retain the default error severity for these rules.
  {
    files: ['components/theme-provider.tsx', 'components/theme-toggle.tsx', 'components/ui/carousel.tsx', 'components/ui/use-mobile.tsx', 'hooks/use-mobile.ts'],
    rules: { 'react-hooks/set-state-in-effect': 'warn' },
  },
  {
    files: ['components/ui/sidebar.tsx'],
    rules: { 'react-hooks/purity': 'warn' },
  },
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts', '.agents/**', '.claude/**']),
])
