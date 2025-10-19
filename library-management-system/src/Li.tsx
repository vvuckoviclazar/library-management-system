type LiProps = {
  name?: string;
};
function Li({ name }: LiProps) {
  return <h1>{name}</h1>;
}

export default Li;
