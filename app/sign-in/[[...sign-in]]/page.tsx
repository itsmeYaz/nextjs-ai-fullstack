import { SignIn } from "@clerk/nextjs";

export default function SignIpPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <SignIn />
    </div>
  );
}
