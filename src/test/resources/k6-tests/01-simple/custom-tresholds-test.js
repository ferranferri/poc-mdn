import http from "k6/http";
import { check, sleep } from "k6";
import { Counter } from "k6/metrics";

let ErrorCount = new Counter("errors");

// load from configuration file
const success_expected = JSON.parse(open('./data.json')).success_rate;

// load const
//const success_expected = 0.9;


export const options = {
  vus: 10,
  duration: "15s",
  thresholds: {
    errors: ["count<10"]
  }
};

export default function() {
  // expected result generated randomly
  const expected_status = Math.random() < parseFloat(success_expected) ? "200" : "500";

  let res = http.get(`https://httpbin.test.k6.io/status/${expected_status}`);
  let success = check(res, {
    "status is 200": r => r.status === 200
  });
  if (!success) {
    ErrorCount.add(1);
  }

  sleep(2);
}
