import { ReactNode } from "react";
import IconClose from "./icons/IconClose";
import IconAddOutline from "./icons/IconAddOutline";

type Props = {
    children: ReactNode;
    open: boolean;
    onClose: () => void;
}

const Sidebar = ({ children, open, onClose }: Props) => {
    return (
        <section className={`fixed left-0 top-0 bottom-0 text-white ${open ? 'w-screen bg-blue-900/10' : 'w-0'} md:w-80 md:static`}>

            <div className={`transition-all duration-200 flex h-screen ${open ? 'ml-0' : '-ml-96'} md:ml-0`}>

                <div className="flex flex-col w-64 p-2 bg-gray-900">
                    <div className="flex items-center p-3 rounded-md text-sm cursor-pointer border border-white/20 hover:bg-gray-50/10">
                        <IconAddOutline width={16} height={16} className="mr-3"/>
                        New chat
                    </div>
                </div>

                <div className="">
                    <IconClose
                        className="flex justify-center items-center w-8 h-8 cursor-pointer md:hidden"
                        onClick={onClose}
                        height={24}
                        width={24}
                    />
                </div>

            </div>

        </section>
    )
}

export default Sidebar;