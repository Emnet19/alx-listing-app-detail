export interface CardProps {
  title: string
  description: string
  imageUrl: string
}

export interface ButtonProps {
  label: string
  onClick?: () => void
  type?: "button" | "submit" | "reset"
}
export interface PropertyProps{
  name:string;
  address:{
    city:string;
    country:string;
  }
  category:string[];
  rating:string;
  image:string;
  description:string;
  price:number;
}

