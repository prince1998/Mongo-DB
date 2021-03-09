# Connecting Mongoose to Mongo

`npm init -y` is used to initialise node project without asking any questions.

Mongoose is an ODM (Object Document Mapper) to connect Node project with Mongo DB.

Default Mongo DB port is 27017

URI -  `mongodb://localhost:27017/db-name`

# Our first Mongoose Model

In `mongoose.model('Movie',movieSchema)` Movie is the model name. Model name must start with a capital letter and it should be singular. Collection name will be movies.

To save collection use: `collection.save()`
Eg: `amadeus.save()`

Inserting one requires using `collection.save()`

# Insert Many

Insert Many takes time. So, use insert many with callback or promise.
If inserting many, we dont require to use `collection.save()`

