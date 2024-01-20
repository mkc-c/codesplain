import { render, screen, act } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import RepositoriesListItem from "./RepositoriesListItem";

// jest.mock("../tree/FileIcon.js", () => {
//   return () => {
//     return "File Icon Component";
//   };
// });

function renderComponent() {
  const repository = {
    full_name: "facebook/react",
    language: "Javascript",
    description: "A js library",
    owner: "facebook",
    name: "react",
    html_url: "https://github.com/facebook/react",
  };
  render(
    <MemoryRouter>
      <RepositoriesListItem repository={repository} />
    </MemoryRouter>
  );
}

test("shows a link to the github homepage for this repository", async () => {
  renderComponent();

  await act(async () => {
    await pause();
  });

  //   await screen.findByRole("img", {
  //     name: "Javascript",
  //   });
});

const pause = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 100);
  });
};
