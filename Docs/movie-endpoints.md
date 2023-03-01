### Create a Movie

**Method**: ```POST```

**Endpoint**: ```/api/movies```

**Description**: This endpoint creates a movie with information provided in the request body.

Request Body:
```
{
  name: string,
  director: string,
  releaseDate: integer
}
```

Response:
```
{
  id: integer,
  name: string,
  director: string,
  releaseDate:  integer,
  createdAt: timestamp,
  updatedAt: timestamp
}
```

### Get All Movies

**Method**: ```Get```

**Endpoint**: ```/api/movies```

**Description**: This endpoint retrieves all movies stored in the database.

Response:
```
{
  id: integer,
  name: string,
  director: string,
  releaseDate:  integer,
  createdAt: timestamp,
  updatedAt: timestamp
}
```

### Update a Movie

**Method**: ```PUT```

**Endpoint**: ```/api/movies```

**Description**: This endpoint updates the movie with the specified id using the information in the request body.

Request Body:
```
{
  name: string,
  director: string,
  releaseDate: integer
}
```

Response:
```
{
  id: integer,
  name: string,
  director: string,
  releaseDate:  integer,
  createdAt: timestamp,
  updatedAt: timestamp
}
```

### Delete a Movie

**Method**: ```DELETE```

**Endpoint**: ```/api/movies```

**Description**: This endpoint deletes the movie with the specified id from the database.

Response:
```
{
  id: integer,
  name: string,
  director: string,
  releaseDate:  integer,
  createdAt: timestamp,
  updatedAt: timestamp
}
```