# Mongo DB

## Introduction to Databases
---
- Mongo DB is a document database.
- Why we use database instead of saving a file?
    - Can handle large amount of data efficiently and store it compactly
    - They provide tools for easy insertion, deletion and updation
    - They generally offer security features and control over access to data 
    - They generally scale well   

| SQL DB      | No-SQL DB |
| ----------- | ----------- |
| These are relational databases. We pre-define a schema of tables before we insert anything. | There are many types of No-SQL including document, key-value and graph stores | 
| Examples - MySQL, Postgres, SQLite, Oracle, Microsoft SQL Server | Examples - MongoDB, CouchDB, Neo4j, Cassandra, Redis |

## Mongo Shell
---
Start mongo by typing in command line: ` mongo  `

To show list of databases:
`show dbs `

To create (one time) and then switch to a database: `use database`

To show the current db you working at: `db`

## What on Earth is BSON?
---
Mongo uses Binary JSON (BSON). BSON is a more version of JSON and is space efficient and is only readable to machine.

There are several issues with JSON like:
- Json is a text-based format and text parsing is very slow.
- JSON is not space efficient
- JSON only supports basic data types - String, Booolean, Number, Array whereas BSON supports String, Boolean, Number, Array, Date and Binary

## Inserting with Mongo
---
Collections are used in a database to allow us to query items

To show collections in a database: `show collections`

To insert an item into collection: ` db.databasename.insert(JSON to insert)  `

Example `db.cats.insert({name: "Blue Steele", age: 6, dogFriendly: false, breed: "Scottish Fold"})`

To get all the collection and their object information: `db.databasename.find()`
Example: `db.dogs.find()` 

## Finding with Mongo 
---
To query with specific property: db.databasename.find({property:"value"})

Eg: `db.dogs.find({breed:"corgi"})` gets all dogs with breed corgi

If you want to find one use db.databasename.findOne

Eg: `db.dogs.findOne({catFriendly:true)}`
will get one value

findOne() returns the entire dicument whereas find() returns a cursor

Cursor is like a reference to the results.

## Inserting with Mongo
---
 Use set along with updateOne or updateMany  to tell what to change

 Eg: `db.dogs.updateOne({name:"Charlie","isCatFriendly":"true"},{$set:{age:4}) }` updates Charlie's age who is cat friendly to 4

 To add a date to change: 
 `db.cats.updateOne({age:6}, {$set:{age:7}, $currentDate:{lastChanged:true}}`

 This will output:
 >{ "_id" : ObjectId("603e6bdfabd4a71f63327db4"), "name" : "Blue Steele", "age" : 7, "dogFriendly" : false, "breed" : "Scottish Fold", "lastChanged" : ISODate("2021-03-06T11:53:45.316Z") }

## Deleting with Mongo
---
 `db.dogs.deleteOne({name:"Blue Steele"})` will delete the dog named Blue Steele from the collection

 `db.dogs.deleteMany({"catFriendly":true}` will delete all dogs who are cat friendly

 `db.dogs.deleteMany({})` will delete all entries in dog collection

## Additional Mongo Operators

### Nested Properties
---
If the property is nested then, do this:
db.collection.find({outerProperty.innerProperty:value})

Eg: `db.dogs.find({'personality.childFriendly':true})` will return all dogs who are child friendly

### Relational Operators
---
$gt - greater than  
$gte - greater than or equal to  
$lt - less than  
$lte - less than or equal to

Eg: `db.dogs.find({age: {$lt: 10}})` will return all dogs with age less than 10

### $in Operator
---
Allows to select the document where the value of a field equals any value in the specified array.

Eg: db.dogs.find({breed: {$in: ['Mutt', 'Corgi']  }}) returns all dogs where breed is Mutt or Corgi

### Logical Operators
---
$and, $$not, $nor, $or

Eg: `db.dogs.find({$or: [{'personality.catFriendly':true},{age:{$lte: 2}}]})`

 










 