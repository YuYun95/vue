/* @flow */

import { baseOptions } from './options'
import { createCompiler } from 'compiler/index'

console.log('baseOptions', baseOptions)
const { compile, compileToFunctions } = createCompiler(baseOptions)

export { compile, compileToFunctions }
