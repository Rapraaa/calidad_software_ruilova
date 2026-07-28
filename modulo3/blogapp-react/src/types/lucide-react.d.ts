// src/types/lucide-react.d.ts
// El paquete lucide-react@1.24.0 declara "typings" en su package.json pero NO
// incluye el archivo .d.ts (publicación rota). Este shim aporta los tipos que
// el proyecto necesita. Si importas un ícono nuevo de lucide-react, agrégalo a
// la lista de `export const ...` de abajo.
declare module 'lucide-react' {
  import type { ComponentType, SVGProps } from 'react'

  export interface LucideProps extends Partial<Omit<SVGProps<SVGSVGElement>, 'ref'>> {
    size?: string | number
    absoluteStrokeWidth?: boolean
  }

  export type LucideIcon = ComponentType<LucideProps>

  // Íconos usados por los componentes de shadcn/ui
  export const CheckIcon: LucideIcon
  export const ChevronDownIcon: LucideIcon
  export const ChevronRightIcon: LucideIcon
  export const ChevronUpIcon: LucideIcon
  export const XIcon: LucideIcon

  // Íconos usados por las tarjetas del dashboard
  export const FileText: LucideIcon
  export const FolderKanban: LucideIcon
  export const GraduationCap: LucideIcon
  export const Users: LucideIcon
}
