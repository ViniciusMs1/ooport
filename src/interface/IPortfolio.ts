import ICategory from "./ICategory"
import ILike from "./ILike"
import IUser from "./IUser"

export default interface IPortfolio {
    id: number,
    title: string,
    description: string,
    site: string,
    github: string,
    facebook: string,
    instagram: string,
    images: {},
    owner: IUser,
    like: ILike,
    photo: string,
    category: number,
    categories: ICategory
}