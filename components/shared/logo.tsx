import {cn} from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <svg
        width="28"
        height="35"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("size-8", className)}

    >
      <path
        d="M12.73 20.79V38.02C12.73 28.2972 12.6199 28.563 12.4239 28.7589C12.22B 28.9549 11.9622 29.065 11.685 29.065C11.4079 29.065 11.1421 28.9549 10.1421 28.9549 10.9461 "
        fill="fill-primary"
      />
    </svg>
  );
}