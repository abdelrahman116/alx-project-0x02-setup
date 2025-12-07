export interface HeadProps {
  title: string;
  description: string;
}
export interface CardProps {
  title: string;
  content: string;
  //   price: number;
  //   imageSrc: string;
  //   available: boolean;
}
export interface ButtonProps {
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
}
