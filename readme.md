# Demo performance testing para Mercadona

> Load testing workshop, demonstrating k6

## Getting started:
- cd infra
- `docker-compose up -d influxdb grafana`
- Load http://localhost:3000, and import the `grafana_dashboard.json` config to a new dashboard.
- `docker-compose run k6 run /tests/01-simple/custom-tresholds-test.js`
