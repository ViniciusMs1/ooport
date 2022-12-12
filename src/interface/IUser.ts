import IPortfolio from "./IPortfolio"

export default interface IUser {
    id: number,
    name: string,
    email: string,
    photo: string,
    bio: string,
    whatsapp: string,
    phone: string,
    office: string,
    linkedin: string,
    site: string,
    github: string,
    facebook: string,
    instagram: string,
    portfolio: IPortfolio,
    nick: string,
    created_at: string,
    portfolio_count: number
}