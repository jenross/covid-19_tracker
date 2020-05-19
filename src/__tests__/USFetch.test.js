import React from "react";
import { render, cleanup, waitForElement } from "@testing-library/react";
import Loading from "../components/Loading";
import USPage from "../components/US";
import { MemoryRouter } from "react-router-dom";

global.fetch = require("jest-fetch-mock");

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

const results = {
  success: true,
  response: [
    {
      state: "AK",
      positive: 399,
      death: 10,
      negative: 35212,
      lastUpdateEt: "5/18 00:00",
    },
    {
      state: "AL",
      positive: 401,
      death: 20,
      negative: 35225,
      lastUpdateEt: "5/18 00:00",
    },
  ],
};

const stat = results.response[0];

test("<USPage />", async () => {
  fetch.mockResponseOnce(JSON.stringify(stat));
  // console.log(JSON.stringify(stats))
  const { getByTestId, queryByTestId, debug } = render(
    <MemoryRouter>
      <USPage>
        <Loading />
      </USPage>
    </MemoryRouter>
  );

  expect(getByTestId("loading")).toBeTruthy();
  await waitForElement(() => getByTestId("state-last-updated"));
  await waitForElement(() => getByTestId("positive"));
  await waitForElement(() => getByTestId("negative"));
  await waitForElement(() => getByTestId("state-deaths"));
  await waitForElement(() => getByTestId("state"));
  expect(queryByTestId("loading")).toBeFalsy();
  expect(getByTestId("state-last-updated").getAttribute("value")).toBe(
    `${stat.lastUpdateEt}`
  );
  expect(getByTestId("positive").getAttribute("value")).toBe(
    `${stat.positive}`
  );
  expect(getByTestId("negative").getAttribute("value")).toBe(
    `${stat.negative}`
  );
  expect(getByTestId("state-deaths").getAttribute("value")).toBe(
    `${stat.death}`
  );
  expect(getByTestId("state").getAttribute("value")).toBe(`${stat.state}`);
  debug();
});

test("<USPage /> api fail", async () => {
  results.success = false;
  fetch.mockResponseOnce(JSON.stringify(stat));

  const { getByTestId } = render(
    <MemoryRouter>
      <USPage>
        <Loading />
      </USPage>
    </MemoryRouter>
  );
  expect(getByTestId("loading")).toBeTruthy();
});
