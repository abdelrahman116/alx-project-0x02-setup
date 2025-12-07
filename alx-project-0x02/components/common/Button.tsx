import { ButtonProps } from "@/interfaces";
export default function Button(props: ButtonProps) {
  return (
    <button className={`text-red ${props.size} ${props.shape}`}> button</button>
  );
}
