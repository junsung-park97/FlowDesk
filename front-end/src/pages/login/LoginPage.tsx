import LoginForm from "@/feature/auth/ui/LoginFrom";
import AuthLinks from "@/feature/auth/ui/AuthLinks";
import AuthHeader from "@/shared/ui/molecules/AuthHeader";
import Header from "@/shared/ui/organisms/Header";

const LoginPage = () => {
  return (
    <>
      <Header />
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="flex flex-col gap-14 mx-auto w-[476px]">
          <AuthHeader title="Login" subtitle1="만나서 반가워요 👋🏻" subtitle2="로그인 후 서비스를 이용해보세요." />
          <LoginForm />
          <AuthLinks />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
