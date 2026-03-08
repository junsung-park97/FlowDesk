import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { Input } from "@/shared/ui/atoms/Input";
import { Button } from "@/shared/ui/atoms/Button";
import { useLogin } from "@/feature/auth/model/useLogin";

interface LoginFormInput {
  email: string;
  password: string;
}

const LoginForm = () => {
  // 제네릭으로 타입 전달
  const { register, handleSubmit } = useForm<LoginFormInput>();
  const { handleLogin } = useLogin();
  // 폼 제출 핸들러
  const onSubmit: SubmitHandler<LoginFormInput> = (data) => {
    handleLogin(data.email, data.password);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          {/* input폼 상태관리 register 위임 */}
          <Input
            {...register("email")}
            placeholder="이메일을 입력해주세요."
            type="email"
          />
          <Input
            {...register("password")}
            placeholder="비밀번호를 입력해주세요."
            type="password"
          />
        </div>
        <Button type="submit">로그인</Button>
      </form>
    </>
  );
};

export default LoginForm;
