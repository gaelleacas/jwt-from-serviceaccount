# Authentication with a Service Account

## Get a JWT from a Google Service Account

This authentication process use [Google GToken library](https://github.com/googleapis/node-gtoken)

### Install

```bash
$ git clone git@github.com:gaelleacas/jwt-from-serviceaccount.git

$ yarn

```

### Generate a key file from your service account (GCP Console)

See [here](https://cloud.google.com/iam/docs/creating-managing-service-account-keys?hl=fr)

and copy your json key file at the root of this repo "key.json"

### Update index.js

e.g :

- Key file : key.json
- Email account (from key.json): email@myprojectid.iam.gserviceaccount.com
- Scope : https://cloud-run-vethwltr5q-ew.a.run.app (my Cloud Run App "cloud-run")

```javascript
const gtoken = new GoogleToken({
  keyFile: 'key.json', // or path to .p12 key file
  email: 'email@myprojectid.iam.gserviceaccount.com',
  scope: ['https://cloud-run-vethwltr5q-ew.a.run.app'] // or space-delimited string of scopes
});
```

### Run

```bash

node index.js

```
