import IconAddOutline from "./icons/IconAddOutline";
import IconMenu from "./icons/IconMenu";

type Props = {
   openSidebarClick: () => void;
   title: string;
   newChatClick: () => void 
}

const Header = ({openSidebarClick, title, newChatClick}: Props) => {
    return (
        <header className="flex justify-between items-center w-full border-b border-b-gray-600 p-2 md:hidden">
            <div onClick={openSidebarClick}>
                <IconMenu width={24} height={24}/>
            </div>

            <div className="mx-2 truncate">
                {title}
            </div>

            <div onClick={newChatClick}>
                <IconAddOutline width={24} height={24} />
            </div>
        </header>
    )
}

export default Header;