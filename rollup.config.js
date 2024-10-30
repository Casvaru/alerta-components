import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/main.js',
  output: [
    {
      file: 'dist/main.js',
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [terser()]
}
