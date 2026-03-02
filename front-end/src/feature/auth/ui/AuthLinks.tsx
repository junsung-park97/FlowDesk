import AuthLink from "@/shared/ui/molecules/AuthLink";

const AuthLinks = () => {
    return (
        <>
          <div className="flex flex-col gap-4">
            <AuthLink question="비밀번호를 잊으셨나요?" linkText="비밀번호 찾기" href="#" />
            <AuthLink question="아직 회원이 아니신가요?" linkText="회원가입" href="#" />
          </div>
        </>
    );
};

export default AuthLinks;