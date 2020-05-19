import React from "react";
import { render, cleanup, waitForElement } from "@testing-library/react";
import Loading from "../components/Loading";
import GlobalStats from "../components/GlobalStats";
import ThemeContext from "../contexts/theme";
import AppTheme from "../utils/AppTheme";
import Home from "../components/Home";

global.fetch = require("jest-fetch-mock");

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

const results = {
  success: true,
  response: {
    confirmed: {
      value: 4867515,
    },
    deaths: {
      value: 321459,
    },
    recovered: {
      value: 1661697,
    },
    lastUpdate: "2020-05-19T18:32:23.000Z",
  },
};

const stats = results.response;

test("<Home />", async () => {
  fetch.mockResponseOnce(JSON.stringify(stats));

  const { getByTestId, queryByTestId, debug } = render(
    <Home>
      <Loading />
      <GlobalStats />
    </Home>
  );

  expect(getByTestId("loading")).toBeTruthy();
  await waitForElement(() => getByTestId("last-updated"));
  await waitForElement(() => getByTestId("confirmed"));
  await waitForElement(() => getByTestId("deaths"));
  await waitForElement(() => getByTestId("recovered"));
  expect(queryByTestId("loading")).toBeFalsy();
  expect(getByTestId("last-updated").getAttribute("value")).toBe(
    `${stats.lastUpdate}`
  );
  expect(getByTestId("confirmed").getAttribute("value")).toBe(
    `${stats.confirmed.value}`
  );
  expect(getByTestId("recovered").getAttribute("value")).toBe(
    `${stats.recovered.value}`
  );
  expect(getByTestId("deaths").getAttribute("value")).toBe(
    `${stats.deaths.value}`
  );
  debug();
});

test("<Home /> api fail", async () => {
  results.success = false;
  fetch.mockResponseOnce(JSON.stringify(stats));

  const { getByTestId } = render(
    <Home>
      <Loading />
      <GlobalStats />
    </Home>
  );
  expect(getByTestId("loading")).toBeTruthy();
});
