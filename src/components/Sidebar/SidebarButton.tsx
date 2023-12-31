import { ReactNode } from "react";

type Props = {
    icon: ReactNode;
    label: string;
    onClick: () => void;
}

const SidebarButton = ({icon, label, onClick}: Props) => {
    return (
        <div 
            className="flex items-center rounded-md p-3 text-sm cursor-pointer hover:bg-gray-500/10"
            onClick={onClick}
            >
                <div className="mr-3">
                    {icon}
                </div>
                <div className="flex-1 truncate">
                    {label}
                </div>
        </div>
    )
}

export default SidebarButton;