type ConditionalRenderFCProps = {
  name: string;           // required
  description?: string;    // optional
  age?: number;          // optional with default
};

const ConditionalRenderFC: React.FC<ConditionalRenderFCProps> = ({
  name,
  description = "No description provided",
  age = 0,
}) => {
  return (
    <div>
      <h2>Conditional Render Example</h2>
      <p>Name: {name}</p>
      <p>Description: {description}</p>
      {/*conditional render */}
      {age > 10 && <p>Age: {age}</p>}
    </div>
  );
};

export default ConditionalRenderFC;