import { Control } from 'react-hook-form'

export type FormSetValueFunction = (name: string, value: unknown) => void

export type FormControl = Control<Record<string, unknown>>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FormRegister = (Reference?: any, validateRule?: any) => React.LegacyRef<HTMLInputElement>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FallbackFormRegister = (ref?: any) => void | any

export type SetValue = (name: string, value: Record<string, string> | string | boolean) => void

export type SetError = (name: string, value: { message: string }) => void

export type ClearErrors = (name: string) => void

export type Reset = (formValue: Record<string, unknown>) => void

export type Event = { target?: HTMLInputElement; currentTarget?: HTMLInputElement }
