export type User = {
  id: string
  name: string
  userName: string
}

export type Tables = {
  id: string
  name: string
  useId?: string
}

export type Beer = {
  name: string
  composition: string[]
  ibu: number
  alcoholPercentage: number
  recipe: Instruction[]
}

export type Instruction = {
  step: number,
  instruction: string
}
