import { render, screen } from "@testing-library/react";
import RepositoriesListItem from "./RepositoriesListItem";

function renderComponent() {
  render(<RepositoriesListItem />);
}

test("shows a link to the github homepage for this repository", () => {
  renderComponent();
});
