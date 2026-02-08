// types.d.ts (in project root)

declare module '@/fakeData' {
  export type FakeDataType = {
    $id: number
    body: string
    colors: string
    position: string
  }

  export const fakeData: FakeDataType[]
}

export type FakeDataType = {
  $id: number
  body: string
  colors: string
  position: string
}

export type MousePointerPosType = { x: number; y: number }
