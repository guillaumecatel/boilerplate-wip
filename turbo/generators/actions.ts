import { PlopTypes } from '@turbo/gen'
import path from 'node:path'

import { exec } from 'node:child_process'
import { InstallDepsActionData } from './types'

export default function initActions(plop: PlopTypes.NodePlopAPI): void {
  plop.setActionType('installDeps', async (answers) => {
    const { packagePath, packages } = answers as InstallDepsActionData
    return new Promise((resolve, reject) => {
      const packageDir = path.resolve(packagePath)
      console.log(`📦 Installing dependencies...`)
      exec(
        packages.length === 0
          ? 'pnpm install'
          : `pnpm add ${packages.join(' ')} --workspace`,
        { cwd: packageDir },
        (error, stdout, stderr) => {
          if (error) {
            console.error('❌ Erreur lors de l’installation :', error.message)
            reject(error)
            return
          }
          if (stderr) console.error(stderr)
          console.log(stdout)
          resolve(`✅ Dependencies installed successfully`)
        },
      )
    })
  })
}
