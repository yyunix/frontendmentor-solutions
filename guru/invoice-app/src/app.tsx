import Button from "./components/button";

const App = () => {
  return (
    <div>
      <Button buttonType="button1">New Invoice</Button>
      <Button buttonType="button2">New Invoice</Button>
      <Button buttonType="button3">Edit</Button>
      <Button buttonType="button4">Save as Draft</Button>
      <Button buttonType="button5">Delete</Button>
      <Button buttonType="button6">+ Add New Item</Button>
    </div>
  );
};

export default App;
