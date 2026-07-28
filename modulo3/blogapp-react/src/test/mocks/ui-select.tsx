// src/test/mocks/ui-select.tsx
// Stub determinista del Select de shadcn/Radix para tests.
// Radix Select depende de Pointer Events, portales y medición de layout que
// jsdom no implementa; su versión controlada llega a disparar onValueChange('')
// espurio al montar y pisa el valor de react-hook-form. Este mock conserva los
// roles ARIA que los tests consultan (combobox/option) y la semántica de click,
// pero sin la reconciliación frágil de Radix.
import { createContext, useContext } from 'react'
import type { ReactNode } from 'react'

const SelectCtx = createContext<{ value?: string; onValueChange?: (v: string) => void }>({})

export function Select({
  value,
  onValueChange,
  children,
}: {
  value?: string
  onValueChange?: (v: string) => void
  children: ReactNode
}) {
  return <SelectCtx.Provider value={{ value, onValueChange }}>{children}</SelectCtx.Provider>
}

export function SelectTrigger({ children }: { children?: ReactNode }) {
  return (
    <button type="button" role="combobox" aria-expanded="false">
      {children}
    </button>
  )
}

export function SelectValue({ placeholder }: { placeholder?: string }) {
  const { value } = useContext(SelectCtx)
  return <span>{value || placeholder}</span>
}

export function SelectContent({ children }: { children?: ReactNode }) {
  return <div role="listbox">{children}</div>
}

export function SelectItem({ value, children }: { value: string; children?: ReactNode }) {
  const { onValueChange, value: selected } = useContext(SelectCtx)
  return (
    <div role="option" aria-selected={selected === value} onClick={() => onValueChange?.(value)}>
      {children}
    </div>
  )
}
