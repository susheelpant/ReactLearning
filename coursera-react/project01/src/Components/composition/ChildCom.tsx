// receives React.ReactNode not regular props
// Passes along to GrandChild {childred}
const ChildCom = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;

export default ChildCom;
