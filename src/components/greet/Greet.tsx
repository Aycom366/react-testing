interface IProps {
  name?: string;
}
export const Greet = ({ name }: IProps) => {
  return (
    <>
      <p>Hello {name}</p>
    </>
  );
};
