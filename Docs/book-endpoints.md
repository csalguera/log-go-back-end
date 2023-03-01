### Create a Book

**Method**: ```POST```

**Endpoint**: ```/api/books```

**Description**: This endpoint creates a book with information provided in the request body.

Request Body:
```
{
  name: string,
  author: string,
  published: integer
}
```

Response:
```
{
  id: integer,
  name: string,
  author: string,
  published:  integer,
  createdAt: timestamp,
  updatedAt: timestamp
}
```

### Get All Books

**Method**: ```Get```

**Endpoint**: ```/api/books```

**Description**: This endpoint retrieves all books stored in the database.

Response:
```
{
  id: integer,
  name: string,
  author: string,
  published:  integer,
  createdAt: timestamp,
  updatedAt: timestamp
}
```

### Update a Book

**Method**: ```PUT```

**Endpoint**: ```/api/books```

**Description**: This endpoint updates the book with the specified id using the information in the request body.

Request Body:
```
{
  name: string,
  author: string,
  published: integer
}
```

Response:
```
{
  id: integer,
  name: string,
  author: string,
  published:  integer,
  createdAt: timestamp,
  updatedAt: timestamp
}
```

### Delete a Book

**Method**: ```DELETE```

**Endpoint**: ```/api/books```

**Description**: This endpoint deletes the book with the specified id from the database.

Response:
```
{
  id: integer,
  name: string,
  author: string,
  published:  integer,
  createdAt: timestamp,
  updatedAt: timestamp
}
```