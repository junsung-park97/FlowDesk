import { Button } from "../atoms/button";

const Header = () => {
    return (
        <>
        <div className="flex items-center justify-between px-4 py-2">
            <div className="text-2xl font-bold">
                ⭐️ FlowDesk
            </div>
            <div className="flex gap-2">
                <Button variant="outline">회원가입</Button>
            </div>
        </div>
        </>
    );
};

export default Header;  