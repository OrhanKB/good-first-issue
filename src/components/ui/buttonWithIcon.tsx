import { Button } from "@/components/ui/button"
import { ButtonProps } from '@mui/material/Button'
import Link from "next/link"

interface ButtonWithIconProps extends ButtonProps {
    icon: React.ReactNode,
    path: string,
}

export function ButtonWithIcon({path ,icon, children, ...props}: ButtonWithIconProps ) {
  return (
    
    <Button {...props} variant="outline" size="sm">
        <Link href={path}>
           {icon} {children}
        </Link>
    </Button>
    
  )
}
