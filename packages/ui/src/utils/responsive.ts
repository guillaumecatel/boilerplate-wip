export type ResponsiveProp<T> =
  | T
  | { base?: T; phone?: T; tablet?: T; desktop?: T }

export type ResponsiveProps<T> = {
  [key in keyof T]?: ResponsiveProp<T[key]>
}
