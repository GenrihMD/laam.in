package posts

import (
	"github.com/GenrihMD/subs/persons"
)

type Post struct {
	ID    string `json:"id"`
	Title string `json:"title"`
	Body  string `json:"body"`
	Author persons.Person `json: "author"`
}

var posts []Post

func init() {
	posts = append(posts, Post{ID: "1", Title: "My first post", Body: "This is the content of my first post"})
}