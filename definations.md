# Fastify-NoDB-API

- `brew install node`
- `brew tap mongodb/brew`
- `brew install mongodb-community`
- `brew services start mongodb-community`
- `npm -g install serverless`
- `npm install @fastify-swagger`

### schema requests:

- create schema:  
  `curl --location --request PUT 'https://fxuduknsd5.execute-api.us-east-1.amazonaws.com/latest/add' --header 'Content-Type: application/json' --data-raw '{ "users": { "name": "string", "age": "number" }, "__meta": { "type": true } }'`

### GET DATA

curl --location --request GET 'https://fxuduknsd5.execute-api.us-east-1.amazonaws.com/latest'
curl --location --request GET 'https://fxuduknsd5.execute-api.us-east-1.amazonaws.com/latest/testusers'
curl --location --request GET 'https://fxuduknsd5.execute-api.us-east-1.amazonaws.com/latest/home'
curl --location --request GET 'https://fxuduknsd5.execute-api.us-east-1.amazonaws.com/latest/db'

### POST DATA

curl --location --request POST 'https://fxuduknsd5.execute-api.us-east-1.amazonaws.com/latest/add' --header 'Content-Type: application/json' --data-raw '{ "name": "Khudadad Rasikh" }'
curl --location --request POST 'https://fxuduknsd5.execute-api.us-east-1.amazonaws.com/latest/add' --header 'Content-Type: application/json' --data-raw '{ "name": "Arefa Rahimi" }'

### PUT DATA

curl --location --request PUT 'https://fxuduknsd5.execute-api.us-east-1.amazonaws.com/latest/edit' --header 'Content-Type: application/json' --data-raw '{ "name": "Arefa Rahimi" }'
curl --location --request PUT 'https://fxuduknsd5.execute-api.us-east-1.amazonaws.com/latest/edit/e9c29e0d-201b-4f9a-a6f6-8455ab020913' --header 'Content-Type: application/json' --data-raw '{ "name": "Arefa Rahimi" }'

### DELETE DATA

## AmazonDocumentDB

mongo --host docdb-2022-04-27-12-39-28.c5jgh3fuh6af.us-east-1.docdb.amazonaws.com:27017 --Rasikh nodb --password $ADCwryP@lsiqA\*
mongo --host docdb-2022-04-27-12-39-28.c5jgh3fuh6af.us-east-1.docdb.amazonaws.com:27017 --Rasikh nodb --password $ADCwryP+lsiqAB
mongo --ssl --host docdb-2022-05-17-08-14-49.cluster-c5jgh3fuh6af.us-east-1.docdb.amazonaws.com:27017 --sslCAFile rds-combined-ca-bundle.pem --username Rasikh --password $ADCwryP+lsiqAB

mongo --tls --host docdb-2022-05-17-08-14-49.cluster-c5jgh3fuh6af.us-east-1.docdb.amazonaws.com:27017 --tlsCAFile rds-combined-ca-bundle.pem --username Rasikh --password $ADCwryP+lsiqAB

mongo --ssl --host docdb-2022-05-17-08-14-492.c5jgh3fuh6af.us-east-1.docdb.amazonaws.com:27017 --sslCAFile rds-combined-ca-bundle.pem --username Rasikh --password $ADCwryP+lsiqAB

# INSERT RECORDS

db.users.insertMany([
{ "_id" : 1, "name" : "Matt", "status": "active", "level": 12, "score":202},
{ "_id" : 2, "name" : "Frank", "status": "inactive", "level": 2, "score":9},
{ "_id" : 3, "name" : "Karen", "status": "active", "level": 7, "score":87},
{ "_id" : 4, "name" : "Katie", "status": "active", "level": 3, "score":27}
])

# UPDATE RECORD

db.users.findAndModify({
query: { name: "Matt", status: "active"},
update: { $inc: { score: 10 } }
})

# DELETE RECORD

db.users.deleteOne({
query: { name: "Matt", status: "active"},
update: { $inc: { score: 10 } }
})

# Connect MongoDB and AWS Document DB

- Start Cluster
- Open Cloud9 Evironment:
  a.
  mongo --sslAllowInvalidHostnames --ssl --sslCAFile rds-combined-ca-bundle.pem --username Rasikh --password $ADCwryP+lsiqAB
