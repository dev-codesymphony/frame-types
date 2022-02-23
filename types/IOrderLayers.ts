export interface ILayer {
    name: string,
    rarities: {
        [name: string]: number
    }
}

export type IOrderLayers = ILayer[]