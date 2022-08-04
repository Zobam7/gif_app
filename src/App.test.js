import { render, screen } from '@testing-library/react';
import Giphy from './components/Giphy';


describe("<Giphy />", () => {
test('search field in document', () => {
  render(<Giphy />);
  const inputEl = screen.getByTestId("search-input");
  expect(inputEl).toBeInTheDocument();
})

});

it(`Result lists`, ()=>{
  render (<Giphy />)
  const list = screen.findByTestId("result-List")
  expect(list.length).not.toEqual(0)
})
