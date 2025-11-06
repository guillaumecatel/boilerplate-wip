import { PlopTypes } from '@turbo/gen'

export default function initHelpers(plop: PlopTypes.NodePlopAPI): void {
  plop.setHelper('currentYear', () => new Date().getFullYear())
  plop.setHelper('currentDate', () => new Date().toISOString().split('T')[0])

  plop.setHelper('keywordsExtract', (str: string) =>
    JSON.stringify(str.split(' ').map((s) => s.trim())),
  )

  plop.setHelper('organizationName', () => process.env.ORGANIZATION_NAME)
  plop.setHelper('organizationEmail', () => process.env.ORGANIZATION_EMAIL)
  plop.setHelper(
    'organizationScopeName',
    () => process.env.ORGANIZATION_SCOPE_NAME,
  )
  plop.setHelper(
    'organizationRepositoryName ',
    () => process.env.ORGANIZATION_REPOSITORY_NAME,
  )
  plop.setHelper(
    'organizationRepositoryUrl',
    () => process.env.ORGANIZATION_REPOSITORY_URL,
  )
}
