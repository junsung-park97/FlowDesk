import { Input } from "@/shared/ui/atoms/input";
import { Button } from "@/shared/ui/atoms/button";

const LoginForm = () => {
    return (
        <>
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <Input placeholder="이메일을 입력해주세요."/>
              <Input placeholder="비밀번호를 입력해주세요." type="password" />
            </div>
            <Button>로그인</Button>
          </div>
        </>
    );
};

export default LoginForm;